import { EFFECT_CATEGORY, EVENT_CARD_NAME } from "../constants"
import { EventCard } from "../types";

export const EVENT_CARD_LIST: EventCard[] = [{
        name: EVENT_CARD_NAME.DROUGHT,
        description: "no money for 3, 2, or 1 round depending on the highest farm level",
        weight: 1,
        category: EFFECT_CATEGORY.LOCAl,
    }, {
        name: EVENT_CARD_NAME.FLOOD,
        description: "downgrade the highest level farm",
        weight: 1,
        category: EFFECT_CATEGORY.LOCAl,
    }, {
        name: EVENT_CARD_NAME.TORNADO,
        description: "destroy the highest level house",
        weight: 1,
        category: EFFECT_CATEGORY.LOCAl,
    }, {
        name: EVENT_CARD_NAME.THUNDERSTORM,
        description: "no mine operations for 2 turns",
        weight: 1,
        category: EFFECT_CATEGORY.LOCAl,
    }, {
        name: EVENT_CARD_NAME.EL_NINO,
        description: "lose highest level mine and farm",
        weight: 1,
        category: EFFECT_CATEGORY.GLOBAL,
    }, {
        name: EVENT_CARD_NAME.CORRUPTION,
        description: "-20 coins for presidents and +20 coins for dictadors",
        weight: 1,
        category: EFFECT_CATEGORY.TARGET,
        leadership_dependency: true,
    }, {
        name: EVENT_CARD_NAME.NEW_THE_WEEKEND_ALBUM,
        description: "gains 1 house",
        weight: 1,
        category: EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.RAIN,
        description: "gain 5 coins",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.GREAT_DEAL,
        description: "gain 20 coins",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.SCIENTIFIC_PROGRESS,
        description: "gain 10 materials",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.NEW_SOURCES,
        description: "gains 10 materials",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.PLAGUE,
        description: "no money for 2 rounds and downgrades the highest farm",
        weight: 1,
        category:EFFECT_CATEGORY.TARGET,
    },  {
        name: EVENT_CARD_NAME.EARTHQUAKE,
        description: "lose highest level house and highest level mine",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.DIPLOMATIC_AGREEMENT,
        description: "gains lowest level barrack available",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.SPRING,
        description: "increase level of lowest farm",
        weight: 1,
        category:EFFECT_CATEGORY.GLOBAL,
    },  {
        name: EVENT_CARD_NAME.PANDEMIC,
        description: "-60% population",
        weight: 1,
        category:EFFECT_CATEGORY.GLOBAL,
    },  {
        name: EVENT_CARD_NAME.RE_ELECTED,
        description: "gains 10 coins and a lowest level bank",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.NEW_VACCINE,
        description: "keep the card to avoid pandemic",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.THEFT,
        description: "50% off in market revenue",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.TERRORISM,
        description: "no activity of any kind for a turn",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.STRIKE,
        description: "for presidents no market money for a round, for dictators, they lose 4 houses",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
        leadership_dependency: true,
    },  {
        name: EVENT_CARD_NAME.NEW_OIL_SOURCE,
        description: "free lvl 1 mine and lvl 1 bank",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.RIOT,
        description: "costs 1 army",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    },  {
        name: EVENT_CARD_NAME.SUCCESSFUL_PROPOGANDA,
        description: "gives u one army or a barrack in case there are no barracks",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
    }]