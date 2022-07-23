<template>
  <div class="home">
    <BaseMenu />

    <Main />

    <QuemSomos />

    <Servicos />
  </div>
</template>

<script>
import BaseMenu from "@/components/BaseMenu.vue";
import Main from "@/components/Main.vue";
import QuemSomos from "../components/Quem-somos.vue";
import Servicos from "../components/Servicos.vue";

export default {
  name: "Home",
  components: {
    BaseMenu,
    Main,
    QuemSomos,
    Servicos,
  },

  created() {
    document.title = "Home | Sanchez e Nunes Advocacia";
  },
};
</script>
