<template>
  <div class="row">
    <div class="col-3">
      <div class="list-group">
        <button
          class="list-group-item list-group-item-action list-group-item-warning "
          v-for="banca in listBancas"
          :key="banca.id"          
        >{{banca.nome}}</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "bancaIndex",

  data() {
    return {
      listBancas: []
    };
  },

  created() {
    this.$http.get("http://127.0.0.1:8000/api/banca").then(response => {
      this.listBancas = response.data;
    });
  }
};
</script>