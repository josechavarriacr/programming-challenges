function pairs(k, arr) {
    let counter = 0;
    const nums = arr.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          let diff = nums[j] - nums[i]
    
          if (diff === k) {
            counter ++
            break
          }
          else if (diff > k) {
              break
          }
        }
    }
    return counter

}
const arr = [1, 5, 3, 4, 2]
const result = pairs(2, arr)
console.log('result', result);