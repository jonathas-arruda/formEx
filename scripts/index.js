const Registro={
  email:'',
  password:'',
  legalAge:'',
  termsAndConditions:'',
}

const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
// 1. Obter o valor introduzido no input do e-mail.
let inputEmail = document.getElementById("email-input").value

// 2. Obter o valor introduzido no input de senha.
let inputSenha = document.getElementById("password-input").value

// 3. Obter o valor do input de rádio.
let checkingRadio = document.getElementsByName("legalAge")

// 4. Obter o valor do input com o checkbox.
let checkingBox = document.getElementById("tyc-input")

// 5. Validar se o utilizador for maior de idade. Caso contrário, mostramos
// uma mensagem de erro: "Tem de ser maior de idade para se registar no site".
!checkingRadio[0].checked && alert("Tem de ser maior de idade para se registar no site")

// 6. Validamos se o utilizador aceitou os termos e condições. Caso contrário, exibimos
// uma mensagem de erro: "Deve aceitar os termos e condições para se registar no site".
!checkingBox.checked && alert("Deve aceitar os termos e condições para se registar no site")
// 7. Por fim, se tudo estiver correto, exibimos um objeto no console com as informações definidas pelo utilizador. 

Registro.email=inputEmail;
Registro.password=inputSenha;
Registro.legalAge=checkingRadio[0].checked;
Registro.termsAndConditions=checkingBox.checked;
});