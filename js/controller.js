var gameState,
    controller = function () {
        var startGame = function () {
                var initialNumberOfPieces = view.getInitialNumberOfPieces();
                game.startGame({
                    numberOfPieces: initialNumberOfPieces
                });

                view.renderPieces(game.getPieces());

            },
            shootPiece = function (pieces, pieceId) {
                gameState = game.shootPiece(pieces, pieceId);
                if (gameState === "gameOver") {
                    // view.greenPiece(pieceId);
                    // setTimeout(1000);
                    view.redPiece(pieceId);
                    view.bluePieces(pieces);
                    setTimeout(function () {
                        game.startGame();
                        view.renderPieces(game.getPieces());
                    }, 1000);
                }
                if (gameState === "nextLevel") {
                    view.greenPiece(pieceId);
                    setTimeout(function () {
                        startNextLevel(pieces.length);
                    }, 1000);
                }
                if (gameState === "guessedPiece") {
                    view.greenPiece(pieceId);
                }
            },
            startNextLevel = function () {
                var initialNumberOfPieces = view.getInitialNumberOfPieces();
                if(initialNumberOfPieces<4){
                    initialNumberOfPieces = 3;
                }
                game.startGame({
                    numberOfPieces: initialNumberOfPieces + 1
                })
                view.renderPieces(game.getPieces());
            },
            startGameOnLevel = function () {
                var levelNumber = document.getElementById("levelNumberInput").value;
                game.startGame({
                    numberOfPieces: levelNumber
                });

                view.renderPieces(game.getPieces());
            };

        return {
            'startGame': startGame,
            'shootPiece': shootPiece,
            'startNextLevel': startNextLevel,
            'startGameOnLevel': startGameOnLevel
        }
    }();
