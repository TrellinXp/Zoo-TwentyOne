// spec/game.spec.js
const TwentyOne = require('../src/game');

let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, , 10, 10, 10, 11]

describe('TwentyOne', () => {
    beforeEach(() => {
        twentyOne = new TwentyOne();
    });

    it('should be declared', () => {
        expect(typeof TwentyOne).toBe('function');
    });

    describe('The function getRandomCard', () => {
        it('should get a random card', () => {
            let randomCard = twentyOne.getRandomCard();
            expect(cards.includes(randomCard));
        });
    });

    describe('The function getOneMoreCard', () => {
        it('should get one more random card', () => {
            let cardPoints = 5;
            let onemorecard = twentyOne.getOneMoreCard();
            expect(cardPoints + onemorecard > cardPoints);
        });
    });

    describe('The function checkIfPlayerHasWon', () => {
        it('should check if the Player has Won', () => {
            expect(twentyOne.checkIfPlayerHasWon(0, 5)).toBe(false);
            expect(twentyOne.checkIfPlayerHasWon(0, 8)).toBe(false);
            expect(twentyOne.checkIfPlayerHasWon(7, 14)).toBe(false);
            expect(twentyOne.checkIfPlayerHasWon(5, 5)).toBe(false);
            expect(twentyOne.checkIfPlayerHasWon(14, 6)).toBe(true);
            expect(twentyOne.checkIfPlayerHasWon(12, 2)).toBe(true);
            expect(twentyOne.checkIfPlayerHasWon(19, 6)).toBe(true);
            expect(twentyOne.checkIfPlayerHasWon(21, 21)).toBe(false);
        });
    });


    describe('The function getPlayerPoints', () => {
        it('should get the Player Points', () => {
            let playerCards1 = [2, 3, 5, 7];
            expect(twentyOne.getPlayerPoints(playerCards1)).toBe(17);
            let playerCards2 = [1, 7, 3, 2];
            expect(twentyOne.getPlayerPoints(playerCards2)).toBe(13);
            let playerCards3 = [1, 6, 3];
            expect(twentyOne.getPlayerPoints(playerCards3)).toBe(10);
            let playerCards4 = [1, 8];
            expect(twentyOne.getPlayerPoints(playerCards4)).toBe(9);
        });
    });

    describe('The function getDealerPoints', () => {
        it('should get the Dealer Points', () => {
            let dealerCards1 = [2, 3, 5, 7];
            expect(twentyOne.getDealerPoints(dealerCards1)).toBe(17);
            let dealerCards2 = [1, 7, 3, 2];
            expect(twentyOne.getDealerPoints(dealerCards2)).toBe(13);
            let dealerCards3 = [1, 6, 3];
            expect(twentyOne.getDealerPoints(dealerCards3)).toBe(10);
            let dealerCards4 = [1, 8];
            expect(twentyOne.getDealerPoints(dealerCards4)).toBe(9);
        });
    });
});
