class informationButtonComponent extends buttonComponent {
    constructor(gameElement, informationElement) {
        super(gameElement);
        this.informationElement = informationElement;
        this.setImage(`img/buttons/i.png`);
        this.setX(window.viewData.controlButton.positionX);
        this.setY(window.viewData.controlButton.positionX);
        this.setZ(2);
        this.setWidth(window.viewData.controlButton.width);
        this.setHeight(window.viewData.controlButton.width / window.viewData.windowHeight);
        this.addInformationListener();
    }
    addInformationListener() {
        this.getElement().addEventListener(`mousedown`, evt => {
            if (evt.which === 1) {
                this.informationElement.show();
            }
        });
        document.addEventListener(`mouseup`, evt => {
            if (evt.which === 1) {
                this.informationElement.hide();
            }
        });
    }
};
