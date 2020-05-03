import React, { useState, useEffect } from 'react';
import './Game.css'
import Board from './Board'

const randomPick = array => array[Math.floor(Math.random() * array.length)];
const random24 = () => randomPick([2, 2, 2, 2, 2, 4]);


function addTile(tiles) {
    // 初始加新tiles
    let emptyBlocks = tiles.flatMap(
        (row, i) => {
            row.map((number, j) => number == undefined ? [i, j] : undefined)
        }).filter(value => value != undefined);

    // [[i,j],undefined,...],去除undi
    const [i,j]=randomPick(emptyBlocks);
    tiles[i][j]=random24();
    return tiles
}

function doUp(tiles) {
    // 函数是向上合并得出新number
    for (var j = 0; j < tiles[0].length; j++) {
        //先循环列
        for (var i = 0; i < tiles.length - 1; i++) {
            // 再循环行
            if (tiles[i][j] != undefined) {
                // 找到非0元素
                for (var k = i + 1; k < tiles.length; k++) {
                    if (tiles[k][j] != undefined) {
                        // 其下一个元素非0
                        if (tiles[i][j] == tiles[k][j]) {
                            // 他们相等
                            tiles[i][j] *= 2;
                            tiles[k][j] = undefined
                        }
                    }
                }
            }
        }
        let spaceMark = undefined
        for (var i = 0; i < tiles.length; i++) {
            if (spaceMark == undefined) {
                // 空位符是空的，那就找
                if (tiles[i][j] == undefined) {
                    // 当前块是空，就是空位符
                    spaceMark = i;
                }
            }
            else {
                // 空位符找到了，找内容
                if (tiles[i][j] != undefined) {
                    tiles[spaceMark][j] = tiles[i][j];
                    tiles[i][j] = undefined;
                    spaceMark++;
                }
            }
        }
    }
    return tiles
}

function doDown(tiles) {
    for (var j = 0; j < tiles[0].length; j++) {
        //先循环列
        for (var i = tiles.length - 1; i > 0; i--) {
            // 再循环行,从下到上
            if (tiles[i][j] != undefined) {
                // 找到非0元素
                for (var k = i - 1; k >= 0; k--) {
                    // 遍历主元素上面每一个
                    if (tiles[k][j] != undefined) {
                        // 找元素非0
                        if (tiles[i][j] == tiles[k][j]) {
                            // 他们相等
                            tiles[i][j] *= 2;
                            tiles[k][j] = undefined

                        }
                    }
                }
            }
        }
        let spaceMark = undefined
        for (var i = tiles.length - 1; i >= 0; i--) {
            if (spaceMark == undefined) {
                // 空位符是空的，那就找
                if (tiles[i][j] == undefined) {
                    // 当前块是空，就是空位符
                    spaceMark = i;
                }
            }
            else {
                // 空位符找到了，找内容
                if (tiles[i][j] != undefined) {
                    tiles[spaceMark][j] = tiles[i][j];
                    tiles[i][j] = undefined;
                    spaceMark--;
                }
            }
        }
    }
    return tiles
}


function doLeft(tiles) {
    for (var i = 0; i < tiles.length; i++) {
        //先循环行
        for (var j = 0; j < tiles[0].length - 1; j++) {
            // 再循环列
            if (tiles[i][j] != undefined) {
                // 找到非0元素
                for (var k = j + 1; k < tiles[0].length; k++) {
                    // 遍历主元素右边的
                    if (tiles[i][k] != undefined) {
                        // 其右边一个元素非0
                        if (tiles[i][j] == tiles[i][k]) {
                            // 他们相等
                            tiles[i][j] *= 2;
                            tiles[i][k] = undefined

                        }
                    }
                }
            }
        }
        let spaceMark = undefined
        for (var j = 0; j < tiles[0].length; j++) {
            if (spaceMark == undefined) {
                // 空位符是空的，那就找
                if (tiles[i][j] == undefined) {
                    // 当前块是空，就是空位符
                    spaceMark = j;
                }
            }
            else {
                // 空位符找到了，找内容
                if (tiles[i][j] != undefined) {
                    tiles[i][spaceMark] = tiles[i][j];
                    tiles[i][j] = undefined;
                    spaceMark++;
                }
            }
        }
    }
    return tiles
}



function doRight(tiles) {
    for (var i = 0; i < tiles.length; i++) {
        //先循环行
        for (var j = tiles[0].length - 1; j > 0; j--) {
            // 再循环列
            if (tiles[i][j] != undefined) {
                // 找到非0元素
                for (var k = j - 1; k >= 0; k--) {
                    // 遍历主元素左边的
                    if (tiles[i][k] != undefined) {
                        // 其左边一个元素非0
                        if (tiles[i][j] == tiles[i][k]) {
                            // 他们相等
                            tiles[i][j] *= 2;
                            tiles[i][k] = undefined

                        }
                    }
                }
            }
        }

        let spaceMark = undefined
        for (var j = tiles[0].length - 1; j >= 0; j--) {
            if (spaceMark == undefined) {
                // 空位符是空的，那就找
                if (tiles[i][j] == undefined) {
                    // 当前块是空，就是空位符
                    spaceMark = j;
                }
            }
            else {
                // 空位符找到了，找内容
                if (tiles[i][j] != undefined) {
                    tiles[i][spaceMark] = tiles[i][j];
                    tiles[i][j] = undefined;
                    spaceMark--;
                }
            }
        }
    }
    return tiles
}



function doCols(func, tiles, colCount) {
    const transposed = tiles[0].map((_, j) =>
        // 得到j,0,1,2,3
        tiles.map((row => row[j])));
    // 得到第j列,[1,5,9 ][2,6,10]
    const processed = transposed.map(func);

}

function doRows(func, tiles, rowCount) {
    tiles[0].map()
}




export default function () {
    const rowCount = 4;
    const colCount = 4;
    const tilewidth = (500 - (colCount - 1) * 10) / colCount;
    const tileheight = (500 - (rowCount - 1) * 10) / rowCount;
    const initValue = []
    for (var i = 0; i < rowCount; i++) {
        let row = [];
        for (var j = 0; j < colCount; j++) {
            row.push(undefined);
        }
        initValue.push(row);
    }
    const [tiles, setTiles] = useState(initValue);

    function onKeyDown(event) {
        // 上下左右的按键关联
        let newTiles;
        switch (event.key) {
            case "ArrowUp":
                newTiles = doUp(tiles);
                // 
                setTiles(newTiles)
                break;
            case "ArrowRight":
                newTiles = doRight(tiles);
                setTiles(newTiles)
                break;
            case "ArrowDown":
                newTiles = doDown(tiles);
                setTiles(newTiles)
                break;
            case "ArrowLeft":
                newTiles = doLeft(tiles);
                setTiles(newTiles)
                break;
        }
    }

    useEffect(() => {
        let newTiles = addTile(tiles, rowCount, colCount);
        newTiles = addTile(newTiles, rowCount, colCount);
        setTiles(newTiles);
        document.onkeydown = onKeyDown;
    }, []);


    return <div className="game">
        <Board tiles={tiles}
            rowCount={rowCount}
            colCount={colCount}
            tilewidth={tilewidth}
            tileheight={tileheight}
        />
    </div>
}