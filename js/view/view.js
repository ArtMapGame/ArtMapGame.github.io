export default class viewComponent {
    constructor() {
        this._element = null;
    }
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`img`);
            this.getElement().style.position = `absolute`;
        }
        return this._element;
    }
    setImage(src) {
        this.getElement().src = src;
    }
    setX(x) {
        this.getElement().style.left = x + `%`;
    }
    setY(y) {
        this.getElement().style.top = y + `%`;
    }
    setWidth(width) {
        this.getElement().style.width = width + `%`;
    }
    hide() {
        this.getElement().style.display = `none`;
    }
    show() {
        this.getElement().style.display = `inline-block`;
    }
};
