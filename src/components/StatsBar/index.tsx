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
    effects: EventCard[];
    deficit: number;
    isTop?: boolean;
}

export const StatsBar = ({ population, populationCoverage, coins, materials, deficit, isTop }: StatsBarProps) => {    

    return (
        <Container className={`Component:StatsBar ${isTop ? 'top' : 'bottom'}`}>
            <StatDisplay title={StatType.Coins} value={coins} />
            <StatDisplay title={StatType.Materials} value={materials} />
            <StatDisplay title={StatType.Population} value={population} />
            <StatDisplay title={StatType.Coverage} value={populationCoverage} />
            <StatDisplay title={StatType.Deficit} value={deficit} />
        </Container>
    );
};