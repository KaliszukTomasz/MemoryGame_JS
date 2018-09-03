'use strict';
var view = (function () {
    var getInitialNumberOfPieces = function () {
            return game.getPieces().length;
        },

        renderPieces = function (pieces) {
            var i,
                piece,
                div,
                elements;
            clearWindow();
            for (i = 0; i < pieces.length; i++) {
                piece = createPiece(i, pieces);
                div = document.getElementById('rightPanel');
                div.appendChild(piece);
            }
            refreshView(pieces);
            setTimeout(function () {
                elements = document.getElementById("rightPanel").children;
                for (i = 0; i < elements.length; i++) {
                    elements[i].setAttribute("class", "grayPiece");
                    elements[i].classList.remove("disable");
                }
            }, document.getElementById("lightPiecesDuration").value * 1000);
        },
        createPiece = function (i, pieces) {
            var piece;
            piece = document.createElement("SPAN");
            piece.setAttribute("id", i);
            piece.setAttribute("class", "grayPiece")
            piece.onclick = function () {
                controller.shootPiece(pieces, parseInt(this.getAttribute("id")));
            };
            piece.classList.add("disable");
            if (pieces[i].toGuess) {
                piece.setAttribute("class", "lightPiece");
            }
            return piece;
        },
        refreshView = function (pieces) {
            var percentageResult;
            document.getElementById("levelNumberInput").value = getCurrentNumberOfPieces(pieces);
            document.getElementById("currentLevel").innerText = getCurrentNumberOfPieces(pieces);
            document.getElementById("numberPiecesToGuess").innerText = Math.floor(pieces.length / 2 - 1);
            document.getElementById("numberOfLivesField").innerHTML = game.getNumberOfLives();
            percentageResult = game.getPercentageResult() * 10000 / 100;
            if (isNaN(percentageResult)) {
                percentageResult = 0;
            }
            document.getElementById("percentageStats").innerHTML = Math.round(percentageResult) + "%";
        },
        clearWindow = function () {
            const div = document.getElementById('rightPanel');
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
        },

        greenPiece = function (pieceId) {
            document.getElementById(pieceId).setAttribute("class", "guessedPiece");
        },

        redPiece = function (pieceId) {
            document.getElementById(pieceId).setAttribute("class", "failShootedPiece");
        },

        bluePieces = function (pieces) {
            var i;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    document.getElementById(i).setAttribute("class", "lightPiece");
                }
            }
        },

        disablePieces = function () {
            document.getElementById("rightPanel").classList.add("disable");
        },

        enablePieces = function () {
            document.getElementById("rightPanel").classList.remove("disable");
        },

        getCurrentNumberOfPieces = function (pieces) {
            return pieces.length;
        };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'greenPiece': greenPiece,
        'redPiece': redPiece,
        'bluePieces': bluePieces,
        'enablePieces': enablePieces,
        'disablePieces': disablePieces
    }
})();
