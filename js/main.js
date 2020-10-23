window.height = 0.437;
const LEVEL_NUMBER = [0, 0, 0];
const PICTURE_DATA = [
    {
        item: {
            width: '3%',
        },
        information: {
            width: '100%',
        },
    },
];
const VIEW_DATA = {
    button: {
        width: 13,
        space: 13,
        brightness: {
            normal: 1,
            mouseOver: 0.5,
            mouseDown: 0.2,
        },
    },
};
window.renderGame(LEVEL_NUMBER, PICTURE_DATA, VIEW_DATA);
