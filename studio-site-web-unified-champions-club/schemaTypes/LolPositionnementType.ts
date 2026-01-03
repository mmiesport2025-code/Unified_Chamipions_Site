import {defineField, defineType} from 'sanity'

export const lolPositionnementType = defineType({
  name: 'lolPositionnement',
  title: 'Position / Rôle League of Legends',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom de la position',
      type: 'string',
      description: 'Position ou rôle sur la carte (Top, Jungle, Mid, ADC, Support)',
    }),

    defineField({
      name: 'portrait',
      title: 'Icône de la position',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Icône représentant la position',
    }),
  ],
})
