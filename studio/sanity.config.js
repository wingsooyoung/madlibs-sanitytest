// sanity.config.js
const {defineConfig} = require("sanity");
const {deskTool} = require('sanity/desk');
const schemas = require('./schemas/schema');
const {visionTool} = require('@sanity/vision');

module.exports = defineConfig({
  title: "brown-pony",
  projectId: "t2qgvbba",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas
  }
});