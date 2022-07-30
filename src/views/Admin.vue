<template>
  <section class="container admin">
    <div class="login" v-if="show_login">
      <!-- Form Login -->
      <Login @success="getCards" />
    </div>
    <ListaCards :cards="cards" v-if="!show_login || cards.length" />
  </section>
</template>

<script>
import Login from "../components/Login.vue";
import { api } from "@/services.js";
import ListaCards from "../components/ListaCards.vue";

export default {
  components: { Login, ListaCards },
  data() {
    return {
      show_login: true,
      cards: [],
    };
  },
  methods: {
    getCards() {
      this.show_login = false;
      api.get("card").then((resp) => {
        this.cards = resp.data;
        console.log(this.cards);
      });
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 450px;
  margin: 0 auto;
  padding: 60px 0;
}
</style>