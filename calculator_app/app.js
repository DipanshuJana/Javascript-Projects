const screen = document.getElementById('output-screen');
const buttons = document.querySelectorAll('button');

for(btn of buttons){
    btn.addEventListener('click', (e)=>{
        btnText = e.target.innerText;
        if(btnText == 'X'){
            btnText = '*';
            screen.value += btnText;
        }
        else if(btnText == 'AC'){
            screen.value = '';
        }
        else if(btnText == '='){
            screen.value = eval(screen.value);
        }
        else{
            screen.value += btnText;
        }
    })
}