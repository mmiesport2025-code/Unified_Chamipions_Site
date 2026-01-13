import {defineField, defineType} from 'sanity'

export const lolPositionnementType = defineType({
  name: 'lolPositionnement',
  title: 'League of Legends | Position / Rôle',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom de la position',
      type: 'string',
      description: 'Position ou rôle sur la carte (Top, Jungle, Mid, ADC, Support)',
      validation: (rule) => rule.required(),
    }),
  ],
})
