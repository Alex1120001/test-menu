let modal = document.getElementById('modal');
let boxes = document.getElementById('boxes');



modal.onclick = function(){
    boxes.style.width = '100%';
}

let menu = document.getElementById('off');

menu.onclick = function(){
    let k = prompt('Введіть номер вашого столика \n **номер столика вказаний біля qr кода: ')
    if(k  == ' '){
        alert('Введіть номер столика!')
    }
}
