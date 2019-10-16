<template>
    <div>

        <v-card class="mx-auto my-12" max-width="300px">
            <v-card-title>Sign In</v-card-title>
            <v-divider></v-divider>

            <v-card-text>
                <v-img
                        class="pointer mx-auto"
                        @click="signInWithGoogle"
                        src="/img/btn_google_signin_dark_normal_web@2x.png"
                        max-width="250px"

                ></v-img>
            </v-card-text>

        </v-card>


    </div>
</template>

<script>
    import router from "@/router";
    import firebase from "firebase/app";
    import "firebase/auth";
    import store from "@/store";

    export default {
        data() {
            return {}
        },
        methods: {
            signInWithGoogle() {


                let provider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithPopup(provider)
                    .then(result => {

                        store.dispatch("user/setUser", result.user);

                        router.push({name: "assignments"});


                    })
                    .catch(err => {

                        console.log(err);

                    })
            },

        },
    }


</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>