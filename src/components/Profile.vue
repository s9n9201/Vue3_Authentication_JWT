<template>
    <div class="col-12 col-md-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">{{ currentUser.username }} Profile</h4>
            </div>
            <div class="card-content">
                <div class="card-body">
                    <!-- Table with outer spacing -->
                    <div class="table-responsive">
                        <table class="table table-lg">
                            <tbody>
                            <tr>
                                <td class="text-bold-500">Token</td>
                                <td>{{ currentUser.token.substring(0, 20) }} ... {{ currentUser.token.substring(currentUser.token.length - 20) }}</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Id:</td>
                                <td>{{ currentUser.id }}</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Email:</td>
                                <td>{{ currentUser.email }}</td>
                            </tr>
                            <tr>
                                <td class="text-bold-500">Authorities:</td>
                                <td>
                                    <ul>
                                        <li v-for="role in currentUser.roles" :key="role">{{ role }}</li>
                                    </ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileComponent",
    data() {
        return {
            username: "",
            id: "",
            email: "",
            accessToken: "",
            roles: [],
        }
    },
    computed: {
        currentUser() {
            if (this.$store.state.auth.user) {
                console.log("OK");
            } else {
                console.log("Not oK");
            }
            //如果有global router的話，可以直接回傳user物件，讓template中直接取用
            //但若沒有global router的話，進到此頁面才判斷是否登入，那在template中直接取用user會出錯。
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        console.log(this.currentUser);
        if (!this.currentUser) {
            //this.$router.push("/");
        }
    },
    // beforeRouteEnter(to, from, next) {
    //     if (!localStorage.getItem('user')) {
    //         next();
    //     }
    // }
}
</script>

<style scoped>

</style>