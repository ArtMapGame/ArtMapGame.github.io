(function () {
    window.renderGame = function(levelNumbers, pictureData, historyData, viewData) {
        const gameElement = document.querySelector('body');
        const mapElement = window.makeMap();
        gameElement.appendChild(mapElement);
        const historyElements = window.makeHistory(historyData);
        historyElements.forEach(history => {
            gameElement.appendChild(history);
        });
        const pictureElements = window.makePictures(pictureData);
        pictureElements.forEach(picture => {
            gameElement.appendChild(picture.item);
            gameElement.appendChild(picture.information);
        });
        const buttonElements = window.makeButtons(levelNumbers, viewData.button);
        buttonElements.forEach((button, i) => {
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
                let minHistory = 0;
                for (let j = 0; j < i; j++) {
                    levelNumbers[j].forEach((stage) => {
                        if (stage.type === 'pictures') {
                            minPicture = minPicture + stage.number;
                        } else {
                            if (stage.type === 'history') {
                                minHistory = minHistory + 1;
                            }
                        }
                    });
                }
                let maxPicture = minPicture + 1;
                let maxHistory = minHistory + 1;
                levelNumbers[i].forEach((stage) => {
                    if (stage.type === 'pictures') {
                        maxPicture = maxPicture + stage.number;
                    } else {
                        if (stage.type === 'history') {
                            maxHistory = maxHistory + 1;
                        }
                    }
                })
                window.startLevel(pictureElements.slice(minPicture, maxPicture), historyElements.slice(minHistory, maxHistory), pictureData.slice(minPicture, maxPicture), levelNumbers[i]);
            });
            gameElement.appendChild(button);
        });
    };
})();
