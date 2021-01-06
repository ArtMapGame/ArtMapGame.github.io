(() => {
    let levelModel;
    window.startNewStage = evt => {
        if (evt.keyCode === 32 || evt.key === 32) {
            levelModel[0].elements.forEach(element => {
                element.information.hide();
                element.item.resize(1);
                element.item.hide();
            });
            levelModel[0].mapElement.hide();
            document.removeEventListener(`keydown`, window.startNewStage);
            window.startStage(levelModel.slice(1));
        }
    };
    window.endStage = evt => {
        if (evt.keyCode === 32 || evt.key === 32) {
            let points = 0;
            levelModel[0].elements.forEach(element => {
                if (element.item.answer) {
                    points = points + 1;
                }
                element.information.hide();
                element.item.resize(window.item.answerScale);
                element.item.setX(window.random(element.item.correct.x - element.item.correct.width + (element.item.width * window.item.answerScale / 2), element.item.correct.x + element.item.correct.width - (element.item.width * window.item.answerScale / 2)));
                element.item.setY(window.random(element.item.correct.y - element.item.correct.height + (element.item.height * window.item.answerScale / 2), element.item.correct.y + element.item.correct.height - (element.item.height * window.item.answerScale / 2)));
            });
            window.points.push({
                number: points,
                max: levelModel[0].elements.length,
            });
            document.removeEventListener(`keydown`, window.endStage);
            document.addEventListener(`keydown`, window.startNewStage);
        }
    };
    window.startPictures = levelParameter => {
        levelModel = levelParameter;
        levelModel[0].mapElement.show();
        levelModel[0].elements.forEach(element => {
            element.item.show();
            element.item.answer = false;
            element.item.setX(element.item.start.x);
            element.item.setY(element.item.start.y);
        });
        document.addEventListener(`keydown`, window.endStage);
    };
})();
