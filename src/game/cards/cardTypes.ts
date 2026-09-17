import { CardName } from "../../types"

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

export type CardProperties = {
    lvl_initial: {
        cost: CardCost,
        profit: CardProfit
        depenends?: CardDependency
    },
    lvl_2?: {
        cost: CardCost,
        profit: CardProfit
        depenends?: CardDependency
    },
    lvl_3?: {
        cost: CardCost,
        profit: CardProfit
        depenends?: CardDependency
    }
}
