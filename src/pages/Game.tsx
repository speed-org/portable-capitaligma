import { Container } from "../components/Container"
import { StatsBar } from "../components/StatsBar"

export const Game = () => {
    return (
        <Container style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
            <StatsBar/>
            <StatsBar/>
        </Container>
    )
}