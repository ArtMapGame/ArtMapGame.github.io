(() => {
    window.renderGame = (levelNumbers, pictureData, viewData) => {
        const gameElement = document.querySelector('body');
        const mapElement = window.makeMap();
        gameElement.appendChild(mapElement);
        const mapElements = window.makeMaps(levelNumbers);
        mapElements.forEach(map => {
            gameElement.appendChild(map);
        });
        const historyElements = window.makeHistory(viewData.history);
        historyElements.forEach(history => {
            gameElement.appendChild(history);
        });
        const pictureElements = window.makePictures(pictureData);
        pictureElements.forEach(picture => {
            gameElement.appendChild(picture.item);
            gameElement.appendChild(picture.information);
        });
        const buttonElements = window.makeButtons(levelNumbers, viewData.button, viewData.windowHeight);
        buttonElements.forEach((button, i) => {
            button.addEventListener('mouseover', () => {
                button.style.filter = `brightness(${viewData.button.brightness.mouseOver})`;
            });
            button.addEventListener('mouseout', () => {
                button.style.filter = `brightness(${viewData.button.brightness.normal})`;
            });
            button.addEventListener('mousedown', () => {
                button.style.filter = `brightness(${viewData.button.brightness.mouseDown})`;
            });
            button.addEventListener('mouseup', () => {
                button.style.filter = `brightness(${viewData.button.brightness.mouseOver})`;
                buttonElements.forEach(button => button.style.display = 'none');
                let minPicture = 0;
                let minHistory = 0;
                let minMap = 0;
                for (let j = 0; j < i; j++) {
                    levelNumbers[j].forEach((stage) => {
                        switch(stage.type) {
                            case 'pictures':
                                minPicture = minPicture + stage.number;
                                break
                            case 'history':
                                minHistory = minHistory + 1;
                                break
                            case 'map':
                                minMap = minMap + stage.number;
                        }
                    });
                }
                let maxPicture = minPicture + 1;
                let maxHistory = minHistory + 1;
                let maxMap = minMap + 1;
                levelNumbers[i].forEach((stage) => {
                    switch(stage.type) {
                        case 'pictures':
                            maxPicture = maxPicture + stage.number;
                            break
                        case 'history':
                            maxHistory = maxHistory + 1;
                            break
                        case 'map':
                            maxMap = maxMap + stage.number;
                    }
                });
                window.startLevel(pictureElements.slice(minPicture, maxPicture), historyElements.slice(minHistory, maxHistory), mapElements.slice(minMap, maxMap), pictureData.slice(minPicture, maxPicture), levelNumbers[i]);
            });
            gameElement.appendChild(button);
        });
    };
})();
