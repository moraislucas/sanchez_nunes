<template>
  <div class="form" data-anima="bottom">
    <p v-if="show_error" class="error" data-anima="top">
      Ocorreu um erro ao tentar salvar os dados. Tente novamente
    </p>
    <form action="" @submit.prevent="salvar">
      <label for="titulo">Titulo do artigo</label>
      <input
        type="text"
        id="titulo"
        placeholder="Titulo do artigo"
        required
        autocomplete="off"
        v-model="dados.title"
        :disabled="loading"
      />
      <label for="conteudo">Conteúdo</label>
      <input
        type="text"
        id="conteudo"
        placeholder="Conteúdo"
        required
        v-model="dados.about"
        :disabled="loading"
      />

      <div v-if="dados.id">
        <input
          type="checkbox"
          id="active"
          name="active"
          v-model="dados.active"
        />
        <label for="active">
          {{ dados.active ? "Artigo ativado" : "Artigo desativado" }}</label
        ><br />
      </div>

      <button class="btn" :disabled="loading">Salvar</button>
    </form>
  </div>
</template>

<script>
import { api } from "@/services.js";
export default {
  name: "CriarArtigo",
  props: {
    editar: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    editar(data) {
      this.dados = {
        id: this.dados.id,
        title: data.title,
        about: data.about,
        active: data.active,
      };
    },
  },
  data() {
    return {
      text_btn: "Salvar",
      show_error: false,
      loading: false,
      dados: {
        title: "",
        about: "",
        active: true,
      },
    };
  },
  methods: {
    salvar() {
      this.show_error = false;
      this.text_btn = "Carregando...";
      api
        .post("card", this.dados)
        .then((resp) => {
          console.log(resp);
        })
        .catch((erro) => {
          this.show_error = true;
          console.log(erro);
        })
        .finally(() => {
          this.text_btn = "Salvar";
          this.loading = false;
          this.dados = {};
        });
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 600px;
  margin: 0 auto;
}

label {
  color: #fff;
}
input {
  border-color: gray;
  color: #fff;
}
input:hover,
input:focus {
  border-color: #3d5bf6;
  background: #3d5bf610;
}
.btn {
  width: 100%;
  margin-top: 15px;
}
.error {
  color: rgb(255, 0, 34);
  background: rgba(255, 0, 34, 0.1);
  margin-bottom: 20px;
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
}
</style>