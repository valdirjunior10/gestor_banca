<template>
  <div class="hello">
    <button class="btn btn-primary" v-on:click="mensagem">teste</button>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  methods: {
    mensagem() {
      alert('teste');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
