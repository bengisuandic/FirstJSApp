document.getElementById("turn-yellow").onclick = yellowFunction;
document.getElementById("turn-pink").onclick = pinkFunction;
document.getElementById("turn-default").onclick = defFunction;


function defFunction() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
}

function yellowFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}

function pinkFunction() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "pink";
  }

