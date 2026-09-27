import React from "react"
import { BUILD_CARD_PAYLOAD, PLAYER_LEVEL_ACTION } from "../game/state/stateTypes"
import { PLAYER_LEVEL_ACTION_TYPE } from "../constants"

export class PlayerManager {
    constructor (private dispatch: React.Dispatch<PLAYER_LEVEL_ACTION>) {
        this.dispatch = dispatch
    }

    public handleCardBuild = (payload: BUILD_CARD_PAYLOAD) => {
        this.dispatch({type: PLAYER_LEVEL_ACTION_TYPE.BUILD_CARD, payload: payload})
    }
}

