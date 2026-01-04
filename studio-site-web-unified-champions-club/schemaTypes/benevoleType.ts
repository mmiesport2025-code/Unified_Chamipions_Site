import {defineField, defineType} from 'sanity'

export const benevoleType = defineType({
  name: 'benevole',
  title: 'Bénévole',
  type: 'document',

  fields: [
    defineField({
      name: 'prenom',
      title: 'Prénom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'nom',
      title: 'Nom',
      type: 'string',
    }),

    defineField({
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
