document.addEventListener("DOMContentLoaded", function () {
    

    const openLoginModal = document.getElementById('openLoginModal');
    const btnLoginModal =document.getElementById('btn_login');
    const closeBtn = document.getElementById('closeBtn');

        btn_login.addEventListener('click', function(){

            openLoginModal.classList.remove('hidden');
        });

        closeBtn.addEventListener('click', function(){

            openLoginModal.classList.add('hidden');
        });
});





