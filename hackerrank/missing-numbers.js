function missingNumbers(arr, brr) {
    let difference = brr.filter(x => !arr.includes(x));
    let sortedOne = arr.sort((a,b) => a - b)
    let sortedTwo = brr.sort((a,b) => a - b)

    const res = [... new Set(brr)]
    res.forEach(i => {
        const compareOne = findAndRepeat(sortedOne, i)
        const compareTwo = findAndRepeat(sortedTwo, i)
        sortedOne = sortedOne.filter(x => x != i)
        sortedTwo = sortedTwo.filter(x => x != i)
        if(compareOne != compareTwo) {
            difference.push(i)
        }
    });
    
    const removedRepeat = [...new Set(difference)]
    return removedRepeat.sort((a, b) => a -b)
}

function findAndRepeat(list, num) {
    let repeat = 0
    for (let i = 0; i < list.length; i++) {
        if(list[i] == num) {
            repeat++
        }  
        if(list[i] > num) {
            break
        }
    }
       
    return repeat
}

const arr = [ 203, 204, 205, 206, 207, 208, 203, 204, 205, 206 ] 
const brr = [ 203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204 ]

const response = missingNumbers(arr, brr)
console.log('response', response);