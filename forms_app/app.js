const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');
const submitForm = document.getElementById('submit');
let validName = false;
let validEmail = false;
let validPhone = false;

userName.addEventListener('blur', ()=>{
    let reg = /^[a-zA-Z]([a-zA-Z]\s*){2,20}$/;
    nameError = document.getElementById('nameError');
    if(userName.value ==''){
        nameError.innerText = `User Name can't be empty`;
        nameError.style.color = 'red';
        userName.classList.add('is-invalid');
    }
    else if(reg.test(userName.value) || userName.value ==''){
        nameError.innerText = '';
        userName.classList.remove('is-invalid');
        validName = true;
    }
    else{
        nameError.innerText = 'Your Username must be 2-10 characters long and should not strart with a number!';
        nameError.style.color = 'red';
        userName.classList.add('is-invalid');
    }
});

userEmail.addEventListener('blur', ()=>{
    let reg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    emailError = document.getElementById('emailError');
    if(userEmail.value ==''){
        emailError.innerText = `Email Address can't be empty`;
        emailError.style.color = 'red';
        userEmail.classList.add('is-invalid');
    }
    else if(reg.test(userEmail.value) || userEmail.value ==''){
        emailError.innerText = '';
        userEmail.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        emailError.innerText = 'Your Email Id must contain @ and the domain must be 2-7 letters long!';
        emailError.style.color = 'red';
        userEmail.classList.add('is-invalid');
    }
});

userPhone.addEventListener('blur', ()=>{
    let reg = /^[0-9]([0-9]){7,15}$/;
    phoneError = document.getElementById('phoneError');
    if(userPhone.value ==''){
        phoneError.innerText = `Phone Number can't be empty`;
        phoneError.style.color = 'red';
        userPhone.classList.add('is-invalid');
    }
    else if(reg.test(userPhone.value)){
        phoneError.innerText = '';
        userPhone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        phoneError.innerText = 'Your Phone Number must start with a digit and contain atleast 7 digits and maximum 15 digits long!';
        phoneError.style.color = 'red';
        userPhone.classList.add('is-invalid');
    }
});

submitForm.addEventListener('click', (e)=>{
    console.log(validEmail)
    console.log(validName)
    console.log(validPhone)
    const alertBtn = document.querySelector('.alert');

    if(validEmail && validName && validPhone){
        alertBtn.classList.add('show');
        
        setTimeout(() => {
            alertBtn.classList.remove('show');
        }, 5000);
    }
    else{
        htmlErrorText = `<strong>Can't Submit The Form!</strong> Your form does not match the required criteira!`;
        alertBtn.innerHTML = htmlErrorText;
        alertBtn.classList.remove('alert-success');
        alertBtn.classList.add('alert-danger');
        alertBtn.classList.add('show');
        
        setTimeout(() => {
            alertBtn.classList.remove('show');
        }, 5000);
    }

    e.preventDefault();
});