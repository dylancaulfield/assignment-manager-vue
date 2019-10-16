import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import vuetify from './plugins/vuetify';
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4L3oTMsV4GooF5CqLSQoqHdeM92rKeHY",
  authDomain: "assignment-manager-9f8c1.firebaseapp.com",
  databaseURL: "https://assignment-manager-9f8c1.firebaseio.com",
  projectId: "assignment-manager-9f8c1",
  storageBucket: "",
  messagingSenderId: "1003206496903",
  appId: "1:1003206496903:web:cfb40686fb919b11321e22",
  measurementId: "G-CR44JLX3PY"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
