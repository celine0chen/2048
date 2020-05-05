import './Tile.css';
import React from 'react';

export default function ({ number = 2, width , height, style={} }) {
    let color = "white";
    if (number <= 8) { color = " #776e65" }

    const NumberBgColor = {
        2: "#eee4da",
        4: "#ede0c8",
        8: "#f2b179",
        16: "#f59563",
        32: "#f67c5f",
        64: "#f65e3b",
        128: "#edcf72",
        256: "#edcc61",
        512: "#edc850",
        1024: "#edc53f",
        2048: "#edc22e"
    }

    let boxShadow = "";
    if (number >= 128) { boxShadow = "0 0 30px 10px rgba(243, 215, 116, .31746), inset 0 0 0 1px rgba(255, 255, 255, .19048)" }

    return <div className="tile" style={{
        width: width,
        height: height,
        color: color,
        backgroundColor: NumberBgColor[number] || "#3c3a32", 
        boxShadow: boxShadow,
        ...style
    }}>
        {number}
    </div>
}