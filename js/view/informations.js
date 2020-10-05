(function () {window.makeInformations = function(data) {
    const informationElements = [];
    data.forEach((informationData, index) => {
        const informationElement = document.createElement('img');
        informationElement.src = `img/maps/information${index + 1}.png`;
        informationElement.style.position = 'absolute';
        informationElement.style.width = informationData.width;
        informationElement.style.height = informationData.height;
        informationElements.push(informationElement);
    }); 
    return informationElements;
};})();
