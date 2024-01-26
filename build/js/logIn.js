document.addEventListener("DOMContentLoaded", function () {
    const logInBtn = document.getElementById('btn-lgn');
    const openModal = document.getElementById('openModal');
    const closeModal = document.getElementById('btn-close');
    const submitBtn = document.getElementById('btn-submit');

    // event listener to open modal 
    logInBtn.addEventListener("click", function () {
        openModal.classList.remove("hidden");
    });

    // event listener to close modal
    closeModal.addEventListener("click", function () {
        openModal.classList.add("hidden");
    });

//hide and unhide password



    function emailValidation() {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const emailInput = document.getElementById('email');
    

        if (emailRegex.test(emailInput.value)) {
            alert('Successful Log In');
        } else {
            alert('Invalid Email');
        }
    }
    document.getElementById('btn-submit').addEventListener('click', emailValidation);




    function logInLogic () { 

        

    }


});

