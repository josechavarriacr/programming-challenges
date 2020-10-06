function divisibleSumPairs(length, divisible, numbers) {
    let counter = 0
    for (let i = 0; i < length; i++) {
        for (let j = (i + 1); j < length; j++) {
            const num = numbers[i] + numbers[j]
            if(num % divisible == 0 ) {
               counter++
            }
        }
    }
    return counter
}

const result = divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])
console.log('result', result);