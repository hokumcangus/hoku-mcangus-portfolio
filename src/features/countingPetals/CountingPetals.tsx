import { useState, useEffect, type JSX } from "react"
import styles from "./CountingPetals.module.css"

interface Petal {
  id: number
  angle: number
  isFalling: boolean
}

export const CountingPetals = (): JSX.Element => {
  const [numPetalsInput, setNumPetalsInput] = useState(6)
  const [petals, setPetals] = useState<Petal[]>([])
  const [result, setResult] = useState("")
  const [count, setCount] = useState(0)

  // Initialize flower once on mount
  useEffect(() => {
    const initialPetals: Petal[] = []
    for (let i = 0; i < 6; i++) {
      initialPetals.push({
        id: i,
        angle: (360 / 6) * i,
        isFalling: false,
      })
    }
    setPetals(initialPetals)
  }, [])

  const initializeFlower = () => {
    const newPetals: Petal[] = []
    for (let i = 0; i < numPetalsInput; i++) {
      newPetals.push({
        id: i,
        angle: (360 / numPetalsInput) * i,
        isFalling: false,
      })
    }
    setPetals(newPetals)
    setResult("")
    setCount(0)
  }

  const handleRemovePetal = () => {
    const remainingPetals = petals.filter(p => !p.isFalling)
    if (remainingPetals.length === 0) return

    const petalToRemove = remainingPetals[0]

    const updatedPetals = petals.map(p =>
      p.id === petalToRemove.id ? { ...p, isFalling: true } : p
    )
    setPetals(updatedPetals)

    const newCount = count + 1
    setCount(newCount)
    setResult(newCount % 2 === 1 ? "He loves me" : "He loves me not")
  }

  return (
    <div className={styles.flowerContainer}>
      <h1>Counting Petals</h1>
      <div className={styles.flower}>
        {petals.map(petal => (
          <div
            key={petal.id}
            className={`${styles.petal} ${petal.isFalling ? styles.falling : ""}`}
            style={
              {
                "--angle": `${petal.angle}deg`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className={styles.resultText} data-testid="result-text">{result}</div>

      <div className={styles.controls}>
        <input
          type="number"
          min="1"
          max="20"
          value={numPetalsInput}
          onChange={e => setNumPetalsInput(Number(e.target.value))}
          className={styles.textbox}
        />
        <button className={styles.button} onClick={initializeFlower}>
          Reset Flower
        </button>
        <button
          className={styles.button}
          onClick={handleRemovePetal}
          disabled={petals.filter(p => !p.isFalling).length === 0}
        >
          Remove Petal
        </button>
      </div>
    </div>
  )
}

export default CountingPetals