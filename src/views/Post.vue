<template>
  <section class="container post">
    <div class="content">
      <router-link to="/" data-anima="left" class="logo">
        <img src="@/assets/logo.svg" alt="Logotipo Sanchez e Nunes Advocacia" />
      </router-link>
      <div>
        <div v-if="visualizar && !loading">
          <VisualizarArtigo :visualizar="visualizar" :read="true" />
        </div>

        <div class="carregando" v-if="loading">Carregando, aguarde...</div>
        <div class="carregando error" v-if="show_error">
          Erro ao buscar os dados desse artigo ou inexistente
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VisualizarArtigo from "../components/VisualizarArtigo.vue";
import { api } from "@/services.js";

export default {
  name: "Post",
  components: { VisualizarArtigo },
  data() {
    return {
      visualizar: null,
      loading: false,
      show_error: false,
      tentativas: 0,
    };
  },

  methods: {
    getPost(id) {
      this.loading = true;
      api
        .get(`card/${id}`)
        .then((resp) => {
          this.visualizar = resp.data;
        })
        .catch(() => {
          this.tentativas++;
          if (this.tentativas < 3) {
            this.getBlog();
          } else {
            this.show_error = true;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.tentativas = 0;

    this.getPost(this.$route.params.id);
  },
};
</script>

<style scoped>
.post {
  display: grid;
  grid-template-columns: 1fr;
}
.carregando {
  color: #fff;
  background: #23292e;
  margin-bottom: 20px;
  font-size: 15px;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
}
.error {
  color: rgb(255, 0, 34);
  background: rgba(255, 0, 34, 0.1);
}
.content {
  margin: 60px 0;
}
.logo {
  margin-bottom: 40px;
  display: inline-block;
  max-width: 400px;
}
@media screen and (max-width: 768px) {
  .post {
    display: block;
    padding: 0 10px;
  }
  .logo {
    max-width: auto;
  }
}
</style>