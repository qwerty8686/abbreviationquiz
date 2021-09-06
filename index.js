var readlineSync = require("readline-sync");
var name = readlineSync.question("Your name please  ");
var score = 0;
console.log("Welcome " + name+" !");
console.log("This quiz will test you how well you know abbreviations ");

function play(question,answer,i){
  var userInput = readlineSync.question(question);
  if(userInput.toUpperCase() === answer.toUpperCase()){
    if(i===questions.length-1){
      console.log("You are right !");
      score++;
      console.log("Thanks for playing the quiz "+ name);
      console.log("Your Final Score is : "+ score);
    }
    else{
    console.log("You are right !");
    score++;
    console.log("Score is : "+ score);
    }
  }
  else{
    if(i===questions.length-1){
      console.log("Sorry! You are wrong ");
      console.log("Thanks for playing the quiz "+ name);
      console.log("Your Final Score is : "+ score);
    }
    else{
    console.log("Sorry! you are wrong");
    console.log("Score is : "+score);
  }
  }
}

var questions = [
  {question:"YOLO stands for ",answer: "You Only Live Once"},
  {question:"CWYL stands for ", answer:"Chat with you later"},
  {question:"TLDR stands for ", answer:"Too long didn't read"},
  {question:"DIY stands for ", answer:"Do it yourself"},
  {question:"IMO stands for ", answer:"In my opinion"},
  {question:"BRB stands for ", answer:"Be right back"},
  {question:"FOMO stands for ", answer:"Fear of missing out"}
  ]

  for(var i=0; i<questions.length;i++){
    play(questions[i].question,questions[i].answer,i);
  }