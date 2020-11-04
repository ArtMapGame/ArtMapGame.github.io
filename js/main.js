import {renderGame} from `js/render.js`;
LEVEL_NUMBERS = [
    [
        {
            type: `history`,
        },
        {
            type: `maps`,
            number: 5,
        },
        {
            type: `pictures`,
            number: 3,
        },
    ],
    [
        {
            type: `history`,
        },
        {
            type: `maps`,
            number: 7,
        },
        {
            type: `history`,
        },
    ],
    [
        {
            type: `maps`,
            number: 3,
        },
        {
            type: `history`,
        },
        {
            type: `maps`,
            number: 9,
        },
    ],
];
PICTURE_DATA = [
    {
        item: {
            width: 3,
            x: 15,
            y: 15,
        },
        informationWidth: 100,
    },
    {
        item: {
            width: 3,
            x: 25,
            y: 45,
        },
        informationWidth: 100,
    },
    {
        item: {
            width: 3,
            x: 45,
            y: 15,
        },
        informationWidth: 100,
    },
];
VIEW_DATA = {
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
    historyWidth: [100, 50, 75],
    mapInterval: 1,
};
renderGame(VIEW_DATA, LEVEL_NUMBERS, PICTURE_DATA);
