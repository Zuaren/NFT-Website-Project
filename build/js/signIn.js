
document.addEventListener("DOMContentLoaded", function () { 

    const signInBtn = document.getElementById('signIn-btn');
    const openSignInModal = document.getElementById('openSignInModal');
    const closeModal = document.getElementById('btn-close');



    //eventListener to open modal
    signInBtn.addEventListener("click", function() {
        openSignInModal.classList.remove("hidden");
    });


    //close modal 

    closeModal.addEventListener("click", function () {
        openSignInModal.classList.add("hidden");
    });

    
});