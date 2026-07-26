import { CARD_LEVEL, CARD_TYPE } from "../constants";
import { CardName } from "../types"


export const generateCardName = (cardType: string, cardLevel: string) => {
    const newCardName = `${cardType}:${cardLevel}`
    return newCardName as CardName
}
const cardImageBaseUrl = '/assets/entities/'
const cardNameToURLMap: Record<CardName, string> = {
    [generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_1)]: `${cardImageBaseUrl}farm-lvl1-v1.webp`,
    [generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_1)]: `${cardImageBaseUrl}house-lvl1-v1.webp`,
    [generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_2)]: `${cardImageBaseUrl}house-lvl-2.webp`,
}

export const getCardImagePath = (cardName: CardName): string => {
    const name = cardNameToURLMap[cardName] || '';
    console.log(`getCardImagePath: cardName=${cardName}, imagePath=${name}`);
    return name
}
