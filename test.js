
window.addEventListener("load", function() {
    var loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.style.opacity = 0;
    setTimeout(function() {
      loaderWrapper.style.display = "none";
    }, 1000);
  });
  