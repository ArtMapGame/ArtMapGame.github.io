class mapComponent extends viewComponent {
    constructor(index) {
        super();
        this.setImage(`img/maps/world${index + 1}.png`);
        this.setX(0);
        this.setWidth(100);
        this.hide();
    }
};
