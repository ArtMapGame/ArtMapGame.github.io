class itemComponent extends viewComponent {
    constructor(data, index) {
        super();
        this.setImage(`img/items/item${index + 1}.png`);
        this.setX(0);
        this.setWidth(data.item.width);
        this.setHeight(data.item.height);
        this.hide();
        this.move = (evt) => {
            this.setX((this.startItem.x + evt.pageX - this.startMouse.x) * 100 / document.documentElement.clientWidth);
            this.setY((this.startItem.y + evt.pageY - this.startMouse.y) * 100 / (document.documentElement.clientWidth * window.viewData.windowHeight));
        }
        this.startMove = (evt) => {
            if (evt.which === 1 && !window.pictureMove) {
                this.startMouse = {
                    x: evt.pageX,
                    y: evt.pageY,
                };
                this.startItem = {
                    x: this.getElement().offsetLeft,
                    y: this.getElement().offsetTop,
                };
                window.pictureMove = true;
                document.addEventListener('mousemove', this.move);
            }
        };
        this.endMove = (evt) => {
            if (evt.which === 1) {
                window.pictureMove = false;
                document.removeEventListener('mousemove', this.move);
            }
        };
        this.addStartMoveListener();
    }
    addStartMoveListener() {
        this.getElement().addEventListener('mousedown', this.startMove);
        this.getElement().addEventListener('mouseup', this.endMove);
    }
};
