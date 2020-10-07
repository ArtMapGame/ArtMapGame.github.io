(function () {
    window.makeMap = function() {
        const gameElement = document.querySelector('body');
        gameElement.style.margin = '0';
        const mapElement = document.createElement('img');
        mapElement.src = 'img/maps/background.png';
        mapElement.style.width = '100%';
        return mapElement;
    };
})();
