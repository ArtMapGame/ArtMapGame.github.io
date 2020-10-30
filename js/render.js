(() => {
    window.renderGame = () => {
        const gameElement = document.querySelector('body');
        const mapElement = window.makeMap();
        gameElement.appendChild(mapElement);
        const mapElements = window.makeMaps();
        mapElements.forEach(map => {
            gameElement.appendChild(map);
        });
        const historyElements = window.makeHistory();
        historyElements.forEach(history => {
            gameElement.appendChild(history);
        });
        const pictureElements = window.makePictures();
        pictureElements.forEach(picture => {
            gameElement.appendChild(picture.item);
            gameElement.appendChild(picture.information);
        });
        const buttonElements = window.makeButtons();
        buttonElements.forEach((button, i) => {
            button.addEventListener('mouseover', () => {
                button.style.filter = `brightness(${window.VIEW_DATA.button.brightness.mouseOver})`;
            });
            button.addEventListener('mouseout', () => {
                button.style.filter = `brightness(${window.VIEW_DATA.button.brightness.normal})`;
            });
            button.addEventListener('mousedown', () => {
                button.style.filter = `brightness(${window.VIEW_DATA.button.brightness.mouseDown})`;
            });
            button.addEventListener('mouseup', () => {
                button.style.filter = `brightness(${window.VIEW_DATA.button.brightness.mouseOver})`;
                buttonElements.forEach(button => button.style.display = 'none');
                let minPicture = 0;
                let minHistory = 0;
                let minMap = 0;
                for (let j = 0; j < i; j++) {
                    window.LEVEL_NUMBERS[j].forEach((stage) => {
                        switch(stage.type) {
                            case 'pictures':
                                minPicture = minPicture + stage.number;
                                break
                            case 'history':
                                minHistory = minHistory + 1;
                                break
                            case 'maps':
                                minMap = minMap + stage.number;
                        }
                    });
                }
                let maxPicture = minPicture + 1;
                let maxHistory = minHistory + 1;
                let maxMap = minMap + 1;
                window.LEVEL_NUMBERS[i].forEach((stage) => {
                    switch(stage.type) {
                        case 'pictures':
                            maxPicture = maxPicture + stage.number;
                            break
                        case 'history':
                            maxHistory = maxHistory + 1;
                            break
                        case 'maps':
                            maxMap = maxMap + stage.number;
                    }
                });
                window.startLevel(pictureElements.slice(minPicture, maxPicture), historyElements.slice(minHistory, maxHistory), mapElements.slice(minMap, maxMap), window.PICTURE_DATA.slice(minPicture, maxPicture), window.LEVEL_NUMBERS[i]);
            });
            gameElement.appendChild(button);
        });
    };
})();
