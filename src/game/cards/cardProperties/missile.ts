import { CARD_LEVEL, MULTI_LEVEL_CARD_TYPE } from "../cardConstants";
import { generateCardName } from "../cardHelpers";
import { CardProperties } from "../cardTypes";

export const missileCardProperties: CardProperties = {
    lvl_initial: {
        cost: {
            inCoins: 5
        },
        profit: {
            inMaterials: 5
        },
        depenends: {
            onCards: [
                {cardName: generateCardName(MULTI_LEVEL_CARD_TYPE.AIR_FORCE, CARD_LEVEL.LVL_1)}
            ]
        }
    }
}