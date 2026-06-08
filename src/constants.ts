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

export enum EFFECT_VALUE_TYPE {
    UPGRADE = "upgrade",
    DOWNGRADE = "downgrade",
    NO_MONEY = "no_money",
    NO_MATERIALS = "no_materials"
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