window.onload = function(){
const studentName = prompt('Please enter your name');

function generateQuestion(){
const value1 = Math.floor(Math.random() * 1000 + 1);
const value2 = Math.floor(Math.random() * 1000 + 1);
const operators = ['+', '-','*','/'];
const operator = operators[Math.floor(Math.random()* operators.length)];

let answer;

    switch (operator){
        case '+': answer = value1 + value2; break;
   
        case '-': answer = value1 - value2; break;

        case '*': answer = value1 * value2; break;

        case '/': answer = value1 / value2; break;

    }
    return{ question: `what is ${value1} ${operator} ${value2}`, answer: answer};

}

function displayQuestions(){
    let score = 0;

    for (let i = 0; i < 10; i++){
        const currentQuestion = generateQuestion();
        const userAnswer = parseFloat(prompt(`${studentName}, ${currentQuestion.question}`),10);

        if (!isNaN(userAnswer) && userAnswer === currentQuestion.answer){
            score++;
        }

    }
    alert(`${studentName}, your total score is : ${score}`)
}

displayQuestions();

}
