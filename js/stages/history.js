(() => {
    window.closeHistory = (picturesElements, historyElements, mapElements, pictureData, stageNumbers, evt) => {
        if (evt.keyCode === 32 || evt.key === 32) {
            historyElements[0].style.display = 'none';
            document.removeEventListener('keydown', closeHistory.bind(null, picturesElements, historyElements, mapElements, pictureData, stageNumbers));
            window.startStage(picturesElements, historyElements.slice(1), mapElements, pictureData, stageNumbers.slice(1));
        }
    };
})();
