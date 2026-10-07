import { CardDependencyToEvaluate, CardName, CostToEvaluate, DependencyToEvaluate, PlayerBoard } from "../../types"
import { CardDependencyDetails, CardType } from "../cards/cardTypes"
import { getAllCardNames } from "../cards/cardHelpers"
import { CARD_PROPERTIES } from "../cards/cardProperties"


const eveluateCosts = (costsToEvaluate: CostToEvaluate[]) => {
    return costsToEvaluate.every(cost => {
        const {resourceAmount, costInResource} = {...cost}
        if (costInResource && resourceAmount < costInResource) {
            return false;
        }
        return true;
    });
}

const isDependencyCardDependent = (dependency: CardDependencyDetails[] | number):dependency is CardDependencyDetails[]  => {
    return Array.isArray(dependency)
}

const isCurrentResourceCardDependent = (currentResource: CardName[] | number):currentResource is CardName[]  => {
    return Array.isArray(currentResource)
}

const evaluateDependencies = (dependenciesToEvaluate: Array<CardDependencyToEvaluate | DependencyToEvaluate>) => {
    return dependenciesToEvaluate.every((dependency) => {
        const {depends, currentResource} = {...dependency}

        if (!depends) return true;

        if (isDependencyCardDependent(depends) && isCurrentResourceCardDependent(currentResource)) {
            const cardResults = depends.every((dependencyDetail) => currentResource.includes(dependencyDetail.cardName))
            return cardResults
        }

        return depends && depends <= currentResource
    })
}

export const isPossibleToBuildCard = (playerBoard: PlayerBoard, cardType: CardType) => {
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
