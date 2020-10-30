const LEVEL_NUMBERS = [
    [
        {
            type: 'history',
        },
        {
            type: 'maps',
            number: 5,
        },
        {
            type: 'pictures',
            number: 1,
        },
    ],
    [
        {
            type: 'maps',
            number: 1,
        },
        {
            type: 'history',
        },
        {
            type: 'pictures',
            number: 1,
        },
    ],
    [
        {
            type: 'maps',
            number: 1,
        },
        {
            type: 'history',
        },
        {
            type: 'pictures',
            number: 1,
        },
    ],
];
const PICTURE_DATA = [
    {
        item: {
            width: '3%',
        },
        informationWidth: '100%',
    },
];
const VIEW_DATA = {
    windowHeight: 0.437,
    button: {
        width: 13,
        space: 13,
        brightness: {
            normal: 1,
            mouseOver: 0.5,
            mouseDown: 0.2,
        },
    },
    history: [100, 50, 75],
};
window.renderGame(LEVEL_NUMBERS, PICTURE_DATA, VIEW_DATA);
