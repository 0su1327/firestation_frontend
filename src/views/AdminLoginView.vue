<template>
    <div>
      <form>
        <h2>로그인</h2>
        <div>
          <i class="icon-user"></i>
          <input type="text" v-model="firestationname" placeholder="아이디" />
        </div>
        <div>
          <i class="icon-key"></i>
          <input type="password" v-model="firestationpassword" placeholder="비밀번호" />
        </div>
        <div>
          <button id="btn-login" type="submit" @click="myFunction2">Login</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      firestationname: '',
      fierstationpassword: ''

    }
  },
  methods: {
    myFunction2() {

    }
  }
}
</script>
