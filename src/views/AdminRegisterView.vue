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
        <button id="btn-login" type="submit" @click="submitForm2">Login</button>
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
      firestationPw: ''
    }
  },
  methods: {
    submitForm2: function() {
      const url = 'http://localhost:7777/auth/FirejoinProc'
      const data = {
        firestationname: this.firestationname,
        firestationPw: this.firestationPw
      }
      axios.post(url, data)
        .then(function(response) {
          alert('성공')
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
          alert('실패')
        })
    }
  }
}
</script>
