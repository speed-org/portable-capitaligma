import { EFFECT_CATEGORY, EFFECT_WEIGHT, RESOURCE_TYPE, EFFECT_LEVEL_DEPENDENCY, LEADERSHIP, EFFECT_DURATION_IN_TURNS, EVENT_CARD_NAME, ACTION, GAME_LEVEL_ACTION_TYPE } from "./constants"
import { CARD_LEVEL, MULTI_LEVEL_CARD_TYPE, UNIQUE_LEVEL_CARD_TYPE } from "./game/cards/cardConstants"
import { CardType } from "./game/cards/cardTypes"

export type Effect = PassiveEffect | ImmediateEffect

export type ValueChange = `${number}` | `${number}%`

export type Action = {type: string, payload: any}

export type GAME_LEVEL_ACTION = 
    {type:GAME_LEVEL_ACTION_TYPE.END_TURN} |
    {type:GAME_LEVEL_ACTION_TYPE.END_GAME, payload: {}}


export type ImmediateEffect = {
    leadership?: LEADERSHIP,
    value_change: ValueChange, 
    action: ACTION,
    level_dependency: EFFECT_LEVEL_DEPENDENCY,
    target: CardType | RESOURCE_TYPE | null,
}

export type PassiveEffect = {
    leadership?: LEADERSHIP,
    value_change: ValueChange, 
    action: ACTION,
    level_dependency: EFFECT_LEVEL_DEPENDENCY,
    target: CardType | RESOURCE_TYPE | null,
    durationInTurns: number | EFFECT_DURATION_IN_TURNS,
}

export type EventCard = {
    name: EVENT_CARD_NAME,
    description: string,
    weight: EFFECT_WEIGHT,
    category: EFFECT_CATEGORY,
    leadership_dependency?: boolean,
}

export type UniqueLevelCardName = `${UNIQUE_LEVEL_CARD_TYPE}:${CARD_LEVEL.UNIQUE}`

export type MultiLevelCardName = `${MULTI_LEVEL_CARD_TYPE}:${CARD_LEVEL.LVL_1 | CARD_LEVEL.LVL_2 | CARD_LEVEL.LVL_3}`

export type CardName = UniqueLevelCardName | MultiLevelCardName

export type Card = {
    name: CardName,
    type: CardType,
    level: CARD_LEVEL,
    isControlled: boolean,
    xCoord: number,
    yCoord: number,
}

export type CardAmount = number

export type PlayerStats = {
    population: number
    populationCoverage: number
    coins: number
    materials: number
    progress: number
    deficit: number
}

export type PlayerBoard = {
    cards: Card[]
    effects: Effect[]
    stats: PlayerStats
}

export type GameState = {
    player1: PlayerBoard
    player2: PlayerBoard
    currentTurn: boolean
    turnCount: number
    winner?: boolean
}

// Which player a player-targeting action affects.
export type PlayerKey = "player1" | "player2"

export type CostToEvaluate = {
    resourceAmount: number
    costInResource?: number
}

export type DependencyToEvaluate = {
    depends?: number
    currentResource: number
}

export type CardDependencyToEvaluate = {
    depends?: CardName[]
    currentResource: CardName[]
}