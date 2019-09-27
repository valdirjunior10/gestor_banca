<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3" style="margin-top: 1%;">
        <div>
          <button class="btn btn-primary" id="show-btn" @click="showModal">Cadastrar nova banca</button>

          <b-modal ref="my-modal" hide-footer title="Cadastro de banca">
            <form @submit.prevent="cadastra()">
              <div class="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  name="nome_cadastro"
                  class="form-control"
                  v-model="objBancaCadastro.nome"
                />
              </div>

              <div class="form-group">
                <label>Saldo Inicial</label>
                <input
                  type="text"
                  name="saldo_cadastro"
                  class="form-control"
                  v-model="objBancaCadastro.valor_inicial"
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
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <div class="list-group" style="margin-top: 6%;">
          <button
            class="list-group-item list-group-item-action list-group-item-warning"
            v-for="banca in listBancas"
            :key="banca.id"
            @click="carregarDados(banca.id)"
          >{{banca.nome}}</button>
        </div>
      </div>

      <div class="col-6">
        <form @submit.prevent="edita()">
          <div class="form-group">
            <label>Nome</label>
            <input type="text" name="nome_editar" class="form-control" v-model="objBancaEdita.nome" />
          </div>

          <div class="form-group">
            <label>Saldo Inicial</label>
            <input
              type="text"
              name="saldo_editar"
              class="form-control"
              v-model="objBancaEdita.valor_inicial"
            />
          </div>

          <button class="btn btn-primary">Salvar</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import Banca from "../../models/Banca";
export default {
  name: "bancaIndex",

  data() {
    return {
      listBancas: [],
      objBancaCadastro: new Banca(),
      objBancaEdita: new Banca()
    };
  },

  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },

    carregarDados(idBanca) {
      this.$http
        .get("http://127.0.0.1:8000/api/banca/" + idBanca)
        .then(response => {
          this.objBancaEdita.id = response.data.id;
          this.objBancaEdita.nome = response.data.nome;
          this.objBancaEdita.valor_inicial = response.data.valor_inicial;
        });
    },

    cadastr() {
      let dados = {
        nome: this.objBancaCadastro.nome,
        valor_inicial: this.objBancaCadastro.valor_inicial
      };

      this.$http
        .post("http://127.0.0.1:8000/api/banca", dados)
        .then(response => {
          if (response.data.status == "OK") {
            alert("Banca cadastrada com sucesso!");
          }
        });
    },

    edita() {
      let dados = {
        nome: this.objBancaEdita.nome,
        valor_inicial: this.objBancaEdita.valor_inicial
      };

      this.$http
        .put("http://127.0.0.1:8000/api/banca/" + this.objBancaEdita.id, dados)
        .then(response => {
          if (response.data.status == "OK") {
            alert("Banca alterada com sucesso!");
          }
        });
    }
  },

  created() {
    this.$http.get("http://127.0.0.1:8000/api/banca").then(response => {
      this.listBancas = response.data;
    });
  }
};
</script>