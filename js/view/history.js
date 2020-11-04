import viewComponent from `js/view/view.js`;
export default class historyComponent extends viewComponent {
    constructor(width, index) {
        super();
        this.setImage(`img/informations/information${index + 1}.png`);
        this.setX((100 - width) / 2);
        this.setWidth(width);
        this.hide();
    }
};
