import viewComponent from `js/view/view.js`;
export default class backgroundComponent extends viewComponent {
    constructor(gameElement) {
        super();
        gameElement.style.margin = `0`;
        gameElement.style.position = `relative`;
        this.getElement().style.position = `static`;
        this.setImage(`img/maps/background.png`);
        this.setWidth(100);
    }
};
