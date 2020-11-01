(() => {
    window.openMaps = (pictureElements, historyElements, mapElements, pictureData, stageNumbers) => {
        if (stageNumbers[0].number > 0) {
            mapElements[0].style.display = 'inline-block';
            setTimeout(() => {
                mapElements[0].style.display = 'none';
                stageNumbers[0].number = stageNumbers[0].number - 1;
                window.openMaps(pictureElements, historyElements, mapElements.slice(1), pictureData, stageNumbers);
            }, window.VIEW_DATA.mapInterval);
        } else {
            window.startStage(pictureElements, historyElements, mapElements, pictureData, stageNumbers.slice(1));
        }
    };
})();
