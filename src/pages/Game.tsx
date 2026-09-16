import { useEffect, useReducer, useState } from "react"
import { Container } from "../components/Container"
import { GameGrid } from "../components/GameGrid"
import { StatsBar } from "../components/StatsBar"
import { initialGameState } from "../game/state/stateHelpers"
import { gameReducer } from "../game/state/stateReducer"
import { SideBar } from "../components/SideBar"
import { CardName } from "../types"
import { Button } from "../components/Button"
import { GameManager } from "../managers/gameManager"
import { isFirstPlayerTurn } from "../game/state/playerHelpers"

export const Game = () => {
    const [state, dispatch] = useReducer(gameReducer, initialGameState)
    const [selectedCardName, setSelectedCardName] = useState<CardName | null>(null);
    
    const gameManager = new GameManager(dispatch)

    useEffect(() => {
        console.log(selectedCardName)
    },[selectedCardName])

    const player1Stats = state.player1.stats
    const player2Stats = state.player2.stats

    return (
        <Container style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'}}>
            <Container style={{width: '20%', height: '100%'}}>
                <SideBar
                    currentPlayerBoard={isFirstPlayerTurn(state.currentTurn)? state.player1 : state.player2}
                    setSelectedCardName={setSelectedCardName}
                    selectedCardName={selectedCardName}
                />
            </Container>
            <Container style={{width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                <StatsBar
                coins={player1Stats.coins}
                materials={player1Stats.materials}
                progress={player1Stats.progress}

                population={player1Stats.population}
                deficit={state.player1.deficit}
                populationCoverage={player1Stats.populationCoverage}
                isTop={true}
                isCurrentTurn={isFirstPlayerTurn(state.currentTurn)}
                />
                <Container style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <GameGrid
                        style={{height:"100%", width:"60%"}}
                        selectedCardName={selectedCardName}
                        setSelectedCardName={setSelectedCardName}
                        currentTurn={state.currentTurn}
                    />
                    <Button onClick={gameManager.handleEndTurn}>Finish Turn</Button>
                </Container>
                <StatsBar
                coins={player2Stats.coins}
                materials={player2Stats.materials}
                progress={player2Stats.progress}
                population={player2Stats.population}
                deficit={state.player2.deficit}
                populationCoverage={player2Stats.populationCoverage}
                isTop={false}
                isCurrentTurn={!isFirstPlayerTurn(state.currentTurn)}
                />
            </Container>
        </Container>
    )
}