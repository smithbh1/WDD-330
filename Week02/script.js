const heroes = []
const myQuestions = [
    {
        question: "What is Superman's real name?",
        answers: {
            a: "Clark Kent",
            b: "Tim Tebow",
            c: "Johnny Depp"

        },
        correctAnswer: "a"
    },
    {
        question: "What is Wonderwoman's real name?",
        answers: {
            a: "Clark Kent",
            b: "Taylor Swift",
            c: "Diana Price"

        },
        correctAnswer: "c"
    },
    {
        question: "What is Batman's real name?",
        answers: {
            a: "Bruce Wayne",
            b: "Lafawnduh",
            c: "Bruce Banner"

        },
        correctAnswer: "a"
    }
]



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

(function(){
function buildQuiz(){

    const output = [];

 
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      
      const answers = [];

      
      for(letter in currentQuestion.answers){

        
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  
  quizContainer.innerHTML = output.join('');
}

buildQuiz();

function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

  
  let numCorrect = 0;

  
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    
    if(userAnswer === currentQuestion.correctAnswer){
      
      numCorrect++;

      
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    
    else{
      
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

submitButton.addEventListener('click', showResults);
})();



function addHero() {
    let userHero = document.querySelector('#heroName').value;
    if(heroes.length < 10){
        heroes.push(userHero);
    }
    else{
        alert('Too Many Heroes!')
    }
    
    
}

function showHero(){
for (i = 0; heroes.length > i; i++){
    let heroList = document.querySelector('.heroList');
    let listItem = document.createElement('li')

    listItem.append(heroes[i]);

    heroList.append(listItem);
}
}
