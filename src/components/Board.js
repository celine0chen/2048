import React from 'react';
import './Board.css';
import Tile from './Tile'



export default function ({ rowCount = 4, colCount = 4, tiles = [] }) {
    let grid = "";
    for (var i = 0; i < colCount; i++) {
        grid += "1fr ";

    }
    // grid - template - columns: 1fr 1fr 1fr 1fr;
    const total = rowCount * colCount;

    return <>
        <div className="grid-background" style={{ gridTemplateColumns: grid }}>
            {Array.from(new Array(total)).map(_ => <div className="grid-item"></div>)}
        </div>

        <div className="tile-container">{
            tiles.map(tile => <Tile number={tile.number} />)
        }
            <Tile number={1024} />
        </div> </>
}



