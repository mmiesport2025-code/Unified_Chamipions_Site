import {defineField, defineType} from 'sanity'

export const valoSkinType = defineType({
  name: 'valoSkin',
  title: 'Skin Valorant',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du skin',
      type: 'string',
      description: 'Nom officiel du skin pour l’arme ou agent dans Valorant',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'portrait',
      title: 'Image du skin',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Visuel représentant le skin',
      validation: (rule) => rule.required(),
    }),
  ],
})
