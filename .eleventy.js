module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./public/css");
  return {
    dir: {
      input: "src",
      output: "public",
    }
  }
}
