let book = {
  title: "Javaポケットリファレンス",
  publish: "技術評論社",
  price: 2000,
};
let { price, title, memo = "メモ" } = book;

console.log(title);
console.log(price);
console.log(memo);
