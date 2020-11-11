(() => {
    let levelModel;
    const startNewStage = evt => {
        if (evt.keyCode === 32 || evt.key === 32) {
            levelModel[0].elements.forEach(element => {
                element.information.hide();
                element.item.resize(1);
                element.item.hide();
            });
            levelModel[0].mapElement.hide();
            document.removeEventListener(`keydown`, startNewStage);
            window.startStage(levelModel.slice(1));
        }
    };
    const endStage = evt => {
        if (evt.keyCode === 32 || evt.key === 32) {
            let error = 0;
            levelModel[0].elements.forEach(element => {
                if (Math.abs(element.item.x + element.item.data.width / 2 - element.item.data.correct.x) > element.item.data.width || Math.abs(element.item.y - element.item.data.correct.y) > element.item.data.height) {
                    error = error + 1;
                }
                element.information.hide();
                element.item.resize(1);
                element.item.setX(element.item.data.correct.x - element.item.data.width / 2);
                element.item.setY(element.item.data.correct.y);
            });
            window.errors.push(error);
            document.removeEventListener(`keydown`, endStage);
            document.addEventListener(`keydown`, startNewStage);
        }
    };
    window.startPictures = levelParameter => {
        levelModel = levelParameter;
        levelModel[0].mapElement.show();
        levelModel[0].elements.forEach(element => {
            element.item.show();
            element.item.setX(element.item.data.start.x - element.item.data.width / 2);
            element.item.setY(element.item.data.start.y);
        });
        document.addEventListener(`keydown`, endStage);
    };
})();
