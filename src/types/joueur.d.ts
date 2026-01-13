import type { FullEquipe } from './equipe'

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

  /** 🔹 AJOUT OBLIGATOIRE */
  equipes?: FullEquipe[] | null

  jeu_maitrise?: {
    _id: string
    nom: string
    logo: string
    icone: string
    fond_card: string
    bandeau: string
    description: string
    border_color: string
    background_color: string
    object_position: string
  }

  jeux?: {
    _id: string
    nom: string
    logo: string
    icone: string
    fond_card: string
    bandeau: string
    description: string
    border_color: string
    background_color: string
    object_position: string
  }[]
}
