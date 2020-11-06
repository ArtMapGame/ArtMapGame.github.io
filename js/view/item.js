class itemComponent extends viewComponent {
    constructor(data, index, informationElement) {
        super();
        this.informationElement = informationElement;
        this.setImage(`img/items/item${index + 1}.png`);
        this.setX(0);
        this.setWidth(data.width);
        this.setHeight(data.height);
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
                document.addEventListener(`mousemove`, this.move);
            }
        };
        this.endMove = (evt) => {
            if (evt.which === 1) {
                window.pictureMove = false;
                document.removeEventListener(`mousemove`, this.move);
            }
        };
        this.addMoveListener();
        this.addResizeListener();
        this.addInformationListener();
    }
    addMoveListener() {
        this.getElement().addEventListener(`mousedown`, this.startMove);
        document.addEventListener(`mouseup`, this.endMove);
    }
    addResizeListener() {
        this.size = 1;
        this.getElement().addEventListener(`wheel`, (evt) => {
            this.size = this.size - evt.deltaY / window.viewData.item.resizeSpeed;
            if (this.size < 1) {
                this.size = 1;
            }
            if (this.size > window.viewData.item.transform) {
                this.size = window.viewData.item.transform;
            }
            this.getElement().style.transform = `scale(${this.size})`;
        });
    }
    addInformationListener() {
        this.getElement().addEventListener(`mousedown`, (evt) => {
            if (evt.which === 2) {
                this.informationElement.show();
            }
        });
        document.addEventListener(`mouseup`, (evt) => {
            if (evt.which === 2) {
                this.informationElement.hide();
            }
        });
    }
};
