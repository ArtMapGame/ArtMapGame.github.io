(() => {
    let buttonElements;
    window.startStage = (levelModel, buttonsParameter = null) => {
        if (buttonsParameter) {
            buttonElements = buttonsParameter;
            window.errors = [];
        }
        if (levelModel.length) {
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
