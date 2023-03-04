import React from 'react'
import { useIncrement } from './useIncrement'
export default function Counter2() {
    const [count, setCount] = useIncrement(2)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={setCount}>Add 2</button>
        </div>
    )
}
