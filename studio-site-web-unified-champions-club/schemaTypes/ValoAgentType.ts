import {defineField, defineType} from 'sanity'

export const valoAgentType = defineType({
  name: 'valoAgent',
  title: 'Agent Valorant',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom de l’agent',
      type: 'string',
      description: 'Nom officiel de l’agent dans Valorant',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image représentant l’agent',
      validation: (rule) => rule.required(),
    }),
  ],
})
