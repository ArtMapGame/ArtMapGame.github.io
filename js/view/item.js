class itemComponent extends viewComponent {
    constructor(gameElement, data, index, corrects, informationParameter) {
        super(gameElement);
        this.start = {};
        this.start.x = data.start.x;
        this.start.y = data.start.y;
        this.correct = {};
        this.correct.x = data.correct.x;
        this.correct.y = data.correct.y;
        this.correct.width = data.correct.width;
        this.correct.height = data.correct.height;
        this.informationElement = informationParameter;
        this.setImage(`img/items/item${index + 1}.png`);
        ////////////////////////////////////////////////////////
        this.getElement().style.backgroundColor = '#f00';
        ////////////////////////////////////////////////////////
        this.setX(0);
        this.setZ(1);
        this.setWidth(data.width);
        this.setHeight(data.height);
        this.hide();
        this.move = evt => {
            this.setX(this.startItem.x + (evt.pageX - this.startMouse.x) * 100 / document.documentElement.clientWidth);
            this.setY(this.startItem.y + (evt.pageY - this.startMouse.y) * 100 / (document.documentElement.clientWidth * window.height));
            this.answer = false;
            if ((Math.abs(this.x - this.correct.x) < this.width / 2 + this.correct.width) && (Math.abs(this.y - this.correct.y) < this.height / 2 + this.correct.height)) {
                this.answer = true;
            }
            this.resize(this.size);
            corrects.forEach(correct => {
                if ((Math.abs(this.x - correct.x) < this.width / 2 + correct.width) && (Math.abs(this.y - correct.y) < this.height / 2 + correct.height)) {
                    this.resize(window.item.answerScale);
                }
            });
        }
        this.addMoveListener();
        this.addResizeListener();
        this.addInformationListener();
    }
    addMoveListener() {
        this.getElement().addEventListener(`mousedown`, evt => {
            if (evt.which === 1 && !window.pictureMove) {
                this.startMouse = {
                    x: evt.pageX,
                    y: evt.pageY,
                };
                this.startItem = {
                    x: this.x,
                    y: this.y,
                };
                window.pictureMove = true;
                document.addEventListener(`mousemove`, this.move);
            }
        });
        document.addEventListener(`mouseup`, evt => {
            if (evt.which === 1) {
                window.pictureMove = false;
                document.removeEventListener(`mousemove`, this.move);
            }
        });
    }
    addResizeListener() {
        this.size = 1;
        this.getElement().addEventListener(`wheel`, (evt) => {
            this.size = this.size - evt.deltaY / window.item.resizeSpeed;
            if (this.size < 1) {
                this.size = 1;
            }
            if (this.size > window.item.transform) {
                this.size = window.item.transform;
            }
            this.resize(this.size);
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
    resize(scale) {
        this.getElement().style.transform = `scale(${scale})`;
    }
};
