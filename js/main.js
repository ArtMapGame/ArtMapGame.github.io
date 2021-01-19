window.height = 0.437;
window.controlButton = {
    positionX: 3,
    width: 5,
};
window.startButton = {
    width: 13,
    space: 13,
    brightness: {
        normal: 1,
        mouseOver: 0.5,
        mouseDown: 0.2,
    },
};
window.mapInterval = 1000;
window.item = {
    transform: 10,
    resizeSpeed: 208,
    answerScale: 0.3,
};
window.pointFont = {
    size: 5,
    style: `Arial`,
    color: `#000000`,
};
const GAME_DATA = [
    [
        {
            type: 'maps',
            number: 9,
        },
        {
            type: 'history',
            width: 79,
        },
        {
            type: 'pictures',
            pictures: [
                {
                    informationSize: {width: 70},
                    width: 4.5,
                    height: 3.3,
                    start: {
                        x: 5,
                        y: 95,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 2.3,
                    height: 9,
                    start: {
                        x: 10,
                        y: 95,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 71},
                    width: 4,
                    height: 5,
                    start: {
                        x: 15,
                        y: 95,
                    },
                    correct: {
                        x: 54.1,
                        y: 17.6,
                        width: 0.6,
                        height: 0.6,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 2.4,
                    height: 8.3,
                    start: {
                        x: 20,
                        y: 95,
                    },
                    correct: {
                        x: 47.5,
                        y: 20.6,
                        width: 1,
                        height: 1.8,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 1.7,
                    height: 9.8,
                    start: {
                        x: 25,
                        y: 95,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 2.4,
                    height: 8,
                    start: {
                        x: 30,
                        y: 95,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 1.7,
                    height: 8.1,
                    start: {
                        x: 35,
                        y: 95,
                    },
                    correct: {
                        x: 47,
                        y: 23.8,
                        width: 0.6,
                        height: 0.6,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 1.1,
                    height: 8.8,
                    start: {
                        x: 40,
                        y: 95,
                    },
                    correct: {
                        x: 47.5,
                        y: 20.6,
                        width: 1,
                        height: 1.8,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 1.6,
                    height: 8.8,
                    start: {
                        x: 45,
                        y: 95,
                    },
                    correct: {
                        x: 48.8,
                        y: 21.7,
                        width: 0.8,
                        height: 0.8,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 2,
                    height: 8.7,
                    start: {
                        x: 50,
                        y: 95,
                    },
                    correct: {
                        x: 48.4,
                        y: 23.2,
                        width: 0.9,
                        height: 0.9,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 1.5,
                    height: 9.3,
                    start: {
                        x: 55,
                        y: 95,
                    },
                    correct: {
                        x: 48.4,
                        y: 23.2,
                        width: 0.9,
                        height: 0.8,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 1.8,
                    height: 8.5,
                    start: {
                        x: 60,
                        y: 95,
                    },
                    correct: {
                        x: 48.8,
                        y: 21.7,
                        width: 0.8,
                        height: 0.8,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 1.9,
                    height: 8.7,
                    start: {
                        x: 65,
                        y: 95,
                    },
                    correct: {
                        x: 55.1,
                        y: 21,
                        width: 0.5,
                        height: 1,
                    },
                },
                {
                    informationSize: {width: 95},
                    width: 3.8,
                    height: 5.6,
                    start: {
                        x: 70,
                        y: 95,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 80},
                    width: 1.1,
                    height: 9.9,
                    start: {
                        x: 75,
                        y: 95,
                    },
                    correct: {
                        x: 70.9,
                        y: 16.4,
                        width: 2.2,
                        height: 4,
                    },
                },
                {
                    informationSize: {width: 88},
                    width: 4.3,
                    height: 4.2,
                    start: {
                        x: 80,
                        y: 95,
                    },
                    correct: {
                        x: 70.9,
                        y: 16.4,
                        width: 2.2,
                        height: 4,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 1.8,
                    height: 10,
                    start: {
                        x: 85,
                        y: 95,
                    },
                    correct: {
                        x: 50,
                        y: 22.5,
                        width: 0.7,
                        height: 0.7,
                    },
                },
                {
                    informationSize: {width: 90},
                    width: 3.5,
                    height: 5.5,
                    start: {
                        x: 90,
                        y: 95,
                    },
                    correct: {
                        x: 47.5,
                        y: 20.6,
                        width: 1,
                        height: 1.8,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 1.4,
                    height: 11,
                    start: {
                        x: 95,
                        y: 95,
                    },
                    correct: {
                        x: 47.5,
                        y: 20.6,
                        width: 1,
                        height: 1.8,
                    },
                },
            ],
        },
        {
            type: 'history',
            width: 66,
        },
        {
            type: 'pictures',
            pictures: [
                {
                    informationSize: {width: 55},
                    width: 4,
                    height: 7,
                    start: {
                        x: 6.7,
                        y: 93.3,
                    },
                    correct: {
                        x: 43.8,
                        y: 28.3,
                        width: 1.5,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 59},
                    width: 4,
                    height: 7,
                    start: {
                        x: 13.3,
                        y: 93.3,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 49},
                    width: 4,
                    height: 6.5,
                    start: {
                        x: 20,
                        y: 93.3,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 68},
                    width: 4,
                    height: 6.6,
                    start: {
                        x: 26.7,
                        y: 93.3,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 68},
                    width: 4.3,
                    height: 6.6,
                    start: {
                        x: 33.3,
                        y: 93.3,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 66},
                    width: 4.3,
                    height: 6.6,
                    start: {
                        x: 40,
                        y: 93.3,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 59},
                    width: 4.2,
                    height: 7.1,
                    start: {
                        x: 46.7,
                        y: 93.3,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 4.4,
                    height: 6.6,
                    start: {
                        x: 53.3,
                        y: 93.3,
                    },
                    correct: {
                        x: 58.7,
                        y: 18.4,
                        width: 0.8,
                        height: 1.8,
                    },
                },
                {
                    informationSize: {width: 34},
                    width: 4.5,
                    height: 6.5,
                    start: {
                        x: 60,
                        y: 93.3,
                    },
                    correct: {
                        x: 59.7,
                        y: 18.4,
                        width: 0.7,
                        height: 1.2,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 4.5,
                    height: 6.8,
                    start: {
                        x: 66.7,
                        y: 93.3,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 64},
                    width: 4.1,
                    height: 7.1,
                    start: {
                        x: 73.3,
                        y: 93.3,
                    },
                    correct: {
                        x: 76.4,
                        y: 54.4,
                        width: 2.8,
                        height: 2,
                    },
                },
                {
                    informationSize: {width: 68},
                    width: 3,
                    height: 9.2,
                    start: {
                        x: 80,
                        y: 93.3,
                    },
                    correct: {
                        x: 45.3,
                        y: 23.8,
                        width: 1.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 42},
                    width: 4.3,
                    height: 6.8,
                    start: {
                        x: 86.7,
                        y: 93.3,
                    },
                    correct: {
                        x: 82.3,
                        y: 77,
                        width: 5.5,
                        height: 11.7,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 4.4,
                    height: 6.6,
                    start: {
                        x: 93.3,
                        y: 93.3,
                    },
                    correct: {
                        x: 27,
                        y: 84.2,
                        width: 2.1,
                        height: 11.2,
                    },
                },
            ],
        },
        {
            type: 'history',
            width: 67,
        },
        {
            type: 'pictures',
            pictures: [
                {
                    informationSize: {width: 61},
                    width: 4.2,
                    height: 6.8,
                    start: {
                        x: 5,
                        y: 95,
                    },
                    correct: {
                        x: 59.4,
                        y: 33.9,
                        width: 2.8,
                        height: 4.6,
                    },
                },
                {
                    informationSize: {width: 34},
                    width: 3,
                    height: 9,
                    start: {
                        x: 10,
                        y: 95,
                    },
                    correct: {
                        x: 82.3,
                        y: 77,
                        width: 5.5,
                        height: 11.7,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 4.3,
                    height: 6.4,
                    start: {
                        x: 15,
                        y: 95,
                    },
                    correct: {
                        x: 49,
                        y: 11.8,
                        width: 2.6,
                        height: 3.3,
                    },
                },
                {
                    informationSize: {width: 27},
                    width: 2.7,
                    height: 10,
                    start: {
                        x: 20,
                        y: 95,
                    },
                    correct: {
                        x: 12.1,
                        y: 30,
                        width: 0.8,
                        height: 3,
                    },
                },
                {
                    informationSize: {width: 59},
                    width: 4.1,
                    height: 6.8,
                    start: {
                        x: 25,
                        y: 95,
                    },
                    correct: {
                        x: 27,
                        y: 84.2,
                        width: 2.1,
                        height: 11.2,
                    },
                },
                {
                    informationSize: {width: 59},
                    width: 4.1,
                    height: 6.8,
                    start: {
                        x: 30,
                        y: 95,
                    },
                    correct: {
                        x: 49.4,
                        y: 38,
                        width: 2.1,
                        height: 4.1,
                    },
                },
                {
                    informationSize: {width: 89},
                    width: 5,
                    height: 5.6,
                    start: {
                        x: 35,
                        y: 95,
                    },
                    correct: {
                        x: 14.4,
                        y: 28.6,
                        width: 0.9,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 4.4,
                    height: 6.5,
                    start: {
                        x: 40,
                        y: 95,
                    },
                    correct: {
                        x: 42.5,
                        y: 28.7,
                        width: 0.4,
                        height: 1.4,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 4.3,
                    height: 6.4,
                    start: {
                        x: 45,
                        y: 95,
                    },
                    correct: {
                        x: 61.7,
                        y: 27.4,
                        width: 2.3,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 93},
                    width: 4.9,
                    height: 5.3,
                    start: {
                        x: 50,
                        y: 95,
                    },
                    correct: {
                        x: 70.9,
                        y: 16.4,
                        width: 2.2,
                        height: 4,
                    },
                },
                {
                    informationSize: {width: 66},
                    width: 4.3,
                    height: 6.5,
                    start: {
                        x: 55,
                        y: 95,
                    },
                    correct: {
                        x: 43.8,
                        y: 28.3,
                        width: 1.5,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 4.5,
                    height: 6.5,
                    start: {
                        x: 60,
                        y: 95,
                    },
                    correct: {
                        x: 44.1,
                        y: 18.6,
                        width: 1.2,
                        height: 2.2,
                    },
                },
                {
                    informationSize: {width: 29},
                    width: 2.8,
                    height: 9.9,
                    start: {
                        x: 65,
                        y: 95,
                    },
                    correct: {
                        x: 43.8,
                        y: 28.3,
                        width: 1.5,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 85},
                    width: 5,
                    height: 5.9,
                    start: {
                        x: 70,
                        y: 95,
                    },
                    correct: {
                        x: 57.5,
                        y: 28.4,
                        width: 0.7,
                        height: 1,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 4.2,
                    height: 6.4,
                    start: {
                        x: 75,
                        y: 95,
                    },
                    correct: {
                        x: 66.8,
                        y: 21.1,
                        width: 0.8,
                        height: 1,
                    },
                },
                {
                    informationSize: {width: 33},
                    width: 3,
                    height: 9.1,
                    start: {
                        x: 80,
                        y: 95,
                    },
                    correct: {
                        x: 48.2,
                        y: 27.4,
                        width: 1.5,
                        height: 3.5,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 4.3,
                    height: 6.4,
                    start: {
                        x: 85,
                        y: 95,
                    },
                    correct: {
                        x: 52.6,
                        y: 12.4,
                        width: 0.9,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 59},
                    width: 4.1,
                    height: 7,
                    start: {
                        x: 90,
                        y: 95,
                    },
                    correct: {
                        x: 49,
                        y: 13.4,
                        width: 1.3,
                        height: 4.1,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 4.5,
                    height: 6,
                    start: {
                        x: 95,
                        y: 95,
                    },
                    correct: {
                        x: 45.1,
                        y: 37,
                        width: 2.7,
                        height: 5.8,
                    },
                },
                {
                    informationSize: {width: 59},
                    width: 4,
                    height: 6.7,
                    start: {
                        x: 5,
                        y: 75,
                    },
                    correct: {
                        x: 67.2,
                        y: 19.1,
                        width: 0.4,
                        height: 0.9,
                    },
                },
                {
                    informationSize: {width: 36},
                    width: 3,
                    height: 8.4,
                    start: {
                        x: 5,
                        y: 85,
                    },
                    correct: {
                        x: 43.8,
                        y: 28.3,
                        width: 1.5,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 59},
                    width: 4,
                    height: 6.7,
                    start: {
                        x: 95,
                        y: 75,
                    },
                    correct: {
                        x: 83.2,
                        y: 10.5,
                        width: 3.6,
                        height: 2.3,
                    },
                },
                {
                    informationSize: {width: 45},
                    width: 3.6,
                    height: 8.1,
                    start: {
                        x: 95,
                        y: 85,
                    },
                    correct: {
                        x: 23,
                        y: 53.9,
                        width: 1.4,
                        height: 5.3,
                    },
                },
            ],
        },
    ],
    [],
    [],
];
window.renderGame(GAME_DATA);
