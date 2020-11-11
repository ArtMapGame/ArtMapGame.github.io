(() => {
    window.openMaps = levelModel => {
        for (let i = 0; i < levelModel[0].elements.length; i = i + 1) {
            setTimeout(() => {
                levelModel[0].elements[i].show();
            }, window.viewData.mapInterval * i);
            setTimeout(() => {
                levelModel[0].elements[i].hide();
            }, window.viewData.mapInterval * (i + 1));
        }
        setTimeout(() => {
            window.startStage(levelModel.slice(1));
        }, window.viewData.mapInterval * levelModel[0].elements.length);
    };
})();
