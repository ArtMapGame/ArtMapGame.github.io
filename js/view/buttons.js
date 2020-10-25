(function () {
    window.makeButtons = function(levelNumber, viewData) {
        const buttonElements = [];
        for (let i = 1; i < levelNumber.length + 1; i++) {
            const buttonElement = document.createElement('img');
            buttonElement.src = `img/buttons/play${i}.png`;
            buttonElement.style.position = 'absolute';
            buttonElement.style.left = ((100 - viewData.width * levelNumber.length - viewData.space * (levelNumber.length - 1)) / 2 + (viewData.width + viewData.space) * (i - 1)) + '%';
            buttonElement.style.top = (100 - viewData.width / window.height) / 2 + '%';
            buttonElement.style.width = viewData.width + '%';
            buttonElements.push(buttonElement);
        }
        return buttonElements;
    };
})();
