(function () {window.renderGame = function(data) {
    const gameElement = document.querySelector('body');
    const mapElement = window.makeMap();
    gameElement.appendChild(mapElement);
    const pictureElements = window.makePictures(data);
    pictureElements.forEach(picture => {
        gameElement.appendChild(picture.item);
        gameElement.appendChild(picture.information);
    });
};})();
