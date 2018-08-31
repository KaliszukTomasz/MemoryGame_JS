'use strict';
var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
        },

        getPieces = function () {
            var i,
                pieces = [];

            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({
                    toGuess: false,
                    guessed: false
                });
            }

            setRandomPiecesToGuess(pieces);

            return pieces;
        },

        setRandomPiecesToGuess = function (pieces) {

            var numberPiecesToGuess = Math.floor(currentNumberOfPieces / 2 - 1),
                checkedPieces = 0,
                i;
            while (checkedPieces < numberPiecesToGuess) {
                i = Math.floor(Math.random() * currentNumberOfPieces);
                if (pieces[i].toGuess === false) {
                    pieces[i].toGuess = true;
                    checkedPieces++;
                }
            }
        },

        shootPiece = function (pieces, pieceToShootId) {
            var somePieceToGuess = false;
            if (pieces[pieceToShootId].toGuess === true && pieces[pieceToShootId].guessed === false) {
                pieces[pieceToShootId].guessed = true;

                pieces.forEach(function (value) {
                    if (value.toGuess === true && value.guessed === false) {
                        somePieceToGuess = true;
                    }
                })
                if (somePieceToGuess === false) {
                    return "nextLevel";
                }else{
                    return "guessedPiece";
                }
            } else {
                return "gameOver";
            }
        };


    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'shootPiece': shootPiece
    }
})();
