(() => {
    window.makeMaps = () => {
        const mapElements = [];
        let i = 0;
        window.LEVEL_NUMBERS.forEach(level => level.forEach(stage => {
            if (stage.type === 'maps') {
                for (let j = 0; j < stage.number; j++) {
                    i = i + 1;
                    const mapElement = document.createElement('img');
                    mapElement.src = `img/maps/world${i}.png`;
                    mapElement.style.position = 'absolute';
                    mapElement.style.width = '100%';
                    mapElement.style.left = '0';
                    mapElement.style.display = 'none';
                    mapElements.push(mapElement);
                }
            }
        }));
        return mapElements;
    };
})();
