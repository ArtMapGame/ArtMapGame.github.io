class mapComponent extends viewComponent {
    constructor(gameElement, index) {
        super(gameElement);
        this.setImage(`img/maps/world${index + 1}.png`);
        this.setX(0);
        this.setWidth(100);
        this.setHeight(100);
        this.hide();
    }
};
