import { CardProperties } from "../cardTypes";

export const farmCardProperties: CardProperties = {
    lvl_initial: {
        cost: {
            inCoins: 5
        },
        profit: {
            inPopulationCoverage: 2
        },
        depenends: {
            onPopulation: 1
        }
    },
    lvl_2: {
        cost: {
            inCoins: 10
        },
        profit: {
            inPopulationCoverage: 3
        },
        depenends: {
            onPopulation: 2
        }
    },
    lvl_3: {
        cost: {
            inCoins: 15
        },
        profit: {
            inPopulationCoverage: 6
        },
        depenends: {
            onPopulation: 3
        }
    },
}