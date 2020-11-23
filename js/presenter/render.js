(() => {
    window.renderGame = gameData => {
        const gameElement = document.querySelector(`body`);
        gameElement.appendChild(new backgroundComponent(gameElement).getElement());
        const gameInformationElement = new gameInformationComponent();
        gameElement.appendChild(gameInformationElement.getElement());
        gameElement.appendChild(new informationButtonComponent(gameInformationElement).getElement());
        const closeButtonElement = new closeButtonComponent();
        gameElement.appendChild(closeButtonElement.getElement());
        const pointsElement = new pointsComponent;
        gameElement.appendChild(pointsElement.getElement());
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
                            levelModel[levelModel.length - 1].elements.push(new mapComponent(elementIndex.map));
                            elementIndex.map = elementIndex.map + 1;
                            gameElement.appendChild(levelModel[levelModel.length - 1].elements[levelModel[levelModel.length - 1].elements.length - 1].getElement());
                        }
                        break;
                    case `history`:
                        levelModel.push({
                            type: `history`,
                            element: new historyComponent(stageData, elementIndex.history),
                        });
                        elementIndex.history = elementIndex.history + 1;
                        gameElement.appendChild(levelModel[levelModel.length - 1].element.getElement());
                        break;
                    case `pictures`:
                        levelModel.push({
                            type: `pictures`,
                            elements: [],
                            mapElement: new mapComponent(elementIndex.map),
                        });
                        elementIndex.map = elementIndex.map + 1;
                        for (let k = 0; k < stageData.pictures.length; k = k + 1) {
                            const informationElement = new informationComponent(stageData.pictures[k].informationSize, elementIndex.picture);
                            levelModel[levelModel.length - 1].elements.push({
                                item: new itemComponent(stageData.pictures[k].item, elementIndex.picture, informationElement),
                                information: informationElement,
                            });
                            elementIndex.picture = elementIndex.picture + 1;
                            elementIndex.map = elementIndex.map + 1;
                            gameElement.appendChild(levelModel[levelModel.length - 1].elements[levelModel[levelModel.length - 1].elements.length - 1].item.getElement());
                            gameElement.appendChild(levelModel[levelModel.length - 1].elements[levelModel[levelModel.length - 1].elements.length - 1].information.getElement());
                        }
                        gameElement.appendChild(levelModel[levelModel.length - 1].mapElement.getElement());
                }
            });
            buttonElements.push(new startButtonComponent(gameData.length, i));
            buttonElements[i].getElement().addEventListener(`click`, () => {
                buttonElements[i].getElement().style.filter = `brightness(${window.viewData.startButton.brightness.mouseOver})`;
                window.startStage(levelModel, buttonElements, closeButtonElement, pointsElement);
            });
            gameElement.appendChild(buttonElements[i].getElement());
        });
        
    };
})();
