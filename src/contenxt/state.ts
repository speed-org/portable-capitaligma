import { PlayerBoard, Cards, GameState } from "../types";
import { CARD_TYPE, CARD_LEVEL, INITIAL_COINS, INITIAL_MATERIALS, INITIAL_EFFECTS, INITIAL_DEFICIT } from "../constants";
import { generateCardName } from "../utils/cardHelpers";
import { calculate_population_coverage, calculate_pupulation } from "../utils/stateHelpers";

const generate_initial_board = () => {
    const newCards: Cards = {
        [generateCardName(CARD_TYPE.PRESIDENT, CARD_LEVEL.UNIQUE)]: 1,
        [generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_1)]: 1,
        [generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_1)]: 2,
        [generateCardName(CARD_TYPE.MARKET, CARD_LEVEL.LVL_1)]: 1,
    };
    const initialBoard: PlayerBoard = {
        cards: newCards,
        coins:INITIAL_COINS,
        materials: INITIAL_MATERIALS,
        population: calculate_pupulation(newCards),
        populationCoverage: calculate_population_coverage(newCards),
        effects: INITIAL_EFFECTS,
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

export const initialGameState = generate_initial_state()