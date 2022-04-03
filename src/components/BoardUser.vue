<template>
    <header>
        <h2 class="card-title">{{ content }} Profile</h2>
    </header>
</template>

<script>
import UserService from "@/services/user.service";
import EventBus from "@/common/EventBus";
export default {
    name: "BoardUser",
    data() {
        return {
            content: "",
        }
    },
    mounted() {
        UserService.getUserBoard().then(
            (response)=>{
                this.content=response.data;
            },
            (error)=>{
                this.content=(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                if (error.response && error.response.status===403) {
                    EventBus.dispatch("logout");
                }
            }
        );
    }
}
</script>

<style scoped>

</style>