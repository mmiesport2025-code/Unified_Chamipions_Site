import {defineField, defineType} from 'sanity'

export const valoReticuleType = defineType({
  name: 'valoReticule',
  title: 'Valorant | Réticule',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Nom du réticule',
      type: 'string',
      description: 'Nom ou style du réticule utilisé dans Valorant',
      validation: (rule) => rule.required(),
    }),
  ],
})
