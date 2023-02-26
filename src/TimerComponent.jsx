
import React, { useEffect, useState } from 'react'

export default function TimerComponent() {
    const [count, setCount] = useState(10)
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count - 1)
            if (count === 0) {
                alert('time"s up')
            }
        }, 1000);

        return () => clearInterval(timer)
    }, [count])
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}
