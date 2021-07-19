class TwentyOne {
    constructor() {
        this.cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, ,10, 10 ,10, 11]; 
    }

    getRandomCard() {
        return this.cards[this.getRandomNumber(0, this.cards.length)]; 
    }

    getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getOneMoreCard() {
        return this.getRandomCard();
    }

    checkIfPlayerHasWon(playerPoints, dealerPoints) {
        return playerPoints > dealerPoints;
    }

    getPlayerPoints(pointsArray) {
        let sum = 0;
        for(var count = 0; count < pointsArray.length; count++){
            sum = sum + pointsArray[count];
            console.log(sum);
        }
        return sum;
    }

    getDealerPoints(pointsArray) {
        let sum = 0;
        for(var count = 0; count < pointsArray.length; count++){
            sum = sum + pointsArray[count];
            console.log(sum);
        }
        return sum;
    }
}

if (typeof module !== 'undefined')  module.exports = TwentyOne;

