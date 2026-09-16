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
    [CARD_CATEGORY.PROGRESS]: [CARD_TYPE.TECH, CARD_TYPE.HOSPITAL, CARD_TYPE.HOUSE],
    [CARD_CATEGORY.UTILITY]: [CARD_TYPE.ARMY, CARD_TYPE.MISSILE, CARD_TYPE.HBOMB],
    [CARD_CATEGORY.DIPLOMATIC]: [CARD_TYPE.EMBASSY],
    [CARD_CATEGORY.LEADERSHIP]: [CARD_TYPE.PRESIDENT, CARD_TYPE.DICTATOR] 
}

export enum CARD_LEVEL {
    UNIQUE = 'unique',
    LVL_1 = 'lvl_1',
    LVL_2 = 'lvl_2',
    LVL_3 = 'lvl_3',
}
