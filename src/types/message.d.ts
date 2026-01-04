export type Joueur = {
  _id: string
  texte: string
  jeu_maitrise?: {
    _id: string
    nom: string
    logo?: string
    icone?: string
    fond_carde?: string
    description?: string
  }
  Benevole?: {
    _id: string
    prenom: string
    nom: string
    portrait?: {
      _type: 'image'
      asset: {
        _id: string
        url: string
      }
    }
  }
}
