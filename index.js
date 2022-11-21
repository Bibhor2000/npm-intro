const _ = require("lodash");
const brownBears = require("./bears");

const variousBrownBears = [
    "Gobi bear",
    "Grizzly bear",
    "Himalayan brown bear",
    "Ussuri brown bear",
    "Kamchatka brown bear",
    "Kodiak bear",
]

const randomBear = _.sample(brownBears);
console.log(randomBear);