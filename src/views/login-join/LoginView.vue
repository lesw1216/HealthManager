<template>
 <div class="login">
     <div class="container-sm position-absolute top-50 start-50 translate-middle">
       <h1 class="text-center ">로그인</h1>
       <form @submit="login">
         <div class="form-floating mb-3 ">
           <input type="text" class="form-control" id="floatingInput" placeholder="id"
                  v-model="loginUser.id">
           <label for="floatingInput">아이디</label>
         </div>
         <div class="form-floating mb-3">
           <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                  v-model="loginUser.password">
           <label for="floatingPassword">비밀번호</label>
         </div>
         <div class="d-grid gap-2">
           <button class="btn btn-outline-secondary" type="submit">로그인</button>
           <button class="btn btn-outline-secondary" type="button" v-on:click="$router.push('/join')">회원 가입</button>
         </div>
       </form>
     </div>
 </div>
</template>

<script>
import {userLogin} from '@/api';

export default {
  name: "LoginView",
  data() {
    return {
      loginUser: {
        id: '',
        password: ''
      },
    }
  },
  methods: {
    async login() {
      let response = await userLogin(this.loginUser);
      console.log(response.data);
    },
  },
}
</script>

<style scoped>

</style>