(() => {
    window.makeMaps = (levelNumber) => {
        const mapElements = [];
        let i = 0;
        levelNumber.forEach(level => level.forEach(stage => {
            if (stage.type === 'map') {
                i = i + 1;
                const mapElement = document.createElement('img');
                mapElement.src = `img/maps/world${i}.png`;
                mapElement.style.position = 'absolute';
                mapElement.style.width = '100%';
                mapElement.style.left = '0';
                mapElement.style.display = 'none';
                mapElements.push(mapElement);
            }
        }));
        return mapElements;
    };
})();
