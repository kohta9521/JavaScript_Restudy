let pet = {
  type: "スノーホワイトハムスター",
  name: "キラ",
  description: {
    birth: "2014-02-15",
  },
};

let pet2 = {
  bname: "山田キラ",
  color: "白",
  description: {
    food: "ひまわりのタネ",
  },
};

let pet3 = {
  weight: 42,
  photo: "https:skskskskskksk",
};

Object.assign(get, pet2, pet3);
console.log(pet);
