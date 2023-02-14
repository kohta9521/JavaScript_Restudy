var scope = "Global Variable";

function getValue() {
  var scope = "Loacal Variable";
  return scope;
}

console.log(getValue());
console.log(scope);
