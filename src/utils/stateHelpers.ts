import { CARD_LEVEL, CARD_TYPE } from "../constants";
import { Cards } from "../types";
import { generateCardName } from "./cardHelpers";
import { ENTITY_POPULATION_COVERAGE, ENTITY_POPULATION_VALUE } from "../constants";

export const calculate_population_coverage = (cards: Cards) => {
    let coverage = 0
    if (Object.hasOwn(cards, generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_1))) {
        coverage += ENTITY_POPULATION_COVERAGE.LVL1_FARM_POPULATION_COVERAGE;
    }
    if (Object.hasOwn(cards, generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_2))) {
        coverage += ENTITY_POPULATION_COVERAGE.LVL2_FARM_POPULATION_COVERAGE;
    }
    if (Object.hasOwn(cards, generateCardName(CARD_TYPE.FARM, CARD_LEVEL.LVL_3))) {
        coverage += ENTITY_POPULATION_COVERAGE.LVL3_FARM_POPULATION_COVERAGE;
    }

    return coverage
}

export const calculate_pupulation = (cards:Cards) => {
    let population = 0
    const lvl1House = generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_1)
    const lvl2House = generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_2)
    const lvl3House = generateCardName(CARD_TYPE.HOUSE, CARD_LEVEL.LVL_3)
    if (Object.hasOwn(cards, lvl1House)) {
        population += cards[lvl1House] * ENTITY_POPULATION_VALUE.LVL1_HOUSE_POPULATION_VALUE;
    }
    if (Object.hasOwn(cards, lvl2House)) {
        population += cards[lvl1House] * ENTITY_POPULATION_VALUE.LVL2_HOUSE_POPULATION_VALUE;
    }
    if (Object.hasOwn(cards, lvl3House)) {
        population += cards[lvl1House] * ENTITY_POPULATION_VALUE.LVL3_HOUSE_POPULATION_VALUE;
    }
    return population
}