(() => {
    let buttonElements;
    let closeButtonElement;
    let pointsElement;
    window.startStage = (levelModel, buttonsParameter = null, closeButtonParameter = null, pointsParameter = null) => {
        if (buttonsParameter) {
            buttonElements = buttonsParameter;
            closeButtonElement = closeButtonParameter;
            pointsElement = pointsParameter;
            buttonElements.forEach(buttonElement => buttonElement.hide());
            pointsElement.hide();
            closeButtonElement.show();
            window.points = [];
        }
        if (levelModel.length) {
            closeButtonElement.stageModel = levelModel[0];
            closeButtonElement.buttonElements = buttonElements;
            switch(levelModel[0].type) {
                case `maps`:
                    window.openMaps(levelModel);
                    break;
                case `history`:
                    window.reciteHistory(levelModel);
                    break;
                case `pictures`:
                    window.startPictures(levelModel);
            }
        } else {
            closeButtonElement.hide();
            pointsElement.resultLog();
            buttonElements.forEach(buttonElement => buttonElement.show());
        }
    };
})();
