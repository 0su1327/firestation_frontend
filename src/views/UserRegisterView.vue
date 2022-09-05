<template>
    <div>
      <div>

        <form action="">
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

                    v-model="nearest_station"
                    name="station"

                  />
                </div>
                <div>
                  <input type="submit" @click="myFunction" value="Register" />
                </div>
              </form>
      </div>
    </div>
</template>

<script>
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
    myFunction() {

    }
  }
}
</script>
