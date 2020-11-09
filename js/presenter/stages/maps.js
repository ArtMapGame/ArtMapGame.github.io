(() => {
    window.openMaps = (pictureElements, historyElements, mapElements, pictureData, stageNumbers, mapNumber = stageNumbers[0].number) => {
        if (mapNumber > 0) {
            mapElements[0].show();
            setTimeout(() => {
                mapElements[0].hide();
                window.openMaps(pictureElements, historyElements, mapElements.slice(1), pictureData, stageNumbers, mapNumber - 1);
            }, window.viewData.mapInterval);
        } else {
            window.startStage(pictureElements, historyElements, mapElements, pictureData, stageNumbers.slice(1));
        }
    };
})();
