<template>
  <div class="home">
    <BaseMenu />

    <Main />

    <QuemSomos />
  </div>
</template>

<script>
import BaseMenu from "@/components/BaseMenu.vue";
import Main from "@/components/Main.vue";
import QuemSomos from "../components/Quem-somos.vue";

export default {
  name: "Home",
  components: {
    BaseMenu,
    Main,
    QuemSomos,
  },

  created() {
    document.title = "Home | Sanchez e Nunes Advocacia";
  },
};
</script>
