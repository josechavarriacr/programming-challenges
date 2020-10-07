function designerPdfViewer(h, word) {
  const numbs = convertWordToNumbers(word);
  const positions = changePosition(numbs, h);
  const maxNumber = bubleSort(positions)[0];
  return word.length * maxNumber
}

function bubleSort(arr) {
    const numbs = arr;
    for (let i = 0; i < numbs.length; i++) {
        for (let j = 0; j < numbs.length; j++) {
            if(numbs[j] < numbs[j+1]) {
                let temp = numbs[j];
                numbs[j] = numbs[j+1];
                numbs[j+1] = temp
            }
        }
    }
    return numbs;
}
function changePosition(numbs, h) {
    const result = []
    for (let i = 0; i < numbs.length; i++) {
        const j = numbs[i];
        result.push(h[j])
    }
    return result;
}
function convertWordToNumbers(word) {
    let nums = [];
    const letters = word.split('');
    for (let i = 0; i < letters.length; i++) {
        nums.push(getValues(letters[i]))
    }
    return nums;
}

function getValues(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.indexOf(letter);
}

const h = [ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7 ];
const result = designerPdfViewer(h, 'zaba')
console.log('result', result);