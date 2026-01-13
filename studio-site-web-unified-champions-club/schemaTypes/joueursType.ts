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
          {title: 'Afghan', value: 'Afghan'},
          {title: 'Albanais', value: 'Albanais'},
          {title: 'Algérien', value: 'Algérien'},
          {title: 'Allemand', value: 'Allemand'},
          {title: 'Américain', value: 'Américain'},
          {title: 'Andorran', value: 'Andorran'},
          {title: 'Anglais', value: 'Anglais'},
          {title: 'Angolais', value: 'Angolais'},
          {title: 'Argentin', value: 'Argentin'},
          {title: 'Arménien', value: 'Arménien'},
          {title: 'Australien', value: 'Australien'},
          {title: 'Autrichien', value: 'Autrichien'},

          {title: 'Bangladais', value: 'Bangladais'},
          {title: 'Belge', value: 'Belge'},
          {title: 'Béninois', value: 'Béninois'},
          {title: 'Biélorusse', value: 'Biélorusse'},
          {title: 'Bolivien', value: 'Bolivien'},
          {title: 'Bosnien', value: 'Bosnien'},
          {title: 'Brésilien', value: 'Brésilien'},
          {title: 'Britannique', value: 'Britannique'},
          {title: 'Bulgare', value: 'Bulgare'},

          {title: 'Cambodgien', value: 'Cambodgien'},
          {title: 'Camerounais', value: 'Camerounais'},
          {title: 'Canadien', value: 'Canadien'},
          {title: 'Chilien', value: 'Chilien'},
          {title: 'Chinois', value: 'Chinois'},
          {title: 'Colombien', value: 'Colombien'},
          {title: 'Congolais', value: 'Congolais'},
          {title: 'Coréen', value: 'Coréen'},
          {title: 'Costaricien', value: 'Costaricien'},
          {title: 'Croate', value: 'Croate'},
          {title: 'Cubain', value: 'Cubain'},
          {title: 'Chypriote', value: 'Chypriote'},
          {title: 'Tchèque', value: 'Tchèque'},

          {title: 'Danois', value: 'Danois'},
          {title: 'Dominicain', value: 'Dominicain'},

          {title: 'Écossais', value: 'Écossais'},
          {title: 'Égyptien', value: 'Égyptien'},
          {title: 'Émirati', value: 'Émirati'},
          {title: 'Équatorien', value: 'Équatorien'},
          {title: 'Espagnol', value: 'Espagnol'},
          {title: 'Estonien', value: 'Estonien'},
          {title: 'Éthiopien', value: 'Éthiopien'},

          {title: 'Finlandais', value: 'Finlandais'},
          {title: 'Français', value: 'Français'},

          {title: 'Gallois', value: 'Gallois'},
          {title: 'Géorgien', value: 'Géorgien'},
          {title: 'Grec', value: 'Grec'},
          {title: 'Guatémaltèque', value: 'Guatémaltèque'},

          {title: 'Haïtien', value: 'Haïtien'},
          {title: 'Hongrois', value: 'Hongrois'},

          {title: 'Indien', value: 'Indien'},
          {title: 'Indonésien', value: 'Indonésien'},
          {title: 'Irakien', value: 'Irakien'},
          {title: 'Iranien', value: 'Iranien'},
          {title: 'Irlandais', value: 'Irlandais'},
          {title: 'Islandais', value: 'Islandais'},
          {title: 'Israélien', value: 'Israélien'},
          {title: 'Italien', value: 'Italien'},

          {title: 'Jamaïcain', value: 'Jamaïcain'},
          {title: 'Japonais', value: 'Japonais'},

          {title: 'Kenyan', value: 'Kenyan'},
          {title: 'Koweïtien', value: 'Koweïtien'},

          {title: 'Laotien', value: 'Laotien'},
          {title: 'Letton', value: 'Letton'},
          {title: 'Libanais', value: 'Libanais'},
          {title: 'Libyen', value: 'Libyen'},
          {title: 'Lituanien', value: 'Lituanien'},
          {title: 'Luxembourgeois', value: 'Luxembourgeois'},

          {title: 'Malaisien', value: 'Malaisien'},
          {title: 'Marocain', value: 'Marocain'},
          {title: 'Mexicain', value: 'Mexicain'},
          {title: 'Monégasque', value: 'Monégasque'},

          {title: 'Néerlandais', value: 'Néerlandais'},
          {title: 'Nigérian', value: 'Nigérian'},
          {title: 'Norvégien', value: 'Norvégien'},

          {title: 'Pakistanais', value: 'Pakistanais'},
          {title: 'Péruvien', value: 'Péruvien'},
          {title: 'Philippin', value: 'Philippin'},
          {title: 'Polonais', value: 'Polonais'},
          {title: 'Portugais', value: 'Portugais'},

          {title: 'Roumain', value: 'Roumain'},
          {title: 'Russe', value: 'Russe'},

          {title: 'Sénégalais', value: 'Sénégalais'},
          {title: 'Serbe', value: 'Serbe'},
          {title: 'Slovaque', value: 'Slovaque'},
          {title: 'Slovène', value: 'Slovène'},
          {title: 'Sud-Africain', value: 'Sud-Africain'},
          {title: 'Suédois', value: 'Suédois'},
          {title: 'Suisse', value: 'Suisse'},

          {title: 'Tchadien', value: 'Tchadien'},
          {title: 'Thaïlandais', value: 'Thaïlandais'},
          {title: 'Tunisien', value: 'Tunisien'},
          {title: 'Turc', value: 'Turc'},

          {title: 'Ukrainien', value: 'Ukrainien'},
          {title: 'Uruguayen', value: 'Uruguayen'},

          {title: 'Vénézuélien', value: 'Vénézuélien'},
          {title: 'Vietnamien', value: 'Vietnamien'},

          {title: 'Yéménite', value: 'Yéménite'},

          {title: 'Zambien', value: 'Zambien'},
          {title: 'Zimbabwéen', value: 'Zimbabwéen'},
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
