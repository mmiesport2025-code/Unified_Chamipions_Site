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
          to: [{type: 'reseau'}],
        },
      ],
    }),

    /* ===============================
       VALORANT
    =============================== */

    defineField({
      name: 'valo_agents',
      title: 'Agents Valorant',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'valo_agent'}]}],
    }),

    defineField({
      name: 'valo_map',
      title: 'Carte Valorant',
      type: 'reference',
      to: [{type: 'valo_map'}],
    }),

    defineField({
      name: 'valo_arme',
      title: 'Armes Valorant',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'valo_arme'}]}],
    }),

    defineField({
      name: 'valo_skin',
      title: 'Skins Valorant',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'valo_skin'}]}],
    }),

    defineField({
      name: 'valo_rank',
      title: 'Rank Valorant',
      type: 'reference',
      to: [{type: 'valo_rank'}],
    }),

    defineField({
      name: 'valo_reticule',
      title: 'Réticule Valorant',
      type: 'reference',
      to: [{type: 'valo_reticule'}],
    }),

    /* ===============================
       LEAGUE OF LEGENDS
    =============================== */

    defineField({
      name: 'lol_main',
      title: 'Champions principaux (LoL)',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'lol_main'}]}],
    }),

    defineField({
      name: 'lol_skin',
      title: 'Skins LoL',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'lol_skin'}]}],
    }),

    defineField({
      name: 'lol_positionnement',
      title: 'Positionnement LoL',
      type: 'reference',
      to: [{type: 'lol_positionnement'}],
    }),

    defineField({
      name: 'lol_rank',
      title: 'Rank LoL',
      type: 'reference',
      to: [{type: 'lol_rank'}],
    }),

    defineField({
      name: 'lol_mode',
      title: 'Modes LoL',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'lol_mode'}]}],
    }),

    defineField({
      name: 'lol_item',
      title: 'Item favori LoL',
      type: 'reference',
      to: [{type: 'lol_item'}],
    }),
  ],
})
