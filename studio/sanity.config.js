// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';
import { visionTool } from '@sanity/vision';

export default defineConfig({
  title: "brown-pony",
  projectId: "t2qgvbba",
  dataset: "production",
  plugins: [
    deskTool(),
    visionTool()
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemas,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'settings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});
