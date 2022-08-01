<template>
  <div>
    <router-link to="/"
      ><img src="@/assets/logo-footer.svg" alt="Logo"
    /></router-link>

    <p v-if="show_error" class="error" data-anima="top">
      Os dados de acesso estão incorretos. Tente novamente
    </p>
    <form action="" @submit.prevent="logar">
      <label for="usuario">Usuário</label>
      <input
        type="text"
        id="usuario"
        placeholder="Nome do Usuário"
        required
        autocomplete="off"
        v-model="dados.UserName"
        :disabled="loading"
      />
      <label for="senha">Senha de acesso</label>
      <input
        type="password"
        id="senha"
        placeholder="Digite sua senha"
        required
        v-model="dados.Password"
        :disabled="loading"
      />

      <button class="btn" :disabled="loading">{{ text_btn }}</button>
    </form>
  </div>
</template>

<script>
import { api } from "@/services.js";
export default {
  name: "Login",
  data() {
    return {
      text_btn: "Acessar conta",
      show_error: false,
      loading: false,
      dados: {
        UserName: "",
        Password: "",
      },
    };
  },
  methods: {
    logar() {
      this.loading = true;
      this.show_error = false;
      this.text_btn = "Carregando...";
      api
        .post("auth", this.dados)
        .then((resp) => {
          window.localStorage.token = resp.data;
          this.$emit("success");
        })
        .catch((erro) => {
          this.show_error = true;
          console.log(erro);
        })
        .finally(() => {
          this.text_btn = "Acessar conta";
          this.loading = false;
        });
    },
  },
  created() {
    window.localStorage.token = "";
  },
};
</script>

<style scoped>
img {
  margin: 0 auto;
  width: 300px;
  margin-bottom: 40px;
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