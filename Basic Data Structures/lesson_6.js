function htmlColorNames(arr) {
    const startI = 0;
    const amountToDelete = 2;
    arr.splice(startI, amountToDelete, 'DarkSalmon', 'BlanchedAlmond');
    return arr
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));