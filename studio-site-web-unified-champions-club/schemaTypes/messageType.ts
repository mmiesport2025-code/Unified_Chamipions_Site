import {defineField, defineType} from 'sanity'

export const messageType = defineType({
  name: 'message',
  title: 'Message',
  type: 'document',

  fields: [
    defineField({
      name: 'benevole',
      title: 'Bénévole (associé au message)',
      type: 'reference',
      to: [{type: 'benevole'}],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'texte',
      title: 'Début du texte',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'texte_suite',
      title: 'Partie 2 du texte',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
