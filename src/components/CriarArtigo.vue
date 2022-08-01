<template>
  <div class="form" data-anima="bottom">
    <p v-if="show_error" class="error" data-anima="top">
      Ocorreu um erro ao tentar salvar os dados. Tente novamente
    </p>
    <form action="" @submit.prevent="salvar" v-if="!editar.id">
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

      <label for="resumo">Resumo do artigo</label>
      <input
        type="text"
        id="resumo"
        placeholder="Esse info. será mostrada no seu site para o cliente"
        required
        autocomplete="off"
        v-model="dados.summary"
        :disabled="loading"
        maxlength="100"
      />

      <label for="conteudo">Conteúdo</label>
      <vue-editor v-model="html" :html="html"></vue-editor>

      <button class="btn" :disabled="loading">Salvar</button>
    </form>
    <form action="" @submit.prevent="salvarEdicao" v-if="editar.id">
      <label for="titulo">Título do artigo</label>
      <input
        type="text"
        id="titulo"
        placeholder="Título do artigo"
        required
        autocomplete="off"
        v-model="editar.title"
        :disabled="loading"
      />
      <label for="resumo">Resumo do artigo</label>
      <input
        type="text"
        id="resumo"
        placeholder="Esse info. será mostrada no seu site para o cliente"
        required
        autocomplete="off"
        v-model="editar.summary"
        :disabled="loading"
        maxlength="100"
      />

      <label for="conteudo">Conteúdo</label>

      <vue-editor v-model="html" :html="html"></vue-editor>

      <div class="check">
        <input
          type="checkbox"
          id="active"
          name="active"
          v-model="editar.active"
          :disabled="loading"
        />
        <label for="active" class="label-checkobox">
          {{ editar.active ? "Artigo ativado" : "Artigo desativado" }}</label
        ><br />
      </div>

      <button class="btn" :disabled="loading">Salvar edição</button>
    </form>
  </div>
</template>

<script>
import { api } from "@/services.js";
import { VueEditor } from "vue2-editor";
export default {
  name: "CriarArtigo",
  components: {
    VueEditor,
  },
  props: {
    editar: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      text_btn: "Salvar",
      show_error: false,
      loading: false,
      html: "",
      dados: {
        title: "",
        about: "",
        active: true,
        summary: "",
      },
    };
  },
  methods: {
    salvarEdicao() {
      this.loading = true;
      this.show_error = false;
      this.text_btn = "Carregando...";
      this.editar.about = this.html;

      api
        .put(`card/${this.editar.id}`, { ...this.editar, id: this.editar.id })
        .then(() => {
          this.$emit("success");
        })
        .catch((erro) => {
          this.show_error = true;
          console.log(erro);
        })
        .finally(() => {
          this.text_btn = "Salvar";
          this.loading = false;
        });
    },
    salvar() {
      this.loading = true;
      this.show_error = false;
      this.text_btn = "Carregando...";
      this.dados.about = this.html;

      api
        .post("card", this.dados)
        .then(() => {
          this.dados = {};
          this.$emit("success");
        })
        .catch((erro) => {
          this.show_error = true;
          console.log(erro);
        })
        .finally(() => {
          this.text_btn = "Salvar";
          this.loading = false;
        });
    },
  },
  mounted() {
    this.html = this.editar.about;
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
#active {
  padding: initial;
  height: initial;
  width: initial;
}
.label-checkobox {
  margin: initial;
  display: inline-block;
  margin-left: 10px;
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
.check {
  margin-top: 15px;
}
</style>