import { PLAYER_LEVEL_ACTION_TYPE } from "../../constants"
import { CardName, PlayerBoard } from "../../types"

export type BUILD_CARD_PAYLOAD = {
    cardName: CardName
}

export type COLLECT_RESOURCES_PAYLOAD = {
    cardName: CardName
    currentPlayerBoard: PlayerBoard
}

export type PLAYER_LEVEL_ACTION =  
    {type: PLAYER_LEVEL_ACTION_TYPE.BUILD_CARD, payload: BUILD_CARD_PAYLOAD} |
    {type: PLAYER_LEVEL_ACTION_TYPE.COLLECT_RESOURCES, payload: COLLECT_RESOURCES_PAYLOAD} |
    {type: PLAYER_LEVEL_ACTION_TYPE.DESTROY_CARD, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.UPGRADE_CARD, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.DOWNGRADE_CARD, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.APPLY_EFFECT, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.REMOVE_EFFECT, payload: {}} 

