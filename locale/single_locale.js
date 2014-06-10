/*
 * This file specifies a single language dependency (for English).
 *
 * Translations take up a lot of space and you are therefore advised to remove
 * from here any languages that you don't need.
 */

(function (root, factory) {
    require.config({
        paths: {
            "jed": "Libraries/jed",
            "es": "locale/es/LC_MESSAGES/es",
        }
    });

    define("locales", [
        'jed',
        'es'
        ], function (jed, es) {
            root.locales = {};
            root.locales.es = es;
        });
})(this);
