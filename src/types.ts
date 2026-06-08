import { CARD_TYPE, EFFECT_CATEGORY, EFFECT_WEIGHT, EFFECT_VALUE_TYPE, RESOURCE_TYPE } from "./constants"


export type Effect = {value_change: number | EFFECT_VALUE_TYPE, target: CARD_TYPE | RESOURCE_TYPE}

export type EffectCard = {
    name: string,
    description: string,
    weight: EFFECT_WEIGHT,
    category: EFFECT_CATEGORY,
    effect: Effect[],
    durationInTurns: number,
    reuseTimeInTurns: number
}

export type CardName = `${string}:${string}`

export type CardAmount = number

export type Cards = {[key: CardName]: CardAmount;}

export type PlayerBoard = {
    cards: Cards
    population: number
    population_coverage: number
    coins: number
    materials: number
    effects: EffectCard[]
    deficit: number
}

export type GameState = {
    player1: PlayerBoard
    player2: PlayerBoard
    currentTurn: boolean
    turnCount: number
}