import {equipesType} from './equipeType'
import {joueursType} from './joueursType'
import {jeuxType} from './jeuxType'
import {matchType} from './matchsType'
import {reseauxType} from './reseauxType'
import {gameModeType} from './gameModeType'

// Types LoL
import {lolItemType} from './lolItemType'
import {lolMainType} from './lolMainType'
import {lolModeType} from './lolModeType'
import {lolPositionnementType} from './lolPositionnementType'
import {lolRankType} from './lolRankType'
import {lolSkinType} from './lolSkinType'

// Types Valorant
import {valoAgentType} from './valoAgentType'
import {valoArmeType} from './valoArmeType'
import {valoMapType} from './valoMapType'
import {valoRankType} from './valoRankType'
import {valoReticuleType} from './valoReticuleType'
import {valoSkinType} from './valoSkinType'

export const schemaTypes = [
  // Core
  equipesType,
  joueursType,
  jeuxType,
  matchType,
  reseauxType,
  gameModeType,

  // LoL
  lolItemType,
  lolMainType,
  lolModeType,
  lolPositionnementType,
  lolRankType,
  lolSkinType,

  // Valorant
  valoAgentType,
  valoArmeType,
  valoMapType,
  valoRankType,
  valoReticuleType,
  valoSkinType,
]
