"use strict";
let numStr = "100";
let item;
function convertToString(val) {
    if (typeof val === "string") {
        item = 0;
    }
    else {
        item = val;
    }
    return String(item);
}
function convertToNumber(val) {
    return Number(val);
}
console.log(convertToNumber(numStr));
