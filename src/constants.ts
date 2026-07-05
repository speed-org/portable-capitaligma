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

export enum CARD_CATEGORY {
    BASIC = "basic",
    ECONOMIC = "economic",
    MILITARY = "military",
    PROGRESS = "progress",
    UTILITY = "utility",
    DIPLOMATIC = "diplomatic",
    LEADERSHIP = "leadership", 
}

export const CARD_CATEGORY_TO_CARD_TYPE_MAP = {
    [CARD_CATEGORY.BASIC]: [CARD_TYPE.FARM, CARD_TYPE.MINE],
    [CARD_CATEGORY.ECONOMIC ]: [CARD_TYPE.MARKET, CARD_TYPE.BANK],
    [CARD_CATEGORY.MILITARY]: [CARD_TYPE.BARRACK, CARD_TYPE.AIR_FORCE],
    [CARD_CATEGORY.PROGRESS]: [CARD_TYPE.TECH, CARD_TYPE.HOSPITAL],
    [CARD_CATEGORY.UTILITY]: [CARD_TYPE.ARMY, CARD_TYPE.MISSILE, CARD_TYPE.HBOMB],
    [CARD_CATEGORY.DIPLOMATIC]: [CARD_TYPE.EMBASSY],
    [CARD_CATEGORY.LEADERSHIP]: [CARD_TYPE.PRESIDENT, CARD_TYPE.DICTATOR] 
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
}


export const INITIAL_COINS = 50
export const INITIAL_MATERIALS = 0
export const INITIAL_EFFECTS = []
export const INITIAL_DEFICIT = 0