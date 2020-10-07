(function () {window.makePictures = function(data) {
    const pictureElements = [];
    data.forEach((data, index) => {
        const itemElement = document.createElement('img');
        itemElement.src = `img/items/item${index + 1}.png`;
        itemElement.style.position = 'absolute';
        itemElement.style.left = '0';
        itemElement.style.width = data.item.width;
        itemElement.style.height = data.item.height;
        itemElement.style.display = 'none';
        const informationElement = document.createElement('img');
        informationElement.src = `img/informations/information${index + 1}.png`;
        informationElement.style.position = 'absolute';
        informationElement.style.left = '0';
        informationElement.style.width = data.information.width;
        informationElement.style.height = data.information.height;
        informationElement.style.display = 'none';
        pictureElements.push({
            item: itemElement,
            information: informationElement,
        });
    }); 
    return pictureElements;
};})();
