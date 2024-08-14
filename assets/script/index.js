const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function redirectToRegister() {
    const email = document.getElementById('userEmail').value;
    if (email) {
        window.location.href = `register.html?email=${encodeURIComponent(email)}`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('register.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const email = urlParams.get('email');
        
        if (email) {
            // Preencher o campo de email
            const emailInput = document.getElementById('email');
            if (emailInput) {
                emailInput.value = email;
            }

            // Simular clique no botão "Cadastre-se" que está no painel de toggle
            const registerButton = document.getElementById('register');
            if (registerButton) {
                registerButton.click();
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.load.classList.add('loaded');
});