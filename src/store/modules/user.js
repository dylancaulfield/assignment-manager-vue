import firebase from "firebase/app";
import "firebase/auth";
import store from "@/store";


export default {

    namespaced: true,

    state: {
        user: {}
    },


    getters: {

        isSignedIn(state) {
            return Boolean(state.user.email);
        }

    },


    actions: {

        signOut(context) {
            context.commit("clearUser");
        },

        setUser(context, user) {
            context.commit("setUser", user);
        }
    },


    mutations: {
        setUser(state, user) {
            state.user = user;
        },

        clearUser(state) {
            state.user = {}
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    firebase.auth().onAuthStateChanged(user => {

        if (user) {

            store.dispatch("user/setUser", user)
                .then(() => {
                    store.dispatch("assignments/fetchAssignments");
                })


        } else {

            store.dispatch("user/signOut");

        }

    });
});
