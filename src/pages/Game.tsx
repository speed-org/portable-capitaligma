import { Container } from "../components/Container"
import { GameGrid } from "../components/GameGrid"
import { StatsBar } from "../components/StatsBar"
import { SideBar } from "../components/SideBar"
import { Button } from "../components/Button"
import { isFirstPlayerTurn } from "../game/state/playerHelpers"
import { useGameHooks } from "../hooks/gameHook"

export const Game = () => {

    const gameHooks = useGameHooks()

    return (
        <Container style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'}}>
            <Container style={{width: '20%', height: '100%'}}>
                <SideBar/>
            </Container>
            <Container style={{width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <StatsBar coins={gameHooks.firstPlayerStats.coins}
                materials={gameHooks.firstPlayerStats.materials}
                progress={gameHooks.firstPlayerStats.progress}

                population={gameHooks.firstPlayerStats.population}
                deficit={gameHooks.firstPlayerStats.deficit}
                populationCoverage={gameHooks.firstPlayerStats.populationCoverage}
                isTop={true}
                isCurrentTurn={isFirstPlayerTurn(gameHooks.state.currentTurn)}
                />
                <Container style={{
                    display:"flex",
                    flexDirection:"column",
                    flexGrow: 1,
                    justifyContent:"space-between",
                    alignItems:"center",
                    overflow: "hidden",
                    boxSizing: "border-box"
                }}>
                    <Container style={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent: "space-between",
                        height: "100%",
                    }}>
                        <GameGrid/>
                        <Container style={{ height: "100%", boxSizing: "border-box", display: "flex", alignItems: "center"}}>
                            <Button onClick={gameHooks.gameManager.handleEndTurn}>Finish Turn</Button>
                        </Container>
                    </Container>
                </Container>
                <StatsBar coins={gameHooks.secondPlayerStats.coins}
                materials={gameHooks.secondPlayerStats.materials}
                progress={gameHooks.secondPlayerStats.progress}
                population={gameHooks.secondPlayerStats.population}
                deficit={gameHooks.secondPlayerStats.deficit}
                populationCoverage={gameHooks.secondPlayerStats.populationCoverage}
                isTop={false}
                isCurrentTurn={!isFirstPlayerTurn(gameHooks.state.currentTurn)}
                />
            </Container>
        </Container>
    )
}