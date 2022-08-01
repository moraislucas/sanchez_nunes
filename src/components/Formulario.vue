<template>
  <div>
    <p v-if="show_error" class="notify error" data-anima="top">
      Ocorreu um erro ao enviar os dados. <br />Entre em contato:
      sanchezenunes.adv@hotmail.com
    </p>
    <p v-if="show_success" class="notify success" data-anima="top">
      Dados enviados corretamente. <br />Em breve entraremos em contato com você
      :)
    </p>
    <form @submit.prevent="onSubmit">
      <label for="nome">Nome</label>
      <input
        type="text"
        id="nome"
        placeholder="Lucas Paulo"
        required
        v-model="dados.nome"
        :disabled="loading"
      />
      <label for="email">Endereço de e-mail</label>
      <input
        type="email"
        id="email"
        placeholder="lucas@paulo.com.br"
        required
        v-model="dados.email"
        :disabled="loading"
      />

      <label for="assunto">Qual assunto?</label>
      <select
        name="assunto"
        id="assunto"
        required
        v-model="dados.assunto"
        :disabled="loading"
      >
        <option
          :value="assunto.value"
          v-for="assunto in assuntos"
          :key="assunto.value"
        >
          {{ assunto.text }}
        </option>
      </select>

      <label for="mensagem">Mensagem</label>
      <textarea
        :disabled="loading"
        v-model="dados.mensagem"
        required
        id="Mensagem"
        placeholder="Conserve os olhos fixos num ideal sublime, e lute sempre pelo que deseja"
      ></textarea>

      <button class="btn" :disabled="loading">{{ text_btn }}</button>
    </form>
  </div>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "Formulario",
  data() {
    return {
      show_error: false,
      show_success: false,
      loading: false,
      text_btn: "Enviar dados",
      assuntos: [
        {
          text: "Selecione o assunto",
          value: "",
        },
        {
          text: "Direito Civil",
          value: "Direito Civil",
        },
        {
          text: "Direito do Trabalho",
          value: "Direito do Trabalho",
        },
        {
          text: "Direito Penal",
          value: "Direito Penal",
        },
        {
          text: "Direito de Família e Sucessões",
          value: "Direito de Família e Sucessões",
        },
        {
          text: "Direito Previdenciário",
          value: "Direito Previdenciário",
        },
        {
          text: "Direito do Consumidor",
          value: "Direito do Consumidor",
        },
      ],
      dados: {
        assunto: "",
        mensagem: "",
        email: "",
        nome: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.text_btn = "Enviando...";
      this.loading = true;
      this.show_error = false;
      this.show_success = false;

      api
        .post("Email", this.dados)
        .then(() => {
          this.show_success = true;
        })
        .catch((erro) => {
          console.log(erro);
          this.show_error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
textarea {
  height: 13vh;
}
.btn {
  width: 100%;
  background: #23292e;
  color: #fff;
}
input:disabled,
textarea:disabled,
select:disabled,
.btn:disabled {
  pointer-events: none;
  background: #f7f7f7;
  border: none;
  color: #23292e;
}
.notify {
  margin-bottom: 20px;
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 5px;
  line-height: 1.5;
}
.error {
  color: rgb(255, 0, 34);
  background: rgba(255, 0, 34, 0.1);
}
.success {
  background: #00b453;
  color: #fff;
}
</style>