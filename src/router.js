import { getUsers } from "./controller/crudUsers";

const routes = {
    "/": "/src/views/home.html",
    "/login": "/src/views/auth/login.html",
    "/register": "/src/views/auth/register.html",
    "/users": "/src/views/users/index.html"
};

/* Exportamos funcion renderRoute */
export async function renderRoute () {
    /* La constante path captura la ruta de la pagina, ejemplo: /src/views/auth/login.html */
    const path = location.pathname;
    /* La constante app captura el div con el id "app" */
    const app = document.getElementById('app');

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

        switch (file) {
            case "/src/views/auth/login.html":
                break;
            case "/src/views/auth/register.html":
                break;
            case "/src/views/users/index.html":
                getUsers();
                break;
        }


    } catch (error) {
        console.warn('Error al cargar la ruta: ', error);
    }
};



