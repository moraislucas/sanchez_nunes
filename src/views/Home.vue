<template>
  <div class="home">
    <BaseMenu />

    <Main />

    <Detalhes />

    <Servicos />

    <Blog />

    <FaleConosco />

    <Footer />
  </div>
</template>

<script>
import BaseMenu from "@/components/BaseMenu.vue";
import Main from "@/components/Main.vue";
import Detalhes from "../components/Detalhes.vue";
import Servicos from "../components/Servicos.vue";
import Blog from "../components/Blog.vue";
import FaleConosco from "../components/FaleConosco.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    BaseMenu,
    Main,
    Detalhes,
    Servicos,
    Blog,
    FaleConosco,
    Footer,
  },

  created() {
    document.title = "Home | Sanchez e Nunes Advocacia";
  },
};
</script>
