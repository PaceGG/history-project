document.addEventListener("DOMContentLoaded", function () {
  var accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      var accordionItem = this.parentElement;
      accordionItem.classList.toggle("open");
    });
  });
});
