import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync, decrementAsync } from '../../slices/counter/index'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState('')

    const handleIncrement = () => {
        const amount = Number(incrementAmount)
        dispatch(incrementAsync(amount))
    }

    const handleDecrement = () => {
        const amount = Number(incrementAmount)
        dispatch(decrementAsync(amount))
    }

    return (
        <div>
            <div>
                <button
                    aria-label='Async add a number'
                    onClick={handleIncrement}
                >
                    Асинхронно добавить число из инпута
                </button>
                <button
                    aria-label='Async subtract a number'
                    onClick={handleDecrement}
                >
                    Асинхронно отнять число из инпута
                </button>
                <button
                    aria-label='Increment value' 
                    onClick={() => dispatch(increment())}
                >
                    Добавить 1
                </button>
                <span>{count}</span>
                <button
                    aria-label='Decrement value' 
                    onClick={() => dispatch(decrement())}
                >
                    Отнять 1
                </button>
            </div>
            <div>
                <input
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
            </div>
        </div>
    )
}