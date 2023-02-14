var param = "height, width";
var formula = "return height * width / 2";
var diamond = new Function(param, formula);
console.log("三角形の面積は : " + diamond(5, 2));
