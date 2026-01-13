import {defineField, defineType} from 'sanity'

export const lolModeType = defineType({
  name: 'lolMode',
  title: 'League of Legends | Mode de jeu',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du mode',
      type: 'string',
      description: 'Nom du mode de jeu (ex : Ranked, ARAM, URF)',
      validation: (rule) => rule.required(),
    }),
  ],
})
