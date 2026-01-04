import {defineField, defineType} from 'sanity'

export const messageType = defineType({
  name: 'message',
  title: 'Message',
  type: 'document',

  fields: [
    defineField({
      name: 'benevole',
      title: 'Bénévole (associé au message)',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'benevole'}]}],
    }),

    defineField({
      name: 'texte',
      title: 'Texte',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
