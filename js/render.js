(function () {
    window.renderGame = function(levelNumbers, pictureData, viewData) {
        const gameElement = document.querySelector('body');
        const mapElement = window.makeMap();
        gameElement.appendChild(mapElement);
        const pictureElements = window.makePictures(pictureData);
        pictureElements.forEach(picture => {
            gameElement.appendChild(picture.item);
            gameElement.appendChild(picture.information);
        });
        const buttonElements = window.makeButtons(levelNumbers, viewData.button);
        buttonElements.forEach((button, index) => {
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
                let minPicture = 0;
                for (let i = 0; i < index; i++) {
                    minPicture = minPicture;
                    levelNumbers[i].forEach(number => minPicture = minPicture + number);
                }
                const maxPicture = minPicture;
                levelNumbers[index].forEach(number => maxPicture = maxPicture + number);
                window.startLevel(pictureElements.slice(minPicture, maxPicture + 1), pictureData.slice(minPicture, maxPicture + 1), minPicture, maxPicture, levelNumbers[index]);
            });
            gameElement.appendChild(button);
        });
    };
})();
