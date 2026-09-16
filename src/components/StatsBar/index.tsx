import { Container } from "../Container";
import { EventCard } from "../../types";
import "./index.css"; // Import the CSS file
import { StatDisplay } from "./StatDisplay";
import { StatType } from "../../constants";

interface StatsBarProps {
    population: number;
    populationCoverage: number;
    coins: number;
    materials: number;
    progress: number;
    effects?: EventCard[];
    deficit: number;
    isTop?: boolean;
    isCurrentTurn: boolean
}

export const StatsBar = ({ population, populationCoverage, coins, materials, deficit, isTop, isCurrentTurn, progress }: StatsBarProps) => {    

    return (
        <Container className={`Component:StatsBar ${isTop ? 'top' : 'bottom'}`} style={{position:"relative"}}>
            <StatDisplay title={StatType.Coins} value={coins} />
            <StatDisplay title={StatType.Materials} value={materials} />
            <StatDisplay title={StatType.Population} value={population} />
            <StatDisplay title={StatType.Coverage} value={populationCoverage} />
            <StatDisplay title={StatType.Deficit} value={deficit} />
            <StatDisplay title={StatType.Progress} value={progress} />
            {!isCurrentTurn &&
                <div style={{position: "absolute", height: '100%', width:'100%', backgroundColor: "rgba(0,0,0,0.5)"}}></div>
            }
        </Container>
    );
};