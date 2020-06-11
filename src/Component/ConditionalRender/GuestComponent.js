import React from 'react'

export default function GuestComponent(props) {    
        return (
            <div>
                <h1>Welcome Guest</h1>
                <button onClick={props.ClickEvent}>Login</button>
            </div>
        )    
}
