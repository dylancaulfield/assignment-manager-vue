<template>
    <div>


        <v-card class="mx-auto mb-4" max-width="1000px" tile>

            <v-card-title>

                {{assignment.data.name}}

                <div class="flex-grow-1"></div>

                <v-btn text icon @click="description = !description">
                    <v-icon>{{description ? "keyboard_arrow_up" : "keyboard_arrow_down"}}
                    </v-icon>
                </v-btn>

            </v-card-title>

            <v-card-text>

                <div class="subtitle-1">{{assignment.data.module}} - {{assignment.data.moduleCode}}</div>
                <div class="subtitle-1">{{assignment.data.lecturer}}</div>

            </v-card-text>

            <v-expand-transition>
                <div v-show="description">

                    <v-card-text>{{assignment.data.desc}}</v-card-text>

                </div>
            </v-expand-transition>

            <v-card-text>
                <div class="body-2 black--text">{{dueTime}}</div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>

                <router-link :to="{name: 'editor', params: {id: this.assignment.id}}">
                    <v-btn text :color="colour">EDIT</v-btn>
                </router-link>



                <a target="_blank" :href="assignment.data.uploadLink">
                    <v-btn text :color="colour" v-if="assignment.data.uploadLink">SUBMIT</v-btn>
                </a>


                <div class="flex-grow-1"></div>
                <v-btn icon>
                    <v-checkbox
                            @click="() => this.$store.dispatch('assignments/updateAssignment', {id: this.assignment.id , data: {submitted: !this.assignment.data.submitted} })"
                            v-model="assignment.data.submitted" class="my-0" :color="colour"></v-checkbox>
                </v-btn>

            </v-card-actions>

        </v-card>


    </div>
</template>

<script>
    import {format} from "date-fns";

    export default {
        name: "Assignment",

        data() {
            return {
                description: false,
            }
        },

        props: ["assignment", "variation"],

        computed: {

            colour() {
                switch (this.variation) {
                    case 0:
                        return "red";
                    case 1:
                        return "blue";
                    case 2:
                        return "green";
                }

                return "";
            },

            dueTime() {

                return format(new Date(this.assignment.data.due), "dd/MM/yyyy @ h:m a");

            }

        },

        methods: {}
    }
</script>

<style scoped>
    a, a:active, a:visited {
        text-decoration: none;
        color: inherit;
    }
</style>