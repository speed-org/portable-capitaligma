import { GAME_LEVEL_ACTION_TYPE } from "../constants"
import React from "react"
import { GAME_LEVEL_ACTION } from "../types"

export class GameManager {
    constructor(private dispatch: React.Dispatch<GAME_LEVEL_ACTION>) {}

    public handleEndTurn = () => {
        this.dispatch({type: GAME_LEVEL_ACTION_TYPE.END_TURN})
    }
}