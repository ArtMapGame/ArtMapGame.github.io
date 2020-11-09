(() => {
    let dataBind;
    const closeHistory = (evt) => {
        if (evt.keyCode === 32 || evt.key === 32) {
            dataBind.historyElements[0].hide();
            document.removeEventListener(`keydown`, closeHistory);
            window.startStage(dataBind.pictureElements, dataBind.historyElements.slice(1), dataBind.mapElements, dataBind.pictureData, dataBind.stageNumbers.slice(1));
        }
    };
    window.reciteHistory = (pictureElements, historyElements, mapElements, pictureData, stageNumbers) => {
        historyElements[0].show();
        dataBind = {
            pictureElements: pictureElements,
            historyElements: historyElements,
            mapElements: mapElements,
            pictureData: pictureData,
            stageNumbers: stageNumbers,
        };
        document.addEventListener(`keydown`, closeHistory);
    };
})();
