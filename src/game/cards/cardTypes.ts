import { CardName } from "../../types"
import { MULTI_LEVEL_CARD_TYPE, UNIQUE_LEVEL_CARD_TYPE } from "./cardConstants"

export type CardType = MULTI_LEVEL_CARD_TYPE | UNIQUE_LEVEL_CARD_TYPE

export type CardCost = {
    inCoins?: number,
    inMaterials?: number,
    inPopulation?: number,
}

export type CardDependency = {
    onCoins?: number,
    onPopulation?: number,
    onPopulationCoverage?: number,
    onProgress?: number,
    onCards?: CardName[]
}

export type CardProfit = {
    inMaterials?: number,
    inCoins?: number,
    inPopulation?: number,
    inProgress?: number,
    inPopulationCoverage?: number,
}

export type LevelDetails = {
    cost: CardCost,
    profit: CardProfit
    depenends?: CardDependency
}

export type CardProperties = {
    lvl_initial: LevelDetails,
    lvl_2?: LevelDetails,
    lvl_3?: LevelDetails
}
