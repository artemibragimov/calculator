var plus = document.getElementById("plus");
plus.onclick = function () {
  calc("plus");
};

var minus = document.getElementById("minus");
minus.onclick = function () {
  calc("minus");
};

var multiply = document.getElementById("multiply");
multiply.onclick = function () {
  calc("multiply");
};

var devide = document.getElementById("devide");
devide.onclick = function () {
  calc("devide");
};

var clear = document.getElementById("clear");
clear.onclick = function () {
  calc("clear");
};

function calc(operation) {
  var i = getNumber();
  var result;
  if (operation == "plus") {
    result = i[0] + i[1];
  } else if (operation == "minus") {
    result = i[0] - i[1];
  } else if (operation == "multiply") {
    result = i[0] * i[1];
  } else if (operation == "devide") {
    result = i[0] / i[1];
  } else {
    result = " ";
    document.getElementById("number1").value = " ";
    document.getElementById("number2").value = " ";
  }

  var calcResult = document.getElementById("res");
  calcResult.innerHTML = result;
}

function getNumber() {
  var a = Number(document.getElementById("number1").value);
  var b = Number(document.getElementById("number2").value);
  var i = [a, b];
  return i;
}
