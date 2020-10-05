(function () {window.makeItems = function(data) {
    const itemElements = [];
    data.forEach((itemData, index) => {
        const itemElement = document.createElement('img');
        itemElement.src = `img/maps/item${index + 1}.png`;
        itemElement.style.position = 'absolute';
        itemElement.style.width = itemData.width;
        itemElement.style.height = itemData.height;
        itemElements.push(itemElement);
    }); 
    return itemElements;
};})();
