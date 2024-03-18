function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return { question: `What is ${num1} + ${num2}?`, answer: num1 + num2 };
  }
  
  let currentQuestion = generateQuestion();
  let score = 0;
  
  function displayQuestion() {
    document.getElementById('question').innerText = currentQuestion.question;
  }
  
  function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value.trim(), 10);
    const correctAnswer = currentQuestion.answer;
  
    if (userAnswer === correctAnswer) {
      alert('You are correct!');
      score++;
    } else {
      alert(`You are wrong! The correct answer is ${correctAnswer}.`);
    }
  }
  
  function generateNewQuestion() {
    currentQuestion = generateQuestion();
    displayQuestion();
    document.getElementById('answer').value = ""; // Clear the answer field
  }
  
  displayQuestion();
  