var view = (function () {
    var getInitialNumberOfPieces = function () {
            return game.getPieces().length;
        },

        renderPieces = function (pieces) {
            var i,
            el,
            div;
            clearWindow();
            for (i = 0; i < pieces.length; i++) {
                el = document.createElement("SPAN");
                el.setAttribute("id", i);
                el.onclick = function () {
                    // debugger;
                    controller.shootPiece(pieces, parseInt(this.getAttribute("id")));
                    // alert("Hello! I am an alert box!! " + this.getAttribute("id"));

                };
                if (pieces[i].toGuess) {
                    //podswietl(piece)
                    el.style.background = "white";
                    //zgas(piece)
                    setTimeout(function(){ el.style.background = "red"; }, 1000);
                }
                div = document.getElementById('rightsite');
                div.appendChild(el);
            }

        },


        clearWindow = function () {
            const div = document.getElementById('rightsite');
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }

        };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces
    }
})();
