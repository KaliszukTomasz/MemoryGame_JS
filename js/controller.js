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
                    game.startGame();
                    view.renderPieces(game.getPieces());
                }
                if (gameState === "nextLevel") {
                    startNextLevel(pieces.length);
                }
            },
            startNextLevel = function (numberOfPieces) {
                game.startGame({
                    numberOfPieces: numberOfPieces + 1
                })
                view.renderPieces(game.getPieces());
            };

        return {
            'startGame': startGame,
            'shootPiece': shootPiece
        }
    }();
