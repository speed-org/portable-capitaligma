import { Container } from "../Container";
import { EventCard, PlayerStats } from "../../types";
import "./index.css"; // Import the CSS file
import { StatDisplay } from "./StatDisplay";
import { StatType } from "../../constants";

interface StatsBarProps {
    playerStats: PlayerStats
    effects?: EventCard[];
    isTop?: boolean;
    isCurrentTurn: boolean
}

export const StatsBar = ({ playerStats, isTop, isCurrentTurn }: StatsBarProps) => {    

    return (
        <Container className={`Component:StatsBar ${isTop ? 'top' : 'bottom'}`} style={{position:"relative"}}>
            <StatDisplay title={StatType.Coins} value={playerStats.coins} />
            <StatDisplay title={StatType.Materials} value={playerStats.materials} />
            <StatDisplay title={StatType.Population} value={playerStats.population} />
            <StatDisplay title={StatType.Coverage} value={playerStats.populationCoverage} />
            <StatDisplay title={StatType.Deficit} value={playerStats.deficit} />
            <StatDisplay title={StatType.Progress} value={playerStats.progress} />
            {!isCurrentTurn &&
                <div style={{position: "absolute", height: '100%', width:'100%', backgroundColor: "rgba(0,0,0,0.5)"}}></div>
            }
        </Container>
    );
};