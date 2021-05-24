class mapComponent extends viewComponent {
    constructor(gameElement, i, j, k) {
        super(gameElement);
        this.setImage(`img/level${i + 1}/stage${j + 1}/map${k + 1}.png`);
        this.setX(0);
        this.setWidth(100);
        this.setHeight(100);
        this.hide();
    }
};
