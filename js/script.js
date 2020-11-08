                          // popup

let btn = document.querySelector('.map-link');
let modalLogin = document.querySelector('.modal-login');
let modalClose = document.querySelector('.modal-close');
let loginUser = document.querySelector('.login-user');
let userEmail = document.querySelector('.user-e-mail');
let loginForm = document.querySelector('.login-form');
let textMessage = document.querySelector('.text-message');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

btn.addEventListener("click", function (evt) {
 evt.preventDefault();
modalLogin.classList.add('modal-show');
loginUser.focus();
 if (storage) {
    loginUser.value = storage;
loginUser.focus();
  } else {
    userEmail.focus();
  }
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal-show");
modalLogin.classList.remove("modal-error");
});
loginForm.addEventListener("submit", function (evt) {
if (!loginUser.value || !loginEmail.value) {
    evt.preventDefault();
modalLogin.classList.remove("modal-error");
modalLogin.offsetWidth = modalLogin.offsetWidth;
modalLogin.classList.add("modal-error");
  } else {
        if (isStorageSupport) {
    localStorage.setItem("name", loginUser.value);
      }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalLogin.classList.contains("modal-show")) {
      evt.preventDefault();
      modalLogin.classList.remove("modal-show");
    }
  }
});


