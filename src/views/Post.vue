<template>
  <section class="container post">
    <div v-if="visualizar && !loading">
      <VisualizarArtigo :visualizar="visualizar" :read="true" />
    </div>

    <div class="carregando" v-if="loading">Carregando, aguarde...</div>
    <div class="carregando error" v-if="show_error">
      Erro ao buscar os dados desse artigo ou inexistente
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
          this.show_error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getPost(this.$route.params.id);
  },
};
</script>

<style scoped>
.post {
  padding: 40px 0;
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
</style>