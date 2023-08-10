function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


regBtn.addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const email = document.getElementById('email').value
    const contraseña = document.getElementById('password1').value
    const repetircontraseña = document.getElementById('password2').value
    const terminos = document.getElementById('terminos').checked

    if (!nombre || !apellido || !email || !contraseña || !terminos || !repetircontraseña) {
        showAlertError();
    } else if (contraseña.length < 6 || contraseña !== repetircontraseña || !terminos) {
        showAlertError();
    } else {
        showAlertSuccess();
    }

});

