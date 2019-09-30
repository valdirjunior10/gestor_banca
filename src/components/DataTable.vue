<template>
  <div class="container-fluid">
    <mdb-datatable
      :data="data"
      striped
      bordered
      entriesTitle="Mostrar"
      showingText="Exibindo"
      searchPlaceholder="Pesquisar"
      previous="Anterior"
      next="Próximo"
    />
  </div>
</template>

<script>
import { mdbDatatable } from "mdbvue";
export default {
  name: "DatatablePage",
  components: {
    mdbDatatable
  },

  props: {
    colunas: Array,
    url: String
  },
  created() {
    var url = this.url;
    this.$http.get(url).then(response => {
      let dados = [];
      response.data.forEach(element => {
        dados.push({
          confronto: element.confronto,
          mercado: element.mercado,
          campeonato: element.campeonato,
          entrada: element.entrada,
          odd: element.odd,
          resultado: element.resultado,
          created_at: element.created_at
        });
      });
      this.linhas = dados;
    });
  },
  data() {
    return {
      data: {
        columns: this.colunas,
        linhas: new Array()
      }
    };
  }
};
</script>