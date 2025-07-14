import { users } from "../database/apis.js";
import { crudUsers } from "./controller/crudUsers.js"
const routes = {
    "/": "/src/views/home.html",
    "/login": "/src/views/auth/login.html",
    "/register": "/src/views/auth/register.html",
    "/users": "/src/views/users/index.html"
};

/* Exportamos funcion renderRoute */
export async function renderRoute() {
    /* La constante path captura la ruta de la pagina, ejemplo: /src/views/auth/login.html */
    const path = location.pathname;
    /* La constante app captura el div con el id "app" */
    const app = document.getElementById('app');
    let loggedInUser = localStorage.getItem('loggedInUser') ? true : false; 
    /* la constante file utilizará la ruta que le pasemos por medio de "path" y la buscará en routes */
    const file = routes[path];

    if (!file) {
        console.error('Pagina no encontrada: ', path);
        app.textContent = '<h1 class="text-center text-danger">404 - Pagina no encontrada </h1>';
        return;
    }

    try {
        /* la constante res nos traerá la informacion del archivo que se encuentre en la ruta que tenga file */
        const res = await fetch(file);
        /* la constante html convertirá todo el contenido de la vista para poder mostrarlo */
        const html = await res.text();

        /* con app.innerHTML le estamos diciendo que cargue la vista que tiene "html" en nuestro div con id "app" */
        app.innerHTML = html

        if (loggedInUser) {

            if (path === "/login" || path === "/register") {
                window.location.href = '/'; 
                return;
            }

            switch (file) {
                case "/src/views/users/index.html":
                    crudUsers();
                    break;

            }
        } else {

            /* Si estamos en una ruta que no sea ni login ni register, enviame a login */
            if (path !== "/login" && path !== "/register") { 
                window.location.href = '/login';
                return; 
            }

            if (path === "/login") {
                const btnLogin = document.getElementById('btn-login');
                const usernameInput = document.getElementById('username');
                const passwordInput = document.getElementById('password');

                btnLogin.addEventListener('click', (e) => {
                    e.preventDefault()
                    const username = usernameInput.value;
                    const password = passwordInput.value;
                    const user = users.find(u => u.username === username && u.password === password);

                    if (user) {
                        localStorage.setItem('loggedInUser', username);
                        window.location.href = '/'
                    } else {
                        console.warn('usuario no existe')
                    }
                })
            } else {
                window.location.href = '/';
            }
        }
    } catch (error) {
        console.warn('Error al cargar la ruta: ', error);
    }
};




// localStorage.setItem('username', username); // Crea un item en el local storage
// localStorage.getItem('nombre'); // Trae un item con la clave
// localStorage.removeItem('nombre'); // Eliminamos un item en especifico
// localStorage.clear(); // Eliminamos todo en el localstorage