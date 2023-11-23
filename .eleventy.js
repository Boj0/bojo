module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/styles/main.css");

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
0};