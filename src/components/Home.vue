<template>
    <header>
        <h2 class="card-title">{{ content }} Profile</h2>
    </header>
</template>

<script>
import UserService from "@/services/user.service";

export default {
    name: "HomeComponent",
    data() {
        return {
            content: "",
        }
    },
    mounted() {
        UserService.getPublicContent().then(
            (response)=>{
                this.content=response.data;
            },
            (error)=>{
                this.content=(error.response && error.response.data && error.response.message) || error.message || error.toString();
            }
        );
    },
}
</script>

<style scoped>

</style>