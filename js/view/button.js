import viewComponent from `js/view/view.js`;
export default class buttonComponent extends viewComponent {
    constructor(viewData, levelNumber, index) {
        super();
        this.viewData = viewData;
        this.setImage(`img/buttons/play${index + 1}.png`);
        this.setX((100 - viewData.button.width * levelNumber - viewData.button.space * (levelNumber - 1)) / 2 + (viewData.button.width + viewData.button.space) * (index - 1));
        this.setY((100 - viewData.button.width / viewData.windowHeight) / 2);
        this.setWidth(viewData.button.width);
        this.addMouseListeners();
    }
    addMouseListeners() {
        this.getElement().addEventListener(`mouseover`, () => {
            this.getElement().style.filter = `brightness(${this.viewData.button.brightness.mouseOver})`;
        });
        this.getElement().addEventListener(`mouseout`, () => {
            this.getElement().style.filter = `brightness(${this.viewData.button.brightness.normal})`;
        });
        this.getElement().addEventListener(`mousedown`, () => {
            this.getElement().style.filter = `brightness(${this.viewData.button.brightness.mouseDown})`;
        });
    }
};
