import { useState, type JSX } from "react"
// import { useState } from "react"
// import { useAppDispatch, useAppSelector } from "../../app/hooks"
// import styles from "./CountingPetals.module.css" 

export const CountingPetals = (): JSX.Element => {
    const [petals, setPetals] = useState(0)
    const [result, setResult] = useState("")
    
    const handleCountPetals = () => {
        const outcome = petals % 2 === 0 ? "loves me not" : "loves me"
        setResult(outcome)
        if (petals > 0) {
            setPetals(petals - 1)
        }
        return outcome
    }
    return (
       <div>
        <h1>Counting Petals</h1>
        <p>Enter the number of petals:</p>
        <input 
            type="number"
            value={petals}
            onChange={e => setPetals(Number(e.target.value))}
        />
        <button onClick={handleCountPetals}>Count Petals</button>
        <p>{result}</p>
       </div> 
    )
}
export default CountingPetals