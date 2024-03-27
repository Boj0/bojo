let plugins = [
    require('postcss-import'),
    require('autoprefixer'),
];

    // These all take time to process and are best done in production only.
plugins = [
    ...plugins,
    require('@fullhuman/postcss-purgecss')({
        content: [
            './**/*.html',
            './**/*.njk',
            './**/*.js',
            './**/*.md',
        ],
    }),
    require('postcss-minify'),
];

module.exports = {
    plugins
};