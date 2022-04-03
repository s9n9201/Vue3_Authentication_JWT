import api from "@/services/api";
import TokenService from "@/services/token.service";

//const API_URL="http://localhost:8081/api/auth/";

class AuthService {
    login(user) {
        return api.post("/auth/signin",{
            username: user.username,
            password: user.password
        }).then(response=>{
            if (response.data.token) {
                TokenService.setUser(response.data);
            }
            return response.data;
        });
    }

    logout() {
        TokenService.removeUser();
    }

    register(user) {
        return api.post("/auth/signup",{
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();