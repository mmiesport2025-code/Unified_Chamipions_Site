type Equipe = {
  id: string
  nom: string
  appartenance_au_club: boolean
  specificite: string
}

type FullEquipe = Equipe & {
  id_joueur: {
    id: string
    pseudo: string
    nom: string
    prenom: string
    portrait: string
    nationalite: string
  }
  id_jeu: {
    id: string
    nom: string
    logo: string
    icone: string
    fond_carde: string
    description: string
  }
}
