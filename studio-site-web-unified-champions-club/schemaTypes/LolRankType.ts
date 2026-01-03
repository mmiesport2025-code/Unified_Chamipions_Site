import {defineField, defineType} from 'sanity'

export const lolRankType = defineType({
  name: 'lolRank',
  title: 'League of Legends | Rang',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du rang',
      type: 'string',
      description:
        'Rang classé (Fer, Bronze, Argent, Or, Platine, Diamant, Master, Grandmaster, Challenger)',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'portrait',
      title: 'Emblème du rang',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Icône officielle du rang',
      validation: (rule) => rule.required(),
    }),
  ],
})
