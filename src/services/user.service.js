//import axios from "axios";
import api from "@/services/api";
// import authHeader from "./auth-header"

const API_URL="http://localhost:8081/api/test/";
const headerObject={
    // headers: authHeader()
};

class UserService {
    getPublicContent() {
        return api.get(API_URL+"all");
    }
    getUserBoard() {
        return api.get(API_URL+"user", headerObject);
    }
    getModeratorBoard() {
        return api.get(API_URL+"mod", headerObject);
    }
    getAdminBoard() {
        return api.get(API_URL+"admin", headerObject)
    }
}

export default new UserService();