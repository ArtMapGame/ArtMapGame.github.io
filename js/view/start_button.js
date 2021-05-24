class startButtonComponent extends buttonComponent {
    constructor(gameElement, levelNumber, index) {
        super(gameElement);
        this.setImage(`img/interface/play${index + 1}.png`);
        this.setX((100 - (window.startButton.width * levelNumber + window.startButton.space * (levelNumber - 1))) / 2 + (window.startButton.width + window.startButton.space) * index);
        this.setY((100 - window.startButton.width / window.height) / 2);
        this.setWidth(window.startButton.width);
        this.setHeight(window.startButton.width / window.height);
    }
};
