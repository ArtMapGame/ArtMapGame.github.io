(() => {
    let levelModel;
    const closeHistory = evt => {
        if (evt.keyCode === 32 || evt.key === 32) {
            levelModel[0].element.hide();
            document.removeEventListener(`keydown`, closeHistory);
            window.startStage(levelModel.slice(1));
        }
    };
    window.reciteHistory = levelParameter => {
        levelModel = levelParameter;
        levelModel[0].element.show();
        document.addEventListener(`keydown`, closeHistory);
    };
})();
