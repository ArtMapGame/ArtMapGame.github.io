import {startStage} from `js/presenter/stage.js`;
let closeHistoryBind;
const closeHistory = (pictureElements, historyElements, mapElements, pictureData, stageNumbers, viewData, evt) => {
    if (evt.keyCode === 32 || evt.key === 32) {
        historyElements[0].hide();
        document.removeEventListener(`keydown`, closeHistoryBind);
        startStage(pictureElements, historyElements.slice(1), mapElements, pictureData, stageNumbers.slice(1), viewData);
    }
};
export const reciteHistory = (pictureElements, historyElements, mapElements, pictureData, stageNumbers, viewData) => {
    historyElements[0].show();
    closeHistoryBind = closeHistory.bind(null, pictureElements, historyElements, mapElements, pictureData, stageNumbers, viewData);
    document.addEventListener(`keydown`, closeHistoryBind);
};
