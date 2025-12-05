import PocketBase from 'pocketbase'

import { type EquipesResponse, type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Change d'image toutes les 3 secondes
// onMounted(() => {
//   setInterval(nextSlide, 5000)
// })

export async function TeamBySpecificityAndGame(specificite: string, id_jeu: string) {
  if (!specificite && !id_jeu) {
    const records = await pb.collection('Equipes').getFullList()
    console.log('mod1')
    return records
  } else {
    if (!specificite) {
      const records = await pb.collection('Equipes').getFullList<EquipesResponse>({
        filter: `game = "${id_jeu}"`,
      })
      console.log('mod2')
      return records
    }
    if (!id_jeu) {
      const records = await pb.collection('Equipes').getFullList<EquipesResponse>({
        filter: `specificite = "${specificite}"`,
      })
      console.log('mod3')
      return records
    }
    if (specificite && id_jeu) {
      const records = await pb.collection('Equipes').getFullList<EquipesResponse>({
        filter: `specificite = "${specificite}" && game = "${id_jeu}"`,
      })
      console.log('mod4')
      return records
    }
  }
}

export async function AllTeam() {
  const records = await pb.collection('Equipes').getFullList()
  return records
}

export async function EquipesByID(ID: string) {
  const record = await pb.collection('Equipes').getOne<EquipesResponse>(ID)
  return record
}

export async function AllJoueurs() {
  const records = await pb.collection('Joueurs').getFullList()
  return records
}

export async function JoueursByID(ID: string) {
  const record = await pb.collection('Joueurs').getOne<JoueursResponse>(ID)
  return record
}
