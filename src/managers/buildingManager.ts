import { GAME_LEVEL_ACTION_TYPE } from "../constants"
import React from "react"

class BuildingManager {
    dispatch: React.ActionDispatch<any>
    constructor (dispatch: React.ActionDispatch<any>) {
        this.dispatch = dispatch
    }
}