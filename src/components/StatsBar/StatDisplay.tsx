import { StatType } from "../../constants";
import { Container } from "../Container";


interface StateDisplayProps {
    title: StatType;
    value: number;
};

export const StatDisplay = ({ title, value }: StateDisplayProps) => {
    // Quick helper to choose custom colors for the numbers dynamically
    const getCounterColor = (title: StatType, value: number) => {
        if (title === StatType.Coins) return "#ffd700";
        if (title === StatType.Materials) return "#b07d50";
        if (title === StatType.Population) return "#4682b4";
        if (title === StatType.Coverage) return "#20b2aa";
        if (title === StatType.Deficit && value > 0) return "#ff4d4d";
        return "#ffffff";
    };

    return (
        <Container className="StatsBar:DisplayBox">
            <span className="StatsBar:Label">{title}</span>
            <span 
                className="StatsBar:Counter" 
                style={{ color: getCounterColor(title, value) }}
            >
                {value}
            </span>
        </Container>
    )
};