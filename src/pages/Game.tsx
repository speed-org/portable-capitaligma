import { useReducer } from "react"
import { Container } from "../components/Container"
import { GameGrid } from "../components/GameGrid"
import { StatsBar } from "../components/StatsBar"
import { initialGameState } from "../contenxt/state"
import { gameReducer } from "../contenxt/state_reducer"

export const Game = () => {
    const [state, dispatch] = useReducer(gameReducer, initialGameState)
    const board1 = state.player1
    const board2 = state.player1

    return (
        <Container style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
            <StatsBar
              coins={board1.coins}
              materials={board1.materials}
              population={board1.population}
              deficit={board1.deficit}
              effects={board1.effects}
              populationCoverage={board1.populationCoverage}
              isTop={true}
            />
            <GameGrid
                bgPath="/assets/map/map-v1.webp"
                height="100%"
                width="60%"
                heightInUnits={20}
                widthInUnits={30}
            />
            <StatsBar
              coins={board2.coins}
              materials={board2.materials}
              population={board2.population}
              deficit={board2.deficit}
              effects={board2.effects}
              populationCoverage={board2.populationCoverage}
              isTop={false}
            />
        </Container>
    )
}