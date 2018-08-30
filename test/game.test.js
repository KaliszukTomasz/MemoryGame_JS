describe('Game', function () {
    it('should have 4 pieces after game start', function () {
        var pieces;
        game.startGame();

        pieces = game.getPieces();

        expect(pieces.length).toBe(4);
    });

    it('one pieces should be to guess after game start', function () {
        var piecesToGuess;
        game.startGame();

        piecesToGuess = findPiecesToGuess(game.getPieces());

        expect(piecesToGuess.length).toBe(1);
    });

    it('should start game with configured number of pieces', function () {
        var pieces,
            config = {
                numberOfPieces: 6
            };
        game.startGame(config);

        pieces = game.getPieces();

        expect(pieces.length).toBe(6);
    });

    it('should random 2 piece to guess on start when start 5 pieces', function () {
        var piecesToGuess,
            config = {
                numberOfPieces: 5
            };
        game.startGame(config);
        piecesToGuess = findPiecesToGuess(game.getPieces());
        expect(piecesToGuess.length).toBe(1);
    });

    it('should random 2 piece to guess on start when start 6 pieces', function () {
        var piecesToGuess,
            config = {
                numberOfPieces: 6
            };
        game.startGame(config);
        piecesToGuess = findPiecesToGuess(game.getPieces());
        expect(piecesToGuess.length).toBe(2);
    });

    it('should random 5 piece to guess on start when start 12 pieces', function () {
        var piecesToGuess,
            config = {
                numberOfPieces: 12
            };
        game.startGame(config);
        piecesToGuess = findPiecesToGuess(game.getPieces());
        expect(piecesToGuess.length).toBe(5);
    });

    it('should shoot one piece to guess on start when start 4 pieces', function () {
        var
            indexPieceToGuess,
            gameState,
            pieces;

        game.startGame();
        pieces = game.getPieces();
        // piecesToGuess = findPiecesToGuess(game.getPieces());
        indexPieceToGuess = pieces.findIndex(function (element) {
            return (element.toGuess === true && element.guessed === false);
        });

        gameState = game.shootPiece(pieces, indexPieceToGuess);
        // expect(piecesToGuess.length).toBe(1);
        expect(gameState).toBe("nextLevel");
    });

    it('should shoot two pieces to guess on start when start 6 pieces', function () {
        var piecesToGuess,
            tableIndexesPiecesToGuess,
            config = {
                numberOfPieces: 6
            },
            i,
            gameState,
            pieces;
        game.startGame(config);
        pieces = game.getPieces();
        for (i = 0; i < 2; i++) {
            tableIndexesPiecesToGuess = pieces.findIndex(function (element) {
                return element.toGuess === true && element.guessed === false;
            });
            gameState = game.shootPiece(pieces, tableIndexesPiecesToGuess);
        }
        // piecesToGuess = findPiecesToGuess(game.getPieces());

        // expect(piecesToGuess.length).toBe(1);
        expect(gameState).toBe("nextLevel");
    });

    it('should shoot three pieces to guess on start when start 8 pieces', function () {
        var piecesToGuess,
            tableIndexesPiecesToGuess,
            config = {
                numberOfPieces: 8
            },
            i,
            gameState,
            pieces;
        game.startGame(config);
        pieces = game.getPieces();

        for (i = 0; i < 3; i++) {
            tableIndexesPiecesToGuess = pieces.findIndex(function (element) {
                return element.toGuess === true && element.guessed === false;
            });
            gameState = game.shootPiece(pieces, tableIndexesPiecesToGuess);
        }
        // piecesToGuess = findPiecesToGuess(game.getPieces());
        expect(gameState).toBe("nextLevel");
    });


    it('should shoot two pieces to guess on start when start 8 pieces', function () {
        var
            tableIndexesPiecesToGuess,
            config = {
                numberOfPieces: 8
            },
            i,
            gameState,
            pieces;
        game.startGame(config);
        pieces = game.getPieces();
        for (i = 0; i < 3; i++) {
            tableIndexesPiecesToGuess = pieces.findIndex(function (element) {
                return element.toGuess === true && element.guessed === false;
            });
            gameState = game.shootPiece(pieces, tableIndexesPiecesToGuess);
        }
        // expect(gameState).toBe("gameOver");
        expect(gameState).toBe("nextLevel");
    });

    it('should shoot one piece to guess on start when start 6 pieces and return guessedPiece', function () {
        var
            indexPieceToGuess,
            gameState,
            config = {
                numberOfPieces: 6
            },
            pieces;

        game.startGame(config);
        pieces = game.getPieces();
        // piecesToGuess = findPiecesToGuess(game.getPieces());
        indexPieceToGuess = pieces.findIndex(function (element) {
            return (element.toGuess === true && element.guessed === false);
        });

        gameState = game.shootPiece(pieces, indexPieceToGuess);
        // expect(piecesToGuess.length).toBe(1);
        expect(gameState).toBe("guessedPiece");
    });


        it('should shoot one2 pieces what is not to guess and throw game over', function () {
            var
                tableIndexesPiecesToGuess,
                gameState,
                pieces;
            game.startGame();
            pieces = game.getPieces();
            tableIndexesPiecesToGuess = pieces.findIndex(function (element) {
                return element.toGuess === true && element.guessed === false;
            })
            if (tableIndexesPiecesToGuess == 0) {
                tableIndexesPiecesToGuess += 2;
            }
            gameState = game.shootPiece(pieces, tableIndexesPiecesToGuess - 1);

            // expect(gameState).toBe("gameOver");
            expect(gameState).toBe("gameOver");
        });


        function findPiecesToGuess(pieces) {
            return pieces.filter(function (piece) {
                return piece.toGuess;
            });
        }
    })
    ;
