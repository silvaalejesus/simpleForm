// pega o elemento html a partir do nome do id
var email = document.getElementById('email');
var password = document.getElementById('password');

//quando focar a cor da borda muda
email.addEventListener('focus', () => {
    email.style.borderColor = '4a5f6a' // adiciona estilo css
});

//tira a cor da borda do input quando clica fora do input
email.addEventListener('blur', () => {
    email.style.borderColor = '#ccc' // adiciona estilo css
});

//quando focar a cor da borda muda
password.addEventListener('focus', () => {
    password.style.borderColor = '4a5f6a' // adiciona estilo css
});

//tira a cor da borda do input quando clica fora do input
password.addEventListener('blur', () => {
    password.style.borderColor = '#ccc' // adiciona estilo css
})