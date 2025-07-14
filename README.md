### Paso 1 (instalar entorno de desarrollo)
```
npm create vite@latest practica --template vanilla
```

### Paso 2 (Crear base de datos)
```
{
    "users": [
        {
            "id": "1",
            "username": "kelmin",
            "password": "123",
            "role_id": "1"
        }
    ],
    "roles": [
        {
            "id": "1",
            "name": "gestor"
        },
        {
            "id": "2",
            "name": "administrador"
        }
    ]
}
```

### Estructura
```
├───database
    └───db.json
├───node_modules
├───public
└───src
    └───views
        └───auth
            ├───login.html
            └───register.html
        └───users
    ├───home.html
    ├───main.js
    ├───router.js
    └───style.css
├───index.html
├───package-lock.json
├───package.json
└───README.md
```

### Lanzar el proyecto
```
npm install
```
```
npm run dev
```
```
json-server --watch database/db.json --port 8000
```