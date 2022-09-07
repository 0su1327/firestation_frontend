<template>
    <div>
      <form v-on:submit.prevent="submitForm">
       <div>
                <div>
                  <i class="icon-phone"></i>
                  <b>연락처</b><br />
                  <input
                    type="tel"
                    v-bind:id ="phonenumber"
                    v-model="phonenumber"
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                    placeholder="010-1234-5678"
                    style="width: 280px"
                  />
                </div>
                <div>
                  <i class="icon-building-filled"></i>
                  <b>아파트 이름</b><br />

                  <input
                    type="text"

                    v-model="apartname"
                    placeholder=" oo아파트"
                    style="width: 280px"
                  />
                </div>

                <div>
                  <i class="icon-home"></i>
                  <b>주소(동/호)</b><br />

                  <input
                    type="number"

                    v-model="building"
                    placeholder="(숫자)동"
                    style="width: 130px"
                  />
                  /
                  <input
                    type="number"

                    v-model="unit"
                    style="width: 130px"
                    placeholder="(숫자)호"
                  />
                </div>

                <div id="fires">
                  <i class="icon-handshake-o"></i>

                  <b>정보 공유 소방서 등록</b><br />
                  <b id="info"></b>
                  <input
                    type="text"

                    v-model="nearestStation"
                    name="station"

                  />
                </div>
                <div>
                  <input type="submit" @click="post" value="Register" />
                </div>

      </div>
    </form>
    </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      phonenumber: '',
      apartname: '',
      building: '',
      unit: '',
      nearest_station: 'c'
    }
  },
  methods: {
    post: function() {
      this.axios.post('/auth/joinProc',
        {
          apartname: 'this.apartname',
          building: 'this.building',
          unit: 'this.unit',
          phonenumber: 'this.phonenumber',
          nearestStation: 'this.nearest_station'
        })
        .then(response => {
          console.log(response.data)
          alert('회원가입이 완료 되었습니다!')
        })
        .catch(function(error) {
          console.log(error)
          alert('통신에 문제가 있습니다.')
        })
    }
  }
}
</script> -->

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      username: '',
      password: '',
      unit: '',
      phonenumber: '',
      nearestStation: ''
    }
  },
  methods: {
    submitForm: function() {
      const url = 'http://localhost:7777/auth/joinProc'
      const data = {
        apartname: this.apartname,
        building: this.building,
        unit: this.unit,
        phonenumber: this.phonenumber,
        nearestStation: this.nearestStation
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response)
          alert('회원가입 성공!')
        })
        .catch(function(error) {
          console.log(error)
          alert('통신 실패')
        })
    }
  }
}
</script>
