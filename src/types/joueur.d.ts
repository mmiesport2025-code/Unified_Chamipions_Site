import type { FullEquipe } from './equipe'
import type {
  LolItem,
  LolMain,
  LolMode,
  LolPositionnement,
  LolRank,
  LolSkin,
  Reseaux,
  ValoAgent,
  ValoArme,
  ValoMap,
  ValoRank,
  ValoReticule,
  ValoSkin,
} from './expendTypes'

export type Joueur = {
  _id: string
  prenom: string
  nom: string
  pseudo: string

  portrait?: {
    _type: 'image'
    asset: {
      _id: string
      url: string
    }
  }

  nationalite: ('Français' | 'Anglais')[]

  /** 🔹 Équipes auxquelles le joueur appartient */
  equipes?: FullEquipe[] | null

  /** 🔹 Jeu principal */
  jeu_maitrise?: {
    _id: string
    nom: string
    logo: string
    iconeB: string
    iconeN: string
    fond_card: string
    bandeau: string
    description: string
    border_color: string
    background_color: string
    object_position: string
  }

  /** 🔹 Jeux joués */
  jeux?: {
    _id: string
    nom: string
    logo: string
    iconeB: string
    iconeN: string
    fond_card: string
    bandeau: string
    description: string
    border_color: string
    background_color: string
    object_position: string
  }[]

  /** 🔹 Réseaux sociaux */
  reseaux?: Reseaux[] | null

  /** ===============================
      Valorant
  =============================== */
  valoAgent?: ValoAgent[] | null
  valoMap?: ValoMap | null
  valoArme?: ValoArme[] | null
  valoSkin?: ValoSkin[] | null
  valoRank?: ValoRank | null
  valoReticule?: ValoReticule | null

  /** ===============================
      League of Legends
  =============================== */
  lolMain?: LolMain[] | null
  lolSkin?: LolSkin[] | null
  lolPositionnement?: LolPositionnement | null
  lolRank?: LolRank | null
  lolMode?: LolMode[] | null
  lolItem?: LolItem | null
}
