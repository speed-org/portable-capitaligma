import { CARD_TYPE } from "./cardConstants";
import { MULTI_LEVEL_CARD_NAME } from "./cardHelpers";
import { CardProperties } from "./cardTypes";

export const CARD_PROPERTIES: Partial<Record<CARD_TYPE, CardProperties>> = {
    [CARD_TYPE.FARM]: {
        lvl_initial: {
            cost: {
                inCoins: 5,
            },
            profit: {
                inPopulationCoverage: 2,
            },
            depenends: {
                onPopulation: 1
            }
        },
    },
    [CARD_TYPE.MINE]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inMaterials: 5
            }
        }
    },
    [CARD_TYPE.MARKET]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inCoins: 5
            },
            depenends: {
                onPopulation: 2
            }
        }
    },
    [CARD_TYPE.BANK]: {
        lvl_initial: {
            cost: {
                inCoins: 10,
            },
            profit: {
                inCoins: 10
            },
            depenends: {
                onCoins: 15
            }
        }
    },
    [CARD_TYPE.BARRACK]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inMaterials: 5
            },
            depenends:  {
                onPopulation: 5
            }
        }
    },
    [CARD_TYPE.AIR_FORCE]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inMaterials: 5
            },
            depenends: {
                onCards: [MULTI_LEVEL_CARD_NAME.BARRACK_LVL_1]
            }
        }
    },
    [CARD_TYPE.TECH]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inMaterials: 5
            },
            depenends: {
                onProgress: 5
            }
        }
    },
    [CARD_TYPE.HOSPITAL]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inMaterials: 5
            },
            depenends: {
                onPopulation: 5
            }
        }
    },
    [CARD_TYPE.HOUSE]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inMaterials: 5
            }
        }
    },
    [CARD_TYPE.ARMY]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inMaterials: 5
            }
        }
    },
    [CARD_TYPE.MISSILE]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inMaterials: 5
            }
        }
    },
    [CARD_TYPE.HBOMB]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inMaterials: 5
            }
        }
    },
    [CARD_TYPE.EMBASSY]: {
        lvl_initial: {
            cost: {
                inCoins: 5
            },
            profit: {
                inMaterials: 5
            }
        }
    },
}