
import React, { useEffect, useState } from 'react'

export default function TimerComponent() {
    const [count, setCount] = useState(10)
    useEffect(() => {
        const timer = setInterval(() => {
            if (count > 0) {
                setCount(count - 1)

            } else {
                alert('time"s up')
                return clearInterval(timer)
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
