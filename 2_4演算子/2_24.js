let book = {
  title: "Javaポケットリファレンス",
  publish: "技術評論社",
  price: 2670,
  other: { keywd: "Java SE8", logo: "logo.jpg" },
};
let {
  title,
  other,
  other: { keywd },
} = book;

console.log(title);
console.log(other);
console.log(keywd);
