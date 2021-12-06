<template>
        <div class="flex justify-center">
            <div class="py-6 px-8 bg-white rounded shadow-xl text-left border-l-8 border-green-600 lg:w-2/6">
            <h1 class="text-lg pl-2 text-gray-800 font-bold border-l-8 border-green-600">UserLogin</h1>
              
                <form @submit.prevent="userLogin">

                    <div class="mb-6 mt-5">
                        <label class="block text-gray-800">Email</label>
                        <input type="email" v-model="form.email" id="email" placeholder="email"
                            class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" required />
                        <!-- <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small> -->

                    </div>

                    <div class="mb-6">
                        <label class="block text-gray-800">Password</label>
                        <input type="password" v-model="form.password" id="email" placeholder="password"
                            class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" required />
                        <!-- <small v-if="errors.password" class="form-text text-danger">{{ errors.password[0] }}</small> -->

                    </div>

                    <div class="flex items-center gap-10">
                        <button type="submit"
                        class="cursor-pointer py-2 px-4  mt-5 bg-green-600 hover:bg-green-700 text-white font-bold rounded">Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
</template>
<script>
export default {
  data() {
    return {
        form:{
            email: '',
            password: ''
            },
    }
  },
  methods: {
    //   userLogin(){
    //       this.$axios.post('user-login',this.form).then(res =>{
    //             console.log(res);

    //             const data = res.data
    //             localStorage.setItem('token',data.token)
    //             this.$store.commit('SET_AUTHENTICATED',true);
    //             this.$toast.success({
    //                 title: 'Success!',
    //                 message: 'Login Success',
    //             });

    //         })
    //         .catch(e =>{
    //             console.log(e)
    //             this.$toast.error({
    //                 title: 'Error!',
    //                 message: 'Someting is wrong!',
    //             });
    //         })
    //   }

    async userLogin() {

        try {
               await this.$axios.$get('http://ecommerce.test/sanctum/csrf-cookie');
               let response = await this.$auth.loginWith('local', { data: this.form });
               console.log(response)
                this.$toast.success({
                    title: 'Success!',
                    message: 'Login Success',
                });

            } 
            catch (err) {
                console.log(err)
                this.$toast.error({
                    title: 'Error!',
                    message: 'Someting is wrong!',
                });
            }
    }
  }
}
</script>