export type Match = {
  _id: string
  nom: string
  debut: string // ISO string pour date/heure
  fin?: string
  diffusion_en_live: boolean
  url_live: string
  rediffusion: boolean
  url_rediffusion?: string
  equipes: {
    _ref: string
    _type: 'reference'
  }[]
  jeu: {
    _ref: string
    _type: 'reference'
  }
  gamemode?: {
    _ref: string
    _type: 'reference'
  }
}

export type FullMatch = {
  _id: string
  nom: string
  debut: string
  fin?: string
  diffusion_en_live: boolean
  url_live: string
  rediffusion: boolean
  url_rediffusion?: string
  equipes: FullEquipe[]
  jeu: FullJeu
  gamemode: GameMode
}
