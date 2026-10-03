let startingPoint = Array(7);
console.log(startingPoint); // [ <7 empty items> ]

let greeting = Array(7).fill("Hello");
console.log(greeting); // ['Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello', 'Hello']

let partialGreeting = Array(7).fill("Hiya", 1, 4);
console.log(partialGreeting); // [ <1 empty item>, 'Hiya', 'Hiya', 'Hiya', <3 empty items> ]

let loopArr = Array(5);
for (let i = 0; i < loopArr.length; i++) {
    loopArr[i] = i * 10;
    console.log(loopArr);
};
// [ 0, <4 empty items> ]
// [ 0, 10, <3 empty items> ]
// [ 0, 10, 20, <2 empty items> ]
// [ 0, 10, 20, 30, <1 empty item> ]
// [ 0, 10, 20, 30, 40 ]