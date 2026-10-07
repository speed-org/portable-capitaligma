import { CARD_LEVEL, MULTI_LEVEL_CARD_TYPE } from "../cardConstants";
import { generateCardName } from "../cardHelpers";
import { CardProperties } from "../cardTypes";

export const techCardProperties: CardProperties = {
    lvl_initial: {
        cost: {
            inCoins: 15,
            inMaterials: 10
        },
        profit: {
            inProgress: 10
        },
        depenends: {
            onPopulation: 10,
            onProgress: 20,
            onCards: [
                {cardName: generateCardName(MULTI_LEVEL_CARD_TYPE.BANK, CARD_LEVEL.LVL_1)},
            ]
        }
    }
}