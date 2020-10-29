(function () {
    const closeHistory = (picturesElements, historyElements, pictureData, stageNumbers, evt) => {
        if (evt.keyCode === 32 || evt.key === 32) {
            historyElements[0].style.display = 'none';
            document.removeEventListener('keydown', closeHistory.bind(null, picturesElements, historyElements, pictureData, stageNumbers));
            window.startStage(picturesElements, historyElements.slice(1), pictureData, stageNumbers.slice(1));
        }
    };
    window.startStage = function(picturesElements, historyElements, pictureData, stageNumbers) {
        switch(stageNumbers[0].type) {
            case 'maps':
                //
                break
            case 'history':
                historyElements[0].style.display = 'inline-block';
                document.addEventListener('keydown', closeHistory.bind(null, picturesElements, historyElements, pictureData, stageNumbers));
                break
            case 'pictures':
                //
                break
            default:
                throw Error('Такого типа нету((((((((((((((((((((((((');
        }
    };
})();
