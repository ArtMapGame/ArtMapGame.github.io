(function () {
    window.renderGame = function(levelNumber, data) {
        //igra
        const gameElement = document.querySelector('body');
        //karta
        const mapElement = window.makeMap();
        gameElement.appendChild(mapElement);
        //knopki
        const buttonElements = window.makeButtons(levelNumber);
        buttonElements.forEach(button => {
            gameElement.appendChild(button);
        });
        //kartinki
        const pictureElements = window.makePictures(data);
        pictureElements.forEach(picture => {
            gameElement.appendChild(picture.item);
            gameElement.appendChild(picture.information);
        });
    };
})();
