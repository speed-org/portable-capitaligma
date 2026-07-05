import { CARD_TYPE, EFFECT_CATEGORY, EFFECT_WEIGHT, EFFECT_VALUE_CHANGE, RESOURCE_TYPE, EFFECT_LEVEL_DEPENDENCY, LEADERSHIP, EFFECT_DURATION_IN_TURNS, EVENT_CARD_NAME, CARD_LEVEL, ACTION } from "./constants"


export type Effect = PassiveEffect | ImmediateEffect

export type ValueChange = `${number}` | `${number}%`

export type ImmediateEffect = {
    leadership?: LEADERSHIP,
    value_change: ValueChange, 
    action: ACTION,
    level_dependency: EFFECT_LEVEL_DEPENDENCY,
    target: CARD_TYPE | RESOURCE_TYPE | null,
}

export type PassiveEffect = {
    leadership?: LEADERSHIP,
    value_change: ValueChange, 
    action: ACTION,
    level_dependency: EFFECT_LEVEL_DEPENDENCY,
    target: CARD_TYPE | RESOURCE_TYPE | null,
    durationInTurns: number | EFFECT_DURATION_IN_TURNS,
}

export type EventCard = {
    name: EVENT_CARD_NAME,
    description: string,
    weight: EFFECT_WEIGHT,
    category: EFFECT_CATEGORY,
    leadership_dependency?: boolean,
}

export type CardName = `${CARD_TYPE}:${CARD_LEVEL}`

export type CardAmount = number

export type Cards = {[key in CardName]: CardAmount;}

export type PlayerBoard = {
    cards: Cards
    population: number
    populationCoverage: number
    coins: number
    materials: number
    effects: Effect[]
    deficit: number
}

export type GameState = {
    player1: PlayerBoard
    player2: PlayerBoard
    currentTurn: boolean
    turnCount: number
}

// Which player a player-targeting action affects.
export type PlayerKey = "player1" | "player2"