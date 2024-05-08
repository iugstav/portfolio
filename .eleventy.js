module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/js/commands.js")
  eleventyConfig.addPassthroughCopy("src/assets/js/terminal.js")
  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
  });

  return {
    dir: {
      input: "src",
    },
  };
};
