import { createContext, useReducer, ReactNode } from "react"
import { GameState } from "../types"
import { generate_initial_state } from "./state"
import { gameReducer, ACTION } from "./state_reducer"

// What the context carries: the current state + a way to dispatch actions.
export type StateContextValue = {
    state: GameState
    dispatch: React.Dispatch<ACTION>
}

// Default is null: anyone using the context outside the Provider gets null,
// and our hook (useGameState) will throw a clear error in that case.
// Exported so the hook file can read it with useContext.
export const StateContext = createContext<StateContextValue | null>(null)

export function StateProvider({ children }: { children: ReactNode }) {
    // 3rd arg = lazy init: generate_initial_state() runs once on mount.
    const [state, dispatch] = useReducer(gameReducer, undefined, generate_initial_state)

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    )
}
