var str1 = "にわにはにわにわとりがいる";

console.log(str1.indexOf("にわ"));
console.log(str1.lastIndexOf("にわ"));
console.log(str1.indexOf("にわ", 3));
console.log(str1.lastIndexOf("わ", 5));
console.log(str1.indexOf("ガーデン"));
console.log(str1.startsWith("にわ"));
console.log(str1.endsWith("にわ"));
console.log(str1.includes("にわ"));

var str2 = "Wingsプロジェクト";
var str3 = "叱られて";
var str4 = "    wings    ";

console.log(str2.charAt(4));
console.log(str2.slice(5, 8));
console.log(str2.substring(5, 8));
console.log(str2.substr(5, 3));
console.log(str2.split("わ", 3));
console.log(str2.charCodeAt(0));
