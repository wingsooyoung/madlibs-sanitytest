// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'

export default defineConfig({
  title: "brown-pony",
  projectId: "t2qgvbba",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: [],
  },
});
