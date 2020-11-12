(() => {
    let buttonElements;
    let closeButtonElement;
    window.startStage = (levelModel, buttonsParameter = null, closeButtonParameter = null) => {
        if (buttonsParameter) {
            buttonElements = buttonsParameter;
            closeButtonElement = closeButtonParameter;
            window.errors = [];
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
            buttonElements.forEach(buttonElement => buttonElement.show());
        }
    };
})();
