var Member = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function () {
    return this.lastName + " " + this.firstName;
  };
};

var mem = new Member("ひろし", "山田");
console.log(mem.getName());
