import {defineField, defineType} from 'sanity'

export const lolSkinType = defineType({
  name: 'lolSkin',
  title: 'League of Legends | Skin',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du skin',
      type: 'string',
      description: 'Nom officiel du skin du champion',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'portrait',
      title: 'Image du skin',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Visuel ou icône du skin',
      validation: (rule) => rule.required(),
    }),
  ],
})
