import {defineField, defineType} from 'sanity'

export const valoMapType = defineType({
  name: 'valoMap',
  title: 'Carte Valorant',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom de la carte',
      type: 'string',
      description: 'Nom officiel de la carte dans Valorant',
    }),

    defineField({
      name: 'portrait',
      title: 'Image de la carte',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Visuel représentant la carte',
    }),
  ],
})
