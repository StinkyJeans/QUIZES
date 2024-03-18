function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
    const secretNumber = getRandomNumber(1, 1000);
    const maxAttempts = 20; 
    const guesses = [];
    const comparisons = [];

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        const guess = parseInt(prompt(`Attempt ${attempt}/${maxAttempts}: Guess a number between 1 and 1000:`));
        guesses.push(guess);

        let comparison;
        switch (Math.sign(guess - secretNumber)) {
            case 1:
                alert("Lower");
                comparison = "Higher";
                break;
            case -1:
                alert("Higher");
                comparison = "Lower";
                break;
            default:
                alert("Congratulations! You guessed the correct number: " + secretNumber);
                comparison = "Correct";
                break;
        }
        comparisons.push(comparison);
        if (comparison === "Correct") break;
    }

    let resultMessage = "All guesses and their comparisons:\n";
    for (let i = 0; i < guesses.length; i++) {
        resultMessage += `Attempt ${i + 1}: Guess: ${guesses[i]} - ${comparisons[i]}\n`;
    }
    alert(resultMessage);
}

playGame();