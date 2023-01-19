var hamburger = document.querySelector(".hamburger");
var content = document.querySelector(".content");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

hamburger.onclick = function () {
  hamburger.classList.toggle("active");
  content.classList.toggle("active");
};

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
