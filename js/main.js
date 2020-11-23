const GAME_DATA = [
    [
        {
            type: `history`,
            width: 80,
        },
        {
            type: `maps`,
            number: 5,
        },
        {
            type: `pictures`,
            pictures: [
                {
                    item: {
                        width: 4,
                        height: 3,
                        start: {
                            x: 15,
                            y: 15,
                        },
                        correct: {
                            x: 25,
                            y: 25,
                        }
                    },
                    informationSize: {width: 100},
                },
                {
                    item: {
                        width: 2,
                        height: 8,
                        start: {
                            x: 25,
                            y: 15,
                        },
                        correct: {
                            x: 35,
                            y: 25,
                        }
                    },
                    informationSize: {width: 100},
                },
                {
                    item: {
                        width: 4,
                        height: 5,
                        start: {
                            x: 35,
                            y: 15,
                        },
                        correct: {
                            x: 45,
                            y: 25,
                        }
                    },
                    informationSize: {width: 100},
                },
            ]
        },
    ],
    [
        {
            type: `history`,
            width: 100,
        },
        {
            type: `maps`,
            number: 7,
        },
        {
            type: `history`,
            height: 70,
        },
    ],
    [
        {
            type: `maps`,
            number: 3,
        },
        {
            type: `history`,
            height: 90,
        },
        {
            type: `maps`,
            number: 2,
        },
    ],
];
window.viewData = {
    windowHeight: 0.437,
    controlButton: {
        positionX: 3,
        width: 5,
    },
    startButton: {
        width: 13,
        space: 13,
        brightness: {
            normal: 1,
            mouseOver: 0.5,
            mouseDown: 0.2,
        },
    },
    mapInterval: 100,
    item: {
        transform: 10,
        resizeSpeed: 208,
    },
    points: {
        size: 5,
        style: `Arial`,
    },
};
window.renderGame(GAME_DATA);
