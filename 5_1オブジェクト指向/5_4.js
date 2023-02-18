var Member = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member("ひろし", "山田");
mem.getNaem = function () {
  return this.lastName + " " + firstName;
};

console.log(mem.getName());
