(() => {
    window.renderGame = gameData => {
        const gameElement = document.querySelector(`body`);
        new backgroundComponent(gameElement).getElement();
        const gameInformationElement = new gameInformationComponent(gameElement);
        new informationButtonComponent(gameElement, gameInformationElement).getElement();
        const closeButtonElement = new closeButtonComponent(gameElement);
        const pointsElement = new pointsComponent(gameElement);
        let buttonElements = [];
        gameData.forEach((levelData, i) => {
            let levelModel = [];
            levelData.forEach((stageData, j) => {
                switch(stageData.type) {
                    case `maps`:
                        levelModel.push({
                            type: `maps`,
                            elements: [],
                        });
                        for (let k = 0; k < stageData.number; k = k + 1) {
                            levelModel[levelModel.length - 1].elements.push(new mapComponent(gameElement, i, j, k));
                        }
                        break
                    case `history`:
                        levelModel.push({
                            type: `history`,
                            element: new historyComponent(gameElement, stageData, i, j),
                        });
                        break
                    case `pictures`:
                        levelModel.push({
                            type: `pictures`,
                            elements: [],
                            mapElement: new worldComponent(gameElement, i, j),
                        });
                        let corrects = [];
                        stageData.pictures.forEach(picture => corrects.push(picture.correct));
                        for (let k = 0; k < stageData.pictures.length; k = k + 1) {
                            const informationElement = new informationComponent(gameElement, stageData.pictures[k].text);
                            levelModel[levelModel.length - 1].elements.push({
                                item: new itemComponent(gameElement, stageData.pictures[k], corrects, informationElement, i, j, k),
                                information: informationElement,
                            });
                        }
                        break
                    default:
                        throw Error('This type of stage don`t work :(');
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
