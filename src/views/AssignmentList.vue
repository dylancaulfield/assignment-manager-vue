<template>
    <div>

        <SignInRequired/>

        <v-container v-if="isSignedIn">
            <Assignment v-for="(a, i) of assignments" :assignment="a" :key="a.id" :variation="i % 3"/>
        </v-container>


    </div>
</template>

<script>
    import {mapGetters, mapState, mapActions} from "vuex";
    import SignInRequired from "@/components/SignInRequired";
    import Assignment from "@/components/Assignment";


    export default {

        name: "assignmentList",

        data() {
            return {}
        },

        components: {
            Assignment,
            SignInRequired
        },

        methods: {

            ...mapActions("assignments", ["fetchAssignments"])

        },

        computed: {

            ...mapGetters("user", ["isSignedIn"]),
            ...mapState("user", ["user"]),
            ...mapState("assignments", ["assignments"])

        },

        created() {

            if (this.isSignedIn) {
                this.fetchAssignments();
            }


        }

    };
</script>
