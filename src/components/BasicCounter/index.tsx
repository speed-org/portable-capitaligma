import React from "react";
import { Button } from "../Button";
import { Container } from "../Container";

export interface IBasicCounter {
    title: string;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const BasicCounter = ({ title, count, setCount }: IBasicCounter) => {
    return (
        // Highly compact individual counter box
        <Container style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            padding: '8px 12px',
            backgroundColor: '#fff',
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
            
            {/* Left Box: Controls Grouped Tight */}
            <Container style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Container style={{ display: 'flex', gap: '4px' }}>
                    <Button onClick={() => setCount(count - 10)}>-10</Button>
                    <Button onClick={() => setCount(count - 5)}>-5</Button>
                    <Button onClick={() => setCount(count - 1)}>-1</Button>
                </Container>
                <Container style={{ display: 'flex', gap: '4px' }}>
                    <Button onClick={() => setCount(count + 1)}>+1</Button>
                    <Button onClick={() => setCount(count + 5)}>+5</Button>
                    <Button onClick={() => setCount(count + 10)}>+10</Button>
                </Container>
            </Container>

            {/* Right Box: Text and Number side-by-side or stacked small */}
            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: '80px' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#777', textTransform: 'uppercase', letterSpacing: '0.5px', lineHeight: '1' }}>
                    {title}
                </span>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#111', marginTop: '2px', lineHeight: '1' }}>
                    {count}
                </span>
            </Container>

        </Container>
    );
};