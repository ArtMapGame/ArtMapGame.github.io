class closeButtonComponent extends buttonComponent {
    constructor() {
        super();
        this.setImage(`img/buttons/exit.png`);
        this.setX(100 - window.viewData.controlButton.positionX - window.viewData.controlButton.width);
        this.setY(window.viewData.controlButton.positionX / window.viewData.windowHeight);
        this.setZ(2);
        this.setWidth(window.viewData.controlButton.width);
        this.setHeight(window.viewData.controlButton.width / window.viewData.windowHeight);
        this.hide();
        this.addInformationListener();
    }
    addInformationListener() {
        this.getElement().addEventListener(`click`, evt => {
            if (evt.which === 1) {
                switch(this.stageModel.type) {
                    case `maps`:
                        window.mapsClosed = true;
                        this.stageModel.elements.forEach(element => element.hide());
                        break;
                    case `history`:
                        this.stageModel.element.hide();
                        break;
                    case `pictures`:
                        document.removeEventListener(`keydown`, window.endStage);
                        document.removeEventListener(`keydown`, window.startNewStage);
                        this.stageModel.elements.forEach(element => {
                            element.item.hide();
                            element.information.hide();
                        });
                        this.stageModel.mapElement.hide();
                }
                this.buttonElements.forEach(buttonElement => buttonElement.show());
                this.hide();
            }
        });
    }
};
