import React from 'react'

function Card({ children, onRemove }){
    return (
        <div className="card">
            {children}
            <button onClick={onRemove}>Remove</button>
        </div>
    )
}

export default Card;