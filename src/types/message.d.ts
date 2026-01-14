export type Message = {
  _id: string
  texte: string
  texte_suite: string
  benevole: {
    _id: string
    prenom: string
    nom?: string
    portrait?: {
      _type: 'image'
      asset: {
        _id: string
        url: string
      }
    }
  }
}
