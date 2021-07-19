class TwentyOne {
    constructor() {
        this.cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, ,10, 10 ,10, 11]; 
        this.images = ['fox', 'snake'];
        this.addButtonListeners();
        this.playerPoints = 0;
        this.oponentsPoints = 0;
        this.cardCounter = 0;
        this.isGameFinished = false;
    }

    addButtonListeners() {
        let self = this;
        let button = document.getElementById('getOneMoreCard');
         button.onclick = function() {
            self.getOneMoreCard();
        };

        let stop = document.getElementById('stopGettingCards');
        stop.onclick = function() {

            if(!this.isGameFinished) {
                while(self.oponentsPoints < self.playerPoints && self.oponentsPoints < 21) {
                    self.oponentGetCards();
                }
            } else {
                self.printResult(self);
            }
       };
    }

    printResult(self) {
        if(self.oponentsPoints > self.playerPoints) {
            document.getElementById('result').innerHTML = "You loose Your oponent has more points than you";
        }

        if(self.oponentsPoints < self.playerPoints) {
            document.getElementById('result').innerHTML = "You win Your oponent has more less than you";
        }

        if(self.oponentsPoints > self.playerPoints) {
            document.getElementById('result').innerHTML = "You loose Your oponent has more points than you";
        }
    }

    getRandomCard() {  
        let randomCard = this.cards[this.getRandomNumber(0, this.cards.length-1)];       
        console.log("Random Card "+randomCard);
        return randomCard; 
    }

    getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }

    getOneMoreCard() {
        let randomCard = this.getRandomCard();
        this.playerPoints += randomCard;
        let playerCards = document.getElementById('dealt-cards');
        let div = this.duplicateCard(randomCard);
        div.classList.add('card');
        div.style.visibility = 'visible';
        playerCards.appendChild(div);

        let playerPoints = document.getElementById('player-points');
        playerPoints.innerHTML = this.playerPoints;
        return this.getRandomCard();
    }

    oponentGetCards() {
        let randomCard = this.getRandomCard();
        this.oponentsPoints += randomCard;
        let oponentsCards = document.getElementById('oponent-cards');
        let div = this.duplicateCard(randomCard);
        div.classList.add('card');
        div.style.visibility = 'visible';
        oponentsCards.appendChild(div);

        let oponentsPoints = document.getElementById('oponents-points');
        oponentsPoints.innerHTML = this.oponentsPoints;
        return this.getRandomCard();
    }

    duplicateCard(randomCard) {
        var original = document.getElementById('card');
        //original.querySelector('image').innerHTML = '<img src="'+this.images[0]+'">';
        var clone = original.cloneNode(true); 

        clone.id = "card" + this.cardCounter;
        


        var numberDiv = document.createElement("div");;
        numberDiv.classList.add("number");
        numberDiv.innerHTML = randomCard;

        clone.appendChild(numberDiv);        
        return clone;
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


window.addEventListener('load', function () {
    new TwentyOne();
});



if (typeof module !== 'undefined')  module.exports = TwentyOne;

