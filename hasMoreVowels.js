// Write a function called hasMoreVowels that takes in one argument, word. 
// When the function is called, return true if that word contains more vowels than non-vowels; 
// otherwise, return false. The word will always be a single word, without any punctuation or spaces.
// It will contain only uppercase and/or lowercase letters.

const hasMoreVowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCount = 0;
    let vowelsNeeded = word.length / 2;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelsCount++
        } 
        if (vowelsCount > vowelsNeeded) {
            return true;
        }
    }
    return false;
}

console.log(hasMoreVowels("positivity"));