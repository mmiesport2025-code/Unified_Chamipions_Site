import {defineField, defineType} from 'sanity'

export const equipesType = defineType({
  name: 'equipe',
  title: 'Équipe',
  type: 'document',

  fields: [
    defineField({
      name: 'nom',
      title: 'Nom de l’équipe',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'appartenance_au_club',
      title: 'Appartenance au club',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'specificite',
      title: 'Spécificité',
      type: 'string',
      options: {
        list: [
          {title: 'Masculine', value: 'Masculine'},
          {title: 'Féminine', value: 'Feminine'},
          {title: 'Mixte', value: 'Mixte'},
        ],
        layout: 'radio', // ou 'dropdown'
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'joueurs',
      title: 'Joueurs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'joueur'}],
        },
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'jeu',
      title: 'Jeu',
      type: 'reference',
      to: [{type: 'jeu'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
