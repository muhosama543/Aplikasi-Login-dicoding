/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Membuat Variabel view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* membuat variabel untuk email dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* membuat Function email dan password dapat berjalan */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /* jika email dan password yang dimasukkan benar maka akan menuju Home */
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();

    /* Jika email dan password yang dimasukkan salah, maka akan muncul pop up */
  } else {
    showPopUp();
  }
});
