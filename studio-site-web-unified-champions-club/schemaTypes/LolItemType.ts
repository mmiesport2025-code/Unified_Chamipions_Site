import {defineField, defineType} from 'sanity'

export const lolItemType = defineType({
  name: 'lolItem',
  title: 'Objet League of Legends',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom de l’objet',
      type: 'string',
      description: 'Nom de l’objet dans League of Legends',
    }),

    defineField({
      name: 'portrait',
      title: 'Icône de l’objet',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image ou icône représentant l’objet',
    }),
  ],
})
