class TwentyOne {
    constructor() {
        this.cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10 ,10, 11]; 
        this.images = ['fox', 'snake', 'mouse', 'owl', 'lion'];
        this.addButtonListeners();
        this.playerPoints = 0;
        this.oponentsPoints = 0;
        this.playerCardCounter = 0;
        this.playerCards = [];
        this.isGameFinished = false;
    }

    addButtonListeners() {
       this.addGetOneMoreCardButton(this);
       this.addStopButton(this);
       this.addNewGameButton(this);
    }

    addGetOneMoreCardButton(self) {
        let button = document.getElementById('getOneMoreCard');
        button.onclick = function() {
            if(!self.isGameFinished) {
                self.getOneMoreCard();
                if(self.playerPoints > 21) {
                    self.isGameFinished = true;
                }
            }
        };
    }

    addStopButton(self) {
        let stop = document.getElementById('stopGettingCards');
        stop.onclick = function() {

            self.isGameFinished = true;
            while(self.oponentsPoints <= self.playerPoints && self.oponentsPoints < 21) {
                self.oponentGetCards();
            }
            self.printResult(self);
       };
    }

    addNewGameButton(self) {
        let newGame = document.getElementById('newGame');
        newGame.onclick = function() {
            self.startNewGame(self);
        };
    }

    printResult(self) {
        if(self.playerPoints > 21) {
            var result = document.getElementById('result');
            document.getElementById('result').innerHTML = "You loose because you have more than 21";
            return;
        }

        if(self.isGameFinished) {
            if(self.oponentsPoints > 21) {
                document.getElementById('result').innerHTML = "You win because your oponent has more than 21";
                return;
            }

            if(self.oponentsPoints > self.playerPoints) {
                document.getElementById('result').innerHTML = "You loose because your oponent has more points than you";
                return;
            }

            if(self.oponentsPoints < self.playerPoints) {
                document.getElementById('result').innerHTML = "You win because your oponent has more points than you";
                return;
            }

            if(self.oponentsPoints > self.playerPoints) {
                document.getElementById('result').innerHTML = "You loose Your oponent has more points than you";
                return;
            }
        }
    }

    getRandomCard() {  
        let randomNumber = this.getRandomNumber(0, this.cards.length-1);
        return this.cards[randomNumber]; 
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
        let newCard = this.duplicateCard(randomCard);
        newCard.classList.add('card');
        newCard.style.visibility = 'visible';
        playerCards.appendChild(newCard);
        this.playerCards.push(newCard);

        let playerPoints = document.getElementById('player-points');
        playerPoints.innerHTML = this.playerPoints;
        this.playerCardCounter++;
        let divs = newCard.getElementsByTagName("div");
        console.log(newCard);
        let image = divs[0];
        console.log(this.images[0]);

        let imageUrl = 'url(/img/'+this.getImage(randomCard)+'.png)';
        image.style.backgroundImage = imageUrl; 

        this.printResult(this);
        return this.getRandomCard();
    }

    getImage(cardValue) {
        switch(cardValue) {
            case 2: return this.images[0];
            case 3: return this.images[1];
            case 4: return this.images[2];
            case 5: 
            case 6:
            case 7:
            case 8:
            case 9:
            case 10: return this.images[4];
            case 11:
            default: return this.images[2];
        }
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

    startNewGame(self) {    
        let playerCards = document.getElementById('dealt-cards');
        playerCards.innerHTML = '';

        let oponentsCards = document.getElementById('oponent-cards');
        oponentsCards.innerHTML = '';
        self.isGameFinished = false;
        this.playerCardCounter = 0;
        this.clearResult();
    }

    duplicateCard(randomCard) {
        var original = document.getElementById('card');
        var clone = original.cloneNode(true); 

        clone.id = "card" + this.cardCounter;     
        var numberDiv = document.createElement("div");;
        numberDiv.classList.add("number");
        numberDiv.innerHTML = randomCard;

        clone.appendChild(numberDiv);        
        return clone;
    }

    clearResult() {
        let playerPoints = document.getElementById('player-points');
        playerPoints.innerHTML = 0;        
        let oponentsPoints = document.getElementById('oponents-points');
        oponentsPoints.innerHTML = 0;

        var result = document.getElementById('result');
        result.innerHTML = '';

        this.playerPoints = 0;
        this.oponentsPoints = 0;
    }

    checkIfPlayerHasWon(playerPoints, dealerPoints) {
        return playerPoints > dealerPoints;
    }

    getPlayerPoints(pointsArray) {
        let sum = 0;
        for(var count = 0; count < pointsArray.length; count++){
            sum = sum + pointsArray[count];
        }
        return sum;
    }

    getDealerPoints(pointsArray) {
        let sum = 0;
        for(var count = 0; count < pointsArray.length; count++){
            sum = sum + pointsArray[count];
        }
        return sum;
    }

}

window.addEventListener('load', function () {
    new TwentyOne();
});

if (typeof module !== 'undefined')  module.exports = TwentyOne;

