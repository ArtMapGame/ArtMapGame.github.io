(() => {
    window.startPictures = (pictureElements, historyElements, mapElements, pictureData, stageNumbers) => {
        for (let i = 0; i < stageNumbers[0].number; i++) {
            pictureElements[i].item.style.display = 'inline-block';
            pictureElements[i].item.style.left = pictureData[i].item.x - pictureData[i].item.width / 2;
            pictureElements[i].item.style.top = pictureData[i].item.y;
            //moveEvent
            //sizeEvent
            //informationEvent
        }
        //endEvent
        //closeEvent
    };
})();
