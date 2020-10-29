window.height = 0.437;
const LEVEL_NUMBERS = [
    [
        {
            type: 'history',
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
const HISTORY_DATA = [100, 50, 78];
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
window.renderGame(LEVEL_NUMBERS, PICTURE_DATA, HISTORY_DATA, VIEW_DATA);
