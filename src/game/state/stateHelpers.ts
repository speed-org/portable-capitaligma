import { CARD_LEVEL, CARD_TYPE } from "../../game/cards/cardConstants";
import { Card, GameState, PlayerBoard, PlayerStats } from "../../types";
import { generateCardName } from "../cards/cardHelpers";
import { ENTITY_POPULATION_COVERAGE, ENTITY_POPULATION_VALUE } from "../../constants";
import { INITIAL_COINS, INITIAL_MATERIALS, INITIAL_EFFECTS, INITIAL_DEFICIT } from "../../constants";

const generate_initial_board = () => {
    const newCards: Card[] = [
        { name: generateCardName(CARD_TYPE.PRESIDENT, CARD_LEVEL.UNIQUE), type: CARD_TYPE.PRESIDENT, level: CARD_LEVEL.UNIQUE, isControlled: false, xCoord: 0, yCoord: 0 },
        { name: generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_1), type: CARD_TYPE.FARM, level: CARD_LEVEL.LVL_1, isControlled: false, xCoord: 0, yCoord: 0 },
        { name: generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_1), type: CARD_TYPE.HOUSE, level: CARD_LEVEL.LVL_1, isControlled: false, xCoord: 0, yCoord: 0 },
        { name: generateCardName(CARD_TYPE.MARKET, CARD_LEVEL.LVL_1), type: CARD_TYPE.MARKET, level: CARD_LEVEL.LVL_1, isControlled: false, xCoord: 0, yCoord: 0 },
    ];
    const initialStats: PlayerStats = {
        coins:INITIAL_COINS,
        materials: INITIAL_MATERIALS,
        progress: 2,
        population: calculate_pupulation(newCards),
        populationCoverage: calculate_population_coverage(newCards),
    }
    const initialBoard: PlayerBoard = {
        cards: newCards,
        effects: INITIAL_EFFECTS,
        stats: initialStats,
        deficit: INITIAL_DEFICIT,
    }
    return initialBoard
}

export const generate_initial_state = () => {
    const newGameState: GameState = {
        currentTurn: false,
        turnCount: 1,
        player1: generate_initial_board(),
        player2: generate_initial_board()
    }
    return newGameState
}


export const calculate_population_coverage = (cards: Card[]) => {
    let coverage = 0
    if (Object.hasOwn(cards, generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_1))) {
        coverage += ENTITY_POPULATION_COVERAGE.LVL1_FARM_POPULATION_COVERAGE;
    }
    if (Object.hasOwn(cards, generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_2))) {
        coverage += ENTITY_POPULATION_COVERAGE.LVL2_FARM_POPULATION_COVERAGE;
    }
    if (Object.hasOwn(cards, generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_3))) {
        coverage += ENTITY_POPULATION_COVERAGE.LVL3_FARM_POPULATION_COVERAGE;
    }

    return coverage
}

export const calculate_pupulation = (cards:Card[]) => {
    let population = 0
    const lvl1House = generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_1)
    const lvl2House = generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_2)
    const lvl3House = generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_3)
    for (const card of cards) {
        if (card.name === lvl1House) {
            population += ENTITY_POPULATION_VALUE.LVL1_HOUSE_POPULATION_VALUE
        }
        if (card.name === lvl2House) {
            population += ENTITY_POPULATION_VALUE.LVL2_HOUSE_POPULATION_VALUE
        }
        if (card.name === lvl3House) {
            population += ENTITY_POPULATION_VALUE.LVL3_HOUSE_POPULATION_VALUE
        }
    }
    return population
}

export const initialGameState = generate_initial_state()
