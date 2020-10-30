(() => {
    window.makeButtons = () => {
        const buttonElements = [];
        for (let i = 1; i < window.LEVEL_NUMBERS.length + 1; i++) {
            const buttonElement = document.createElement('img');
            buttonElement.src = `img/buttons/play${i}.png`;
            buttonElement.style.position = 'absolute';
            buttonElement.style.left = ((100 - window.VIEW_DATA.button.width * window.LEVEL_NUMBERS.length - window.VIEW_DATA.button.space * (window.LEVEL_NUMBERS.length - 1)) / 2 + (window.VIEW_DATA.button.width + window.VIEW_DATA.button.space) * (i - 1)) + '%';
            buttonElement.style.top = (100 - window.VIEW_DATA.button.width / window.VIEW_DATA.windowHeight) / 2 + '%';
            buttonElement.style.width = window.VIEW_DATA.button.width + '%';
            buttonElements.push(buttonElement);
        }
        return buttonElements;
    };
})();
