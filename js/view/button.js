class buttonComponent extends viewComponent {
    constructor(index) {
        super();
        this.setImage(`img/buttons/play${index + 1}.png`);
        this.setX((100 - (window.viewData.button.width * window.levelNumbers.length + window.viewData.button.space * (window.levelNumbers.length - 1))) / 2 + (window.viewData.button.width + window.viewData.button.space) * index);
        this.setY((100 - window.viewData.button.width / window.viewData.windowHeight) / 2);
        this.setWidth(window.viewData.button.width);
        this.setHeight(window.viewData.button.width / window.viewData.windowHeight);
        this.addMouseListeners();
    }
    addMouseListeners() {
        this.getElement().addEventListener(`mouseover`, () => {
            this.getElement().style.filter = `brightness(${window.viewData.button.brightness.mouseOver})`;
        });
        this.getElement().addEventListener(`mouseout`, () => {
            this.getElement().style.filter = `brightness(${window.viewData.button.brightness.normal})`;
        });
        this.getElement().addEventListener(`mousedown`, () => {
            this.getElement().style.filter = `brightness(${window.viewData.button.brightness.mouseDown})`;
        });
    }
};
