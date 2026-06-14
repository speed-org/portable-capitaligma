export enum CARD_TYPE {
    FARM = 'farm',
    HOUSE = 'house',
    MARKET = 'market',
    MINE = 'mine',
    BANK = 'bank',
    BARRACK = 'barrack',
    TECH = 'tech',
    ARMY = 'army',
    PRESIDENT = 'president',
    DICTATOR = 'dictator',
    HOSPITAL = 'hospital',
    EMBASSY = 'embassy',
    AIR_FORCE = 'air_force',
    HBOMB = 'hbomb',
    MISSILE = 'missile',
}

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

export enum CARD_LEVEL {
    UNIQUE = 'unique',
    LVL_1 = 'lvl_1',
    LVL_2 = 'lvl_2',
    LVL_3 = 'lvl_3',
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

export enum EFFECT_VALUE_CHANGE {
    UPGRADE = "upgrade",
    DOWNGRADE = "downgrade",
    NO_MONEY = "no_money",
    NO_MATERIALS = "no_materials",
    SPECIAL = "special,",
    PROTECTION = "PROTECTION"
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


export const INITIAL_COINS = 50
export const INITIAL_MATERIALS = 0
export const INITIAL_EFFECTS = []
export const INITIAL_DEFICIT = 0