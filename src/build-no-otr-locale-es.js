({
    baseUrl: "../",
    name: "components/almond/almond.js",
    out: "../builds/converse-no-otr-locale-es.min.js",
    include: ['main'],
    paths: {
        "jquery": "components/jquery/dist/jquery",
        "jed": "components/jed/jed",
        "locales": "locale/single_locale",
        "es": "locale/es/LC_MESSAGES/es",
        "jquery.tinysort": "components/tinysort/src/jquery.tinysort",
        "underscore": "components/underscore/underscore",
        "backbone": "components/backbone/backbone",
        "backbone.localStorage": "components/backbone.localStorage/backbone.localStorage",
        "strophe": "components/strophe/strophe",
        "strophe.muc": "components/strophe.muc/index",
        "strophe.roster": "components/strophe.roster/index",
        "strophe.vcard": "components/strophe.vcard/index",
        "strophe.disco": "components/strophe.disco/index",
        "converse-dependencies": "src/deps-no-otr",
        "jquery.browser": "components/jquery.browser/dist/jquery.browser",
        "moment":"components/momentjs/moment",
        "converse-templates":"src/templates",
        "tpl": "components/requirejs-tpl-jcbrand/tpl",
        "text": "components/requirejs-text/text"
    }
})
