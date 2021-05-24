class historyComponent extends viewComponent {
    constructor(gameElement, size, i, j) {
        super(gameElement);
        this.setImage(`img/level${i + 1}/stage${j + 1}/history.png`);
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
        this.hide();
    }
};
