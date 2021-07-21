class TwentyOne {
    constructor() {
        this.cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
        this.imagesCartoon = ['snake', 'cat', 'flamingo', 'monkey', 'crocodile', 'deer', 'shark', 'whale', 'lion', 'zebra'];
        this.addButtonListeners();
        this.playerPoints = 0;
        this.oponentsPoints = 0;
        this.playerCardCounter = 0;
        this.isGameFinished = false;
        this.gamesWon = 0;
        this.gamesLost = 0;
    }

    addButtonListeners() {
        this.addGetOneMoreCardButton(this);
        this.addStopButton(this);
        this.addNewGameButton(this);
    }

    addGetOneMoreCardButton(self) {
        let button = document.getElementById('getOneMoreCard');
        button.onclick = function () {
            if (!self.isGameFinished) {
                self.getOneMoreCard('player');
                if (self.playerPoints > 21) {
                    self.isGameFinished = true;
                    self.printResult(self);
                }
            }
        };
    }

    addStopButton(self) {
        let stop = document.getElementById('stopGettingCards');
        stop.onclick = function () {
            if (!self.isGameFinished) {
                self.isGameFinished = true;
                while (self.oponentsPoints <= self.playerPoints && self.oponentsPoints < 21) {
                    self.getOneMoreCard('oponent');
                }
                self.printResult(self);
            }
        };
    }

    addNewGameButton(self) {
        let newGame = document.getElementById('newGame');
        newGame.onclick = function () {
            self.startNewGame(self);
        };
    }

    printResult(self) {
        self.getGameResults();
        if (self.playerPoints > 21) {
            document.getElementById('result').innerHTML = "You loose because you have more than 21";
            document.getElementById('result').style.backgroundColor = "red";
            document.getElementById('games-lost').innerHTML = self.gamesLost;
            return;
        }

        if (self.isGameFinished) {
            if (self.playerPoints > 21) {
                document.getElementById('result').innerHTML = "You loose because you have more than 21";
                document.getElementById('result').style.backgroundColor = "green";
                document.getElementById('games-won').innerHTML = self.gamesWon;
                return;
            }

            if (self.oponentsPoints > 21) {
                document.getElementById('result').innerHTML = "You win because your oponent has more than 21";
                document.getElementById('result').style.backgroundColor = "green";
                document.getElementById('games-won').innerHTML = self.gamesWon;
                return;
            }

            if (self.oponentsPoints > self.playerPoints) {
                document.getElementById('result').innerHTML = "You loose because your oponent has more points than you";
                document.getElementById('result').style.backgroundColor = "red";
                document.getElementById('games-lost').innerHTML = self.gamesLost;
                return;
            }

            if (self.oponentsPoints < self.playerPoints) {
                document.getElementById('result').innerHTML = "You win because your oponent has more points than you";
                document.getElementById('result').style.backgroundColor = "green";
                document.getElementById('games-won').innerHTML = self.gamesWon;
                return;
            }

            if (self.oponentsPoints > self.playerPoints) {
                document.getElementById('result').innerHTML = "You loose Your oponent has more points than you";
                document.getElementById('result').style.backgroundColor = "red";
                document.getElementById('games-lost').innerHTML = sel.gamesLost;
                return;
            }
        }
    }

    getGameResults() {
        if (this.oponentsPoints > 21) {
            this.gamesWon++;
            return;
        }

        if(this.playerPoints > 21) {
            this.gamesLost++;
            return;
        }

        if (this.oponentsPoints > this.playerPoints) {
            this.gamesLost++;
            return;
        }

        if (this.oponentsPoints < this.playerPoints) {
            this.gamesWon++;
            return;
        }
    }

    getRandomCard() {
        let randomNumber = this.getRandomNumber(0, this.cards.length - 1);
        return this.cards[randomNumber];
    }

    getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }


    getImage(cardValue) {
        switch (cardValue) {
            case 2: return this.imagesCartoon[0];
            case 3: return this.imagesCartoon[1];
            case 4: return this.imagesCartoon[2];
            case 5: return this.imagesCartoon[3];
            case 6: return this.imagesCartoon[4];
            case 7: return this.imagesCartoon[5];
            case 8: return this.imagesCartoon[6];
            case 9: return this.imagesCartoon[7];
            case 10: return this.imagesCartoon[8];
            case 11: return this.imagesCartoon[9];
        }
    }

    getOneMoreCard(player) {
        let randomCard = this.getRanomCardWithImage(player);

        if (player === 'player') {
            this.playerPoints += randomCard;
            let playerPoints = document.getElementById('player-points');
            playerPoints.innerHTML = this.playerPoints;
            this.playerCardCounter++;
        } else {
            this.oponentsPoints += randomCard;
            let oponentsPoints = document.getElementById('oponents-points');
            oponentsPoints.innerHTML = this.oponentsPoints;
        }
        this.getRandomCard();
    }

    getRanomCardWithImage(player) {
        let randomCard = this.getRandomCard();
        let newCard = this.duplicateCard(randomCard);
        newCard.classList.add('card');
        newCard.style.display = 'block';

        let img = newCard.getElementsByTagName("img")[0];
        let imageUrl = 'img/' + this.getImage(randomCard) + '.png';
        img.src = imageUrl;

        let cards = document.getElementById('oponent-cards');
        if (player === 'player') {
            cards = document.getElementById('dealt-cards');
        }

        cards.appendChild(newCard);

        return randomCard;
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
        let oponentsPoints = document.getElementById('oponents-points');
        let playerPoints = document.getElementById('player-points');
        var result = document.getElementById('result');

        playerPoints.innerHTML = 0;
        oponentsPoints.innerHTML = 0;
        result.style.backgroundColor = "white";
        result.innerHTML = '';

        this.playerPoints = 0;
        this.oponentsPoints = 0;
    }

    checkIfPlayerHasWon(playerPoints, dealerPoints) {
        return playerPoints > dealerPoints;
    }

    getPlayerPoints(pointsArray) {
        let sum = 0;
        for (var count = 0; count < pointsArray.length; count++) {
            sum = sum + pointsArray[count];
        }
        return sum;
    }

    getDealerPoints(pointsArray) {
        let sum = 0;
        for (var count = 0; count < pointsArray.length; count++) {
            sum = sum + pointsArray[count];
        }
        return sum;
    }

}

window.addEventListener('load', function () {
    new TwentyOne();
});

if (typeof module !== 'undefined') module.exports = TwentyOne;

