function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum ){
        return [];
    }

    const arr = rangeOfNumbers(startNum + 1, endNum)
    arr.unshift(startNum)
    return arr;
};

