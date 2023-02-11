var ary1 = ["Sato", "Takea", "Osada", "Hio", "Saitoh", "Sato"];
var ary2 = ["Yabuki", "Aoki", "Moriyama", "Yamada"];

console.log(ary1.length);
console.log(Array.isArray(ary1));
console.log(ary1.toString());
console.log(ary1.indexOf("Sato"));
console.log(ary1.lastIndexOf("Sato"));

console.log(ary1.concat(ary2));
console.log(ary1.join("/"));
console.log(ary1.slice(1));
console.log(ary1.slice(1, 2));
console.log(ary1.slice(1, 2, "Kakeya", "Yamaguchi"));
