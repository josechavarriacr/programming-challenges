// function migratoryBirds(arr) {
// const sortedNumbs = sortNums(arr);
// let item;
// let counterOne = 0;
// let counterTwo = 1;

// for (let i = 0; i < sortedNumbs.length; i++) {
//     for (let i = 0; i < sortedNumbs.length; i++) {
//         for (let j = i; j < sortedNumbs.length; j++) {
//             if (sortedNumbs[i] === sortedNumbs[j]) {
//                 counterOne++ 
//                 if(counterOne >= counterTwo){
//                     counterTwo = counterOne
//                     item = sortedNumbs[j]
//                 }
//             }
//         }
//         counterOne = 0
//     }
// }
// return item;
// }

function sortNums(arr) {
    let nums = arr;
    for (let i = 0; i < nums.length; i++) {
     for (let j = 0; j < nums.length; j++) {
         if(nums[j] < nums[j + 1]) {
             let temp = nums[j];
             nums[j] = nums[j+1]
             nums[j+1] = temp;
         }
     }
    }
    console.log('leght', nums.length);
    console.log('nums', nums);
    return nums
}

function migratoryBirds(arr) {
    const count = arr.reduce((accumulator, number) => {
        if (!accumulator[number]) {
            return {
                ...accumulator,
                [number]: 1
            }
        }

        return {
            ...accumulator,
            [number]: accumulator[number] + 1
        }
    }, {});

    const [largest] = Object.entries(count).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    return largest[0];
}

const result = migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4, 0]);

console.log('result', result);