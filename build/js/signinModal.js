
document.addEventListener("DOMContentLoaded", function () { 

   const openSignInModal = document.getElementById('signIn_Modal');
   const signInBtn = document.getElementById('signIn_btn');
   const closeBtn = document.getElementById('closeSignInBtn');



   signInBtn.addEventListener('click', function() {

        openSignInModal.classList.remove('hidden');
    });
    

    closeBtn.addEventListener('click', function() {

        openSignInModal.classList.add('hidden');
    });

});