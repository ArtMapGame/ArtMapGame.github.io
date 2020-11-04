import {openMaps} from `js/presenter/stages/maps.js`;
import {reciteHistory} from `js/presenter/stages/history.js`;
import {startPictures} from `js/presenter/stages/pictures.js`;
export const startStage = (pictureElements, historyElements, mapElements, pictureData, stageNumbers) => {
    switch(stageNumbers[0].type) {
        case `maps`:
            openMaps(pictureElements, historyElements, mapElements, pictureData, stageNumbers);
            break
        case `history`:
            reciteHistory(pictureElements, historyElements, mapElements, pictureData, stageNumbers);
            break
        case `pictures`:
            startPictures(pictureElements, historyElements, mapElements, pictureData, stageNumbers);
            break
        default:
            throw Error(`Такого типа нету((((((((((((((((((((((((`);
    }
};
