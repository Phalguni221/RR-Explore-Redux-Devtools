import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, increment5, incrementByAmount } from './features/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)

    const byAmount = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h1>{count}</h1>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                Increment
            </button>
            <br></br>
            <br></br>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <br></br>
            <br></br>
            <button
                aria-label="Increment by 5 value"
                onClick={() => dispatch(increment5())}>
                Increment by 5
            </button>
            <br></br>
            <br></br>
            <form onSubmit={(e) => byAmount(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Counter