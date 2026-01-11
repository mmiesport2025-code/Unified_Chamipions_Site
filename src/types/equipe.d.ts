export type Equipe = {
  _id: string
  nom: string
  appartenance_au_club: boolean
  specificite: 'Masculine' | 'Feminine' | 'Mixte'
  joueurs: {
    _ref: string
    _type: 'reference'
  }[]
  jeu: {
    _ref: string
    _type: 'reference'
  }
}

export type FullEquipe = {
  _id: string
  nom: string
  appartenance_au_club: boolean
  specificite: 'Masculine' | 'Feminine' | 'Mixte'

  joueurs: {
    _id: string
    pseudo: string
    nom: string
    prenom: string
    portrait?: {
      _type: 'image'
      asset: {
        _id: string
        url: string
      }
    }
    nationalite: ('Français' | 'Anglais')[]
  }[]

  jeu: {
    _id: string
    nom: string
    logo: string
    icone: string
    bandeau: string
    fond_card: string
    description: string
    border_color: string
    background_color: string
    object_position: string
  }
}
