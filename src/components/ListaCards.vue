<template>
  <div class="lista">
    <div class="top-blog" data-anima="bottom">
      <h1>Seu Blog</h1>
      <button class="btn" @click="criarArtigo" :disabled="criar">
        Criar artigo
      </button>
    </div>

    <div class="lista-grid" v-if="show_list">
      <div v-for="card in cards" :key="card.id" class="card" data-anima="top">
        <CardItem
          :card="card"
          @visualizar="visualizarItem"
          @editar="editarItem"
          @getCards="getCards"
        />
      </div>
    </div>
    <div v-if="!show_list">
      <a href="#" class="voltar" @click="voltar" data-anima="right">
        🠔 Voltar para listagem
      </a>
      <div v-if="Object.keys(visualizar).length">
        <VisualizarArtigo
          :visualizar="visualizar"
          @editar="editarItem"
          @getCards="getCards"
        />
      </div>
      <div v-if="criar">
        <CriarArtigo :editar="editar" @success="getCards" />
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
import VisualizarArtigo from "./VisualizarArtigo.vue";
import CriarArtigo from "./CriarArtigo.vue";
export default {
  name: "ListaCards",
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      show_list: true,
      criar: false,
      visualizar: {},
      editar: {},
    };
  },
  components: { CardItem, VisualizarArtigo, CriarArtigo },
  methods: {
    getCards() {
      this.voltar();
      this.$emit("getCards");
    },
    criarArtigo() {
      this.voltar();
      this.show_list = false;
      this.criar = true;
    },
    visualizarItem(data) {
      this.show_list = false;
      this.visualizar = data;
    },
    editarItem(data) {
      this.editar = {};
      this.editar = data;
      this.show_list = false;
      this.criar = true;
      this.visualizar = {};
    },

    voltar() {
      this.show_list = true;
      this.visualizar = {};
      this.editar = {};
      this.criar = false;
    },
  },
};
</script>

<style scoped>
.lista {
  padding: 80px 0;
}
.top-blog {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.btn {
  padding: 16px 25px;
}
h1 {
  color: #fff;
}
.lista-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media screen and (max-width: 768px) {
  .lista-grid {
    grid-template-columns: 1fr;
  }
}
.voltar {
  display: inline-block;
  color: #fff;
  font-weight: 600;
  margin-bottom: 40px;
}
</style>