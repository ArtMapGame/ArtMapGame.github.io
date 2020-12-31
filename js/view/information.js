class informationComponent extends viewComponent {
    constructor(gameElement, size, index) {
        super(gameElement);
        this.setImage(`img/informations/information${index + 1}.png`);
        if (size.width) {
            this.setX((100 - size.width) / 2);
            this.setWidth(size.width);
            this.setHeight(100);
        } else {
            this.setX(0);
            this.setY((100 - size.height) / 2);
            this.setWidth(100);
            this.setHeight(size.height);
        }
        this.setZ(2);
        this.hide();
    }
};
