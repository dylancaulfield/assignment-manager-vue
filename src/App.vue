<template>
    <v-app>

        <Navigation/>

        <v-content>
            <router-view></router-view>
        </v-content>

    </v-app>
</template>

<script>

    import Navigation from "@/components/Navigation";

    export default {
        name: 'App',
        components: {
            Navigation
        },
        data() {
            return {}
        }
    };
</script>

<style>
    main {
        background-color: #E8E8E8;
    }
</style>
