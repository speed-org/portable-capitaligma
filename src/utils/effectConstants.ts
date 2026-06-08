import { CARD_TYPE, EFFECT_CATEGORY } from "../constants"
import { EFFECT_VALUE_TYPE } from "../constants";
import { EffectCard } from "../types";

const EFFECTS_LISTS: EffectCard[] = [{
        name:"drought",
        description: "no money for 3, 2, or 1 round depending on the highest farm level",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
        effect: [{
            value_change: EFFECT_VALUE_TYPE.NO_MONEY,
            target: CARD_TYPE.FARM
        }],
        durationInTurns: 3,
        reuseTimeInTurns: 0
    }, {
        name:"flood",
        description: "downgrade the highest farm",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
        effect: [{
            value_change: EFFECT_VALUE_TYPE.DOWNGRADE,
            target: CARD_TYPE.FARM
        }],
        durationInTurns: 1,
        reuseTimeInTurns: 0
    }, {
        name:"tornado",
        description: "downgrade the highest farm",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
        effect: [{
            value_change: EFFECT_VALUE_TYPE.DOWNGRADE,
            target: CARD_TYPE.FARM
        }],
        durationInTurns: 1,
        reuseTimeInTurns: 0
    },  {
        name:"earthquake",
        description: "",
        weight: 1,
        category:EFFECT_CATEGORY.LOCAl,
        effect: [{
            value_change: -1,
            target: CARD_TYPE.HOUSE
        }, {
            value_change: -10,
            target: "coins"
        }],
        durationInTurns: 3,
        reuseTimeInTurns: 3
    }]

// {"name": "earthquake", "effect": "lose highest lvl house and a mine", "type": "local"},
// {"name": "Flood", "effect": "downgrade the highest farm", "type": "local"},
// {"name": "tornado", "effect": "destroy the highest lvl house", "type": "local"},
// {"name": "thunderstorm", "effect": "no mine operations for 2 turns", "type": "local"},
// {"name": "el niño", "effect": "lose highest lvl mine and farm", "type": "global"},
// {"name": "corruption", "effect": "-30% money for presidents and +10% on dictadors", "type": "target"},
// {"name": "new the weekend album", "effect": "gains 1 house", "type": "local"},
// {"name": "rain", "effect": "5 coins", "type": "local"},
// {"name": "successful propaganda (classic)", "effect": "allows dictador with level 2 barracks or +10% army for presidents and 20% for dictadors", "type": "local"},
// {"name": "great deal", "effect": "+10% money", "type": "local"},
// {"name": "scientific progress", "effect": "+10% materials", "type": "local"},
// {"name": "new sources", "effect": "+10% materials", "type": "local"},
// {"name": "plague", "effect": "no money for 2 rounds and downgrades the highest farm level by 1", "type": "target"},


// *****{"name": "drought", "effect": "no money for 3, round depending on the highest farm level", "type": "global"},

// {"name": "diplomatic agreement", "effect": "+10% barracks", "type": "local"},
// {"name": "spring", "effect": "levels up by one any farm", "type": "global"},
// {"name": "pandemic", "effect": "-60% population", "type": "global"},
// {"name": "Reelected", "effect": "10 coins a new bank", "type": "local"},
// {"name": "new vaccine", "effect": "Keep the card to avoid pandemic", "type": "local"},
// {"name": "theft", "effect": "50% off in market revenue", "type": "local"},
// {"name": "Terrorism", "effect": "no activity of any kind for a Turn", "type": "local"},
// {"name": "Strike", "effect": "for presidents no market money for a round, for dictators, they lose 4 houses", "type": "local"},
// {"name": "New oil source", "effect": "free lvl 1 mine and upgrade one bank", "type": "local"},
// {"name": "Riot", "effect": "costs 1 army", "type": "local"},
// {"name": "Successful propaganda (new)", "effect": "gives u one army or a barrack in case there are no barracks", "type": "local"}
// ];