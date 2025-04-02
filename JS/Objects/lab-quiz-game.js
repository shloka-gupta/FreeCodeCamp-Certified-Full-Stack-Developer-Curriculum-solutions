
// let one, two, three, four, five;

const one = {
  category: "Math",
  question: "What is 2 + 2?",
  choices: ["3", "4", "5"],
  answer: "4"
};

const two = {
  category: "Science",
  question: "What planet is known as the Red Planet?",
  choices: ["Earth", "Mars", "Jupiter"],
  answer: "Mars"
};

const three = {
  category: "History",
  question: "Who was the first president of the United States?",
  choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
  answer: "George Washington"
};

const four = {
  category: "Geography",
  question: "Which is the largest ocean on Earth?",
  choices: ["Atlantic", "Indian", "Pacific"],
  answer: "Pacific"
};

const five = {
  category: "Literature",
  question: "Who wrote 'Romeo and Juliet'?",
  choices: ["Charles Dickens", "William Shakespeare", "Jane Austen"],
  answer: "William Shakespeare"
};

const questions = [one ,two, three, four, five];

function getRandomQuestion(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomComputerChoice(arr)
{
   return arr[Math.floor(Math.random() * arr.length)]
}

function getResults(question , compChoice){
  if(question.answer == compChoice){
    return "The computer's choice is correct!";
  }
  else{
    return "The computer's choice is wrong. The correct answer is: " + question.answer;
  }
}