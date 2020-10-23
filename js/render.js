(function () {
    const BUTTON_BRIGHTNESS = {
        normal: 1,
        mouseOver: 0.5,
        mouseDown: 0.2,
    };
    window.renderGame = function(levelNumber, data) {
        //igra
        const gameElement = document.querySelector('body');
        //karta
        const mapElement = window.makeMap();
        gameElement.appendChild(mapElement);
        //knopki
        const buttonElements = window.makeButtons(levelNumber, mapElement);
        buttonElements.forEach(button => {
            button.addEventListener('mouseover', function() {
                button.style.filter = `brightness(${BUTTON_BRIGHTNESS.mouseOver})`;
            });
            button.addEventListener('mouseout', function() {
                button.style.filter = `brightness(${BUTTON_BRIGHTNESS.normal})`;
            });
            button.addEventListener('mousedown', function() {
                button.style.filter = `brightness(${BUTTON_BRIGHTNESS.mouseDown})`;
            });
            button.addEventListener('mouseup', function() {
                button.style.filter = `brightness(${BUTTON_BRIGHTNESS.mouseOver})`;
                
            });
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
