  function birthday(chocolateBar, day, month) {
    const numbs = getConsecutiveValues(chocolateBar, month)
    let possibleWays = 0
    numbs.map(item => {
      if(item === day) possibleWays++
    })
    console.log('possibleWays', possibleWays);
    return possibleWays;
  }

  function getConsecutiveValues(chocolateBar, consecutive) {
    const nums = [];
    for (let i = 0; i < chocolateBar.length; i++) {
      let result = 0;
        for (let j = 0; j < consecutive; j++) {
          result = result + chocolateBar[i + j]
        }
        nums.push(result)
    }
    return nums
  }

birthday([ 5, 5, 3, 2, 2, 2, 1, 2, 5, 3, 5, 5, 4, 3, 3, 5 ], 13, 3);
// birthday([ 5, 5, 3, 2, 2, 2, 1, 2, 5, 3, 5, 5, 4, 3, 3, 5], 13, 3);