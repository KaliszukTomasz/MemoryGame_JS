describe('Game', function () {
    it('should have 4 pieces after game start', function () {
        // given
        var pieces;
        // when
        game.startGame();
        pieces = game.getPieces();
        // then
        expect(pieces.length).toBe(4);
    });

    it('one pieces should be to guess after game start', function () {
        // given
        var piecesToGuess;
        // when
        game.startGame();
        piecesToGuess = findPiecesToGuess(game.getPieces());
        // then
        expect(piecesToGuess.length).toBe(1);
    });

    it('should start game with configured number of pieces', function () {
        // given
        var pieces,
            config = {
                numberOfPieces: 6
            };
        // when
        game.startGame(config);
        pieces = game.getPieces();
        // then
        expect(pieces.length).toBe(6);
    });

    it('should random 1 piece to guess on start when start 5 pieces', function () {
        // given
        var piecesToGuess,
            config = {
                numberOfPieces: 5
            };
        // when
        game.startGame(config);
        piecesToGuess = findPiecesToGuess(game.getPieces());
        // then
        expect(piecesToGuess.length).toBe(1);
    });

    it('should random 2 piece to guess on start when start 6 pieces', function () {
        // given
        var piecesToGuess,
            config = {
                numberOfPieces: 6
            };
        // when
        game.startGame(config);
        piecesToGuess = findPiecesToGuess(game.getPieces());
        // then
        expect(piecesToGuess.length).toBe(2);
    });

    it('should random 5 piece to guess on start when start 12 pieces', function () {
        // given
        var piecesToGuess,
            config = {
                numberOfPieces: 12
            };
        // when
        game.startGame(config);
        piecesToGuess = findPiecesToGuess(game.getPieces());
        // then
        expect(piecesToGuess.length).toBe(5);
    });

    it('should shoot one piece to guess on start when start 4 pieces', function () {
        // given
        var
            indexPieceToGuess,
            gameState,
            pieces;
        game.startGame();
        pieces = game.getPieces();
        indexPieceToGuess = pieces.findIndex(function (element) {
            return (element.toGuess === true && element.guessed === false);
        });
        // when
        gameState = game.shootPiece(pieces, indexPieceToGuess);
        // then
        expect(gameState).toBe("nextLevel");
    });

    it('should shoot two pieces to guess on start when start 6 pieces', function () {
        // given
        var tableIndexesPiecesToGuess,
            config = {
                numberOfPieces: 6
            },
            i,
            gameState,
            pieces;
        game.startGame(config);
        pieces = game.getPieces();
        // when
        for (i = 0; i < 2; i++) {
            tableIndexesPiecesToGuess = pieces.findIndex(function (element) {
                return element.toGuess === true && element.guessed === false;
            });
            gameState = game.shootPiece(pieces, tableIndexesPiecesToGuess);
        }
        // then
        expect(gameState).toBe("nextLevel");
    });

    it('should shoot three pieces to guess on start when start 8 pieces', function () {
        // given
        var tableIndexesPiecesToGuess,
            config = {
                numberOfPieces: 8
            },
            i,
            gameState,
            pieces;
        game.startGame(config);
        pieces = game.getPieces();
        // when
        for (i = 0; i < 3; i++) {
            tableIndexesPiecesToGuess = pieces.findIndex(function (element) {
                return element.toGuess === true && element.guessed === false;
            });
            gameState = game.shootPiece(pieces, tableIndexesPiecesToGuess);
        }
        // then
        expect(gameState).toBe("nextLevel");
    });


    it('should shoot two pieces to guess on start when start 8 pieces', function () {
        // given
        var tableIndexesPiecesToGuess,
            config = {
                numberOfPieces: 8
            },
            i,
            gameState,
            pieces;
        game.startGame(config);
        pieces = game.getPieces();
        // when
        for (i = 0; i < 3; i++) {
            tableIndexesPiecesToGuess = pieces.findIndex(function (element) {
                return element.toGuess === true && element.guessed === false;
            });
            gameState = game.shootPiece(pieces, tableIndexesPiecesToGuess);
        }
        // then
        expect(gameState).toBe("nextLevel");
    });

    it('should shoot one piece to guess on start when start 6 pieces and return guessedPiece', function () {
        // given
        var
            indexPieceToGuess,
            gameState,
            config = {
                numberOfPieces: 6
            },
            pieces;

        game.startGame(config);
        pieces = game.getPieces();
        indexPieceToGuess = pieces.findIndex(function (element) {
            return (element.toGuess === true && element.guessed === false);
        });
        // when
        gameState = game.shootPiece(pieces, indexPieceToGuess);
        // then
        expect(gameState).toBe("guessedPiece");
    });


    it('should shoot one2 pieces what is not to guess and throw game over', function () {
        // given
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
        // when
        gameState = game.shootPiece(pieces, tableIndexesPiecesToGuess - 1);
        // then
        expect(gameState).toBe("gameOver");
    });

    it('should mock game and view to test controller', function () {
        // given
        var pieces = {};
        spyOn(game, 'startGame');
        spyOn(view, 'renderPieces');
        spyOn(view, 'getInitialNumberOfPieces').and.returnValue(8);
        spyOn(game, 'getPieces').and.returnValue(pieces);
        // when
        controller.startGame();
        // then
        expect(game.startGame).toHaveBeenCalledWith({numberOfPieces: 8});
        expect(view.renderPieces).toHaveBeenCalledWith(pieces);
    })

    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;
        });
    }
});

it('')


