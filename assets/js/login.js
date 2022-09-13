const botaoLogin = document.querySelector('[data-botao]');

botaoLogin.addEventListener('click', (evento)=>{
    evento.preventDefault();



    const email = document.querySelector('[data-email]').value;
    const senha = document.querySelector('[data-senha]').value;
    console.log(email);

    if((email == "admin@admin.com") && (senha == "1234")){

        sessionStorage.setItem("login", email)
        window.location.href ='index.html';
    }
})