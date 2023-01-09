$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 150) {
    $("#main-navbar").addClass("navbar-scroll");
  } else {
    $("#main-navbar").removeClass("navbar-scroll");
  }
});

function knap1() {
  var x = document.getElementById("div1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function knap2() {
  var x = document.getElementById("div2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

