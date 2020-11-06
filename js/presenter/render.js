(() => {
    window.renderGame = () => {
        const gameElement = document.querySelector(`body`);
        const backgroundElement = new backgroundComponent(gameElement);
        gameElement.appendChild(backgroundElement.getElement());
        let mapElements = [];
        let i = 0;
        window.levelNumbers.forEach(level => level.forEach(stage => {
            if (stage.type === `maps`) {
                for (let j = 0; j < stage.number; j++) {
                    i = i + 1;
                    mapElements.push(new mapComponent(i));
                    gameElement.appendChild(mapElements[i - 1].getElement());
                }
            }
        }));
        let historyElements = [];
        window.viewData.historySize.forEach((size, index) => {
            historyElements.push(new historyComponent(size, index));
            gameElement.appendChild(historyElements[historyElements.length - 1].getElement());
        });
        let pictureElements = [];
        window.pictureMove = false;
        window.pictureData.forEach((data, index) => {
            const informationElement = new informationComponent(data.informationSize, index);
            pictureElements.push({
                item: new itemComponent(data.item, index, informationElement),
                information: informationElement,
            });
            gameElement.appendChild(pictureElements[pictureElements.length - 1].item.getElement());
            gameElement.appendChild(pictureElements[pictureElements.length - 1].information.getElement());
        });
        let buttonElements = [];
        for (let i = 0; i < window.levelNumbers.length; i++) {
            buttonElements.push(new buttonComponent(i));
            buttonElements[i].getElement().addEventListener(`click`, () => {
                buttonElements[i].getElement().style.filter = `brightness(${window.viewData.button.brightness.mouseOver})`;
                buttonElements.forEach(button => button.hide());
                let minPicture = 0;
                let minHistory = 0;
                let minMap = 0;
                for (let j = 0; j < i; j++) {
                    window.levelNumbers[j].forEach((stage) => {
                        switch(stage.type) {
                            case `pictures`:
                                minPicture = minPicture + stage.number;
                                break
                            case `history`:
                                minHistory = minHistory + 1;
                                break
                            case `maps`:
                                minMap = minMap + stage.number;
                        }
                    });
                }
                let maxPicture = minPicture + 1;
                let maxHistory = minHistory + 1;
                let maxMap = minMap + 1;
                window.levelNumbers[i].forEach((stage) => {
                    switch(stage.type) {
                        case `pictures`:
                            maxPicture = maxPicture + stage.number;
                            break
                        case `history`:
                            maxHistory = maxHistory + 1;
                            break
                        case `maps`:
                            maxMap = maxMap + stage.number;
                    }
                });
                window.startLevel(pictureElements.slice(minPicture, maxPicture), historyElements.slice(minHistory, maxHistory), mapElements.slice(minMap, maxMap), window.pictureData.slice(minPicture, maxPicture), window.levelNumbers[i]);
            });
            gameElement.appendChild(buttonElements[i].getElement());
        }
    }
})();
