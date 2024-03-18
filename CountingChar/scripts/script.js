function countCharacters(inputString) {
    let vowelsCount = 0;
    let consonantsCount = 0;
    let numbersCount = 0;
    let specialCharactersCount = 0;
    let whiteSpacesCount = 0;

    const vowels = /[aeiouAEIOU]/;
    const numbers = /[0-9]/;
    const specialCharacters = /[^a-zA-Z0-9\s]/;

    for (let char of inputString) {
        if (vowels.test(char)) {
            vowelsCount++;
        } else if (numbers.test(char)) {
            numbersCount++;
        } else if (specialCharacters.test(char)) {
            specialCharactersCount++;
        } else if (char === ' ') {
            whiteSpacesCount++;
        } else {
            consonantsCount++;
        }
    }

    return {
        vowels: vowelsCount,
        consonants: consonantsCount,
        numbers: numbersCount,
        specialCharacters: specialCharactersCount,
        whiteSpaces: whiteSpacesCount
    };
}

function updateCounts() {
    const inputString = document.getElementById('inputString').value;
    const counts = countCharacters(inputString);
    
    document.getElementById('vowelsCount').textContent = counts.vowels;
    document.getElementById('consonantsCount').textContent = counts.consonants;
    document.getElementById('numbersCount').textContent = counts.numbers;
    document.getElementById('specialCharactersCount').textContent = counts.specialCharacters;
    document.getElementById('whiteSpacesCount').textContent = counts.whiteSpaces;
    document.getElementById('header').textContent = inputString;
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        const inputString = document.getElementById('inputString').value;
        const counts = countCharacters(inputString);
        
        console.log("Vowels:", counts.vowels);
        console.log("Consonants:", counts.consonants);
        console.log("Numbers:", counts.numbers);
        console.log("Special Characters:", counts.specialCharacters);
        console.log("White Spaces:", counts.whiteSpaces);
    }
}

document.getElementById('inputString').addEventListener('input', updateCounts);
document.getElementById('inputString').addEventListener('keypress', handleKeyPress);