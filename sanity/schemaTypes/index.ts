import { type SchemaTypeDefinition } from "sanity";

export const projectSchema: SchemaTypeDefinition = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema],
};
