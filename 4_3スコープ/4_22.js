var scope = "Global Scope";

function chackScope() {
  var scope = "Loca Scope";

  var f_lit = function () {
    return scope;
  };
  console.log(f_lit());

  var f_con = new Function("return scope;");
  console.log(f_con());
}

checkScope();
