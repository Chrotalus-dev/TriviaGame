var questionLabel = null;


// var selectedAnswer = document.getElementById("answer").value;

var currentQuestion = {};
var questionNumberPlayer1 = 0;
var questionNumberPlayer2 = 0;
var players = [];

var player1 = null;
var player2 = null;

async function startGame() {
    var startGame = new Game(players);
    await startGame.start();

    if (startGame.players.length > 0) {
        player1 = startGame.players[0];
        player2 = startGame.players[1];

        player1Questions = player1.questions;
        player2Questions = player2.questions;

        currentQuestion = player1.questions[questionNumberPlayer1];
        mappingObjects(currentQuestion);
        questionLabel.innerHTML = currentQuestion.question;
        numquestion.innerHTML = "Question Number " + (questionNumberPlayer1 + 1).toString();
        currentTurnLabel.innerHTML = player1.name;
        questionNumberPlayer1 = questionNumberPlayer1 + 1;

    }
}

function mappingObjects(currentQuestion) {
    currentTurnLabel = document.getElementById("playerturn");
    questionLabel = document.getElementById("question");
    labeloption1 = document.getElementById("labelChoice1");
    labeloption2 = document.getElementById("labelChoice2");
    labeloption3 = document.getElementById("labelChoice3");
    labeloption4 = document.getElementById("labelChoice4");
    Choice1.value = currentQuestion.incorrect_answers[0];
    Choice2.value = currentQuestion.incorrect_answers[1];
    Choice3.value = currentQuestion.incorrect_answers[2];
    Choice4.value = currentQuestion.correct_answer;
    labeloption1.innerHTML = currentQuestion.incorrect_answers[0];
    labeloption2.innerHTML = currentQuestion.incorrect_answers[1];
    labeloption3.innerHTML = currentQuestion.incorrect_answers[2];
    labeloption4.innerHTML = currentQuestion.correct_answer;
    questionLabel.innerHTML = currentQuestion.question;

}

function turn() {
    if (currentTurnLabel.innerHTML === player1.name) {
        document.querySelector('input[name="answers"]:checked').checked = false;
        currentTurnLabel.innerHTML = player2.name;
        currentQuestion = player2.questions[questionNumberPlayer2];
        numquestion.innerHTML = "Question Number " + (questionNumberPlayer2+1).toString();
        mappingObjects(currentQuestion);
        questionNumberPlayer2 = questionNumberPlayer2 + 1;
    } else if (currentTurnLabel.innerHTML === player2.name) {
        document.querySelector('input[name="answers"]:checked').checked = false;
        currentTurnLabel.innerHTML = player1.name;
        numquestion.innerHTML = "Question Number " + (questionNumberPlayer1+1).toString();
        currentQuestion = player1.questions[questionNumberPlayer1];
        mappingObjects(currentQuestion);
        questionNumberPlayer1 = questionNumberPlayer1 + 1;
    } else {
        console.log("Who's turn is it");
    }
}


function submitAnswer() {
    var answer = document.querySelector('input[name="answers"]:checked').value;
    var currentAnswers = new Question(currentQuestion.incorrect_answers, currentQuestion.correct_answer);
    if (currentAnswers.answer_is_correct(answer) && currentTurnLabel.innerHTML === player1.name) {
        player1.score = player1.score + 1;
        document.getElementById("playerX").value = player1.score;
    } else if (currentAnswers.answer_is_correct(answer) && currentTurnLabel.innerHTML === player2.name) {
        player2.score = player2.score + 1;
        document.getElementById("playerO").value = player1.score;
    } else {
        console.log("incorrect answer, no points");
    }
    turn();
    
}