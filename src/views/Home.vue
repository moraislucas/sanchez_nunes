<template>
  <div class="home">
    <BaseMenu />
    <Main />
  </div>
</template>

<script>
import BaseMenu from "@/components/BaseMenu.vue";
import Main from "@/components/Main.vue";

export default {
  name: "Home",
  components: {
    BaseMenu,
    Main,
  },

  created() {
    document.title = "Home | Sanchez e Nunes Advocacia";
  },
};
</script>
