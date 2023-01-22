function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for ( let t = 0; t < arr[i].length; t++) {
            product = product * arr[i][t];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);