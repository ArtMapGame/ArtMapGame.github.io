(() => {
    let dataBind;
    const startNewStage = (evt) => {
        if (evt.keyCode === 32 || evt.key === 32) {
            for (let i = 0; i < dataBind.stageNumbers[0].number; i++) {
                dataBind.pictureElements[i].item.hide();
            }
            dataBind.mapElements[0].hide();
            document.removeEventListener(`keydown`, startNewStage);
            window.startStage(dataBind.pictureElements.slice(dataBind.stageNumbers[0].number), dataBind.historyElements, dataBind.mapElements.slice(1), dataBind.pictureData.slice(dataBind.stageNumbers[0].number), dataBind.stageNumbers.slice(1));
        }
    };
    const endStage = (evt) => {
        if (evt.keyCode === 32 || evt.key === 32) {
            let error = 0;
            for (let i = 0; i < dataBind.stageNumbers[0].number; i++) {
                if (Math.abs(dataBind.pictureElements[i].item.x + pictureData[i].item.width / 2 - dataBind.pictureData[i].item.correct.x) > dataBind.pictureData[i].item.width || Math.abs(dataBind.pictureElements[i].item.y - dataBind.pictureData[i].item.correct.y) > dataBind.pictureData[i].item.height) {
                    error = error + 1;
                }
                dataBind.pictureElements[i].information.hide();
                dataBind.pictureElements[i].item.resize(1);
                dataBind.pictureElements[i].item.setX(dataBind.pictureData[i].item.correct.x - dataBind.pictureData[i].item.width / 2);
                dataBind.pictureElements[i].item.setY(dataBind.pictureData[i].item.correct.y);
            }
            window.errors.push(error);
            document.removeEventListener(`keydown`, endStage);
            document.addEventListener(`keydown`, startNewStage);
        }
    };
    window.startPictures = (pictureElements, historyElements, mapElements, pictureData, stageNumbers) => {
        dataBind = {
            pictureElements: pictureElements,
            historyElements: historyElements,
            mapElements: mapElements,
            pictureData: pictureData,
            stageNumbers: stageNumbers,
        };
        mapElements[0].show();
        for (let i = 0; i < stageNumbers[0].number; i++) {
            pictureElements[i].item.show();
            pictureElements[i].item.setX(pictureData[i].item.start.x - pictureData[i].item.width / 2);
            pictureElements[i].item.setY(pictureData[i].item.start.y);
        }
        document.addEventListener(`keydown`, endStage);
    };
})();
