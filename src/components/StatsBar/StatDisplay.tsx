import { StatType } from "../../constants";
import { Container } from "../Container";

interface StateDisplayProps {
    title: StatType;
    value: number;
};

export const StatDisplay = ({ title, value }: StateDisplayProps) => {
    const getCounterColor = (title: StatType, val: number) => {
        if (title === StatType.Coins) return "#ffd700";
        if (title === StatType.Materials) return "#b07d50";
        if (title === StatType.Population) return "#4682b4";
        if (title === StatType.Coverage) return "#20b2aa";
        if (title === StatType.Deficit && val > 0) return "#ff4d4d";
        if (title === StatType.Progress && val > 0) return "#a328a5";
        return "#ffffff";
    };

    const currentVal = typeof value === 'number' && !isNaN(value) ? value : 0;
    const digits = Math.abs(currentVal).toString().split("");

    return (
        <Container className="StatsBar:DisplayBox">
            <span className="StatsBar:Label">{title}</span>
            <span 
                className="StatsBar:Counter" 
                style={{ color: getCounterColor(title, currentVal) }}
            >
                {currentVal < 0 && "-"}
                {digits.map((digit, index) => {
                    const numericDigit = parseInt(digit, 10);
                    // Clave única basada en la posición exacta dentro de la longitud total del número
                    const uniqueKey = `digit-${index}-of-${digits.length}`;
                    
                    return (
                        <span 
                            key={uniqueKey} 
                            className="digit" 
                            style={{ "--d": isNaN(numericDigit) ? 0 : numericDigit } as React.CSSProperties}
                        >
                            <span>0123456789</span>
                        </span>
                    );
                })}
            </span>
        </Container>
    );
};