//Seu JavaScript de validação aqui

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("input", function() {
        validateForm();
    });
});

function validateForm() {
    let name = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("assunto").value;
    let message = document.getElementById("mensagem").value;
    let submitBtn = document.getElementById("submitBtn");

    let messageError = document.getElementById("messageError");
    messageError.textContent = "";

    let isValid = true;

    if (name.trim() === "" || 
        !email.match(/\S+@\S+\.\S+/) || 
        subject.trim() === "" || 
        message.trim() === "") {

        isValid = false;
    }

    if (!isValid) {
        messageError.textContent = "Preencha todos os campos para habilitar o botão";
    }

    submitBtn.disabled = !isValid;
}
