class buttonComponent extends viewComponent {
    constructor(gameElement) {
        super(gameElement);
        this.addMouseListeners();
    }
    addMouseListeners() {
        this.getElement().addEventListener(`mouseover`, () => {
            this.getElement().style.filter = `brightness(${window.startButton.brightness.mouseOver})`;
        });
        this.getElement().addEventListener(`mouseout`, () => {
            this.getElement().style.filter = `brightness(${window.startButton.brightness.normal})`;
        });
        this.getElement().addEventListener(`mousedown`, () => {
            this.getElement().style.filter = `brightness(${window.startButton.brightness.mouseDown})`;
        });
        this.getElement().addEventListener(`mouseup`, () => {
            this.getElement().style.filter = `brightness(1)`;
        });
    }
};
