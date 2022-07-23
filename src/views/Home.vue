<template>
  <div class="home">
    <BaseMenu />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseMenu from "@/components/BaseMenu.vue";

export default {
  name: "Home",
  components: {
    BaseMenu,
  },

  created() {
    document.title = "Home | Sanchez e Nunes Advocacia";
  },
};
</script>
