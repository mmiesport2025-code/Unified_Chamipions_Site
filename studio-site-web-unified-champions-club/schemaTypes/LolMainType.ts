import {defineField, defineType} from 'sanity'

export const lolMainType = defineType({
  name: 'lolMain',
  title: 'Main League of Legends',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du main',
      type: 'string',
      description: 'Nom du champion ou du rôle principal joué',
    }),

    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image représentant le main (champion LoL)',
    }),
  ],
})
