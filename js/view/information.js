class informationComponent extends viewComponent {
    constructor(gameElement, text) {
        super(gameElement);
        this.setWidth(100);
        this.setX(50);
        this.setY(50);
        this.getElement().textContent = text;
        this.getElement().style.boxSizing = `border-box`;
        this.getElement().style.padding = `0 ${window.informationFont.padding}% 0 ${window.informationFont.padding}%`;
        this.getElement().style.textAlign = `center`;
        this.getElement().style.fontSize = `${window.informationFont.size}vw`;
        this.getElement().style.fontFamily = window.informationFont.style;
        this.getElement().style.color = window.informationFont.color;
        this.getElement().style.fontWeight = `bold`;
        this.setZ(2);
        this.hide();
    }
};
