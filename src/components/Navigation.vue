<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <router-link to="/">
                    <span>Assignment</span>
                    <span class="font-weight-light">MANAGER</span>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>


            <v-menu offset-y v-if="isSignedIn">
                <template v-slot:activator="{ on }">
                    <v-avatar size="38" v-on="on">
                        <img :src="user.photoURL" alt="Profile Picture">
                    </v-avatar>
                </template>
                <v-list>
                    <v-list-item
                            @click="goToAccount"
                    >
                        <v-list-item-title>Account Details</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item @click="signOut">
                        <v-list-item-title class="red--text">Sign Out</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>


        </v-app-bar>

    </div>
</template>

<script>

    import {mapGetters, mapActions, mapState} from "vuex";
    import router from "@/router";
    import firebase from "firebase/app";
    import "firebase/auth";

    export default {
        name: "navigation",
        data() {
            return {}
        },
        computed: {

            ...mapGetters("user", ["isSignedIn"]),

            ...mapState("user", ["user"])

        },
        methods: {

            ...mapActions({
                signOutStore: "user/signOut"
            }),

            signOut() {

                firebase.auth().signOut()
                    .then(() => {
                        this.signOutStore();

                        router.push({name: "assignments"})
                            .catch(() => {

                            });
                    })
                    .catch(() => {

                    })


            },

            goToAccount() {

                router.push({name: "account"})
                    .catch(() => {

                    })

            }
        }
    }
</script>

<style scoped>
    img {
        cursor: pointer;
    }

    a, a:active, a:visited {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
</style>