<template>
  <div>
    <form>
      <h2>소방서 등록</h2>
      <div>
        <i class="icon-user"></i>
        <input type="text" v-model="firestationname" placeholder="아이디" />
      </div>
      <div>
        <i class="icon-key"></i>
        <input type="password" v-model="firestationPw" placeholder="비밀번호" />
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
      fierstationPw: ''

    }
  },
  methods: {
    myFunction2() {
      console.log(this.firestationname)
    }
  }
}
</script>
