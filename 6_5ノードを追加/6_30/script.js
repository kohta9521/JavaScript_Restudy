document.addEventListener(
  "DOMContentLoaded",
  function () {
    var books = [
      { title: "独習PHP", price: 3200 },
      { title: "Javaポケットリファレンス", price: 2680 },
      { title: "アプリを作ろう!!", price: 2000 },
    ];

    var list = document.getElementById("list");

    for (var i = 0, len = books.length; i < len; i++) {
      var b = books[i];
      var li = document.createTextNode(b.title + " " + b.price + "円");
      li.appendChild(text);
      li.appendChild(price);
    }
  },
  false
);
