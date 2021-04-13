window.height = 0.437;
window.controlButton = {
    positionX: 3,
    width: 5,
};
window.startButton = {
    width: 2,
    space: 13,
    brightness: {
        normal: 1,
        mouseOver: 0.5,
        mouseDown: 0.2,
    },
};
window.mapInterval = 1;
window.item = {
    transform: 10,
    resizeSpeed: 208,
    answerScale: 0.3,
};
window.pointFont = {
    size: 5,
    style: `Bahnschrift, Arial`,
    color: `#fff`,
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
    [
        {
            type: 'history',
            width: 100,
        },
        {
            type: 'maps',
            number: 4,
        },
        {
            type: 'history',
            width: 49,
        },
        {
            type: 'pictures',
            pictures: [
                {
                    informationSize: {width: 69},
                    width: 2.2,
                    height: 11.7,
                    start: {
                        x: 5,
                        y: 95,
                    },
                    correct: {
                        x: 53.3,
                        y: 36.1,
                        width: 0.6,
                        height: 1.4,
                    },
                },
                {
                    informationSize: {width: 80},
                    width: 3.1,
                    height: 9.7,
                    start: {
                        x: 10,
                        y: 95,
                    },
                    correct: {
                        x: 53.7,
                        y: 29.1,
                        width: 0.8,
                        height: 1.2,
                    },
                },
                {
                    informationSize: {width: 75},
                    width: 3,
                    height: 9.4,
                    start: {
                        x: 14,
                        y: 95,
                    },
                    correct: {
                        x: 65.4,
                        y: 38.7,
                        width: 1.7,
                        height: 3,
                    },
                },
                {
                    informationSize: {width: 64},
                    width: 2.7,
                    height: 12.6,
                    start: {
                        x: 19,
                        y: 95,
                    },
                    correct: {
                        x: 52.5,
                        y: 12.3,
                        width: 0.9,
                        height: 2,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 1.5,
                    height: 12.7,
                    start: {
                        x: 24,
                        y: 95,
                    },
                    correct: {
                        x: 52,
                        y: 16.6,
                        width: 0.5,
                        height: 1.2,
                    },
                },
                {
                    informationSize: {width: 69},
                    width: 3.2,
                    height: 10.4,
                    start: {
                        x: 29,
                        y: 95,
                    },
                    correct: {
                        x: 52.3,
                        y: 25.4,
                        width: 0.3,
                        height: 0.5,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 3.3,
                    height: 10,
                    start: {
                        x: 33,
                        y: 95,
                    },
                    correct: {
                        x: 82,
                        y: 31.3,
                        width: 1.3,
                        height: 3.4,
                    },
                },
                {
                    informationSize: {width: 69},
                    width: 1.8,
                    height: 11.6,
                    start: {
                        x: 38,
                        y: 95,
                    },
                    correct: {
                        x: 51.6,
                        y: 30.9,
                        width: 0.2,
                        height: 0.3,
                    },
                },
                {
                    informationSize: {width: 69},
                    width: 2.9,
                    height: 11.5,
                    start: {
                        x: 43,
                        y: 95,
                    },
                    correct: {
                        x: 51.5,
                        y: 32.1,
                        width: 0.4,
                        height: 0.1,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 3.1,
                    height: 9.4,
                    start: {
                        x: 48,
                        y: 95,
                    },
                    correct: {
                        x: 54.3,
                        y: 34.5,
                        width: 0.1,
                        height: 1,
                    },
                },
                {
                    informationSize: {width: 70},
                    width: 2,
                    height: 11.1,
                    start: {
                        x: 52,
                        y: 95,
                    },
                    correct: {
                        x: 52.4,
                        y: 22.9,
                        width: 0.6,
                        height: 0.9,
                    },
                },
                {
                    informationSize: {width: 68},
                    width: 4.8,
                    height: 6.7,
                    start: {
                        x: 57,
                        y: 95,
                    },
                    correct: {
                        x: 48.6,
                        y: 31.5,
                        width: 0.1,
                        height: 0.1,
                    },
                },
                {
                    informationSize: {width: 72},
                    width: 2.5,
                    height: 10.4,
                    start: {
                        x: 62,
                        y: 95,
                    },
                    correct: {
                        x: 22.3,
                        y: 66.1,
                        width: 0.5,
                        height: 1.1,
                    },
                },
                {
                    informationSize: {width: 76},
                    width: 3.4,
                    height: 9.8,
                    start: {
                        x: 67,
                        y: 95,
                    },
                    correct: {
                        x: 17.5,
                        y: 43.8,
                        width: 0.9,
                        height: 0.4,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 0.7,
                    height: 16.9,
                    start: {
                        x: 71,
                        y: 95,
                    },
                    correct: {
                        x: 59.6,
                        y: 15.6,
                        width: 1.1,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 80},
                    width: 3.3,
                    height: 9.7,
                    start: {
                        x: 76,
                        y: 95,
                    },
                    correct: {
                        x: 56.9,
                        y: 33.4,
                        width: 1.4,
                        height: 2.8,
                    },
                },
                {
                    informationSize: {width: 70},
                    width: 3.8,
                    height: 8.6,
                    start: {
                        x: 81,
                        y: 95,
                    },
                    correct: {
                        x: 75.4,
                        y: 32,
                        width: 1.2,
                        height: 2,
                    },
                },
                {
                    informationSize: {width: 73},
                    width: 2.1,
                    height: 13,
                    start: {
                        x: 86,
                        y: 95,
                    },
                    correct: {
                        x: 50.4,
                        y: 17.6,
                        width: 0.1,
                        height: 0.1,
                    },
                },
                {
                    informationSize: {width: 77},
                    width: 4.4,
                    height: 6.9,
                    start: {
                        x: 90,
                        y: 95,
                    },
                    correct: {
                        x: 48.2,
                        y: 19.8,
                        width: 0.4,
                        height: 0.8,
                    },
                },
                {
                    informationSize: {width: 79},
                    width: 3.8,
                    height: 9.5,
                    start: {
                        x: 95,
                        y: 95,
                    },
                    correct: {
                        x: 62,
                        y: 29.9,
                        width: 3,
                        height: 5.6,
                    },
                },
            ],
        },
        {
            type: 'history',
            width: 59,
        },
        {
            type: 'pictures',
            pictures: [
                {
                    informationSize: {width: 33},
                    width: 3.3,
                    height: 9.9,
                    start: {
                        x: 6,
                        y: 94,
                    },
                    correct: {
                        x: 55,
                        y: 33,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 73},
                    width: 5.3,
                    height: 7.2,
                    start: {
                        x: 13,
                        y: 94,
                    },
                    correct: {
                        x: 48.9,
                        y: 31.1,
                        width: 0.8,
                        height: 1.8,
                    },
                },
                {
                    informationSize: {height: 99},
                    width: 6,
                    height: 6,
                    start: {
                        x: 19,
                        y: 94,
                    },
                    correct: {
                        x: 57.6,
                        y: 34.1,
                        width: 0.9,
                        height: 1.8,
                    },
                },
                {
                    informationSize: {width: 59},
                    width: 4.7,
                    height: 7.9,
                    start: {
                        x: 25,
                        y: 94,
                    },
                    correct: {
                        x: 44.8,
                        y: 18.7,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 5.1,
                    height: 7.7,
                    start: {
                        x: 31,
                        y: 94,
                    },
                    correct: {
                        x: 42.7,
                        y: 18.3,
                        width: 0.6,
                        height: 1.2,
                    },
                },
                {
                    informationSize: {width: 59},
                    width: 4.7,
                    height: 7.9,
                    start: {
                        x: 38,
                        y: 94,
                    },
                    correct: {
                        x: 53.1,
                        y: 36.5,
                        width: 1,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 95},
                    width: 6.1,
                    height: 6.4,
                    start: {
                        x: 44,
                        y: 94,
                    },
                    correct: {
                        x: 45.5,
                        y: 23.2,
                        width: 0.9,
                        height: 1.8,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 5.1,
                    height: 7.7,
                    start: {
                        x: 50,
                        y: 94,
                    },
                    correct: {
                        x: 43.3,
                        y: 27.2,
                        width: 0.7,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 66},
                    width: 5.1,
                    height: 7.7,
                    start: {
                        x: 56,
                        y: 94,
                    },
                    correct: {
                        x: 45.4,
                        y: 28.5,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 5.1,
                    height: 7.7,
                    start: {
                        x: 63,
                        y: 94,
                    },
                    correct: {
                        x: 47.1,
                        y: 28.5,
                        width: 0.7,
                        height: 1.4,
                    },
                },
                {
                    informationSize: {width: 59},
                    width: 4.7,
                    height: 7.9,
                    start: {
                        x: 69,
                        y: 94,
                    },
                    correct: {
                        x: 65.5,
                        y: 38.3,
                        width: 0.9,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 4.7,
                    height: 7.1,
                    start: {
                        x: 75,
                        y: 94,
                    },
                    correct: {
                        x: 53.5,
                        y: 28.5,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 5.2,
                    height: 7.7,
                    start: {
                        x: 81,
                        y: 94,
                    },
                    correct: {
                        x: 61.7,
                        y: 21,
                        width: 0.9,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 67},
                    width: 5.2,
                    height: 7.7,
                    start: {
                        x: 88,
                        y: 94,
                    },
                    correct: {
                        x: 51.7,
                        y: 32,
                        width: 0.7,
                        height: 1.4,
                    },
                },
                {
                    informationSize: {width: 76},
                    width: 5.3,
                    height: 7,
                    start: {
                        x: 94,
                        y: 94,
                    },
                    correct: {
                        x: 22.2,
                        y: 58.6,
                        width: 1,
                        height: 2,
                    },
                },
            ],
        },
        {
            type: 'history',
            width: 45,
        },
        {
            type: 'pictures',
            pictures: [
                {
                    informationSize: {width: 73},
                    width: 2,
                    height: 14,
                    start: {
                        x: 6,
                        y: 94,
                    },
                    correct: {
                        x: 55.2,
                        y: 16.4,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 78},
                    width: 3.5,
                    height: 12.5,
                    start: {
                        x: 11,
                        y: 94,
                    },
                    correct: {
                        x: 65,
                        y: 39.2,
                        width: 0.7,
                        height: 1.4,
                    },
                },
                {
                    informationSize: {width: 65},
                    width: 2.6,
                    height: 13,
                    start: {
                        x: 17,
                        y: 94,
                    },
                    correct: {
                        x: 74.5,
                        y: 42.6,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 70},
                    width: 3.7,
                    height: 13.2,
                    start: {
                        x: 22,
                        y: 94,
                    },
                    correct: {
                        x: 47.2,
                        y: 29.3,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 87},
                    width: 5.3,
                    height: 11,
                    start: {
                        x: 28,
                        y: 94,
                    },
                    correct: {
                        x: 63.3,
                        y: 29.2,
                        width: 0.6,
                        height: 1.4,
                    },
                },
                {
                    informationSize: {width: 75},
                    width: 6,
                    height: 8.5,
                    start: {
                        x: 33,
                        y: 94,
                    },
                    correct: {
                        x: 47.3,
                        y: 17,
                        width: 0.6,
                        height: 1.4,
                    },
                },
                {
                    informationSize: {width: 75},
                    width: 4.2,
                    height: 8.6,
                    start: {
                        x: 39,
                        y: 94,
                    },
                    correct: {
                        x: 43.4,
                        y: 28.3,
                        width: 0.7,
                        height: 1.4,
                    },
                },
                {
                    informationSize: {width: 72},
                    width: 2.5,
                    height: 14.6,
                    start: {
                        x: 44,
                        y: 94,
                    },
                    correct: {
                        x: 57.6,
                        y: 34.6,
                        width: 0.7,
                        height: 1.4,
                    },
                },
                {
                    informationSize: {width: 69},
                    width: 4.8,
                    height: 9.6,
                    start: {
                        x: 50,
                        y: 94,
                    },
                    correct: {
                        x: 55.9,
                        y: 24.5,
                        width: 0.7,
                        height: 1.4,
                    },
                },
                {
                    informationSize: {width: 71},
                    width: 2.7,
                    height: 14.4,
                    start: {
                        x: 56,
                        y: 94,
                    },
                    correct: {
                        x: 47.7,
                        y: 20.8,
                        width: 1,
                        height: 2.6,
                    },
                },
                {
                    informationSize: {width: 61},
                    width: 2.2,
                    height: 16,
                    start: {
                        x: 61,
                        y: 94,
                    },
                    correct: {
                        x: 53.7,
                        y: 32.8,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 83},
                    width: 4.2,
                    height: 9.3,
                    start: {
                        x: 67,
                        y: 94,
                    },
                    correct: {
                        x: 47.7,
                        y: 20.8,
                        width: 1,
                        height: 2.6,
                    },
                },
                {
                    informationSize: {width: 74},
                    width: 3.1,
                    height: 12.5,
                    start: {
                        x: 72,
                        y: 94,
                    },
                    correct: {
                        x: 53.1,
                        y: 37.4,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 66},
                    width: 2.7,
                    height: 14.7,
                    start: {
                        x: 78,
                        y: 94,
                    },
                    correct: {
                        x: 55.2,
                        y: 33.8,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 80},
                    width: 3.6,
                    height: 12.1,
                    start: {
                        x: 83,
                        y: 94,
                    },
                    correct: {
                        x: 76.3,
                        y: 33.7,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 72},
                    width: 5,
                    height: 6.7,
                    start: {
                        x: 89,
                        y: 94,
                    },
                    correct: {
                        x: 44.5,
                        y: 20.6,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 70},
                    width: 4.4,
                    height: 10,
                    start: {
                        x: 94,
                        y: 94,
                    },
                    correct: {
                        x: 51,
                        y: 29.9,
                        width: 0.7,
                        height: 1.5,
                    },
                },
            ],
        },
    ],
    [
        {
            type: 'history',
            width: 62,
        },
        {
            type: 'history',
            width: 80,
        },
        {
            type: 'pictures',
            pictures: [
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 6,
                        y: 94,
                    },
                    correct: {
                        x: 44.6,
                        y: 19.7,
                        width: 0.9,
                        height: 1.6,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5.1,
                    height: 7.3,
                    start: {
                        x: 11,
                        y: 94,
                    },
                    correct: {
                        x: 59.7,
                        y: 34.8,
                        width: 0.8,
                        height: 1.6,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 4.9,
                    height: 7.7,
                    start: {
                        x: 17,
                        y: 94,
                    },
                    correct: {
                        x: 18,
                        y: 43.5,
                        width: 0.8,
                        height: 1.6,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 22,
                        y: 94,
                    },
                    correct: {
                        x: 67,
                        y: 40.2,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 28,
                        y: 94,
                    },
                    correct: {
                        x: 48.5,
                        y: 26.7,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 33,
                        y: 94,
                    },
                    correct: {
                        x: 55.2,
                        y: 32.3,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 39,
                        y: 94,
                    },
                    correct: {
                        x: 46,
                        y: 25,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.4,
                    start: {
                        x: 44,
                        y: 94,
                    },
                    correct: {
                        x: 53.9,
                        y: 24.7,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 50,
                        y: 94,
                    },
                    correct: {
                        x: 46.1,
                        y: 31.7,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 56,
                        y: 94,
                    },
                    correct: {
                        x: 75.1,
                        y: 28,
                        width: 2.7,
                        height: 3.2,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 61,
                        y: 94,
                    },
                    correct: {
                        x: 22.2,
                        y: 62.1,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5.6,
                    height: 7,
                    start: {
                        x: 67,
                        y: 94,
                    },
                    correct: {
                        x: 51.1,
                        y: 29.6,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 72,
                        y: 94,
                    },
                    correct: {
                        x: 52.8,
                        y: 29.5,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 4.9,
                    height: 7.5,
                    start: {
                        x: 78,
                        y: 94,
                    },
                    correct: {
                        x: 47.3,
                        y: 21.3,
                        width: 0.8,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 83,
                        y: 94,
                    },
                    correct: {
                        x: 43.7,
                        y: 28.1,
                        width: 0.9,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 89,
                        y: 94,
                    },
                    correct: {
                        x: 53.8,
                        y: 38,
                        width: 0.9,
                        height: 1.7,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5.5,
                    height: 6.8,
                    start: {
                        x: 94,
                        y: 94,
                    },
                    correct: {
                        x: 16,
                        y: 41.8,
                        width: 0.8,
                        height: 1.7,
                    },
                },
            ],
        },
        {
            type: 'history',
            width: 79,
        },
        {
            type: 'pictures',
            pictures: [
                {
                    informationSize: {width: 63},
                    width: 3.1,
                    height: 13.4,
                    start: {
                        x: 5,
                        y: 95,
                    },
                    correct: {
                        x: 22.2,
                        y: 61.9,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 2.3,
                    height: 16.8,
                    start: {
                        x: 9,
                        y: 95,
                    },
                    correct: {
                        x: 51.9,
                        y: 30.6,
                        width: 1,
                        height: 2.4,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 8.5,
                    start: {
                        x: 14,
                        y: 95,
                    },
                    correct: {
                        x: 48.2,
                        y: 27.1,
                        width: 1,
                        height: 2.1,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 3.4,
                    height: 12.1,
                    start: {
                        x: 18,
                        y: 95,
                    },
                    correct: {
                        x: 48.2,
                        y: 27.1,
                        width: 1,
                        height: 2.1,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5.7,
                    height: 7.5,
                    start: {
                        x: 23,
                        y: 95,
                    },
                    correct: {
                        x: 51.9,
                        y: 30.6,
                        width: 1,
                        height: 2.4,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 2.4,
                    height: 15.6,
                    start: {
                        x: 27,
                        y: 95,
                    },
                    correct: {
                        x: 59.5,
                        y: 34.6,
                        width: 1,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 2.2,
                    height: 15.9,
                    start: {
                        x: 32,
                        y: 95,
                    },
                    correct: {
                        x: 44,
                        y: 29.2,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5.2,
                    height: 8.1,
                    start: {
                        x: 36,
                        y: 95,
                    },
                    correct: {
                        x: 55.5,
                        y: 25,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 4.1,
                    height: 9.4,
                    start: {
                        x: 41,
                        y: 95,
                    },
                    correct: {
                        x: 74.9,
                        y: 43.2,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 2.5,
                    height: 16.1,
                    start: {
                        x: 45,
                        y: 95,
                    },
                    correct: {
                        x: 64.7,
                        y: 34.6,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 2.1,
                    height: 18.5,
                    start: {
                        x: 50,
                        y: 95,
                    },
                    correct: {
                        x: 47.5,
                        y: 21.2,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 2.9,
                    height: 13.9,
                    start: {
                        x: 55,
                        y: 95,
                    },
                    correct: {
                        x: 82.3,
                        y: 32.1,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 2.8,
                    height: 14.4,
                    start: {
                        x: 59,
                        y: 95,
                    },
                    correct: {
                        x: 46.1,
                        y: 25.1,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 2.4,
                    height: 15.4,
                    start: {
                        x: 64,
                        y: 95,
                    },
                    correct: {
                        x: 74.6,
                        y: 33,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 3.3,
                    height: 11.8,
                    start: {
                        x: 68,
                        y: 95,
                    },
                    correct: {
                        x: 53.2,
                        y: 35.9,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 2.9,
                    height: 14,
                    start: {
                        x: 73,
                        y: 95,
                    },
                    correct: {
                        x: 68.2,
                        y: 38.8,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 3,
                    height: 13.9,
                    start: {
                        x: 77,
                        y: 95,
                    },
                    correct: {
                        x: 47.1,
                        y: 50.6,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 3.6,
                    height: 10.7,
                    start: {
                        x: 82,
                        y: 95,
                    },
                    correct: {
                        x: 55.2,
                        y: 33.3,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 2.6,
                    height: 15.6,
                    start: {
                        x: 86,
                        y: 95,
                    },
                    correct: {
                        x: 18.6,
                        y: 46.1,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 3,
                    height: 13.5,
                    start: {
                        x: 91,
                        y: 95,
                    },
                    correct: {
                        x: 21.6,
                        y: 57.9,
                        width: 0.7,
                        height: 1.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 6,
                    height: 7.2,
                    start: {
                        x: 95,
                        y: 95,
                    },
                    correct: {
                        x: 59.5,
                        y: 34.6,
                        width: 1,
                        height: 1.9,
                    },
                },
            ],
        },
        {
            type: 'history',
            width: 82,
        },
        {
            type: 'pictures',
            pictures: [
                {
                    informationSize: {width: 63},
                    width: 5.1,
                    height: 7.6,
                    start: {
                        x: 7,
                        y: 93,
                    },
                    correct: {
                        x: 21.8,
                        y: 63.4,
                        width: 0.7,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 4.1,
                    height: 9.9,
                    start: {
                        x: 13,
                        y: 93,
                    },
                    correct: {
                        x: 64.4,
                        y: 31.5,
                        width: 0.7,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 6.3,
                    height: 6.1,
                    start: {
                        x: 20,
                        y: 93,
                    },
                    correct: {
                        x: 55.8,
                        y: 32.3,
                        width: 0.7,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 4.8,
                    height: 7.9,
                    start: {
                        x: 27,
                        y: 93,
                    },
                    correct: {
                        x: 67.3,
                        y: 21,
                        width: 0.7,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5.3,
                    height: 7.2,
                    start: {
                        x: 33,
                        y: 93,
                    },
                    correct: {
                        x: 51.8,
                        y: 29.3,
                        width: 1.3,
                        height: 2.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5.3,
                    height: 7.2,
                    start: {
                        x: 40,
                        y: 93,
                    },
                    correct: {
                        x: 48.7,
                        y: 27.7,
                        width: 1.1,
                        height: 3.4,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5.5,
                    height: 6.8,
                    start: {
                        x: 47,
                        y: 93,
                    },
                    correct: {
                        x: 48.7,
                        y: 27.7,
                        width: 1.1,
                        height: 3.4,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 3.2,
                    height: 10.9,
                    start: {
                        x: 53,
                        y: 93,
                    },
                    correct: {
                        x: 53.5,
                        y: 37.6,
                        width: 0.7,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 5,
                    height: 7.5,
                    start: {
                        x: 60,
                        y: 93,
                    },
                    correct: {
                        x: 76.1,
                        y: 33,
                        width: 0.7,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 3.7,
                    height: 10,
                    start: {
                        x: 67,
                        y: 93,
                    },
                    correct: {
                        x: 59.7,
                        y: 35.3,
                        width: 0.7,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 4.5,
                    height: 7.3,
                    start: {
                        x: 73,
                        y: 93,
                    },
                    correct: {
                        x: 51.8,
                        y: 29.3,
                        width: 1.3,
                        height: 2.5,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 4.6,
                    height: 8.3,
                    start: {
                        x: 80,
                        y: 93,
                    },
                    correct: {
                        x: 16.3,
                        y: 42,
                        width: 0.7,
                        height: 1.9,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 4.6,
                    height: 7.2,
                    start: {
                        x: 87,
                        y: 93,
                    },
                    correct: {
                        x: 48.7,
                        y: 27.7,
                        width: 1.1,
                        height: 3.4,
                    },
                },
                {
                    informationSize: {width: 63},
                    width: 3,
                    height: 10.2,
                    start: {
                        x: 93,
                        y: 93,
                    },
                    correct: {
                        x: 45,
                        y: 20,
                        width: 0.7,
                        height: 1.9,
                    },
                },
            ],
        },
    ],
];
window.renderGame(GAME_DATA);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('body').style.backgroundColor = '#000';
for (let i = 0; i < GAME_DATA[2][6].pictures.length; i++) {
    var a = document.createElement('div');
    a.style.border = '1px solid #000000';
    a.style.position = 'absolute';
    a.style.left = GAME_DATA[2][6].pictures[i].correct.x - GAME_DATA[2][6].pictures[i].correct.width + '%';
    a.style.top = GAME_DATA[2][6].pictures[i].correct.y - GAME_DATA[2][6].pictures[i].correct.height + '%';
    a.style.zIndex = 10;
    a.style.width = GAME_DATA[2][6].pictures[i].correct.width * 2 + '%';
    a.style.height = GAME_DATA[2][6].pictures[i].correct.height * 2 + '%';
    document.querySelector(`body`).appendChild(a);
}
