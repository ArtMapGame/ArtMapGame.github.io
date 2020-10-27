(function () {
    window.startLevel = function(pictures, history, pictureData, stageNumbers) {
        let historyNumber = 0;
        stageNumbers.forEach(stage => {
            if (stage.type === 'history') {
                history[historyNumber].style.display = 'inline-block';
                historyNumber = historyNumber + 1;
            }
        });
    };
})();
