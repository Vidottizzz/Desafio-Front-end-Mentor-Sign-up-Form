// // O input não pode estar vazio, e o e-mail tem que conter as caracteristicas de um e-mail
// const el = e.target;
// console.log(el);

const allInput = document.querySelectorAll('.input');
const formBtn = document.querySelector('.form-btn');
const inptEmail = document.querySelector('#email');
const errImg = document.querySelectorAll('.err-img');
const pError = document.querySelectorAll('.p-error');
const pEmailError = document.querySelector('.p-email-error');


formBtn.addEventListener('click', (e) => {

    for (i = 0; i < allInput.length; i++) {
        e.preventDefault();
        let allInputs = allInput[i];
        let allImgs = errImg[i];
        let allP = pError[i];

        if (allInputs.value === "") {
            allInput[i].classList.add('back-red');
            allImgs.classList.add('show');
            allImgs.classList.remove('hide');
            allP.classList.add('show');
            allP.classList.remove('hide');
        } else {
            allInputs.classList.remove('back-red');
            allImgs.classList.remove('show');
            allImgs.classList.add('hide');
            allP.classList.add('hide');
            allP.classList.remove('show');
        }

    }




    if (inptEmail.value.indexOf('@') == -1 || inptEmail.value.indexOf('.') == -1) {
        pEmailError.classList.add('show-display');
        pEmailError.classList.remove('hide-display');

        allInput[i].classList.add('back-red');
        allImgs.classList.add('show');
        allImgs.classList.remove('hide');


    } else {
        pEmailError.classList.add('hide');
        pEmailError.classList.remove('show');
        allInputs.classList.remove('back-red');
        allImgs.classList.remove('show');
        allImgs.classList.add('hide');

    }
})

