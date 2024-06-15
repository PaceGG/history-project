var modalBtns = document.querySelectorAll(".openModalBtn");
var modals = document.querySelectorAll(".modal");
var closeBtns = document.querySelectorAll(".close");

modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modalId = btn.getAttribute("data-modal");
    var modal = document.getElementById(modalId);

    modal.style.display = "block";
    setTimeout(function () {
      modal.style.opacity = "1";
    }, 50);
  };
});

closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.closest(".modal");
    modal.style.opacity = "0";
    setTimeout(function () {
      modal.style.display = "none";
    }, 300);
  };
});

window.onclick = function (event) {
  modals.forEach(function (modal) {
    if (event.target == modal) {
      modal.style.opacity = "0";
      setTimeout(function () {
        modal.style.display = "none";
      }, 300);
    }
  });
};
