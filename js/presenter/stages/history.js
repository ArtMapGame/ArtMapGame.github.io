(() => {
    let closeHistoryBind;
    const closeHistory = (pictureElements, historyElements, mapElements, pictureData, stageNumbers, evt) => {
        if (evt.keyCode === 32 || evt.key === 32) {
            historyElements[0].hide();
            document.removeEventListener(`keydown`, closeHistoryBind);
            window.startStage(pictureElements, historyElements.slice(1), mapElements, pictureData, stageNumbers.slice(1));
        }
    };
    window.reciteHistory = (pictureElements, historyElements, mapElements, pictureData, stageNumbers) => {
        historyElements[0].show();
        closeHistoryBind = closeHistory.bind(null, pictureElements, historyElements, mapElements, pictureData, stageNumbers);
        document.addEventListener(`keydown`, closeHistoryBind);
    };
})();
