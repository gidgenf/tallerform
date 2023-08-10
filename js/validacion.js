function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

regBtn.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('contraseña').value;
    const password2 = document.getElementById('repetircontraseña').value;
    const terminos = document.getElementById('terminos').checked;

    if (!nombre || !apellido || !email || !contraseña || !repetircontraseña || !terminos) {
      showAlertError();
    } else if (password1.length < 6) {
      showAlertError();
    } else if (password1 !== password2) {
      showAlertError();
    } else {
      showAlertSuccess();
    }
  });