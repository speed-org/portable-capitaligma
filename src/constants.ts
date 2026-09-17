export enum EVENT_CARD_NAME {
    DROUGHT = "drought",
    FLOOD = "flood",
    TORNADO = "tornado",
    THUNDERSTORM = "thunderstorm",
    EL_NINO = "el nino",
    CORRUPTION = "corruption",
    NEW_THE_WEEKEND_ALBUM = "new the weekend album",
    RAIN = "rain",
    SUCCESSFUL_PROPOGANDA = "successful propoganda",
    GREAT_DEAL = "great deal",
    SCIENTIFIC_PROGRESS = "scientific progress",
    NEW_SOURCES = "new sources",
    PLAGUE = "plague",
    EARTHQUAKE = "earthquake",
    DIPLOMATIC_AGREEMENT = "diplomatic agreement",
    SPRING = "spring",
    PANDEMIC = "pandemic",
    RE_ELECTED = "re-elected",
    NEW_VACCINE = "new vaccine",
    THEFT = "theft",
    TERRORISM = "terrorism",
    STRIKE = "strike",
    NEW_OIL_SOURCE = "new oil source",
    RIOT = "riot",
}

export enum RESOURCE_TYPE {
    COINS = 'coins',
    MATERIALS = 'materials',
}

export enum EFFECT_WEIGHT {
    COMMON = 1,
    UNCOMMON = 2,
    RARE = 3,
}

export enum EFFECT_CATEGORY {
    LOCAl = 'local',
    GLOBAL = 'global',
    TARGET = 'target',
}

export enum LEADERSHIP {
    PRESIDENT = "president",
    DICTATOR = "dictator",
}

export enum ACTION {
    INCREASE = "increase",
    DECREASE = "decrease",
    UPGRADE = "upgrade",
    DOWNGRADE = "downgrade",
    PROTECTION = "protection",
}

export enum EFFECT_LEVEL_DEPENDENCY {
    INDEPENDENT = "independent",
    APPLY_HIGHEST = "apply_highest",
    APPLY_LOWEST = "apply_lowest",
    DEPENDS_ON_HIGHEST = "depends_on_highest",
    DEPENDS_ON_LOWEST = "depends_on_lowest",
}

export enum EFFECT_DURATION_IN_TURNS {
    ONE_TURN = 1,
    TWO_TURNS = 2,
    THREE_TURNS = 3,
    DEPENDS_ON_HIGHEST = "depends_on_highest",
    DEPENDS_ON_LOWEST = "depends_on_lowest",
    INDEFINITE = "indefinite",
}

export enum ENTITY_POPULATION_COVERAGE {
    LVL1_FARM_POPULATION_COVERAGE = 2,
    LVL2_FARM_POPULATION_COVERAGE = 3,
    LVL3_FARM_POPULATION_COVERAGE = 6,
}   

export enum ENTITY_POPULATION_VALUE {
    LVL1_HOUSE_POPULATION_VALUE = 1,
    LVL2_HOUSE_POPULATION_VALUE = 2,
    LVL3_HOUSE_POPULATION_VALUE = 3,
}

export enum GAME_LEVEL_ACTION_TYPE {
    END_TURN = "END_TURN",
    END_GAME = "END_GAME",
}

export enum PLAYER_LEVEL_ACTION_TYPE {
    COLLECT_RESOURCES = "collect_resources",
    BUILD_CARD = "build_card",
    DESTROY_CARD = "destroy_card",
    UPGRADE_CARD = "upgrade_card",
    DOWNGRADE_CARD = "downgrade_card",
    APPLY_EFFECT = "apply_effect",
    REMOVE_EFFECT = "remove_effect"
}

export enum StatType {
    Coins = "coins",
    Materials = "materials",
    Population = "population",
    Coverage = "coverage",
    Deficit = "deficit",
    Progress = "progress"
}


export const INITIAL_COINS = 50
export const INITIAL_MATERIALS = 0
export const INITIAL_EFFECTS = []
export const INITIAL_DEFICIT = 0
export const INITIAL_POPULATION = 2
export const INITIAL_POPULATION_COVERAGE = 2