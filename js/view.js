'use strict';
var view = (function () {
    var getInitialNumberOfPieces = function () {
            return game.getPieces().length;
        },

        renderPieces = function (pieces) {
            var i,
                el,
                div,
                elements;
            clearWindow();
            for (i = 0; i < pieces.length; i++) {
                el = document.createElement("SPAN");
                el.setAttribute("id", i);
                el.setAttribute("class", "grayPiece")
                el.onclick = function () {
                    controller.shootPiece(pieces, parseInt(this.getAttribute("id")));
                };
                el.classList.add("disable");
                if (pieces[i].toGuess) {
                    el.setAttribute("class", "lightPiece");
                }
                document.getElementById("levelNumberInput").value = getCurrentNumberOfPieces(pieces);
                document.getElementById("currentLevel").innerText = getCurrentNumberOfPieces(pieces);
                document.getElementById("numberPiecesToGuess").innerText = Math.floor(pieces.length / 2 - 1);
                div = document.getElementById('rightPanel');
                div.appendChild(el);
            }

            setTimeout(function () {
                elements = document.getElementById("rightPanel").children;
                for (i = 0; i < elements.length; i++) {
                    elements[i].setAttribute("class", "grayPiece");
                    elements[i].classList.remove("disable");
                }


            }, document.getElementById("lightPiecesDuration").value * 1000);
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
