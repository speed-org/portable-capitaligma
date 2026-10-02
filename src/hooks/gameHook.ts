import { useEffect, useReducer, useState } from "react";
import { ReducerHandler } from "../game/state/stateReducer";
import { initialGameState } from "../game/state/stateHelpers";
import { CardName } from "../types";
import { GameManager } from "../managers/gameManager";
import { PlayerManager } from "../managers/playerManager";
import { isFirstPlayerTurn } from "../game/state/playerHelpers";


export const useGameHooks = () => {
    const [state, dispatch] = useReducer(ReducerHandler, initialGameState)
    const [selectedCardName, setSelectedCardName] = useState<CardName | null>(null);

    const gameManager = new GameManager(dispatch)
    const playerManager = new PlayerManager(dispatch)

    useEffect(() => {
        console.log('a cardName has been affected:',selectedCardName)
    },[selectedCardName])

    const changeSelectedCardNameValue = (cardName: CardName | null) => {
        setSelectedCardName(cardName)
        console.log('selected cardname value has changed from hook to:',cardName)
    }

    const player1Stats = state.player1.stats
    const player2Stats = state.player2.stats

    return {
        gameManager: gameManager,
        playerManager: playerManager,
        firstPlayerStats: {...player1Stats},
        secondPlayerStats: {...player2Stats},
        state: {...state},
        selectedCardName: selectedCardName,
        changeCardName: changeSelectedCardNameValue,
        isFirstPlayerTurn: isFirstPlayerTurn(state.currentTurn),
        currentPlayerBoard: isFirstPlayerTurn(state.currentTurn)? state.player1 : state.player2
    }
}