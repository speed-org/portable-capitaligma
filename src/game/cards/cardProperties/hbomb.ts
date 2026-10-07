import { CARD_LEVEL, MULTI_LEVEL_CARD_TYPE } from "../cardConstants";
import { generateCardName } from "../cardHelpers";
import { CardProperties } from "../cardTypes";

export const hbombCardProperties: CardProperties = {
    lvl_initial: {
        cost: {
            inCoins: 50,
            inMaterials: 50
        },
        depenends: {
            onCards: [{
                cardName: generateCardName(MULTI_LEVEL_CARD_TYPE.AIR_FORCE, CARD_LEVEL.LVL_3)
            }]
        }
    }
}