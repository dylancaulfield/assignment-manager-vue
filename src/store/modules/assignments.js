import firebase from "firebase/app";
import "firebase/firestore";

export default {

    namespaced: true,

    state: {

        assignments: []

    },

    getters: {

        getAssignmentById: state => id => {

            return state.assignments.find(e => e.id === id);
        }

    },


    actions: {

        fetchAssignments(context) {

            firebase.firestore().collection("assignments").where("ownerId", "==", context.rootState.user.user.uid).get()
                .then(querySnapshot => {

                    let docs = querySnapshot.docs.map(e => {
                        return {
                            id: e.id,
                            data: e.data()
                        }
                    });

                    context.commit("saveAssignments", docs);

                })
                .catch(() => {

                })

        },

        updateAssignment(context, update) {

            firebase.firestore().collection("assignments").doc(update.id).update(update.data)
                .then(() => {

                    context.commit("updateAssignment", update);

                })

        }

    },


    mutations: {

        saveAssignments(state, assignments) {
            state.assignments = assignments;
        },

        updateAssignment(state, update) {

            let index = state.assignments.findIndex(e => e.id === update.id);
            state.assignments[index].data = Object.assign(state.assignments[index].data, update.data);

        }

    }

}