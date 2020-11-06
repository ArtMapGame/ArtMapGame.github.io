(() => {
    window.startPictures = (pictureElements, historyElements, mapElements, pictureData, stageNumbers) => {
        mapElements[0].show();
        for (let i = 0; i < stageNumbers[0].number; i++) {
            pictureElements[i].item.show();
            pictureElements[i].item.setX(pictureData[i].item.x - pictureData[i].item.width / 2);
            pictureElements[i].item.setY(pictureData[i].item.y);
        }
        //endEvent
        //closeEvent
    };
})();
