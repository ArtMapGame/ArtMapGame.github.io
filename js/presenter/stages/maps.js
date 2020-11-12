(() => {
    window.openMaps = levelModel => {
        window.mapsClosed = false;
        for (let i = 0; i < levelModel[0].elements.length; i = i + 1) {
            setTimeout(() => {
                if (!window.mapsClosed) {
                    levelModel[0].elements[i].show();
                }
            }, window.viewData.mapInterval * i);
            setTimeout(() => {
                if (!window.mapsClosed) {
                    levelModel[0].elements[i].hide();
                }
            }, window.viewData.mapInterval * (i + 1));
        }
        setTimeout(() => {
            if (!window.mapsClosed) {
                window.startStage(levelModel.slice(1));
            }
        }, window.viewData.mapInterval * levelModel[0].elements.length);
    };
})();
