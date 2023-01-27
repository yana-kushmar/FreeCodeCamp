function mixedNumbers(arr) {
    const first = ['I', 2, 'three'];
    const second = [7, 'VIII', 9];
    arr.push(...second)
    arr.unshift(...first)
    return arr
}

console.log(mixedNumbers(['IV', 5, 'six']));