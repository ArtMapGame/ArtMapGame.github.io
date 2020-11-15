class viewComponent {
    constructor() {
        this._element = null;
        this.x = null;
        this.y = null;
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
        this.getElement().style.left = x + `%`;
        this.x = x;
    }
    setY(y) {
        this.getElement().style.top = y + `%`;
        this.y = y;
    }
    setZ(z) {
        this.getElement().style.zIndex = z;
    }
    setWidth(width) {
        this.getElement().style.width = width + `%`;
    }
    setHeight(height) {
        this.getElement().style.height = height + `%`;
    }
    hide() {
        this.getElement().style.transform = `scale(0)`;
    }
    show() {
        this.getElement().style.transform = `none`;
    }
};
