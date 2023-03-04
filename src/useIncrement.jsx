import { useState } from 'react'

const useIncrement = addAmount => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + addAmount)
    }
    return [count, increase]
}
export { useIncrement }