import {startStage} from `js/presenter/stage.js`;
export const openMaps = (pictureElements, historyElements, mapElements, pictureData, stageNumbers, viewData) => {
    if (stageNumbers[0].number > 0) {
        mapElements[0].show();
        setTimeout(() => {
            mapElements[0].hide();
            stageNumbers[0].number = stageNumbers[0].number - 1;
            openMaps(pictureElements, historyElements, mapElements.slice(1), pictureData, stageNumbers, viewData);
        }, viewData.mapInterval);
    } else {
        startStage(pictureElements, historyElements, mapElements, pictureData, stageNumbers.slice(1), viewData);
    }
};
