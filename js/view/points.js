class pointsComponent extends viewComponent {
    constructor() {
        super();
        this.setX(0);
        this.setY(75 + window.viewData.startButton.width / window.viewData.windowHeight / 4 - window.viewData.points.size / 2);
        this.setWidth(100);
        this.getElement().style.textAlign = `center`;
        this.getElement().style.fontSize = `${window.viewData.points.size}vw`;
        this.getElement().style.fontFamily = window.viewData.points.style;
        this.hide();
    }
    resultLog() {
        this.getElement().textContent = this.getResult();
        this.show();
    }
    getResult() {
        let result = ``;
        window.points.forEach(point => {
            result = `${result} ${point.number}/${point.max}`;
        });
        return result;
    }
};
