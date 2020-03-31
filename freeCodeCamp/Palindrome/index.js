const extractValues = (str) => {
    const deleteBrackets = str.join(',');
    return deleteBrackets.replace(/[,]/gm, '');
}

const removeSpecialChars = (str) => {
    const anyNonWord = str.replace(/\W/g, '');
    const underScore = anyNonWord.replace(/[_]/g, '');
    return underScore;
}
const revertString = (str) => {    
    const result = Object.values(str).map((item, index) => {
        const size = str.length;        
        if (index <= size) {            
            const currentValue = ((size - index) - 1);
            const result = [];
            result.push(str[currentValue]);            
            return result;
        }
    });
    return extractValues(result);
}

const palindrome = (str) => {
    const extractCharacters = removeSpecialChars(str);
    const revertStr = revertString(extractCharacters);
    if (extractCharacters.toUpperCase() === revertStr.toUpperCase()) {
        console.log('true');
        return true;
    }
    console.log('false');
    
    return false
}

palindrome("_eye");