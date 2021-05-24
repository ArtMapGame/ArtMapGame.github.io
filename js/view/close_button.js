class closeButtonComponent extends buttonComponent {
    constructor(gameElement) {
        super(gameElement);
        this.setImage(`img/interface/exit.png`);
        this.setX(100 - window.controlButton.positionX - window.controlButton.width);
        this.setY(window.controlButton.positionX);
        this.setZ(2);
        this.setWidth(window.controlButton.width);
        this.setHeight(window.controlButton.width / window.height);
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
