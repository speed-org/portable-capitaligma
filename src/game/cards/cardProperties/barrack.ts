import { CardProperties } from "../cardTypes";

export const barrackCardProperties: CardProperties = {
    lvl_initial: {
        cost: {
            inCoins: 20,
            inMaterials: 10,
            inPopulation: 1
        },
        profit: {
            inProgress: 2
        },
        depenends:  {
            onPopulation: 5
        }
    }
}