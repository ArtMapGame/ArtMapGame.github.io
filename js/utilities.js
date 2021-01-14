(() => {
    window.random = (min, max) => {
        return min + (max - min) * Math.random();
    };
})();
