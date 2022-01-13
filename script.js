// // O input não pode estar vazio, e o e-mail tem que conter as caracteristicas de um e-mail
// const el = e.target;
// console.log(el);

const allInput = document.querySelectorAll('.input');
const formBtn = document.querySelector('.form-btn');
const inptEmail = document.querySelector('#email');



formBtn.addEventListener('click', (e) => {

    for (i = 0; i < allInput.length; i++) {
        e.preventDefault();
      let allInputs = allInput[i];
        if(allInputs.value === "") {
            allInputs.classList.add('back-red');
        } else{
            allInputs.classList.remove('back-red');
        }
    }
    if ( inptEmail.value.indexOf('@') == -1 || inptEmail.value.indexOf('.') == -1) {
        console.log('não tem arroba e nem pontos')
    }
})

