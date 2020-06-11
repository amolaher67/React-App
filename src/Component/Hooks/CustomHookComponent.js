import React from 'react'
import useCustomCounter from './CustomHookExample'

function CustomHookComponent()
{
    //below is custom hook that we created returning state and its functin that update state
    const customHook = useCustomCounter();

    return <div>
        <h1>{customHook.state}</h1>
        <button onClick={customHook.handleIncrement} >CLikc Me to call custom hook</button>
    </div>
}

export default CustomHookComponent;