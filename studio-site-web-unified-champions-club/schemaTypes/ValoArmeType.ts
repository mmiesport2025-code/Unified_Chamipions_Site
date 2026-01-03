import {defineField, defineType} from 'sanity'

export const valoArmeType = defineType({
  name: 'valoArme',
  title: 'Arme Valorant',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom de l’arme',
      type: 'string',
      description: 'Nom officiel de l’arme dans Valorant',
    }),

    defineField({
      name: 'portrait',
      title: 'Image de l’arme',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Visuel représentant l’arme',
    }),
  ],
})
