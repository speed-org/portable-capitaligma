import { GAME_LEVEL_ACTION_TYPE, PLAYER_LEVEL_ACTION_TYPE } from "../../constants"
import { GAME_LEVEL_ACTION, GameState, PLAYER_LEVEL_ACTION } from "../../types"
import { isFirstPlayerTurn } from "./playerHelpers"


// Pure function: (state, ACTION) => new state. Never mutates `state`.
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


// Pure function: (state, ACTION) => new state. Never mutates `state`.
export function playerReducer(state: GameState, action: PLAYER_LEVEL_ACTION): GameState {
    switch (action.type) {
        case PLAYER_LEVEL_ACTION_TYPE.BUILD_CARD:
            if (isFirstPlayerTurn(state.currentTurn)) {
                console.log('First player')
            } else {
                console.log('Second player')
            }
            return {
                ...state,
            }

        default:
            // No matching action: return state unchanged (no re-render).
            return state
    }
}
