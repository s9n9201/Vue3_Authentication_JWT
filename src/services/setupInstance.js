import axiosInstance from "@/services/api"
import TokenService from "@/services/token.service"

const setup=(store)=>{
    axiosInstance.interceptors.request.use(
        (config)=>{
            const token=TokenService.getLocalAccessToken();
            if (token) {
                config.headers["Authorization"]="Bearer "+token;
            }
            return config;
        },
        (error)=>{
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (res)=>{
            return res;
        },
        async (err)=>{
            const originalConfig=err.config;
            if (originalConfig.url!=="/auth/signin" && err.response) {
                if (err.response.status===401 && !originalConfig._retry) {
                    originalConfig._retry=true;
                    try {
                        const rs=await axiosInstance.post("/auth/refreshtoken", {
                            refreshToken: TokenService.getLocalRefreshToken(),
                        });
                        const { accessToken }=rs.data;  //直接取得這個物件裡面的accessToken的Key Value出來
                        console.log("axios Interceptors rs.data > ", rs.data);
                        console.log("axios Interceptors accessToken > ", accessToken);
                        store.dispatch("auth/refreshToken", accessToken);
                        TokenService.updateLocalAccessToken(accessToken);
                        return axiosInstance(originalConfig);
                    } catch (_error) {
                        return Promise.reject(_error);
                    }
                }
            }
            return Promise.reject(err);
        }
    );
};

export default setup;