

let loginPageDiv = document.querySelector('#login')
let backToLoginBtn=document.querySelector('#loginButton')
let registPageButton=document.querySelector('#registrationButton')
let registrationPageDiv=document.querySelector('#registration')

registrationPageDiv.style.display='none'
registPageButton.addEventListener('click', () => {
  loginPageDiv.style.display = 'none';
  registrationPageDiv.style.display = 'block';
});

backToLoginBtn.addEventListener('click', () => {
  registrationPageDiv.style.display = 'none';
  loginPageDiv.style.display = 'block';
});
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).{8,}$/;
const emailUnicodeRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
const azMobileRe = /^(?:(?:\+?994)|0)\s*(?:50|51|55|60|70|77|99)[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
const log = /^(?=.{3,30}$)[\p{L}\p{N}](?:[._-]?[\p{L}\p{N}]){1,29}$/u
 
let loginEmail= document.querySelector('#email')
let loginPassword= document.querySelector('#password')
let firstName= document.querySelector('#FirstName')
let lastName= document.querySelector('#LastName')
let registPassword= document.querySelector('#registerPassword')
let registEmail= document.querySelector('#registerEmail')
let gender=document.querySelector('#Gender')

let emailValidation=document.querySelector('#emailValidation')
let PasswordValidation=document.querySelector('#passwordValidation')

let NameValidation=document.querySelector('#NameValidation')
let SurnameValidation=document.querySelector('#SurnameValidation')
let registEmailValidation=document.querySelector('#EmailValidation')
let registPasswordValidation=document.querySelector('#PasswordValidation')


function showValidation(text, valid) {
  text.innerText = valid ? 'Correct' : 'Wrong';
  text.style.color = valid ? 'green' : 'red';
}

let validLoginEmail=false;
loginEmail.addEventListener('input',function (ev){
  validLoginEmail = emailUnicodeRe.test(ev.target.value);
showValidation  (emailValidation,validLoginEmail)
})

let validLoginPassword=false;
loginPassword.addEventListener('input',function (ev){
  validLoginPassword = strongPassword.test(ev.target.value);
showValidation  (PasswordValidation,validLoginPassword)
})

let login=document.querySelector('#Login')

login.addEventListener('click', function() {
  if (validLoginEmail && validLoginPassword) {
    alert("You have successfully logged in");
  } else {
    alert("Email or password is incorrect");
  }
});


////////////////////////////////////////////////////////////////////////////////////

let validName=false;
let validSurname=false;
let validRegisterEmail=false;
let validRegisterPassword=false;

firstName.addEventListener('input', function (ev) {
  let value = ev.target.value.trim();
  validName = value !== "";
  showValidation(NameValidation, validName);
});

lastName.addEventListener('input', function (ev) {
  let value = ev.target.value.trim();
  validSurname = value !== "";
  showValidation(SurnameValidation, validSurname);
});

registEmail.addEventListener('input', function (ev) {
  validRegisterEmail = emailUnicodeRe.test(ev.target.value);
  showValidation(registEmailValidation, validRegisterEmail);
});

registPassword.addEventListener('input', function (ev) {
  validRegisterPassword = strongPassword.test(ev.target.value);
  showValidation(registPasswordValidation, validRegisterPassword);
});

let registerBtn=document.querySelector('#Register')
registerBtn.addEventListener  ('click',function (ev){
  if(validName && validSurname && validRegisterEmail && validRegisterPassword){
    alert("You have successfully registered")
  } else{
    alert("Please enter all information correctly")
  }
})
