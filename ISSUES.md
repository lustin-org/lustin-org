## Не понимаю зачем мне ISSUES

### Контент

* [ ] Разъяснение по языкам
* [ ] Разъяснение по метрикам
* [ ] ICZIN
* [ ] Структурирование, неструктурированного - MESH, GGG

### Внутренние упражнения требующие системного подхода

* [ ] Упражнение №1: нужен фактический Lazy-Reload для статического контента Теллеграм или уже прямой доступ к API
* [ ] Упражнение №2: кстати - интересный факт, что фактически мы должны делать CRON пересборку - а сервера у нас принципиально выделенного нет.
* [ ] Упражнение №3: CSS не досточно - нужны компоненты, однако слишком большой выбор ведет к снижению скорости разработки и если GraphQL нас спасает от отсутствия заморочек с межРЕСУРСНЫМ взаимодействием, то верстка также оставляет желать лучшего
* [ ] Упражнение #4: мы опять переходим к Closure а точнее замкнутости графа - фактически фронт может считаться законченным, когда из любого конца графа мы можем попасть в любой другой конец графа по ребрам - и это относится как к контенту, так и к сценариям использования
* [ ] Упражнение №5: так ли нужна Figma ? С другой стороны как отвалидировать соответствие дизайна реально работающему продукту ? Или всех спасет Storybook ? Тогда зачем figma если есть storybook. И тогда возникает отсылка к упражнению 1 - может все таки Miniapp.
* [ ] Упражнение №5: кеш-стретегия - для API - то есть нам нужна политика кеширования возвращаемых значений - всегда. Но самое прикольное - что телеметрия у нас ходит по WebSocket. А также политика архивации ;-) - которая почему-то товарищами Webерами называется Page'ынг.
* [ ] Упражнение №6: ВатЧеры - они же наблюдатели. https://github.com/gridsome/gridsome/blob/master/packages/source-filesystem/index.js#L92 Ну и конечно самое главное PDF-фер ;-) сразу всё и в PDF

### Багофиксы формата "баГодолг"

* [ ] гадские карточки конфликтуют с типографикой
* [ ] как обычно с версиями < 1.0 абстракции текут и лучше наследоваться от develop бранча
* [ ] пора писать тесты ;-)

