import {defineField, defineType} from 'sanity'

export const joueursType = defineType({
  name: 'joueur',
  title: 'Joueur',
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
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'pseudo',
      title: 'Pseudo',
      type: 'string',
      validation: (rule) =>
        rule.custom((value, context) => {
          if (!value) return true
          if (!context.document?.prenom && !context.document?.nom) {
            return true
          }
          return true
        }),
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

    defineField({
      name: 'nationalite',
      title: 'Nationalité',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Français', value: 'Français'},
          {title: 'Anglais', value: 'Anglais'},
        ],
      },
      initialValue: ['Français'],
    }),

    /* ===============================
       Jeux (général)
    =============================== */

    defineField({
      name: 'jeu_maitrise',
      title: 'Jeu maîtrisé',
      type: 'reference',
      to: [{type: 'jeu'}],
    }),

    defineField({
      name: 'jeux',
      title: 'Jeux joués',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'jeu'}],
        },
      ],
    }),

    /* ===============================
       Réseaux
    =============================== */

    defineField({
      name: 'reseaux',
      title: 'Réseaux sociaux',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'reseaux'}],
        },
      ],
    }),

    /* ===============================
       VALORANT
    =============================== */

    defineField({
      name: 'valoAgent',
      title: 'Agents Valorant',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'valoAgent'}]}],
    }),

    defineField({
      name: 'valoMap',
      title: 'Carte Valorant',
      type: 'reference',
      to: [{type: 'valoMap'}],
    }),

    defineField({
      name: 'valoArme',
      title: 'Armes Valorant',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'valoArme'}]}],
    }),

    defineField({
      name: 'valoSkin',
      title: 'Skins Valorant',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'valoSkin'}]}],
    }),

    defineField({
      name: 'valoRank',
      title: 'Rank Valorant',
      type: 'reference',
      to: [{type: 'valoRank'}],
    }),

    defineField({
      name: 'valoReticule',
      title: 'Réticule Valorant',
      type: 'reference',
      to: [{type: 'valoReticule'}],
    }),

    /* ===============================
       LEAGUE OF LEGENDS
    =============================== */

    defineField({
      name: 'lolMain',
      title: 'Champions principaux (LoL)',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'lolMain'}]}],
    }),

    defineField({
      name: 'lolSkin',
      title: 'Skins LoL',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'lolSkin'}]}],
    }),

    defineField({
      name: 'lolPositionnement',
      title: 'Positionnement LoL',
      type: 'reference',
      to: [{type: 'lolPositionnement'}],
    }),

    defineField({
      name: 'lolRank',
      title: 'Rank LoL',
      type: 'reference',
      to: [{type: 'lolRank'}],
    }),

    defineField({
      name: 'lolMode',
      title: 'Modes LoL',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'lolMode'}]}],
    }),

    defineField({
      name: 'lolItem',
      title: 'Item favori LoL',
      type: 'reference',
      to: [{type: 'lolItem'}],
    }),
  ],
})
