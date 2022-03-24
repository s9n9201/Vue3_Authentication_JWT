<template>
    <div id="auth">
        <div class="row h-100">
            <div class="col-lg-12 col-12">
                <div id="auth-left">
                    <div class="auth-logo">
                        <a href="index.html"><img src="@/assets/images/logo/logo.png" alt="Logo"></a>
                    </div>
                    <h1 class="auth-title">Sign Up</h1>
                    <p class="auth-subtitle mb-5">Input your data to register to our website.</p>
                    <Form @submit="handleRegister" :validation-schema="schema">
                        <div v-if="!successful">
                            <div class="form-group position-relative has-icon-left">
                                <Field type="text" class="form-control form-control-xl" name="email" placeholder="Email"/>
                                <div class="form-control-icon">
                                    <i class="bi bi-envelope"></i>
                                </div>
                            </div>
                            <ErrorMessage name="email" class="error-feedback"/>
                            <div class="mb-4"></div>
                            <div class="form-group position-relative has-icon-left">
                                <Field type="text" class="form-control form-control-xl" name="username" placeholder="Username"/>
                                <div class="form-control-icon">
                                    <i class="bi bi-person"></i>
                                </div>
                            </div>
                            <ErrorMessage name="username" class="error-feedback"/>
                            <div class="mb-4"></div>
                            <div class="form-group position-relative has-icon-left">
                                <Field type="password" class="form-control form-control-xl" name="password" placeholder="password" autocomplete="off"/>
                                <div class="form-control-icon">
                                    <i class="bi bi-shield-lock"></i>
                                </div>
                            </div>
                            <ErrorMessage name="password" class="error-feedback"/>
    <!--                        <div class="form-group position-relative has-icon-left mb-4">-->
    <!--                            <input type="password" class="form-control form-control-xl" placeholder="Confirm Password">-->
    <!--                            <div class="form-control-icon">-->
    <!--                                <i class="bi bi-shield-lock"></i>-->
    <!--                            </div>-->
    <!--                        </div>-->
                            <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5">Sign Up</button>
                        </div>
                    </Form>
                    <div v-if="message" class="alert mt-4" :class="successful?'alert-success':'alert-danger'">
                        {{ message }}
                    </div>
                    <div class="text-center mt-5 text-lg fs-4">
                        <p class='text-gray-600'>Already have an account?
                            <router-link to="/login" class="font-bold">Login</router-link>.
                        </p>
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
    name: "RegisterComponent",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema=yup.object().shape({
            email: yup
                    .string()
                    .required("Email is required!")
                    .email("Email is invalid!")
                    .max(50, "Must be maximum 50 characters!"),
            username: yup
                .string()
                .required("Username is required!")
                .min(3, "Must be at least 3 characters!")
                .max(20, "Must be maximum 20 characters!"),
            password: yup
                .string()
                .required("Password is required!")
                .min(6, "Must be at least 6 characters!")
                .max(40, "Must be maximum 40 characters!"),
        });
        return {
            successful: false,
            loading: false,
            message: "",
            schema,
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    mounted() {

    },
    methods: {
        handleRegister(user) {
            this.message="";
            this.successful=false;
            this.loading=true;
            this.$store.dispatch("auth/register", user).then(
                (data)=>{
                    this.message=data.message;
                    this.successful=true;
                    this.loading=false;
                },
                (error)=>{
                    this.message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    this.successful=false;
                    this.loading=false;
                }
            );
        }
    },
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