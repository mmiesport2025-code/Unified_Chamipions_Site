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
      name: 'iconeB',
      title: 'Icône version blanche',
      type: 'image',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'iconeN',
      title: 'Icône version noire',
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
      name: 'bandeau',
      title: 'Bandeau',
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
    defineField({
      name: 'border_color',
      title: 'Couleur de bordure',
      type: 'string',
      description: 'Couleur RGB — ex: rgb(174, 71, 242)',
      validation: (rule) =>
        rule.required().regex(/^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/, {
          name: 'rgb',
          invert: false,
        }),
    }),
    defineField({
      name: 'background_color',
      title: 'Couleur de fond',
      type: 'string',
      description: 'Couleur RGB — ex: rgb(20, 20, 20)',
      validation: (rule) =>
        rule.required().regex(/^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$/, {
          name: 'rgb',
          invert: false,
        }),
    }),
    defineField({
      name: 'object_position',
      title: "Position de l'image",
      type: 'string',
      description: "Position de l'image — ex: 50% 0%",
      validation: (rule) =>
        rule.required().regex(/^(\d{1,3}%\s){1}\d{1,3}%$/, {
          name: 'position',
          invert: false,
        }),
    }),
  ],
  preview: {
    select: {
      title: 'nom',
      media: 'logo',
    },
  },
})
