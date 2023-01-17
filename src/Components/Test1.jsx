import React from 'react'
import { useStateContext } from '../ContextApi/contextApi';
const Test1 = () => {
    const { name, dispatch } = useStateContext();
    return (
        <div>Component1
            <h1>Name:{name}</h1>
            <button onClick={() => dispatch({ type: "CHANGE_NAME", payload: "Abdullah Ansari" })}>This Button Change the name Abdullah Ansari</button>
        </div>
    )
}

export default Test1