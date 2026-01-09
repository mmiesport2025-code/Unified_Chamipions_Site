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
    portrait: string
    nationalite: string
  }[]

  jeu: {
    _id: string
    nom: string
    logo: string
    icone: string
    fond_card: string
    description: string
  }
}
