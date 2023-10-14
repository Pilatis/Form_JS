const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome esta vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha seu nome");
        return;
    }

    //Email 
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }

    //Verifica se está preenchido
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa de no mínimo 8 digitos");
        return;
    }

    //Verifica se esta selecionada
    if(jobSelect.value === "") {
        alert("Por favor, selecione a sua situação");
        return;
    }

    //Verifica a mensagem
    if(messageTextarea.value === "") {
        alert("Por favor, preencha sua mensagem");
        return;
    }


    form.submit();
});

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-0._-]+\.[a-z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

       return false;
}

//Valida a senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true;
    }

        return false;
}