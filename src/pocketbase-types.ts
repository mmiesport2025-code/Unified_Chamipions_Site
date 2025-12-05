/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
  Equipes = 'Equipes',
  GameMode = 'GameMode',
  Jeux = 'Jeux',
  Joueurs = 'Joueurs',
  LolItem = 'LolItem',
  LolMain = 'LolMain',
  LolMode = 'LolMode',
  LolPositionnement = 'LolPositionnement',
  LolRank = 'LolRank',
  LolSkin = 'LolSkin',
  Matches = 'Matches',
  Reseaux = 'Reseaux',
  ValoAgents = 'ValoAgents',
  ValoArme = 'ValoArme',
  ValoMap = 'ValoMap',
  ValoRank = 'ValoRank',
  ValoReticule = 'ValoReticule',
  ValoSkin = 'ValoSkin',
  Authorigins = '_authOrigins',
  Externalauths = '_externalAuths',
  Mfas = '_mfas',
  Otps = '_otps',
  Superusers = '_superusers',
  Users = 'users',
}

// Alias types for improved usability
export type IsoDateString = string
export type IsoAutoDateString = string & { readonly autodate: unique symbol }
export type RecordIdString = string
export type FileNameString = string & { readonly filename: unique symbol }
export type HTMLString = string

type ExpandType<T> = unknown extends T
  ? T extends unknown
    ? { expand?: unknown }
    : { expand: T }
  : { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
  id: RecordIdString
  collectionId: string
  collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
  email: string
  emailVisibility: boolean
  username: string
  verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum EquipesSpecificiteOptions {
  'Masculine' = 'Masculine',
  'Feminine' = 'Feminine',
  'Mixte' = 'Mixte',
}
export type EquipesRecord = {
  appartenance_au_club?: boolean
  id: string
  id_jeu?: RecordIdString
  id_joueur?: RecordIdString[]
  nom?: string
  specificite?: EquipesSpecificiteOptions
}

export type GameModeRecord = {
  id: string
  nom_complet?: string
  nom_reduit?: string
}

export type JeuxRecord = {
  Description?: string
  fond_card?: FileNameString
  icone?: FileNameString
  id: string
  logo?: FileNameString
  nom?: string
}

export enum JoueursNationaliteOptions {
  'Français' = 'Français',
  'Anglais' = 'Anglais',
}
export type JoueursRecord = {
  id: string
  id_jeu?: RecordIdString[]
  id_jeu_maitriser?: RecordIdString
  id_reseaux?: RecordIdString[]
  lol_item?: RecordIdString
  lol_main?: RecordIdString[]
  lol_mode?: RecordIdString[]
  lol_positionnement?: RecordIdString
  lol_rank?: RecordIdString
  lol_skin?: RecordIdString[]
  nationalite?: JoueursNationaliteOptions[]
  nom?: string
  portrait?: FileNameString
  prenom?: string
  pseudo?: string
  valo_agents?: RecordIdString[]
  valo_arme?: RecordIdString[]
  valo_map?: RecordIdString
  valo_rank?: RecordIdString
  valo_reticule?: RecordIdString
  valo_skin?: RecordIdString[]
}

export type LolItemRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type LolMainRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type LolModeRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type LolPositionnementRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type LolRankRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type LolSkinRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type MatchesRecord = {
  debut?: IsoDateString
  diffusion_en_live?: boolean
  fin?: IsoDateString
  id: string
  id_equipe?: RecordIdString[]
  id_gamemode?: RecordIdString
  id_jeu?: RecordIdString
  nom?: string
  rediffusion?: boolean
  url_live?: string
  url_rediffusion?: string
}

export enum ReseauxReseauxSociauxOptions {
  'Facebook' = 'Facebook',
  'Insta' = 'Insta',
  'Linkedin' = 'Linkedin',
  'Tweeter' = 'Tweeter',
  'Youtube' = 'Youtube',
}
export type ReseauxRecord = {
  id: string
  nom?: string
  reseaux_sociaux?: ReseauxReseauxSociauxOptions
}

export type ValoAgentsRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type ValoArmeRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type ValoMapRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type ValoRankRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type ValoReticuleRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type ValoSkinRecord = {
  id: string
  name?: string
  portrait?: FileNameString
}

export type AuthoriginsRecord = {
  collectionRef: string
  created: IsoAutoDateString
  fingerprint: string
  id: string
  recordRef: string
  updated: IsoAutoDateString
}

export type ExternalauthsRecord = {
  collectionRef: string
  created: IsoAutoDateString
  id: string
  provider: string
  providerId: string
  recordRef: string
  updated: IsoAutoDateString
}

export type MfasRecord = {
  collectionRef: string
  created: IsoAutoDateString
  id: string
  method: string
  recordRef: string
  updated: IsoAutoDateString
}

export type OtpsRecord = {
  collectionRef: string
  created: IsoAutoDateString
  id: string
  password: string
  recordRef: string
  sentTo?: string
  updated: IsoAutoDateString
}

export type SuperusersRecord = {
  created: IsoAutoDateString
  email: string
  emailVisibility?: boolean
  id: string
  password: string
  tokenKey: string
  updated: IsoAutoDateString
  verified?: boolean
}

export type UsersRecord = {
  avatar?: FileNameString
  created: IsoAutoDateString
  email: string
  emailVisibility?: boolean
  id: string
  name?: string
  password: string
  tokenKey: string
  updated: IsoAutoDateString
  verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type EquipesResponse<Texpand = unknown> = Required<EquipesRecord> & BaseSystemFields<Texpand>
export type GameModeResponse<Texpand = unknown> = Required<GameModeRecord> &
  BaseSystemFields<Texpand>
export type JeuxResponse<Texpand = unknown> = Required<JeuxRecord> & BaseSystemFields<Texpand>
export type JoueursResponse<Texpand = unknown> = Required<JoueursRecord> & BaseSystemFields<Texpand>
export type LolItemResponse<Texpand = unknown> = Required<LolItemRecord> & BaseSystemFields<Texpand>
export type LolMainResponse<Texpand = unknown> = Required<LolMainRecord> & BaseSystemFields<Texpand>
export type LolModeResponse<Texpand = unknown> = Required<LolModeRecord> & BaseSystemFields<Texpand>
export type LolPositionnementResponse<Texpand = unknown> = Required<LolPositionnementRecord> &
  BaseSystemFields<Texpand>
export type LolRankResponse<Texpand = unknown> = Required<LolRankRecord> & BaseSystemFields<Texpand>
export type LolSkinResponse<Texpand = unknown> = Required<LolSkinRecord> & BaseSystemFields<Texpand>
export type MatchesResponse<Texpand = unknown> = Required<MatchesRecord> & BaseSystemFields<Texpand>
export type ReseauxResponse<Texpand = unknown> = Required<ReseauxRecord> & BaseSystemFields<Texpand>
export type ValoAgentsResponse<Texpand = unknown> = Required<ValoAgentsRecord> &
  BaseSystemFields<Texpand>
export type ValoArmeResponse<Texpand = unknown> = Required<ValoArmeRecord> &
  BaseSystemFields<Texpand>
export type ValoMapResponse<Texpand = unknown> = Required<ValoMapRecord> & BaseSystemFields<Texpand>
export type ValoRankResponse<Texpand = unknown> = Required<ValoRankRecord> &
  BaseSystemFields<Texpand>
export type ValoReticuleResponse<Texpand = unknown> = Required<ValoReticuleRecord> &
  BaseSystemFields<Texpand>
export type ValoSkinResponse<Texpand = unknown> = Required<ValoSkinRecord> &
  BaseSystemFields<Texpand>
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> &
  BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> &
  BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> &
  AuthSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  Equipes: EquipesRecord
  GameMode: GameModeRecord
  Jeux: JeuxRecord
  Joueurs: JoueursRecord
  LolItem: LolItemRecord
  LolMain: LolMainRecord
  LolMode: LolModeRecord
  LolPositionnement: LolPositionnementRecord
  LolRank: LolRankRecord
  LolSkin: LolSkinRecord
  Matches: MatchesRecord
  Reseaux: ReseauxRecord
  ValoAgents: ValoAgentsRecord
  ValoArme: ValoArmeRecord
  ValoMap: ValoMapRecord
  ValoRank: ValoRankRecord
  ValoReticule: ValoReticuleRecord
  ValoSkin: ValoSkinRecord
  _authOrigins: AuthoriginsRecord
  _externalAuths: ExternalauthsRecord
  _mfas: MfasRecord
  _otps: OtpsRecord
  _superusers: SuperusersRecord
  users: UsersRecord
}

export type CollectionResponses = {
  Equipes: EquipesResponse
  GameMode: GameModeResponse
  Jeux: JeuxResponse
  Joueurs: JoueursResponse
  LolItem: LolItemResponse
  LolMain: LolMainResponse
  LolMode: LolModeResponse
  LolPositionnement: LolPositionnementResponse
  LolRank: LolRankResponse
  LolSkin: LolSkinResponse
  Matches: MatchesResponse
  Reseaux: ReseauxResponse
  ValoAgents: ValoAgentsResponse
  ValoArme: ValoArmeResponse
  ValoMap: ValoMapResponse
  ValoRank: ValoRankResponse
  ValoReticule: ValoReticuleResponse
  ValoSkin: ValoSkinResponse
  _authOrigins: AuthoriginsResponse
  _externalAuths: ExternalauthsResponse
  _mfas: MfasResponse
  _otps: OtpsResponse
  _superusers: SuperusersResponse
  users: UsersResponse
}

// Utility types for create/update operations

type ProcessCreateAndUpdateFields<T> = Omit<
  {
    // Omit AutoDate fields
    [K in keyof T as Extract<T[K], IsoAutoDateString> extends never
      ? K
      : never]: // Convert FileNameString to File
    T[K] extends infer U
      ? U extends FileNameString | FileNameString[]
        ? U extends any[]
          ? File[]
          : File
        : U
      : never
  },
  'id'
>

// Create type for Auth collections
export type CreateAuth<T> = {
  id?: RecordIdString
  email: string
  emailVisibility?: boolean
  password: string
  passwordConfirm: string
  verified?: boolean
} & ProcessCreateAndUpdateFields<T>

// Create type for Base collections
export type CreateBase<T> = {
  id?: RecordIdString
} & ProcessCreateAndUpdateFields<T>

// Update type for Auth collections
export type UpdateAuth<T> = Partial<
  Omit<ProcessCreateAndUpdateFields<T>, keyof AuthSystemFields>
> & {
  email?: string
  emailVisibility?: boolean
  oldPassword?: string
  password?: string
  passwordConfirm?: string
  verified?: boolean
}

// Update type for Base collections
export type UpdateBase<T> = Partial<Omit<ProcessCreateAndUpdateFields<T>, keyof BaseSystemFields>>

// Get the correct create type for any collection
export type Create<T extends keyof CollectionResponses> =
  CollectionResponses[T] extends AuthSystemFields
    ? CreateAuth<CollectionRecords[T]>
    : CreateBase<CollectionRecords[T]>

// Get the correct update type for any collection
export type Update<T extends keyof CollectionResponses> =
  CollectionResponses[T] extends AuthSystemFields
    ? UpdateAuth<CollectionRecords[T]>
    : UpdateBase<CollectionRecords[T]>

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = {
  collection<T extends keyof CollectionResponses>(
    idOrName: T,
  ): RecordService<CollectionResponses[T]>
} & PocketBase
