import backgroundComponent from `js/view/background.js`;
import mapComponent from `js/view/map.js`;
import historyComponent from `js/view/history.js`;
import itemComponent from `js/view/item.js`;
import informationComponent from `js/view/information.js`;
import buttonComponent from `js/view/button.js`;
import startLevel from `js/presenter/level.js`;
export const renderGame = (viewData, levelNumbers, pictureData) => {
    const gameElement = document.querySelector(`body`);
    const backgroundElement = new backgroundComponent(gameElement);
    gameElement.appendChild(backgroundElement);
    let mapElements = [];
    let i = 0;
    levelNumbers.forEach(level => level.forEach(stage => {
        if (stage.type === `maps`) {
            for (let j = 0; j < stage.number; j++) {
                i = i + 1;
                mapElements.push(new mapComponent(i));
                gameElement.appendChild(mapElements[-1]);
            }
        }
    }));
    let historyElements = [];
    viewData.historyWidth.forEach((width, index) => {
        historyElements.push(new historyComponent(width, index));
        gameElement.appendChild(historyElements[-1]);
    });
    let pictureElements = [];
    pictureData.forEach((data, index) => {
        pictureElements.push({
            item: new itemComponent(data, index),
            information: new informationComponent(data, index),
        });
        gameElement.appendChild(pictureElements[-1].item);
        gameElement.appendChild(pictureElements[-1].information);
    });
    let buttonElements = [];
    for (let i = 0; i < levelNumbers.length; i++) {
        buttonElements.push(new buttonComponent(viewData, levelNumbers.length, i));
        buttonElements[-1].getElement().addEventListener(`mouseup`, () => {
            buttonElements[-1].getElement().style.filter = `brightness(${viewData.button.brightness.mouseOver})`;
            buttonElements.forEach(button => button.hide());
            backgroundElement.hide();
            let minPicture = 0;
            let minHistory = 0;
            let minMap = 0;
            for (let j = 0; j < i; j++) {
                levelNumbers[j].forEach((stage) => {
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
            levelNumbers[i].forEach((stage) => {
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
            startLevel(pictureElements.slice(minPicture, maxPicture), historyElements.slice(minHistory, maxHistory), mapElements.slice(minMap, maxMap), pictureData.slice(minPicture, maxPicture), levelNumbers[i]);
        });
        gameElement.appendChild(buttonElements[-1].getElement());
    }
}
