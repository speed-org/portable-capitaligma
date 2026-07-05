import { LEADERSHIP } from "../constants"
import { Effect, EventCard, PlayerBoard } from "../types"
import { EVENT_CARD_NAME_TO_EFFECTS_MAPPING } from "../utils/mappings/eventToEffectMapping"

// ex function
export function useGameState() {
    const ctx = useContext(StateContext)
    if (ctx === null) {
        throw new Error("useGameState must be used inside a <StateProvider>")
    }
    return ctx
}


export function getLeadership(player_state:PlayerBoard) {
    return player_state.leadership
}

export function extractEffectsFromEvent(event:EventCard) {
    // check leadership
    if event.leadership_dependency == true:
        Playerboard leadership = getLeadership(player_state)
        leadership_value = leadership.value
        if leadership_value == LEADERSHIP.PRESIDENT:
            effects = EVENT_CARD_NAME_TO_EFFECTS_MAPPING[event.name].filter(effect => effect.leadership == LEADERSHIP.PRESIDENT)
        else:
            effects = EVENT_CARD_NAME_TO_EFFECTS_MAPPING[event.name].filter(effect => effect.leadership == LEADERSHIP.DICTATOR)
    else:
        effects = EVENT_CARD_NAME_TO_EFFECTS_MAPPING[event.name]
    const effects = EVENT_CARD_NAME_TO_EFFECTS_MAPPING[event.name]
    return effects
}

export function applyEffectsToPlayerState(effects:Effect[], player_state:PlayerBoard) {
    // python 
    
}

export function effectManager(event:EventCard, player_state:PlayerBoard) {
    // get the effects for the event
    effects = extractEffectsFromEvent(event)

    // apply the effects to the player state
} 