var modalLogin = document.querySelector(".modal-login");
var modalMap = document.querySelector(".modal-map");
var modalClose = document.querySelector(".modal-close");
var modalCloseMap = document.querySelector(".modal-close--map");
var loginOpen = document.querySelector(".user-block__login");
var mapOpen = document.querySelector(".button--map");


function modalOpen(button, modal, buttonClose) {
 if(modal){
  button.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("modal-show");
  });
  buttonClose.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.remove("modal-show");
  });
  }
};

modalOpen(loginOpen, modalLogin, modalClose);
modalOpen(mapOpen, modalMap, modalCloseMap);
