// 5) Print Cars that are Older than the Year 2000.

const data4 = require('../Problem4.js');
const data5 = require('../Problem5.js');
const carinventory = require('../CarInventory.js');
let year = data4.carYear(carinventory.inventory);

console.log("Cars were made before the year 2000 ");
console.log("Array of older cars : ");
console.log(data5.carYearBelow2000(year));

let total_year = data5.carYearBelow2000(year);
console.log("Total Years are : "+ total_year.length );
