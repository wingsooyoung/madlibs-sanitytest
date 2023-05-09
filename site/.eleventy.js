const { EleventyServerless, EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "userlibs", // the name to use for the functions
    functionsDir: "./functions/", // The functions directory
    redirects: "netlify-toml-builders",
    copy: ["utils/"], // Any files that need to be copied to make our scripts work
    // excludeDependencies: ["./_data/madlibs.js"] // Exclude any files you don't want to run
  });


};