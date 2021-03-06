const tailwindcss = require('tailwindcss')

const dateTimeFormats = {
  'en': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    }
  }
}

module.exports = {
  siteName: 'Lustin-OGr',
  siteUrl: 'https://lustin.org',
  plugins: [
    {
      use: "~/src/plugins/gridsome-mume-source",
      options: {
        path: 'book/**/*.md',
        engineconfig: {
          previewTheme: "github-dark.css",
          revealjsTheme: "nigth.css",
          codeBlockTheme: "default.css",
        }
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        dateTimeFormats,
        locales: [ // locales list
          'ru',          
          'en'
        ],
        pathAliases: { // path segment alias for each locales
          'ru': 'ru',
          'en': 'en'
        },
        fallbackLocale: 'ru', // fallback language
        defaultLocale: 'ru', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'ru': require('./src/locales/ru.json'),
          'en': require('./src/locales/en.json'),
        }
      }
    },
    {
      use: "gridsome-source-rss",
      options: {
        feedUrl: "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=Telegram&username=%40ineedlustin&format=Atom",
        typeName: 'TellegramMonthFeed',
        // Parser options, see: https://www.npmjs.com/package/rss-parser
        parser: {}
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'docs/**/*.md',
        typeName: 'Doc',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          anchorClassName: 'icon icon-link',
          plugins: [
            'gridsome-plugin-remark-prismjs-all'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'hbd/podcasts/**/*.md',
        typeName: 'Podcasts',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          anchorClassName: 'icon icon-link',
          plugins: [
            'gridsome-plugin-remark-prismjs-all'
          ]
        }
      }
    }
    
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ]
      },
    },
  },
}
