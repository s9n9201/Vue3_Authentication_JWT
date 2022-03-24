<template>
    <div id="auth">
        <div class="row h-100">
            <div class="col-lg-12 col-12">
                <div id="auth-left">
                    <div class="auth-logo">
                        <a href="index.html"><img src="@/assets/images/logo/logo.png" alt="Logo"></a>
                    </div>
                    <h1 class="auth-title">Log in.</h1>
                    <Form @submit="handleLogin" :validation-schema="schema">
                        <div class="form-group position-relative has-icon-left ">
                            <Field type="text" class="form-control form-control-xl" name="username" placeholder="Username"/>
                            <div class="form-control-icon">
                                <i class="bi bi-person"></i>
                            </div>
                        </div>
                        <ErrorMessage name="username" class="error-feedback"/>
                        <div class="mb-4"></div>
                        <div class="form-group position-relative has-icon-left ">
                            <Field type="password" class="form-control form-control-xl" name="password" placeholder="Password" autocomplete="off"/>
                            <div class="form-control-icon">
                                <i class="bi bi-shield-lock"></i>
                            </div>
                        </div>
                        <ErrorMessage name="password" class="error-feedback"/>
                        <div class="mb-4"></div>
                        <div class="form-check form-check-lg d-flex align-items-end">
                            <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label text-gray-600" for="flexCheckDefault">
                                Keep me logged in
                            </label>
                        </div>
                        <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5">Log in</button>
                        <div v-if="message" class="alert alert-danger mt-4">
                            {{ message }}
                        </div>
                    </Form>
                    <div class="text-center mt-5 text-lg fs-4">
                        <p class="text-gray-600">Don't have an account? <router-link to="register" class="font-bold">Sign
                            up</router-link>.</p>
                        <p><a class="font-bold" href="">Forgot password?</a>.</p>
                    </div>
                </div>
            </div>
<!--            <div class="col-lg-7 d-none d-lg-block">-->
<!--                <div id="auth-right">-->

<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
    name: "LoginComponent",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema=yup.object().shape({
            username: yup.string().required("Username is required!"),
            password: yup.string().required("Password is required!"),
        });
        return {
            loading: false,
            message: "",
            schema,
        }
    },
    computed: {
        // loggedIn() {
        //     return this.$store.state.auth.status.loggedIn;
        // }
    },
    created() {
        // if (this.loggedIn) {
        //     this.$router.push("/");
        // }
    },
    methods: {
        handleLogin(user) {
            this.loading=true;
            this.$store.dispatch("auth/login", user).then(
                ()=>{
                    this.$router.push("/profile");
                },
                (error)=>{
                    this.loading=false;
                    this.message= (error.response && error.response.data && error.response.data.message) || error.gessage || error.toString();
                }
            );
        }
    }
}
</script>

<style scoped>
#auth {
    font-family: var(--bs-body-font-family);
}
.error-feedback {
    color: red;
}
</style>