
const myString = "สวัสดี";
const myNumber = 20;
const myBoolean = true;
let myUndefined;
const myNull = null;
const myArray = [10, 20, 30];

console.log(`ค่า: ${myString} | ชนิด: ${typeof myString}`);
console.log(`ค่า: ${myNumber} | ชนิด: ${typeof myNumber}`);
console.log(`ค่า: ${myBoolean} | ชนิด: ${typeof myBoolean}`);
console.log(`ค่า: ${myUndefined} | ชนิด: ${typeof myUndefined}`);
console.log(`ค่า: ${myNull} | ชนิด: ${typeof myNull}`);
console.log(`ค่า: ${myArray} | ชนิด: ${typeof myArray}`);

console.log("typeof null ได้ค่า:", typeof myNull);
console.log("ตัวแปร myUndefined มีชนิด:", typeof myUndefined);

const myNaN = Number("abc");
console.log("typeof NaN ได้ค่า:", typeof myNaN);

const inputAge = "20";
const inputScore = "85.5";


const age = Number(inputAge);
console.log("อายุหลังบวก 5:", age + 5);


const score = Number(inputScore);
console.log("คะแนน:", score.toFixed(1));

console.log("NaN หรือไม่:", Number.isNaN(myNaN));