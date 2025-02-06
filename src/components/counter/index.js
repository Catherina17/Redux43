import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementAsync, decrementAsync } from '../../slices/counter/index'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState('')
    const [decrementAmount, setDecrementAmount] = useState('')

    const handleIncrement = () => {
        const incrementCount = Number(incrementAmount)

        dispatch(incrementAsync(incrementCount))
        setIncrementAmount('')
    }

    const handleDecrement = () => {
        const decrementCount = Number(decrementAmount)
        
        dispatch(decrementAsync(decrementCount))
        setDecrementAmount('')
    }

    return (
        <div>
            <div>
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
            <br />
            <div>
                <input
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    aria-label='Async add a number'
                    onClick={handleIncrement}
                >
                    Асинхронно добавить число из инпута
                </button>
            </div>
            <br />
            <div>
                <input
                    type="number"
                    value={decrementAmount}
                    onChange={(e) => setDecrementAmount(e.target.value)}
                />
                <button
                    aria-label='Async subtract a number'
                    onClick={handleDecrement}
                >
                    Асинхронно отнять число из инпута
                </button>
            </div>
        </div>
    )
}