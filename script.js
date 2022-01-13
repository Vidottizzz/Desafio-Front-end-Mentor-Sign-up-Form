// // O input não pode estar vazio, e o e-mail tem que conter as caracteristicas de um e-mail
// const el = e.target;
// console.log(el);

const allInput = document.querySelectorAll('.input');
const formBtn = document.querySelector('.form-btn');



formBtn.addEventListener('click', (e) => {

    for (i = 0; i < allInput.length; i++) {
        e.preventDefault();
      let allInputs = allInput[i];
        if(allInputs.innerHTML === '') {
            allInputs.classList.add('back-red');
        }; 
    }
})

