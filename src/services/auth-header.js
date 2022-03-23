export default function authHeader() {
    let user=JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
        console.log(" usertoken > ", user.token);
        return {
            Authorization: "Bearer "+user.token
        }
    } else {
        return {}
    }
}