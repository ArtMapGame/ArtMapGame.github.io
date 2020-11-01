(() => {
    window.startStage = (pictureElements, historyElements, mapElements, pictureData, stageNumbers) => {
        switch(stageNumbers[0].type) {
            case 'maps':
                window.openMaps(pictureElements, historyElements, mapElements, pictureData, stageNumbers);
                break
            case 'history':
                window.reciteHistory(pictureElements, historyElements, mapElements, pictureData, stageNumbers);
                break
            case 'pictures':
                window.startPictures(pictureElements, historyElements, mapElements, pictureData, stageNumbers);
                break
            default:
                throw Error('Такого типа нету((((((((((((((((((((((((');
        }
    };
})();
