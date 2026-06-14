import { CARD_TYPE, EFFECT_CATEGORY, EFFECT_WEIGHT, EFFECT_VALUE_CHANGE, RESOURCE_TYPE, EFFECT_LEVEL_DEPENDENCY, LEADERSHIP, EFFECT_DURATION_IN_TURNS } from "./constants"


export type Effect = {
    leadership?: LEADERSHIP,
    value_change: number | EFFECT_VALUE_CHANGE, 
    level_dependency: EFFECT_LEVEL_DEPENDENCY,
    target: CARD_TYPE | RESOURCE_TYPE | null,
    durationInTurns: number | EFFECT_DURATION_IN_TURNS,
}

export type EventCard = {
    name: string,
    description: string,
    weight: EFFECT_WEIGHT,
    category: EFFECT_CATEGORY,
    leadership_dependency?: boolean,
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
    effects: EventCard[]
    deficit: number
}

export type GameState = {
    player1: PlayerBoard
    player2: PlayerBoard
    currentTurn: boolean
    turnCount: number
}