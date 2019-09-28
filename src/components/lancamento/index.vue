<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <mdbInput name="confronto" label="Confronto" />
      </div>

      <div class="col-2">
        <mdbInput name="campeonato" label="Campeonato" />
      </div>

      <div class="col-2">
        <mdbInput name="mercado" label="Mercado" />
      </div>

      <div class="col-1">
        <mdbInput name="entrada" label="Entrada" />
      </div>

      <div class="col-1">
        <mdbInput name="odd" label="Odd" />
      </div>

      <div class="col-1">
        <mdbInput name="resultado" label="resultado" />
      </div>
      <div class="col-1">
        <button class="btn btn-default" style="margin-top: 30%;">Salvar</button>
      </div>
    </div>

    <div class="row">
      <DataTable :colunas="colunas" :url="'http://127.0.0.1:8000/api/lancamentos'"></DataTable>
    </div>
  </div>
</template>


<script>
import { mdbInput } from "mdbvue";
import { mdbBtn } from "mdbvue";
import DataTable from "../DataTable";

export default {
  components: {
    mdbInput,
    mdbBtn,
    DataTable
  },
  data() {
    return {
      listagem: [],
      colunas: [
        { label: "Confronto", field: "confronto", sort: "asc" },
        { label: "Campeonato", field: "campeonato", sort: "asc" },
        { label: "Mercado", field: "mercado", sort: "asc" },
        { label: "Entrada", field: "entrada", sort: "asc" },
        { label: "Odd", field: "odd", sort: "asc" },
        { label: "Resultado", field: "resultado", sort: "asc" },
        { label: "Data", field: "created_at", sort: "asc" }
      ]
    };
  }
};
</script>