import { CARD_LEVEL, MULTI_LEVEL_CARD_TYPE } from "../cardConstants";
import { generateCardName } from "../cardHelpers";
import { CardProperties } from "../cardTypes";

export const armyCardProperties: CardProperties = {
    lvl_initial: {
        cost: {
            inCoins: 5,
            inPopulation: 1
        },
        depenends: {
            onCards: [
                {cardName: generateCardName(MULTI_LEVEL_CARD_TYPE.BARRACK, CARD_LEVEL.LVL_1)}
            ]
        }
    }
}