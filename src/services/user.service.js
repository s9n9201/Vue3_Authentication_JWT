export default function authHeader() {
    let user=JSON.stringify(localStorage.getItem("user"));
    if (user && user.accessToken) {
        return {
            Authorization: "bearer "+user.accessToken
        }
    } else {
        return {}
    }
}