import { EFFECT_VALUE_CHANGE, EVENT_CARD_NAME, CARD_TYPE, EFFECT_LEVEL_DEPENDENCY, LEADERSHIP, RESOURCE_TYPE, EFFECT_DURATION_IN_TURNS } from "../../constants"
import { Effect } from "../../types"

export const EVENT_CARD_NAME_TO_EFFECTS_MAPPING: Record<EVENT_CARD_NAME, Effect[]> = {
    [EVENT_CARD_NAME.DROUGHT]: [{
            value_change: EFFECT_VALUE_CHANGE.NO_MONEY,
            level_dependency: EFFECT_LEVEL_DEPENDENCY.DEPENDS_ON_HIGHEST,
            target: CARD_TYPE.FARM,
        }],
    [EVENT_CARD_NAME.FLOOD]: [{
            value_change: EFFECT_VALUE_CHANGE.DOWNGRADE,
            level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,
            target: CARD_TYPE.FARM,
        }],
    [EVENT_CARD_NAME.TORNADO]: [{
        value_change: -1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,
        target: CARD_TYPE.HOUSE,
    }],
    [EVENT_CARD_NAME.THUNDERSTORM]: [{
        value_change: EFFECT_VALUE_CHANGE.NO_MATERIALS,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.MATERIALS,
        durationInTurns: 2,
    }],
    [EVENT_CARD_NAME.EL_NINO]: [{
        value_change: -1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,
        target: CARD_TYPE.MINE,
    }, {
        value_change: -1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,
        target: CARD_TYPE.FARM,
    }],
    [EVENT_CARD_NAME.CORRUPTION]: [{
        leadership: LEADERSHIP.PRESIDENT,
        value_change: -20,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }, {
        leadership: LEADERSHIP.DICTATOR,
        value_change: -20,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }],
    [EVENT_CARD_NAME.NEW_THE_WEEKEND_ALBUM]: [{
        value_change: 1,    
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: CARD_TYPE.HOUSE,
    }],
    [EVENT_CARD_NAME.RAIN]: [{
        value_change: 5,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }], 
    [EVENT_CARD_NAME.GREAT_DEAL]: [{
        value_change: 20,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }],
    [EVENT_CARD_NAME.SCIENTIFIC_PROGRESS]: [{
        value_change: 10,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.MATERIALS,
    }],
    [EVENT_CARD_NAME.NEW_SOURCES]: [{
        value_change: 10,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.MATERIALS,
    }],
    [EVENT_CARD_NAME.PLAGUE]: [{
        value_change: EFFECT_VALUE_CHANGE.NO_MONEY,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
        durationInTurns: 2,
    }, {
        value_change: EFFECT_VALUE_CHANGE.DOWNGRADE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,
        target: CARD_TYPE.FARM,
    }],
    [EVENT_CARD_NAME.EARTHQUAKE]: [{
        value_change: -1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,
        target: CARD_TYPE.HOUSE,
    }, {
        value_change: -1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_HIGHEST,    
        target: CARD_TYPE.MINE,
    }],
    [EVENT_CARD_NAME.DIPLOMATIC_AGREEMENT]: [{
        value_change: 1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_LOWEST,
        target: CARD_TYPE.BARRACK,
    }],
    [EVENT_CARD_NAME.SPRING]: [{
        value_change: EFFECT_VALUE_CHANGE.UPGRADE,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_LOWEST,
        target: CARD_TYPE.FARM,
    }],
    [EVENT_CARD_NAME.PANDEMIC]: [{
        value_change: EFFECT_VALUE_CHANGE.SPECIAL,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: CARD_TYPE.HOUSE,
    }],
    [EVENT_CARD_NAME.RE_ELECTED]: [{
        value_change: 10,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }, {
        value_change: 1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_LOWEST,
        target: CARD_TYPE.BANK,
    }],
    [EVENT_CARD_NAME.NEW_VACCINE]: [{
        value_change: EFFECT_VALUE_CHANGE.PROTECTION,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: null,
        durationInTurns: EFFECT_DURATION_IN_TURNS.INDEFINITE,
    }],
    [EVENT_CARD_NAME.THEFT]: [{
        value_change: EFFECT_VALUE_CHANGE.SPECIAL,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }],
    [EVENT_CARD_NAME.TERRORISM]: [{
        value_change: EFFECT_VALUE_CHANGE.NO_MONEY,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }, {
        value_change: EFFECT_VALUE_CHANGE.NO_MATERIALS,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.MATERIALS,
    }],
    [EVENT_CARD_NAME.STRIKE]: [{
        leadership: LEADERSHIP.PRESIDENT,
        value_change: EFFECT_VALUE_CHANGE.NO_MONEY,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: RESOURCE_TYPE.COINS,
    }, {
        leadership: LEADERSHIP.DICTATOR,
        value_change: -4,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: CARD_TYPE.HOUSE,
    }],
    [EVENT_CARD_NAME.NEW_OIL_SOURCE]: [{
        value_change: 1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_LOWEST,
        target: CARD_TYPE.MINE,
    }, {
        value_change: 1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.APPLY_LOWEST,
        target: CARD_TYPE.BANK,
    }],
    [EVENT_CARD_NAME.RIOT]: [{
        value_change: -1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: CARD_TYPE.ARMY,
    }],
    [EVENT_CARD_NAME.SUCCESSFUL_PROPOGANDA]: [{
        value_change: 1,
        level_dependency: EFFECT_LEVEL_DEPENDENCY.INDEPENDENT,
        target: CARD_TYPE.ARMY,
    }],
    }