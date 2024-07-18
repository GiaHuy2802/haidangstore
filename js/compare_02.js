
document.getElementById("add_compare1").addEventListener("click", function () {
    document.querySelector(".wrp2").classList.toggle("active");
    document.querySelector(".opa").classList.toggle("active");
  });
document.getElementById("close1").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".wrp2").classList.remove("active");
    document.querySelector(".opa").classList.remove("active");
  });
  document.getElementById("close").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".wrp2").classList.remove("active");
    document.querySelector(".opa").classList.remove("active");
  });
