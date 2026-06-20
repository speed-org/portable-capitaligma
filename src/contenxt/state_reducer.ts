import { GAME_LEVEL_ACTION_TYPE } from "../constants";
import { GameState } from "../types"

export type ACTION =
    | { name: GAME_LEVEL_ACTION_TYPE.END_TURN }

// Pure function: (state, ACTION) => new state. Never mutates `state`.
export function reducer(state: GameState, action: ACTION): GameState {
    switch (action.name) {
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
