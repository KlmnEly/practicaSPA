const apiUrlUsers = 'http://localhost:8000/users';
const responseUsers = await fetch(apiUrlUsers);
const users = await responseUsers.json();

const apiUrlRoles = 'http://localhost:8000/roles';
const responseRoles = await fetch(apiUrlRoles);
const roles = await responseRoles.json();

export {
    users,
    roles
}
