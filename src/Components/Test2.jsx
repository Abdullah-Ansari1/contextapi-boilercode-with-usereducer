import React from 'react'
import { useStateContext } from '../ContextApi/contextApi';
const Test2 = () => {
    const { name, dispatch } = useStateContext();
    return (
        <div>Component2
            <h1>Name:{name}</h1>
            <button onClick={() => dispatch({ type: "CHANGE_NAME", payload: "Abdullah" })}>This Button Change the name Abdullah</button>
        </div>

    )
}

export default Test2