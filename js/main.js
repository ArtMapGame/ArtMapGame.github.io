const GAME_DATA = [
    [
        /*{
            type: 'maps',
            number: 9,
        },
        {
            type: 'history',
            width: 50,
        },
        {
            type: 'history',
            height: 50,
        },*/
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {type: 'maps', number: 9},
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
            ],
        },
    ],
    [],
    [],
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
    mapInterval: 1,
    item: {
        transform: 10,
        resizeSpeed: 208,
    },
    points: {
        size: 5,
        style: `Arial`,
        color: `#000000`,
    },
};
window.renderGame(GAME_DATA);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('body').style.backgroundColor = '#000';
var last = GAME_DATA[0][1].pictures.length - 1;
var a = document.createElement('div');
a.style.border = '3px solid #000000';
a.style.position = 'absolute';
a.style.left = GAME_DATA[0][1].pictures[last].correct.x - GAME_DATA[0][1].pictures[last].correct.width + '%';
a.style.top = GAME_DATA[0][1].pictures[last].correct.y - GAME_DATA[0][1].pictures[last].correct.height + '%';
a.style.zIndex = 10;
a.style.width = GAME_DATA[0][1].pictures[last].correct.width * 2 + '%';
a.style.height = GAME_DATA[0][1].pictures[last].correct.height * 2 + '%';
document.querySelector(`body`).appendChild(a);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
