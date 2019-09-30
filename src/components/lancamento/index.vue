<template>
  <div class="container-fluid">
    <div class="card-body">
      <form>
        <div class="row">
          <b-modal ref="my-modal" hide-footer title="Cadastro de banca">
            <form @submit.prevent="cadastraCampeonato()">
              <div class="form-group">
                <mdbInput
                  label="Nome"
                  name="nome_campeonato"
                  required
                  v-model="objBancaCadastro.nome"
                />
              </div>

              <button type="submit" class="btn btn-primary" block @click="hideModal">Salvar</button>
              {{''}}
              <button
                type="button"
                class="btn btn-danger"
                block
                @click="hideModal"
              >Cancelar</button>
            </form>
          </b-modal>

          <div class="col-2">
            <mdbInput name="confronto" label="Confronto" />
          </div>

          <div class="col-2">
            <select
              class="browser-default custom-select"
              v-model="objLancamento.campeonato"
              style="margin-top: 10%"
            >
              <option value="0">Selecione o campeonato</option>
              <option
                v-for="campeonato in campeonatos"
                :value="campeonato.id"
                :key="campeonato.id"
              >{{campeonato.nome}}</option>
            </select>
          </div>
          <div class="col-1">
            <button class="btn btn-primary" style="margin-top: 20%">+</button>
          </div>

          <div class="col-2">
            <select
              class="browser-default custom-select"
              v-model="objLancamento.mercado"
              style="margin-top: 10%"
            >
              <option value="0">Selecione o mercado</option>
              <option
                v-for="mercado in mercados"
                :value="mercado.id"
                :key="mercado.id"
              >{{mercado.nome}}</option>
            </select>
          </div>
          <div class="col-1">
            <button class="btn btn-primary" style="margin-top: 20%">+</button>
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
            <button class="btn btn-default" style="margin-top: 20%;">Salvar</button>
          </div>
        </div>
      </form>
    </div>

    <div class="card-footer">
      <div>
        <DataTable :colunas="colunas" :url="'http://127.0.0.1:8000/api/lancamentos'"></DataTable>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>


<script>
import { mdbInput, mdbBtn } from "mdbvue";
import Campeonato from "../../models/Campeonato";
import Lancamento from "../../models/Lancamento";
import store from "../../store";

import DataTable from "../DataTable";

export default {
  components: {
    mdbInput,
    mdbBtn,
    DataTable
  },
  created() {
    store.dispatch("carregar-campeonatos");
    store.dispatch("carregar-mercados");

    this.$http.get("http://127.0.0.1:8000/api/mercados").then(response => {
      this.mercados = response.data;
    });

    this.objLancamento.campeonato = 0;
    this.objLancamento.mercado = 0;
  },
  methods: {
    cadastraCampeonato() {
      
    }
  },
  computed: {
    campeonatos() {
      return store.state.campeonatos;
    },
    mercados() {
      return store.state.mercados;
    }
  },
  data() {
    return {
      objLancamento: new Lancamento(),
      basicOptions: [
        {
          text: "Choose your option",
          value: null,
          disabled: true,
          selected: true
        },
        { text: "Option nr 1", value: "Option 1" },
        { text: "Option nr 2", value: "Option 2" },
        { text: "Option nr 3", value: "Option 3" }
      ],
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