var Member = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member("ひろし", "山田");
mem.getName = function () {
  return this.lastName + " " + this.firstName;
};

console.log(mem.getName());

var mem2 = new member("なみ", "掛川");
console.log(mem2.getName());
