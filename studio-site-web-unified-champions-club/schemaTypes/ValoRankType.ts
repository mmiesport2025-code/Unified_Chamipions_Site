import {defineField, defineType} from 'sanity'

export const valoRankType = defineType({
  name: 'valoRank',
  title: 'Rang Valorant',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du rang',
      type: 'string',
      description:
        'Nom officiel du rang dans Valorant (ex: Fer, Bronze, Argent, Or, Platine, Diamant, Immortel, Radiant)',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'portrait',
      title: 'Emblème du rang',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Icône représentant le rang',
      validation: (rule) => rule.required(),
    }),
  ],
})
