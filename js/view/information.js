class informationComponent extends viewComponent {
    constructor(data, index) {
        super();
        this.setImage(`img/informations/information${index + 1}.png`);
        this.setX(0);
        this.setWidth(data.informationWidth);
        this.hide();
    }
};
