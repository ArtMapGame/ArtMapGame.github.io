class viewComponent {
    constructor(gameElement) {
        this._element = null;
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
        gameElement.appendChild(this.getElement());
    }
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`div`);
            this.getElement().style.display = `inline-block`;
            this.getElement().style.position = `absolute`;
            this.getElement().style.backgroundSize = `100%`;
            this.getElement().style.backgroundRepeat = `no-repeat`;
        }
        return this._element;
    }
    setImage(src) {
        this.getElement().style.backgroundImage = `url(${src})`;
    }
    setX(x) {
        this.getElement().style.left = x - this.width / 2 + `%`;
        this.x = x;
    }
    setY(y) {
        this.getElement().style.top = y - this.height / 2 + `%`;
        this.y = y;
    }
    setZ(z) {
        this.getElement().style.zIndex = z;
    }
    setWidth(width) {
        this.getElement().style.width = width + `%`;
        this.width = width;
    }
    setHeight(height) {
        this.getElement().style.height = height + `%`;
        this.height = height;
    }
    hide() {
        this.getElement().style.transform = `scale(0)`;
    }
    show() {
        this.getElement().style.transform = `none`;
    }
};
