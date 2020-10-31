/*
  Write a bubble sort here
  Name the function bubbleSort
  
  If you want to suspend running the unit tests, change describe to xdescribe
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
  
  Provided is an optional visualization helper. Call snapshot(yourArray) at the
  beginning of each iteration of your inner loop with the state of the being-sorted
  array and the helper tool will show you how your array looks in the HTML section
  of CodePen. This is optional and only for your help.
  
  
*/

const bubbleSort = nums => {  
    do {
        var swapped = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i+1]) {
                let temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
    return nums
}

const myBubbleSort = nums => {
    let i = 0
    while (i < nums.length) {
        if(nums[i] > nums[i + 1]) {
            let temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
            i = 0
        } else {
            i++
        }
    }
    return nums
}

const list = [10,5,3,8,2,6,4,7,9,1]
console.log('original', list);

// console.log(bubbleSort(list));
console.log('result', myBubbleSort(list));