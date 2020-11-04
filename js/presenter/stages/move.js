(() => {
    let itemElement;
    let mouse;
    let startItem;
    const move = (evt) => {
        itemElement.style.left = (startItem.x + evt.pageX - mouse.x) * 100 / document.documentElement.clientWidth + '%';
        itemElement.style.top = (startItem.y + evt.pageY - mouse.y) * 100 / (document.documentElement.clientWidth * window.VIEW_DATA.windowHeight) + '%';
    };
    const startMove = (evt) => {
        if (evt.which === 1 && !window.pictureMove) {
            mouse = {
                x: evt.pageX,
                y: evt.pageY,
            };
            startItem = {
                x: itemElement.offsetLeft,
                y: itemElement.offsetTop,
            };
            window.pictureMove = true;
            document.addEventListener('mousemove', move);
        }
    };
    const endMove = (evt) => {
        if (evt.which === 1) {
            window.pictureMove = false;
            document.removeEventListener('mousemove', move);
        }
    };
    window.addStartMoveListener = (item) => {
        itemElement = item;
        itemElement.addEventListener('mousedown', startMove);
        itemElement.addEventListener('mouseup', endMove);
    };
})();
