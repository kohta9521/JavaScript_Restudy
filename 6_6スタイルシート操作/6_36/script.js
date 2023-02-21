document.addEventListener(
  "DOMContentLoaded",
  function () {
    var elem = document.getElementById("elem");

    elem.addEventListener(
      "mouseover",
      function () {
        this.className = "heightlight";
      },
      false
    );

    elem.addEventListener(
      "mouseover",
      function () {
        this.className = " ";
      },
      false
    );
  },
  false
);
