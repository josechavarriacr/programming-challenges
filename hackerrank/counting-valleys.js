function countingValleys(steps, path) {
    const arr = path.split('');
    let level = 0;
    let valleys = 0;

    arr.forEach(i => {
        if (i == 'U') {
          level++
           if(level === 0) {
               valleys++
           }
        } else {
           level--
        }
    });
   
    return valleys;
   
}

const path = 'DDUUDDUDUUUD'
const result = countingValleys(8, path);
console.log('result', result);