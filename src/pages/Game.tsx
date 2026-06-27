import { Container } from "../components/Container"
import { GameGrid } from "../components/GameGrid"
import { StatsBar } from "../components/StatsBar"

export const Game = () => {
    return (
        <Container style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
            <StatsBar/>
            <GameGrid
                bgPath="/assets/map/map-v1.webp"
                height="100%"
                width="60%"
                heightInUnits={20}
                widthInUnits={30}
            />
            <StatsBar/>
        </Container>
    )
}