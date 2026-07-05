import { EVENT_CARD_NAME, CARD_TYPE, EFFECT_LEVEL_DEPENDENCY, LEADERSHIP, RESOURCE_TYPE, EFFECT_DURATION_IN_TURNS, ACTION } from "../../constants"
import { Effect } from "../../types"

export const EVENT_CARD_NAME_TO_EFFECTS_MAPPING: Record<EVENT_CARD_NAME, Effect[]> = {
    [EVENT_CARD_NAME.DROUGHT]: [{
        value_change: "100%",
        action: ACTION.DECREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.DEPENDS_ON_HIGHEST,
        target: CARD_TYPE.FARM,
    }],
    [EVENT_CARD_NAME.FLOOD]: [{
        value_change: "1",// the amnt of level to upgrade/downgrade
        action: ACTION.DOWNGRADE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,
        target: CARD_TYPE.FARM,
    }],
    [EVENT_CARD_NAME.TORNADO]: [{
        value_change: "1",
        action: ACTION.DECREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,
        target: CARD_TYPE.HOUSE,
    }],
    [EVENT_CARD_NAME.THUNDERSTORM]: [{
        value_change: "100%",
        action: ACTION.DECREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.MATERIALS,
        durationInTurns: 2,
    }],
    [EVENT_CARD_NAME.EL_NINO]: [{
        value_change: "1",
        action: ACTION.DECREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,
        target: CARD_TYPE.MINE,
    }, {
        value_change: "1",
        action: ACTION.DECREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,
        target: CARD_TYPE.FARM,
    }],
    [EVENT_CARD_NAME.CORRUPTION]: [{
        leadership: LEADERSHIP.PRESIDENT,
        value_change: "20",
        action: ACTION.DECREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }, {
        leadership: LEADERSHIP.DICTATOR,
        value_change: "20",
        action: ACTION.DECREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }],
    [EVENT_CARD_NAME.NEW_THE_WEEKEND_ALBUM]: [{
        value_change: "1",
        action: ACTION.INCREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: CARD_TYPE.HOUSE,
    }],
    [EVENT_CARD_NAME.RAIN]: [{
        value_change: "5",
        action: ACTION.INCREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }],
    [EVENT_CARD_NAME.GREAT_DEAL]: [{
        value_change: "20",
        action: ACTION.INCREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }],
    [EVENT_CARD_NAME.SCIENTIFIC_PROGRESS]: [{
        value_change: "10",
        action: ACTION.INCREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.MATERIALS,
    }],
    [EVENT_CARD_NAME.NEW_SOURCES]: [{
        value_change: "10",
        action: ACTION.INCREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.MATERIALS,
    }],
    [EVENT_CARD_NAME.PLAGUE]: [{
        value_change: "100%",
        action: ACTION.DECREASE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
        durationInTurns: 2,
}