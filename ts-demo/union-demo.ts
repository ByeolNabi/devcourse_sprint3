type strOrNum = number | string;

let numStr: strOrNum = "100";
let item: number;

function convertToString(val: strOrNum): string {
  if (typeof val === "string") {
    item = 0;
  } else {
    item = val;
  }

  return String(item);
}

function convertToNumber(val: strOrNum): number {
  return Number(val);
}

console.log(convertToNumber(numStr));
