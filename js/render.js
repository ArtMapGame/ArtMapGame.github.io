(function () {
    window.renderGame = function(levelNumber, pictureData, viewData) {
        //igra
        const gameElement = document.querySelector('body');
        //karta
        const mapElement = window.makeMap();
        gameElement.appendChild(mapElement);
        //knopki
        const buttonElements = window.makeButtons(levelNumber, viewData.button);
        buttonElements.forEach(button => {
            button.addEventListener('mouseover', function() {
                button.style.filter = `brightness(${viewData.button.brightness.mouseOver})`;
            });
            button.addEventListener('mouseout', function() {
                button.style.filter = `brightness(${viewData.button.brightness.normal})`;
            });
            button.addEventListener('mousedown', function() {
                button.style.filter = `brightness(${viewData.button.brightness.mouseDown})`;
            });
            button.addEventListener('mouseup', function() {
                button.style.filter = `brightness(${viewData.button.brightness.mouseOver})`;
            });
            gameElement.appendChild(button);
        });
        //kartinki
        const pictureElements = window.makePictures(pictureData);
        pictureElements.forEach(picture => {
            gameElement.appendChild(picture.item);
            gameElement.appendChild(picture.information);
        });
    };
})();
