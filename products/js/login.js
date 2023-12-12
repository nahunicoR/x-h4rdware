

function loguear(){
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value;

    if(password === 'Admin123' && email === 'administrator'){
        alert('Bienvenido señor Stark!')
        window.location = 'http://127.0.0.1:5500/X-H4RDWARE/CRUDWEB/productos.html'
    }
};