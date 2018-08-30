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
                    // debugger;
                    controller.shootPiece(pieces, parseInt(this.getAttribute("id")));
                    // alert("Hello! I am an alert box!! " + this.getAttribute("id"));

                };
                if (pieces[i].toGuess) {
                    el.setAttribute("class", "lightPiece");
                }
                document.getElementById("levelNumberInput").value = pieces.length;
                div = document.getElementById('rightsite');
                div.appendChild(el);


            }
            setTimeout(function () {
                elements = document.getElementById("rightsite").children;
                for (i = 0; i < elements.length; i++) {
                    elements[i].setAttribute("class", "grayPiece");
                }

            }, 1000);
        },
        clearWindow = function () {
            const div = document.getElementById('rightsite');
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
        },
        greenPiece = function (pieceId) {
             document.getElementById(pieceId).setAttribute("class", "guessedPiece");

        }


    ;

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'greenPiece': greenPiece
    }
})();
