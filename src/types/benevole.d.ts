export type Benevole = {
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
