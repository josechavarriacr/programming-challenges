function bonAppetit(bill, k, b) {
    let total = 0;
    let subTotal = bill.reduce((pre, next) => pre + next);
    subTotal = (subTotal - bill[k]) / 2;
    if (b > subTotal) {
        total = b - subTotal;
    } else {
        total = subTotal - b;
    }
    if(total === 0) total = 'Bon Appetit'
    return total
}


const result = bonAppetit([3, 10, 2, 9], 1, 12)
console.log('result', result);