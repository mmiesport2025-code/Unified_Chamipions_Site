import { defineField, defineType } from 'sanity'

export const matchType = defineType({
  name: 'match',
  title: 'Match',
  type: 'document',

  fields: [
    defineField({
      name: 'nom',
      title: 'Nom du match',
      type: 'string',
      description: 'Nom ou titre du match',
      initialValue: 'Match',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'debut',
      title: 'Date de début',
      type: 'datetime',
      description: 'Date et heure de début du match',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'fin',
      title: 'Date de fin',
      type: 'datetime',
      description: 'Date et heure de fin du match',
    }),

    defineField({
      name: 'diffusion_en_live',
      title: 'Diffusion en live',
      type: 'boolean',
      initialValue: false,
      description: 'Le match est-il diffusé en direct ?',
    }),

    defineField({
      name: 'url_live',
      title: 'URL live',
      type: 'url',
      description: 'Lien vers la diffusion en direct (si applicable)',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'rediffusion',
      title: 'Rediffusion',
      type: 'boolean',
      initialValue: false,
      description: 'Le match est-il disponible en rediffusion ?',
    }),

    defineField({
      name: 'url_rediffusion',
      title: 'URL rediffusion',
      type: 'url',
      description: 'Lien vers la rediffusion (si applicable)',
    }),

    defineField({
      name: 'equipes',
      title: 'Équipes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'equipe' }] }],
      description: 'Équipes participant au match',
      validation: (rule) => rule.required(),
      initialValue: [],
    }),

    defineField({
      name: 'jeu',
      title: 'Jeu',
      type: 'reference',
      to: [{ type: 'jeu' }],
      description: 'Jeu concerné par le match',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'gamemode',
      title: 'Mode de jeu',
      type: 'reference',
      to: [{ type: 'gameMode' }],
      description: 'Mode de jeu utilisé pour le match',
    }),
  ],
})
