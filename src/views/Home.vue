<template>
  <div class="home">
    <BaseMenu />

    <Main />

    <QuemSomos />

    <Servicos />

    <Blog />
  </div>
</template>

<script>
import BaseMenu from "@/components/BaseMenu.vue";
import Main from "@/components/Main.vue";
import QuemSomos from "../components/Quem-somos.vue";
import Servicos from "../components/Servicos.vue";
import Blog from "../components/Blog.vue";

export default {
  name: "Home",
  components: {
    BaseMenu,
    Main,
    QuemSomos,
    Servicos,
    Blog,
  },

  created() {
    document.title = "Home | Sanchez e Nunes Advocacia";
  },
};
</script>
