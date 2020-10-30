(() => {
    window.openMaps = (picturesElements, historyElements, mapElements, pictureData, stageNumbers, mapNumber) => {
        if (mapNumber > 0) {
            mapElements[0].style.display = 'inline-block';
            setTimeout(() => {
                mapElements[0].style.display = 'none';
                window.openMaps(picturesElements, historyElements, mapElements.slice(1), pictureData, stageNumbers, mapNumber - 1);
            }, window.VIEW_DATA.mapInterval);
        } else {
            window.startStage(picturesElements, historyElements, mapElements, pictureData, stageNumbers.slice(1));
        }
    };
})();
