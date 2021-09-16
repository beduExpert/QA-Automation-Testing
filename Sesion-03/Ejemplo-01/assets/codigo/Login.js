const users = [{email: "myemail@mail.com", password: "securePassword"}]

const login = (userCredentials) => {
    for (let i = 0; i < users.length; i++) {
        if(userCredentials.email === users[0].email && userCredentials.password === users[0].password){
            return "Bienvenido al sistema";
        }
    }
}

module.exports = {login};
