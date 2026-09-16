import { CardDependencyToEvaluate, CostToEvaluate, DependencyToEvaluate, PlayerBoard } from "../../types"
import { CARD_TYPE } from "../cards/cardConstants"
import { getAllCardNames } from "../cards/cardHelpers"
import { CARD_PROPERTIES } from "../cards/cardRequirements"


const eveluateCosts = (costsToEvaluate: CostToEvaluate[]) => {
    return costsToEvaluate.every(cost => {
        const {resourceAmount, costInResource} = {...cost}
        if (costInResource && resourceAmount < costInResource) {
            return false;
        }
        return true;
    });
}

const evaluateDependencies = (dependenciesToEvaluate: Array<CardDependencyToEvaluate | DependencyToEvaluate>) => {
    return dependenciesToEvaluate.every((dependency) => {
        const {depends, currentResource} = {...dependency}

        if (!depends) return true;

        if (Array.isArray(depends) && Array.isArray(currentResource)) {
            const cardResults = depends.every((requiredCard) => currentResource.includes(requiredCard))
            console.log('card dependency results:', cardResults)
            return cardResults
        }

        return depends && depends <= currentResource
    })
}

export const isPossibleToBuildCard = (playerBoard: PlayerBoard, cardType: CARD_TYPE) => {
    const cardProperties = CARD_PROPERTIES[cardType]
    const playerStats = playerBoard.stats


    if (!cardProperties) {
        return;
    }

    const currentLevel = cardProperties.lvl_initial

    const costInCoins = currentLevel.cost.inCoins
    const costInMaterials = currentLevel.cost.inMaterials

    const satisfiesCosts = eveluateCosts([{
        resourceAmount: playerStats.coins,
        costInResource: costInCoins
    },{
        resourceAmount: playerStats.materials,
        costInResource: costInMaterials
    }]);


    const onCoins = currentLevel.depenends?.onCoins
    const onPopulation = currentLevel.depenends?.onPopulation
    const onPopulationCoverage = currentLevel.depenends?.onPopulationCoverage
    const onProgress = currentLevel.depenends?.onProgress
    const onCards = currentLevel.depenends?.onCards

    const satisfiesDependencies = evaluateDependencies([{
        depends: onCoins,
        currentResource: playerStats.coins
    }, {
        depends: onPopulation,
        currentResource: playerStats.population
    },{
        depends: onPopulationCoverage,
        currentResource: playerStats.populationCoverage
    },{
        depends: onProgress,
        currentResource: playerStats.progress
    }, {
        depends: onCards,
        currentResource: getAllCardNames(playerBoard.cards)
    }])    

    return satisfiesCosts && satisfiesDependencies;
}
