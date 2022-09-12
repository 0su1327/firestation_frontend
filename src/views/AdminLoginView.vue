<template>
    <div>
      <form action="/auth/loginProc" method="post">
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
          <button id="btn-login" type="submit" @click="submitForm3">Login</button>
        </div>
      </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      firestationname: '',
      fierstationpassword: ''

    }
  },
  methods: {
    submitForm3: function() {
      const url = 'http://localhost:7777/auth/loginProc'
      const data = {
        firestationname: this.firestationname,
        firestationPw: this.firestationPw
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response)
          alert('성공')
          // window.location.href = 'http://localhost:7777/admin/list'
        })
        .catch(function(error) {
          console.log(error)
          alert('실패')
        })
    }
  }
}
</script>
