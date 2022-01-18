    let id = (id) => document.getElementById(id);

    let classes = (classes) => document.getElementsByClassName(classes);

    // IDs (Inputs e Form)

    let firstname = id('firstname'),
        lastname = id('lastname'),
        email = id('email'),
        password = id('password'),
        form = id('form');

    // CLASSES

    let  errorMessage = classes('error-message');

    // EVENT LISTENER 

    form.addEventListener('submit', (e) => {
         e.preventDefault();

        formEngine(firstname, 0, 'First Name cannot be empty');
        formEngine(lastname, 1, 'Last Name cannot be empty');
        formEngine(email, 2, ' Looks like this is not an email');
        formEngine(password, 3, 'password cannot be empty');
    })

    let formEngine = (id, index, message) => {

        if(id.value.trim() === "" ) {
           errorMessage[index].innerHTML = message;
           id.classList.add('bg-image');
           id.classList.add('error-red');
        }
        else {
            errorMessage[index].innerHTML = '';
            id.classList.remove('bg-image');
            id.classList.remove('error-red'); 
        }


    };