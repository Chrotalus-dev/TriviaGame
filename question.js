class Question {
    constructor(_answers=[],_correct_answer="") {
            this.answers = _answers;
            this.correct_answer=_correct_answer;
          }
    
        getAnswers() {
            return this.answers;
        }

        getCorrect_Answer() {
            return this.correct_answer;
        }

        answer_is_correct(answer)
        {
            var answerCorrect = false;
            if(answer === this.correct_answer)
                return answerCorrect=true;
        }


                   
    }


