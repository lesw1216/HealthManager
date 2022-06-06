import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8081'
});

function userLogin(loginUser) {
    return instance.post("/api/login", loginUser);
}

export {
    userLogin
}