import {defineField, defineType} from 'sanity'

export const reseauxType = defineType({
  name: 'reseaux',
  title: 'Réseau social',
  type: 'document',

  fields: [
    defineField({
      name: 'nom',
      title: 'Nom',
      type: 'string',
      description: 'Nom du compte ou profil sur le réseau social',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'reseaux_sociaux',
      title: 'Réseau social',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'Facebook'},
          {title: 'Instagram', value: 'Insta'},
          {title: 'LinkedIn', value: 'Linkedin'},
          {title: 'Twitter', value: 'Tweeter'},
          {title: 'YouTube', value: 'Youtube'},
        ],
        layout: 'dropdown',
      },
      description: 'Type de réseau social',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'url',
      title: 'URL du profil',
      type: 'url',
      description: 'Lien vers le profil ou la page officielle',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }),
    }),
  ],
})
