document.addEventListener(
  "DOMContentLoaded",
  function () {
    var books = [
      { title: "独習PHP", price: 3200 },
      { title: "Javaポケットリファレンス", price: 2680 },
      { title: "アプリを作ろう!!", price: 2000 },
    ];

    var frag = document.createDocumentFragment();

    for (var i = 0, len = books.length; i < len; i++) {
      var b = books[i];
      var li = document.createElement("li");
      var text = document.createTextNode(b.title + " : " + b.price + "円");
      li.appenChild(text);
      li.appendChild(li);
    }

    document.getElementById("list").appendChild(frag);
  },
  false
);
