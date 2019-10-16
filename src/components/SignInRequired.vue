<template>

    <v-container v-if="!isSignedIn">
        <v-card class="my-12 mx-auto" max-width="400px">
            <v-card-title>Sign In Required</v-card-title>
            <v-card-text>You need to sign in to view your assignments</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <router-link :to="{name: 'signIn'}">
                    <v-btn raised color="primary">Sign In</v-btn>
                </router-link>

            </v-card-actions>
        </v-card>
    </v-container>


</template>

<script>

    import {mapGetters} from "vuex";

    export default {
        name: "SignInRequired",

        computed: {
            ...mapGetters({
                isSignedIn: "user/isSignedIn"
            })
        }
    }
</script>

<style scoped>

</style>