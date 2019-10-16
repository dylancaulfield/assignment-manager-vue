<template>
    <div>

            <v-container>


                <v-card class="mx-auto" max-width="1000px">

                    <v-card-text>



                    </v-card-text>

                    <v-card-actions>


                        <v-btn raised color="red" class="white--text">Save</v-btn>
                        <v-btn text color="red">Delete</v-btn>

                    </v-card-actions>


                </v-card>


            </v-container>

    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import router from "@/router";


    export default {
        name: "assignmentEditor",

        data() {
            return {
                assignment: Object
            }
        },

        methods: {
            ...mapGetters("assignments", ["getAssignmentById"])
        },

        created() {

            this.assignment = this.getAssignmentById()(this.$route.params.id);
            if (!this.assignment) {
                router.push("/")
            }

        }

    }
</script>

<style scoped>

</style>