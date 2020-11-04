import viewComponent from `js/view/view.js`;
export default class itemComponent extends viewComponent {
    constructor(data, index) {
        super();
        this.setImage(`img/items/item${index + 1}.png`);
        this.setX(0);
        this.setWidth(data.item.width);
        this.hide();
    }
};
