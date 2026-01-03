import {defineField, defineType} from 'sanity'

export const jeuxType = defineType({
  name: 'jeu',
  title: 'Jeu',
  type: 'document',

  fields: [
    defineField({
      name: 'nom',
      title: 'Nom du jeu',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'icone',
      title: 'Icône',
      type: 'image',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'fond_card',
      title: 'Fond de carte',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'nom',
      media: 'logo',
    },
  },
})
