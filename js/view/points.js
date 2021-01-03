class pointsComponent extends viewComponent {
    constructor(gameElement) {
        super(gameElement);
        this.setX(0);
        this.setY(75 + window.startButton.width / 4 - window.pointFont.size / 2);
        this.setWidth(100);
        this.getElement().style.textAlign = `center`;
        this.getElement().style.fontSize = `${window.pointFont.size}vw`;
        this.getElement().style.fontFamily = window.pointFont.style;
        this.getElement().style.color = window.pointFont.color;
        this.getElement().style.whiteSpace = 'pre-wrap';
        this.hide();
    }
    resultLog() {
        this.getElement().textContent = this.getResult();
        this.show();
    }
    getResult() {
        let result = ``;
        window.points.forEach((point, i) => {
            if (i != 0) {
                result = `${result}     ${point.number}/${point.max}`;
            } else {
                result = `${point.number}/${point.max}`;
            }
        });
        return result;
    }
};
