function checkScope() {
    if (true) {
        let i = 'function scope';
        i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    let i = 'function scope';
    console.log('Function scope i is: ', i);
    return i;
}