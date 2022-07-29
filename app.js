document.getElementById("turn-yellow").onclick = yellowFunction;
document.getElementById("turn-pink").onclick = pinkFunction;
document.getElementById("turn-default").onclick = defFunction;

//An example of a callback hell (a.k.a. christmas tree)
document.getElementById("go").addEventListener("click", function (e) {
  const el = e.currentTarget;
  console.log(el);
  setTimeout(function() {
    el.classList.add("circle");
    setTimeout(function() {
      el.classList.add("red");
      setTimeout(function() {
        el.classList.remove("circle");
        setTimeout(function() {
          el.classList.remove("red");
          el.classList.remove("purple");
          setTimeout(function() {
            el.classList.add('dontFadeOut');
          })
        }, 300);
      }, 300);
    }, 500);
  }, 2000);
});

function defFunction() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
}

function yellowFunction() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}

function pinkFunction() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "pink";
  }

