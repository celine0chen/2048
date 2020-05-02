import React from 'react';
import './Game.css'
import Board from './Board'

export default function () {
    return <div className="game">
        <Board tiles={[{
            row: 0,
            col: 0,
            number: 2
        }, {
            row: 0,
            col: 1,
            number: 2
        }
        ]} />
    </div>
}