import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/modules/user';
import assignments from '@/store/modules/assignments';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        assignments
    }
})