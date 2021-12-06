import Vue from 'vue';
// Vue.use(Vuex)

export const state = () => ({
    authenticated: false,

  })
  // this is to change state
  export const mutations = {
    
    SET_AUTHENTICATED(state, payload){
        state.authenticated = payload;
        console.log('working');
    },

  }
  export const getters = {

    Get_Auth (state) {
      return state.authenticated
    }
  }
  // server-side interaction
  export const actions = {
    someFunc(context, payload){
      // code
    },
    someFunc2({commit, getters}, data){
      // code
    }
  }