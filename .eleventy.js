module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(require("eleventy-plugin-postcss"));

    /**
     * Takes a list and returns the limit number of items.
     *
     * @param array {Array<any>}
     * @param limit {number}
     * @returns {Array<any>}
     */
    const limit = (array, limit) => array.slice(0, limit);
    eleventyConfig.addFilter("limit", limit)

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
0};