import {defineField, defineType} from 'sanity'

export const lolSkinType = defineType({
  name: 'lolSkin',
  title: 'Skin League of Legends',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du skin',
      type: 'string',
      description: 'Nom officiel du skin du champion',
    }),

    defineField({
      name: 'portrait',
      title: 'Image du skin',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Visuel ou icône du skin',
    }),
  ],
})
