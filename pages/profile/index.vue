<template>
<div>
    <p>{{$auth.user}}</p>
    <h1 v-if="$auth.loggedIn">hi<i class="las la-phone-volume"></i>
</h1>
  
</div>
</template>

<script>export default {
  data() {
    return {
      form: {
        email: '',
          password: ''
      },
    }
  },

  methods: {

    test() {
      this.$store.commit('SET_AUTHENTICATED', true);
      console.log('1')
    },

  },

  computed: {
       
       auth(){
          return this.$store.getters.Get_Auth;
       }
  }

}

</script>