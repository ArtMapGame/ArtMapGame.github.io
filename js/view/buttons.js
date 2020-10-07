(function () {
    const buttonWidth = '13%';
    window.makeButtons = function(levelNumber) {
        const buttonElements = [];
        for (let i = 1; i < levelNumber + 1; i++) {
            const buttonElement = document.createElement('img');
            buttonElement.src = `img/buttons/play${i}.png`;
            buttonElement.style.position = 'absolute';
            buttonElement.style.left = '0';
            buttonElement.style.width = buttonWidth;
            buttonElements.push(buttonElement);
        }
        return buttonElements;
    };
})();
