class worldComponent extends viewComponent {
    constructor(gameElement, i, j) {
        super(gameElement);
        this.setImage(`img/level${i + 1}/stage${j + 1}/world.png`);
        this.setX(0);
        this.setWidth(100);
        this.setHeight(100);
        this.hide();
    }
};
