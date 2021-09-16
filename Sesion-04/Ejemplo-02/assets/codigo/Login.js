const users = [{email: "myemail@mail.com", password: "securePassword"}]

const login = (userCredentials) => {
    let isUserRegistered = false;
    for (let i = 0; i < users.length; i++) {
        if (userCredentials.email === users[0].email) {
            isUserRegistered = true;
            if (userCredentials.password === users[0].password) {
                return "Bienvenido al sistema";
            }
        }
    }

    return isUserRegistered ? "Contraseña incorrecta" : "Usuario no registrado";
}

module.exports = {login};
