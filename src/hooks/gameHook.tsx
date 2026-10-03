import { createContext, useEffect, useReducer, useState } from "react";
import { ReducerHandler } from "../game/state/stateReducer";
import { initialGameState } from "../game/state/stateHelpers";
import { CardName, GameState, PlayerBoard, PlayerStats } from "../types";
import { GameManager } from "../managers/gameManager";
import { PlayerManager } from "../managers/playerManager";
import { isFirstPlayerTurn } from "../game/state/playerHelpers";
import { GameContextTypes } from "../context/gameContext";


export const useGameHooks = () => {
    const [state, dispatch] = useReducer(ReducerHandler, initialGameState)
    const [selectedCardName, setSelectedCardName] = useState<CardName | null>(null);
    const gameManager = new GameManager(dispatch)
    const playerManager = new PlayerManager(dispatch)

    const changeSelectedCardNameValue = (cardName: CardName | null) => {
        setSelectedCardName(cardName)
    }

    const player1Stats = state.player1.stats
    const player2Stats = state.player2.stats

    const hooks: GameContextTypes = {
        gameManager: gameManager,
        playerManager: playerManager,
        firstPlayerStats: player1Stats,
        secondPlayerStats: player2Stats,
        state: state,
        selectedCardName: selectedCardName,
        changeCardName: changeSelectedCardNameValue,
        isFirstPlayerTurn: isFirstPlayerTurn(state.currentTurn),
        currentPlayerBoard: isFirstPlayerTurn(state.currentTurn)? state.player1 : state.player2,
    }

    return hooks
}