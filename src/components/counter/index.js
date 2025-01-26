import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../../slices/counter/counterSlice';

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

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
            <div>
                <input
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(Number(e.target.value))}
                />
                <button
                    aria-label='Increment by amount'
                    onClick={() => dispatch(incrementByAmount(incrementAmount))}
                >
                    Добавить введённое в инпут значение
                </button>
            </div>
        </div>
    );
};