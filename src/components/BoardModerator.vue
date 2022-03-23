<template>
    <header>
        <h2 class="card-title">{{ content }} Profile</h2>
    </header>
</template>

<script>
import UserService from "@/services/user.service";
export default {
    name: "BoardUser",
    data() {
        return {
            content: "",
        }
    },
    mounted() {
        UserService.getModeratorBoard().then(
            (response)=>{
                this.content=response.data;
            },
            (error)=>{
                this.content=(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            }
        );
    }
}
</script>

<style scoped>

</style>