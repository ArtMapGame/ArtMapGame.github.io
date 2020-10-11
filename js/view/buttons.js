(function () {
    const buttonWidth = 13;
    const buttonSpace = 13;
    window.makeButtons = function(levelNumber, mapElement) {
        const buttonElements = [];
        for (let i = 1; i < levelNumber + 1; i++) {
            const buttonElement = document.createElement('img');
            buttonElement.src = `img/buttons/play${i}.png`;
            buttonElement.style.position = 'absolute';
            buttonElement.style.left = ((100 - buttonWidth * levelNumber - buttonSpace * (levelNumber - 1)) / 2 + (buttonWidth + buttonSpace) * (i - 1)) + '%';
            buttonElement.style.top = (100 - buttonWidth / window.height) / 2 + '%';
            buttonElement.style.width = buttonWidth + '%';
            buttonElements.push(buttonElement);
        }
        return buttonElements;
    };
})();
