import { CARD_LEVEL, UNIQUE_LEVEL_CARD_TYPE } from './cardConstants' 

import { Card, CardName } from "../../types"
import { gameConfig } from '../config'
import { CARD_PROPERTIES } from './cardRequirements'
import { CardType } from './cardTypes'

export function isUniqueCardType (cardType: CardType): cardType is UNIQUE_LEVEL_CARD_TYPE {
    return Object.values(UNIQUE_LEVEL_CARD_TYPE).includes(cardType as UNIQUE_LEVEL_CARD_TYPE)
}

export const generateCardName = (cardType: CardType, cardLevel?: CARD_LEVEL.LVL_1 | CARD_LEVEL.LVL_2 | CARD_LEVEL.LVL_3): CardName => {
    const newCardLevel = cardLevel? cardLevel : CARD_LEVEL.LVL_1
    const newCardName:CardName = isUniqueCardType(cardType)? `${cardType}:${CARD_LEVEL.UNIQUE}` : `${cardType}:${newCardLevel}`
    return newCardName
}


export const parseCardName = (cardName: CardName): {cardType: CardType, cardLevel: CARD_LEVEL} => {
    const [cardType, cardLevel] = cardName.split(':') as [CardType, CARD_LEVEL]
    return {cardType, cardLevel}
}

export const getCardImagePath = (cardName: CardName): string => {
    const cardImageBaseUrl = `/assets/entities/${gameConfig.gameCardIconVersion}`
    return `${cardImageBaseUrl}/${cardName.replace(":",'-')}.${gameConfig.gameCardIconVersion === 'v1'? 'webp': 'svg'}`;
}

export const getLowestLevelCardNameByCardType = (cardType: CardType): CardName => {
    return (isUniqueCardType(cardType))? generateCardName(cardType) : generateCardName(cardType, CARD_LEVEL.LVL_1)
}

export const getHighestLevelCardNameByCardType = (cardType: CardType): CardName => {
    return isUniqueCardType(cardType)? generateCardName(cardType) : generateCardName(cardType, CARD_LEVEL.LVL_3)
}

export const getLowestLevelCardName = (cardName: CardName): CardName => {
    const { cardType } = parseCardName(cardName)
    return getLowestLevelCardNameByCardType(cardType)
}

export const getHighestLevelCardName = (cardName: CardName): CardName => {
    const { cardType } = parseCardName(cardName)
    return getHighestLevelCardNameByCardType(cardType)
}

export const getAllCardNames = (playerCards: Card[]): CardName[] => {
    const cardNames: CardName[] = []
    playerCards.forEach((card) => {
        cardNames.push(card.name)
    })
    return cardNames
}

export function getCardNameLevel(cardName: CardName): number {
    const {cardLevel} = parseCardName(cardName)
    let level = Number(cardLevel.at(-1))
    return level
}

export function getNextLevelCardName(cardName: CardName): CardName {
    const {cardType, cardLevel} = parseCardName(cardName)
    if (isUniqueCardType(cardType)) return generateCardName(cardType);

    const level = getCardNameLevel(cardName)
    if (level > 3) return generateCardName(cardType, CARD_LEVEL.LVL_3);

    return generateCardName(cardType, cardLevel === CARD_LEVEL.LVL_1? CARD_LEVEL.LVL_2 :CARD_LEVEL.LVL_3)
}

export function getCardCostByCardName(cardName: CardName) {
    const { cardType, cardLevel } = parseCardName(cardName)
    const cardProperties = CARD_PROPERTIES[cardType]

    if (!cardProperties) return; 

    if (cardLevel === CARD_LEVEL.UNIQUE || cardLevel === CARD_LEVEL.LVL_1) {
        const levelProperties = cardProperties.lvl_initial
        return levelProperties.cost
    }
}

export function isMaxLevelCardName(cardName:CardName): boolean {
    const {cardType} = parseCardName(cardName)
    return cardName === getHighestLevelCardNameByCardType(cardType)
}