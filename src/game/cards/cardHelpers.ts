import { CARD_LEVEL, CARD_TYPE } from './cardConstants' 
import { Card, CardName } from "../../types"
import { gameConfig } from '../config'


export const generateCardName = (cardType: CARD_TYPE, cardLevel: CARD_LEVEL) => {
    const newCardName = `${cardType}:${cardLevel}`
    return newCardName as CardName
}


export const parseCardName = (cardName: CardName) => {
    const [cardType, cardLevel] = cardName.split(':') as [CARD_TYPE, CARD_LEVEL]
    return { cardType, cardLevel }
}

export const getCardImagePath = (cardName: CardName) => {
    const cardImageBaseUrl = `/assets/entities/${gameConfig.gameCardIconVersion}`
    const path = `${cardImageBaseUrl}/${cardName.replace(":",'-')}.${gameConfig.gameCardIconVersion === 'v1'? 'webp': 'svg'}`;
    return path
}

export const getLowestLevelCardNameByCardType = (cardType: CARD_TYPE) => {
    if (Object.keys(UNIQUE_LEVEL_CARD_NAME).includes(cardType)) {
        return generateCardName(cardType, CARD_LEVEL.UNIQUE)
    }
    return generateCardName(cardType, CARD_LEVEL.LVL_1)
}

export const getHighestLevelCardNameByCardType = (cardType: CARD_TYPE) => {
    if (Object.keys(UNIQUE_LEVEL_CARD_NAME).includes(cardType)) {
        return generateCardName(cardType, CARD_LEVEL.UNIQUE)
    }
    return generateCardName(cardType, CARD_LEVEL.LVL_3)
}

export const getLowestLevelCardName = (cardName: CardName) => {
    const { cardType } = parseCardName(cardName)
    return getLowestLevelCardNameByCardType(cardType)
}

export const getHighestLevelCardName = (cardName: CardName) => {
    const { cardType } = parseCardName(cardName)
    return getHighestLevelCardNameByCardType(cardType)
}

export const getAllCardNames = (playerCards: Card[]) => {
    const cardNames: CardName[] = []
    playerCards.forEach((card) => {
        cardNames.push(card.name)
    })
    return cardNames
}

export function getCardNameLevel(cellContent: CardName): number {
    const {cardLevel} = parseCardName(cellContent)
    let level = Number(cardLevel.at(-1))
    return level
}

export function getNextLevelCardName(cellContent: CardName): CardName | null {
    const level = getCardNameLevel(cellContent)
    if (!level) return null;

    const newLevel = (Number(level) + 1).toString()

    const newCardName = cellContent.replace(level.toString(), newLevel) as CardName
    return newCardName
}

export function isCardTypeUnique(cardType:CARD_TYPE): boolean {
    const cardName = generateCardName(cardType, CARD_LEVEL.UNIQUE)
    return Object.values(UNIQUE_LEVEL_CARD_NAME).includes(cardName)
}

export function isMaxLevelCardName(cardType:CARD_TYPE, currentCellContent:CardName): boolean {
    if (currentCellContent === getHighestLevelCardNameByCardType(cardType)) {
        return true
    }
    return false
}

export const UNIQUE_LEVEL_CARD_NAME = {
    MISSILE: generateCardName(CARD_TYPE.MISSILE, CARD_LEVEL.UNIQUE),
    HBOMB: generateCardName(CARD_TYPE.HBOMB, CARD_LEVEL.UNIQUE),
    EMBASSY: generateCardName(CARD_TYPE.EMBASSY, CARD_LEVEL.UNIQUE),
    PRESIDENT: generateCardName(CARD_TYPE.PRESIDENT, CARD_LEVEL.UNIQUE),
    DICTATOR: generateCardName(CARD_TYPE.DICTATOR, CARD_LEVEL.UNIQUE)
}

export const MULTI_LEVEL_CARD_NAME = {
    FARM_LVL_1: generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_1),
    FARM_LVL_2: generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_2),
    FARM_LVL_3: generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_3),

    MINE_LVL_1: generateCardName(CARD_TYPE.MINE, CARD_LEVEL.LVL_1),
    MINE_LVL_2: generateCardName(CARD_TYPE.MINE, CARD_LEVEL.LVL_2),
    MINE_LVL_3: generateCardName(CARD_TYPE.MINE, CARD_LEVEL.LVL_3),

    MARKET_LVL_1: generateCardName(CARD_TYPE.MARKET, CARD_LEVEL.LVL_1),
    MARKET_LVL_2: generateCardName(CARD_TYPE.MARKET, CARD_LEVEL.LVL_2),
    MARKET_LVL_3: generateCardName(CARD_TYPE.MARKET, CARD_LEVEL.LVL_3),
    
    BANK_LVL_1: generateCardName(CARD_TYPE.BANK, CARD_LEVEL.LVL_1),
    BANK_LVL_2: generateCardName(CARD_TYPE.BANK, CARD_LEVEL.LVL_2),
    BANK_LVL_3: generateCardName(CARD_TYPE.BANK, CARD_LEVEL.LVL_3),
    
    BARRACK_LVL_1: generateCardName(CARD_TYPE.BARRACK, CARD_LEVEL.LVL_1),
    BARRACK_LVL_2: generateCardName(CARD_TYPE.BARRACK, CARD_LEVEL.LVL_2),
    BARRACK_LVL_3: generateCardName(CARD_TYPE.BARRACK, CARD_LEVEL.LVL_3),
    
    AIR_FORCE_LVL_1: generateCardName(CARD_TYPE.AIR_FORCE, CARD_LEVEL.LVL_1),
    AIR_FORCE_LVL_2: generateCardName(CARD_TYPE.AIR_FORCE, CARD_LEVEL.LVL_2),
    AIR_FORCE_LVL_3: generateCardName(CARD_TYPE.AIR_FORCE, CARD_LEVEL.LVL_3),
    
    TECH_LVL_1: generateCardName(CARD_TYPE.TECH, CARD_LEVEL.LVL_1),
    TECH_LVL_2: generateCardName(CARD_TYPE.TECH, CARD_LEVEL.LVL_2),
    TECH_LVL_3: generateCardName(CARD_TYPE.TECH, CARD_LEVEL.LVL_3),
    
    HOSPITAL_LVL_1: generateCardName(CARD_TYPE.HOSPITAL, CARD_LEVEL.LVL_1),
    HOSPITAL_LVL_2: generateCardName(CARD_TYPE.HOSPITAL, CARD_LEVEL.LVL_2),
    HOSPITAL_LVL_3: generateCardName(CARD_TYPE.HOSPITAL, CARD_LEVEL.LVL_3),

    
    HOUSE_LVL_1: generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_1),
    HOUSE_LVL_2: generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_2),
    HOUSE_LVL_3: generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_3),

    
    ARMY_LVL_1: generateCardName(CARD_TYPE.ARMY, CARD_LEVEL.LVL_1),  
    ARMY_LVL_2: generateCardName(CARD_TYPE.ARMY, CARD_LEVEL.LVL_2), 
    ARMY_LVL_3: generateCardName(CARD_TYPE.ARMY, CARD_LEVEL.LVL_3),
}