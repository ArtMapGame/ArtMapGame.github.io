(() => {
    let itemElement;
    let mouse;
    const move = (evt) => {
        itemElement.style.left = itemElement.offsetLeft + evt.pageX - mouse.x + 'px';
        itemElement.style.top = itemElement.offsetTop + evt.pageY - mouse.y + 'px';
        mouse = {
            x: evt.pageX,
            y: evt.pageY,
        };
    };
    const startMove = (evt) => {
        if (evt.which === 1) {
            mouse = {
                x: evt.pageX,
                y: evt.pageY,
            };
            document.addEventListener('mousemove', move);
        }
    };
    const endMove = (evt) => {
        if (evt.which === 1) {
            document.removeEventListener('mousemove', move);
        }
    };
    window.addStartMoveListener = (item, width) => {
        itemElement = item;
        itemElement.addEventListener('mousedown', startMove);
        itemElement.addEventListener('mouseup', endMove);
    };
})();
