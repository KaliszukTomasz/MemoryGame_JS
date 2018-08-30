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
                    game.startGame();
                    // document.getElementById(pieceId).setAttribute("class", "lightPiece");
                    view.renderPieces(game.getPieces());
                }
                if (gameState === "nextLevel") {
                    startNextLevel(pieces.length);
                }
                if (gameState === "guessedPiece") {
                    view.greenPiece(pieceId);
                }
            },
            startNextLevel = function () {
                var initialNumberOfPieces = view.getInitialNumberOfPieces();
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
