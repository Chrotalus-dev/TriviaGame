class Player {

    constructor(_name, _score = 0, _wins = 0, _losses = 0, _questions = []) {
        this.name = _name;
        this.score = _score;
        this.wins = _wins;
        this.losses = _losses;
        this.questions = _questions;
    }

    getName() {
        return this.name;
    }

    getScore() {
        return this.score;
    }

    getWins() {
        return this.wins;
    }

    getLosses() {
        return this.losses;
    }

    getQuestions() {
        return this.questions;
    }


}