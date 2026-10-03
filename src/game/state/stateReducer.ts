import { GAME_LEVEL_ACTION_TYPE, PLAYER_LEVEL_ACTION_TYPE } from "../../constants"
import { GAME_LEVEL_ACTION, GameState } from "../../types"
import { PLAYER_LEVEL_ACTION } from "./stateTypes"
import { getCardCostByCardName } from "../cards/cardHelpers"
import { isFirstPlayerTurn } from "./playerHelpers"
import { isGameLevelAction } from "./stateHelpers"


export function ReducerHandler(state: GameState, action: GAME_LEVEL_ACTION | PLAYER_LEVEL_ACTION) {
    return isGameLevelAction(action)? gameReducer(state, action) : playerReducer(state, action)
}

export function gameReducer(state: GameState, action: GAME_LEVEL_ACTION): GameState {
    switch (action.type) {
        case GAME_LEVEL_ACTION_TYPE.END_TURN:
            return {
                ...state,
                currentTurn: !state.currentTurn,
                turnCount: state.turnCount + 1,
            }

        default:
            // No matching action: return state unchanged (no re-render).
            return state
    }
}

export function playerReducer(state: GameState, action: PLAYER_LEVEL_ACTION): GameState {
    switch (action.type) {
        case PLAYER_LEVEL_ACTION_TYPE.BUILD_CARD:
            
            const currentPlayerBoard = isFirstPlayerTurn(state.currentTurn)? state.player1 : state.player2
            const builtCard = action.payload.cardName  
            const cardCost = getCardCostByCardName(builtCard)
            const newPlayerBoard = {... currentPlayerBoard}
            
            if (cardCost?.inCoins) {
                newPlayerBoard.stats.coins = newPlayerBoard.stats.coins - cardCost.inCoins
            }
            if (cardCost?.inMaterials) {
                newPlayerBoard.stats.materials = newPlayerBoard.stats.materials - cardCost.inMaterials
            }
            if (cardCost?.inPopulation) {
                newPlayerBoard.stats.population = newPlayerBoard.stats.population - cardCost.inPopulation
            }

            return isFirstPlayerTurn(state.currentTurn)? {...state,  player1: newPlayerBoard} : {...state,  player2: newPlayerBoard}

        default:
            // No matching action: return state unchanged (no re-render).
            return state
    }
}
