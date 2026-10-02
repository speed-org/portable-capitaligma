import { createContext, ReactNode, useContext } from "react";
import { GameManager } from "../managers/gameManager";
import { PlayerManager } from "../managers/playerManager";
import { CardName, GameState, PlayerBoard, PlayerStats } from "../types";
import { useGameHooks } from "../hooks/gameHook";

export interface GameContextTypes {
    state: GameState,
    gameManager: GameManager,
    playerManager: PlayerManager,
    firstPlayerStats: PlayerStats,
    secondPlayerStats: PlayerStats,
    selectedCardName: CardName | null,
    changeCardName: (cardName: CardName) => void,
    isFirstPlayerTurn: boolean,
    currentPlayerBoard: PlayerBoard,
}

interface UseGameContextProviderProps {
    children: ReactNode // react node is a <div> i.e. something to render 
}


const GameContext = createContext<GameContextTypes | undefined> (undefined);

export const GameContextProvider = ({children}: UseGameContextProviderProps) => {
    const gameHooks = useGameHooks()

    return (
        <GameContext.Provider value = {gameHooks}>
            {children}
        </GameContext.Provider>
    )
}

export const useGameContext = (): GameContextTypes => {
    const context = useContext(GameContext);

    if (context === undefined) {
        throw new Error('wah');
    }
    return context
}