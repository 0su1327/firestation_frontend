<template>
  <v-container>
    <v-card>
      <br><br><br><br>
      <div>
        <input type="text" v-model="b1" label="1 or 2" />
      </div><br>
      <v-btn outlined @click="button">Click</v-btn>
      <p>{{a}}</p>
      <v-btn tile @click="postBtn">PostClick</v-btn>
      <div>{{c}}</div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    b1: '',
    a: '',
    c: '',
    
  }),
  methods: {
    button () {
      this.axios.get('/example/1', { params: { tEst: this.b1 } }).then(result => {
        console.log(result.data)
        this.a = result.data
      })
    },
    postBtn () {
      const fd = new FormData()
      fd.append('demo', this.b1)
      this.axios.post('/example/2', fd).then(result => {
        this.c = result.data
      })
    }
  }
}
</script>
