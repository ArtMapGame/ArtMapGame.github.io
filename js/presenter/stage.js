(() => {
    let buttonElements;
    window.startStage = (pictureElements, historyElements, mapElements, pictureData, stageNumbers, buttons=null) => {
        if (buttons) {
            buttonElements = buttons;
        }
        if (stageNumbers.length) {
            switch(stageNumbers[0].type) {
                case `maps`:
                    window.openMaps(pictureElements, historyElements, mapElements, pictureData, stageNumbers);
                    break
                case `history`:
                    window.reciteHistory(pictureElements, historyElements, mapElements, pictureData, stageNumbers);
                    break
                case `pictures`:
                    window.startPictures(pictureElements, historyElements, mapElements, pictureData, stageNumbers);
                    break
                default:
                    throw Error(`${stageNumbers[0].type} not defined(`);
            }
        } else {
            buttonElements.forEach(buttonElement => buttonElement.show());
        }
    };
})();
