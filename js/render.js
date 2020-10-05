(function () {window.renderGame = function(data) {
    const gameElement = document.querySelector('body');
    const mapElement = window.makeMap();
    gameElement.appendChild(mapElement);
    const itemElements = window.makeItems(data.items);
    const informationElements = window.makeInformations(data.informations);
    for (let i = 0; i < data.items.length; i++) {
        gameElement.appendChild(itemElements[i]);
        gameElement.appendChild(informationElements[i]);
    }
};})();
