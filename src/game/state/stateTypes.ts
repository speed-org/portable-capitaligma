import { PLAYER_LEVEL_ACTION_TYPE } from "../../constants"
import { CardName } from "../../types"

export type BUILD_CARD_PAYLOAD = {
    cardName: CardName
}

export type PLAYER_LEVEL_ACTION =  
    {type: PLAYER_LEVEL_ACTION_TYPE.BUILD_CARD, payload: BUILD_CARD_PAYLOAD} |
    {type: PLAYER_LEVEL_ACTION_TYPE.DESTROY_CARD, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.UPGRADE_CARD, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.DOWNGRADE_CARD, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.APPLY_EFFECT, payload: {}} |
    {type: PLAYER_LEVEL_ACTION_TYPE.REMOVE_EFFECT, payload: {}}

