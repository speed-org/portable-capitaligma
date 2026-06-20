import { useEffect, useState } from "react"
import { BasicCounter } from "../BasicCounter";
import { INITIAL_COINS, INITIAL_DEFICIT, INITIAL_MATERIALS, INITIAL_POPULATION, INITIAL_POPULATION_COVERAGE } from "../../constants";
import { Container } from "../Container";

export const StatsBar = () => {
    const [coins, setCoins] = useState<number>(INITIAL_COINS);
    const [materials, setMateriasl] = useState<number>(INITIAL_MATERIALS);
    const [population, setPopulation] = useState<number>(INITIAL_POPULATION);
    const [populationCoverage, setPopulationCoverage] = useState<number>(INITIAL_POPULATION_COVERAGE);
    const [deficit, setDeficit] = useState<number>(INITIAL_DEFICIT);

    useEffect(() => {
        if (population > populationCoverage) {
            setPopulation(populationCoverage)
        }
    }, [population, populationCoverage])
    
    return (
        <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <BasicCounter count={coins} setCount={setCoins} title="Coins"/>
            <BasicCounter count={materials} setCount={setMateriasl} title="Materials"/>
            <BasicCounter count={population} setCount={setPopulation} title="Population"/>
            <BasicCounter count={populationCoverage} setCount={setPopulationCoverage} title="Population Coverage"/>
            <BasicCounter count={deficit} setCount={setDeficit} title="Deficit"/>
        </Container>
    )
}