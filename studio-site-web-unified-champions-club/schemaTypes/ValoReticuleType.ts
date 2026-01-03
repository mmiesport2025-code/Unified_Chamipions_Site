import {defineField, defineType} from 'sanity'

export const valoReticuleType = defineType({
  name: 'valoReticule',
  title: 'Réticule Valorant',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du réticule',
      type: 'string',
      description: 'Nom ou style du réticule utilisé dans Valorant',
    }),

    defineField({
      name: 'portrait',
      title: 'Image du réticule',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Visuel représentant le réticule',
    }),
  ],
})
