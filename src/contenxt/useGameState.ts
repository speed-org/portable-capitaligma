import { useContext } from "react"
import { StateContext } from "./state_context"

// Main hook: returns { state, dispatch }. Throws if used outside <StateProvider>,
// which also narrows the type from `... | null` to non-null for callers.
export function useGameState() {
    const ctx = useContext(StateContext)
    if (ctx === null) {
        throw new Error("useGameState must be used inside a <StateProvider>")
    }
    return ctx
}
