import {defineField, defineType} from 'sanity'

export const gameModeType = defineType({
  name: 'gameMode',
  title: 'Mode de jeu',
  type: 'document',

  fields: [
    defineField({
      name: 'nom_reduit',
      title: 'Nom réduit',
      type: 'string',
      description: 'Nom court ou abrégé du mode de jeu (ex : BO3, FFA)',
    }),

    defineField({
      name: 'nom_complet',
      title: 'Nom complet',
      type: 'string',
      description: 'Nom complet du mode de jeu (ex : Best of 3, Free For All)',
    }),
  ],
})
