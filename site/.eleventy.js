const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
require("/functions/userlibs/eleventy-bundler-modules.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "userlibs", // the name to use for the functions
    functionsDir: "./functions/", // The functions directory
    redirects: "netlify-toml-builders",
    copy: ["utils/", ""], // Any files that need to be copied to make our scripts work
    excludeDependencies: ["./_data/madlibs.js"] // Exclude any files you don't want to run
  });
};