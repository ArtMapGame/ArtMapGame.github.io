(() => {
    window.startStage = (picturesElements, historyElements, mapElements, pictureData, stageNumbers) => {
        switch(stageNumbers[0].type) {
            case 'maps':
                window.openMaps(picturesElements, historyElements, mapElements, pictureData, stageNumbers);
                break
            case 'history':
                historyElements[0].style.display = 'inline-block';
                document.addEventListener('keydown', window.closeHistory.bind(null, picturesElements, historyElements, mapElements, pictureData, stageNumbers));
                break
            case 'pictures':
                //
                break
            default:
                throw Error('Такого типа нету((((((((((((((((((((((((');
        }
    };
})();
