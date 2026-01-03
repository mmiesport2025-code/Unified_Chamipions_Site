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
  jeu_maitrise?: {
    _id: string
    nom: string
    logo?: string
    icone?: string
    fond_carde?: string
    description?: string
  }
  jeux?: {
    _id: string
    nom: string
    logo?: string
    icone?: string
    fond_carde?: string
    description?: string
  }[]
}
