//import {addStartMoveListener} from `js/presenter/stages/move.js`;
import {startStage} from `js/presenter/stage.js`;
export const startPictures = (pictureElements, historyElements, mapElements, pictureData, stageNumbers, viewData) => {
    for (let i = 0; i < stageNumbers[0].number; i++) {
        pictureElements[i].item.show();
        pictureElements[i].item.setX(pictureData[i].item.x - pictureData[i].item.width / 2);
        pictureElements[i].item.setY(pictureData[i].item.y);
        //addStartMoveListener(pictureElements[i].item);
        //sizeEvent
        //informationEvent
    }
    //endEvent
    //closeEvent
};
