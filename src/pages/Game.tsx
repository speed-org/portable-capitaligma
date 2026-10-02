import { Container } from "../components/Container"
import { GameGrid } from "../components/GameGrid"
import { StatsBar } from "../components/StatsBar"
import { SideBar } from "../components/SideBar"
import { Button } from "../components/Button"
import { useGameContext } from "../context/gameContext"

export const Game = () => {

    const gameHooks = useGameContext()

    return (
        <Container style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'}}>
            <Container style={{width: '20%', height: '100%'}}>
                <SideBar/>
            </Container>
            <Container style={{width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <StatsBar playerStats={gameHooks.firstPlayerStats}
                isTop={true}
                isCurrentTurn={gameHooks.isFirstPlayerTurn}
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
                <StatsBar playerStats={gameHooks.secondPlayerStats}
                isTop={false}
                isCurrentTurn={!gameHooks.isFirstPlayerTurn}
                />
            </Container>
        </Container>
    )
}