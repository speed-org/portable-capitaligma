import { EFFECT_CATEGORY, EFFECT_WEIGHT, RESOURCE_TYPE, EFFECT_LEVEL_DEPENDENCY, LEADERSHIP, EFFECT_DURATION_IN_TURNS, EVENT_CARD_NAME, ACTION, GAME_LEVEL_ACTION_TYPE, PLAYER_LEVEL_ACTION_TYPE } from "./constants"
import { CARD_LEVEL, CARD_TYPE } from "./game/cards/cardConstants"

export type Effect = PassiveEffect | ImmediateEffect

export type ValueChange = `${number}` | `${number}%`

export type Action = {type: string, payload: any}

export type GAME_LEVEL_ACTION = {type:GAME_LEVEL_ACTION_TYPE.END_TURN} |
    {type:GAME_LEVEL_ACTION_TYPE.END_GAME, payload: {}}

export type PLAYER_LEVEL_ACTION = {type: "collect_resources", payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.BUILD_CARD, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.DESTROY_CARD, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.UPGRADE_CARD, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.DOWNGRADE_CARD, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.APPLY_EFFECT, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.REMOVE_EFFECT, payload: {}}


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

export type CardName = `${string}:${string}`

export type Card = {
    name: CardName,
    type: CARD_TYPE,
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
}

export type PlayerBoard = {
    cards: Card[]
    effects: Effect[]
    deficit: number
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