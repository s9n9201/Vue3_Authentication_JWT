import axios from "axios";
import authHeader from "./auth-header"

const API_URL="http://localhost:8080/api/test/";
const headerObject={
    headers: authHeader()
};

class UserService {
    getPublicContent() {
        return axios.get(API_URL+"all");
    }
    getUserBoard() {
        return axios.get(API_URL+"user", headerObject);
    }
    getModeratorBoard() {
        return axios.get(API_URL+"mod", headerObject);
    }
    getAdminBoard() {
        return axios.get(API_URL+"admin", headerObject)
    }
}

export default new UserService();