function balancedSums(arr) {
    if(arr.length == 1) return 'YES'

let left = 0
let right = arr.reduce((a,b) => a + b)

if(left == right) return 'YES'

for(let i = 0; i < arr.length; i++){
    if(left == right) return 'YES'
    if(i > 0) right -= arr[i - 1]
    left += arr[i]
    
}

return 'NO';
}
const list = [1, 2, 3, 3]

console.log(balancedSums(list));