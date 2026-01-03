import {defineField, defineType} from 'sanity'

export const lolModeType = defineType({
  name: 'lolMode',
  title: 'Mode de jeu League of Legends',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du mode',
      type: 'string',
      description: 'Nom du mode de jeu (ex : Ranked, ARAM, URF)',
    }),

    defineField({
      name: 'portrait',
      title: 'Visuel du mode',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image représentant le mode de jeu',
    }),
  ],
})
