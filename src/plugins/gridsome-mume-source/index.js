const path = require('path')
const fs = require('fs')

const mume = require("@shd101wyy/mume");
const crypto = require('crypto')

const isDev = process.env.NODE_ENV === 'development'

class MarkdownEnchansmentSource {
    static defaultOptions() {
        return {
            typeName: 'MarkdownEnchansment'
        }
    }

    constructor(api, options) {
        this.api = api
        this.options = options
        this.context = options.baseDir
            ? api.resolve(options.baseDir)
            : api.context

        api.loadSource(async actions => {
            const collection = actions.addCollection({
                typeName: this.options.typeName,
            })

            const glob = require('globby')
            const files = await glob(this.options.path, { cwd: this.context })
            await Promise.all(files.map(async file => {
                const relPath = path.relative(this.context, file)
                const origin = path.join(this.context, file)
                await this.addMumeNode(origin, options, collection, relPath)
            }))


        })
    }

    async addMumeNode(originFile, options, collection, relPath) {

        const engine = new mume.MarkdownEngine({
            filePath: originFile,
            config: options.engineconfig
        });

        let html;
        let yamlConfig;

        const inputString = await this.readFile(originFile, {
            encoding: "utf-8",
        });

        ({ html, yamlConfig } = await engine.parseMD(inputString, {
            useRelativeFilePath: false,
            hideFrontMatter: true,
            isForPreview: false,
            runAllCodeChunks: true,
        }));

        html = await engine.generateHTMLTemplateForExport(
            html, yamlConfig, {
            isForPrint: false,
            isForPrince: false,
            offline: true,
            embedLocalImages: false,
        });

        collection.addNode({
            id: this.createUid(originFile),
            path: relPath,
            content: html,
            yamlConfig: yamlConfig
        })
    }

    createUid(orgId) {
        return crypto.createHash('md5').update(orgId).digest('hex')
    }

    readFile(file, options) {
        return new Promise((resolve, reject) => {
            fs.readFile(file, options, (error, text) => {
                if (error) {
                    return reject(error.toString());
                } else {
                    return resolve(text.toString());
                }
            });
        });
    }
}

module.exports = MarkdownEnchansmentSource
