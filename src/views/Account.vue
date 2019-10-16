<template>
    <div>

        <v-container>


            <v-card class="mx-auto my-12" max-width="700px">
                <v-card-text>
                    <div class="text-center">
                        <v-avatar size="100">
                            <img :src="user.photoURL" alt="Profile Picture">
                        </v-avatar>
                    </div>

                    <v-divider class="my-6"></v-divider>

                    <p class="title font-weight-black text--primary">

                        <v-text-field
                                label="Name"
                                filled
                                readonly
                                :value="user.displayName"
                        ></v-text-field>

                        <v-text-field
                                label="Email Address"
                                filled
                                readonly
                                :value="user.email"
                        ></v-text-field>

                    </p>

                    <v-divider class="my-6"></v-divider>

                    <v-dialog v-model="dialog" persistent max-width="400">
                        <template v-slot:activator="{ on }">
                            <v-btn color="red" dark v-on="on">Delete Account</v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="headline">Delete Your Account?</v-card-title>
                            <v-card-text>
                                Are you sure you want to delete your account and all of your assignments? <br><br>
                                <span class="red--text">Warning: This action cannot be undone</span>
                            </v-card-text>
                            <v-card-actions>
                                <div class="flex-grow-1"></div>
                                <v-btn color="green darken-1" text @click="dialog = false">No</v-btn>
                                <v-btn color="red darken-1" text @click="deleteAccount">Yes</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                </v-card-text>

            </v-card>


        </v-container>


    </div>
</template>

<script>
    import {mapGetters, mapState} from "vuex";
    import firebase from "firebase/app";
    import "firebase/auth";
    import router from "@/router";

    export default {
        name: "Account",
        data() {
            return {
                dialog: false
            }
        },
        computed: {

            ...mapGetters("user", ["isSignedIn"]),

            ...mapState("user", ["user"])


        },
        methods: {
            deleteAccount() {

                this.dialog = false;

                if (!this.isSignedIn) {
                    this.created();
                }

                firebase.auth().currentUser.delete()
                    .then(() => {

                        router.push({name: "assignments"})

                    })
                    .catch(e => {
                        console.log(e);
                    })

            }


        },

        created() {

            if (!this.isSignedIn) {

                router.push({name: "signIn"})

            }
        }
    }
</script>

<style scoped>

</style>