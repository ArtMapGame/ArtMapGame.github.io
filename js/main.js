window.levelNumbers = [
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
            number: 2,
        },
    ],
];
window.pictureData = [
    {
        item: {
            width: 3,
            height: 6,
            x: 15,
            y: 15,
        },
        informationSize: {width: 100},
    },
    {
        item: {
            width: 3,
            height: 6,
            x: 25,
            y: 45,
        },
        informationSize: {width: 100},
    },
    {
        item: {
            width: 3,
            height: 6,
            x: 45,
            y: 15,
        },
        informationSize: {width: 100},
    },
];
window.viewData = {
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
    historySize: [{width: 80}, {width: 100}, {height: 50}],
    mapInterval: 1,
    item: {
        transform: 10,
        resizeSpeed: 208,
    }
};
window.renderGame();
