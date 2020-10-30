(() => {
    window.makeButtons = (levelNumber, buttonData, windowHeight) => {
        const buttonElements = [];
        for (let i = 1; i < levelNumber.length + 1; i++) {
            const buttonElement = document.createElement('img');
            buttonElement.src = `img/buttons/play${i}.png`;
            buttonElement.style.position = 'absolute';
            buttonElement.style.left = ((100 - buttonData.width * levelNumber.length - buttonData.space * (levelNumber.length - 1)) / 2 + (buttonData.width + buttonData.space) * (i - 1)) + '%';
            buttonElement.style.top = (100 - buttonData.width / windowHeight) / 2 + '%';
            buttonElement.style.width = buttonData.width + '%';
            buttonElements.push(buttonElement);
        }
        return buttonElements;
    };
})();
