import React from 'react'
import { useStateContext } from '../ContextApi/contextApi';
const Test3 = () => {
    const { name, dispatch } = useStateContext();
    return (
        <div>Component3
            <h1>Name:{name}</h1>
            <button onClick={() => dispatch({ type: "CHANGE_NAME", payload: "Muhammad Abdullah Ansari" })}>This Button Change the name Muhammad Abdullah Ansari</button>
        </div>
    )
}

export default Test3