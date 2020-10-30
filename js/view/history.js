(() => {
    window.makeHistory = () => {
        const historyElements = [];
        window.VIEW_DATA.historyWidth.forEach((width, index) => {
            const historyElement = document.createElement('img');
            historyElement.src = `img/levels/level${index + 1}.png`;
            historyElement.style.position = 'absolute';
            historyElement.style.left = (100 - width) / 2 + '%';
            historyElement.style.width = width + '%';
            historyElement.style.display = 'none';
            historyElements.push(historyElement);
        }); 
        return historyElements;
    };
})();
