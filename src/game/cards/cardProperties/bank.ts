import { CARD_LEVEL, MULTI_LEVEL_CARD_TYPE } from "../cardConstants";
import { generateCardName } from "../cardHelpers";
import { CardProperties } from "../cardTypes";

export const hospitalCardProperties: CardProperties = {
    lvl_initial: {
        cost: {
            inCoins: 30,
            inMaterials: 10,
        },
        profit: {
            inCoins: 15,
            inProgress: 5
        },
        depenends: {
            onCards: [
                {cardName: generateCardName(MULTI_LEVEL_CARD_TYPE.HOUSE, CARD_LEVEL.LVL_2)},
                {cardName: generateCardName(MULTI_LEVEL_CARD_TYPE.MARKET, CARD_LEVEL.LVL_1)}
            ],
            onCoins: 10
        }
    }
}