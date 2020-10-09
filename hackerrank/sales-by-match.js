function sockMerchant(n, arr) {
    let pairs = 0;
    const obj = {};
    arr.forEach(i => {
        if (obj[i]) {
            pairs += 1;
            obj[i] = 0;
        } else {
            obj[i] = 1;
        }
    });
    return pairs;
}

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const result = sockMerchant(9, arr);
console.log('result', result);

