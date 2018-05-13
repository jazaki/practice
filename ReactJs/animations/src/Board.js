import React from 'react'

function Board({ children }){
    return (
        <ul className="board">
            {children}
        </ul>
    )
}

export default Board;