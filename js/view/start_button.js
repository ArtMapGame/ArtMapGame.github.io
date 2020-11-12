class startButtonComponent extends buttonComponent {
    constructor(levelNumber, index) {
        super();
        this.setImage(`img/buttons/play${index + 1}.png`);
        this.setX((100 - (window.viewData.startButton.width * levelNumber + window.viewData.startButton.space * (levelNumber - 1))) / 2 + (window.viewData.startButton.width + window.viewData.startButton.space) * index);
        this.setY((100 - window.viewData.startButton.width / window.viewData.windowHeight) / 2);
        this.setWidth(window.viewData.startButton.width);
        this.setHeight(window.viewData.startButton.width / window.viewData.windowHeight);
    }
};
