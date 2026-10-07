import { CardProperties } from "../cardTypes";

export const bankCardProperties: CardProperties = {
    lvl_initial: {
        cost: {
            inCoins: 10,
            inMaterials: 5
        },
        profit: {
            inProgress: 5
        },
        depenends: {
            onPopulation: 5,
            onProgress: 20
        }
    }
}