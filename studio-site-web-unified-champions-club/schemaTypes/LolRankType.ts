import {defineField, defineType} from 'sanity'

export const lolRankType = defineType({
  name: 'lolRank',
  title: 'Rang League of Legends',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du rang',
      type: 'string',
      description:
        'Rang classé (Fer, Bronze, Argent, Or, Platine, Diamant, Master, Grandmaster, Challenger)',
    }),

    defineField({
      name: 'portrait',
      title: 'Emblème du rang',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Icône officielle du rang',
    }),
  ],
})
