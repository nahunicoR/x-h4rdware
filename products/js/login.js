

function loguear(){
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value;

    if(password === 'Admin123' && email === 'administrator'){
        alert('Bienvenido señor Stark!')
        window.location = 'https://x-h4rdware.netlify.app/crudweb/productos'
    }
};