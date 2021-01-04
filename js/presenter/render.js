(() => {
    window.renderGame = gameData => {
        const gameElement = document.querySelector(`body`);
        new backgroundComponent(gameElement).getElement();
        const gameInformationElement = new gameInformationComponent(gameElement);
        new informationButtonComponent(gameElement, gameInformationElement).getElement();
        const closeButtonElement = new closeButtonComponent(gameElement);
        const pointsElement = new pointsComponent(gameElement);
        let buttonElements = [];
        let elementIndex = {
            map: 0,
            history: 0,
            picture: 0,
        };
        gameData.forEach((levelData, i) => {
            let levelModel = [];
            levelData.forEach(stageData => {
                switch(stageData.type) {
                    case `maps`:
                        levelModel.push({
                            type: `maps`,
                            elements: [],
                        });
                        for (let k = 0; k < stageData.number; k = k + 1) {
                            levelModel[levelModel.length - 1].elements.push(new mapComponent(gameElement, elementIndex.map));
                            elementIndex.map = elementIndex.map + 1;
                        }
                        break;
                    case `history`:
                        levelModel.push({
                            type: `history`,
                            element: new historyComponent(gameElement, stageData, elementIndex.history),
                        });
                        elementIndex.history = elementIndex.history + 1;
                        break;
                    case `pictures`:
                        levelModel.push({
                            type: `pictures`,
                            elements: [],
                            mapElement: new mapComponent(gameElement, elementIndex.map),
                        });
                        elementIndex.map = elementIndex.map + 1;
                        let corrects = [];
                        stageData.pictures.forEach(picture => corrects.push(picture.correct));
                        for (let k = 0; k < stageData.pictures.length; k = k + 1) {
                            const informationElement = new informationComponent(gameElement, stageData.pictures[k].informationSize, elementIndex.picture);
                            levelModel[levelModel.length - 1].elements.push({
                                item: new itemComponent(gameElement, stageData.pictures[k], elementIndex.picture, corrects, informationElement),
                                information: informationElement,
                            });
                            elementIndex.picture = elementIndex.picture + 1;
                        }
                        break;
                    default:
                        throw Error('This type of stage don`t work(');
                }
            });
            buttonElements.push(new startButtonComponent(gameElement, gameData.length, i));
            buttonElements[i].getElement().addEventListener(`click`, () => {
                buttonElements[i].getElement().style.filter = `brightness(${window.startButton.brightness.mouseOver})`;
                window.startStage(levelModel, buttonElements, closeButtonElement, pointsElement);
            });
        });
    };
})();
