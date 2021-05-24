class backgroundComponent {
    constructor(gameElement) {
        gameElement.style.margin = `0`;
        gameElement.style.position = `relative`;
        this._element = null;
        gameElement.appendChild(this.getElement());
    }
    getElement() {
        if (!this._element) {
            this._element = document.createElement(`img`);
            this._element.src = `img/interface/background.png`;
            this._element.style.width = `100%`;
        }
        return this._element;
    }
};
