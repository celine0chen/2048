import React from 'react';
import './Board.css';
import Tile from './Tile'



export default function ({ rowCount = 4, colCount = 4, tilewidth, tileheight, tiles = [] }) {
    console.log(tiles)
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

        <div className="tile-container">
            {
                // container的放tile的位置
                tiles.map((row, i) => {

                    row.map((number, j) => {
                        const top = (i + 1) * 10 + tileheight * i;
                        const left = (j + 1) * 10 + tilewidth * j;
                        return <Tile width={tilewidth} height={tileheight} style={{ top: top, left: left }} number={number} />
                    })
                })
            }
            {/* <Tile number={1024} /> */}
        </div> </>
}



