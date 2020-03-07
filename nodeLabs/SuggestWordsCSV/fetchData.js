const SpellChecker = require('simple-spellchecker');



const suggestWord = async (word) => {
    const dictionary = await SpellChecker.getDictionarySync("es-ES");  
    const misspelled = ! dictionary.spellCheck(word);
        if(misspelled) {
            return dictionary.getSuggestions(word);
        } else {
            console.log('the word does not exists on the diccionary');
        }
}

module.exports = {
   suggestWord
}