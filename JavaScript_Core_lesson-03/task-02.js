"use strict"

var styles = [ "Джаз", "Блюз" ];
console.log(styles);
console.log("<-------------------------->");

styles.push("Рок-н-Ролл");
console.log(styles);
console.log("<-------------------------->");

styles.splice(-1, 1, "Класика");
console.log(styles);
console.log("<-------------------------->");

console.log(styles.shift());
console.log(styles);
console.log("<-------------------------->");

styles.unshift("Реп", "Реггі");
console.log(styles);
console.log("<-------------------------->");