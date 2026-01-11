export type ImageAsset = {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export type Jeu = {
  _id: string
  nom: string
  logo: string
  icone: string
  fond_card: string
  bandeau: string
  description: string
  border_color: string
  background_color: string
}
