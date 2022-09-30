<template>
  <header>
    <div class="container menu">
      <router-link to="/" data-anima="left">
        <img
          src="@/assets/logo.svg"
          alt="Logotipo André Sanchez  Advocacia"
          v-if="!isMobile"
        />
        <img
          src="@/assets/logo-mobile.svg"
          alt="Logotipo André Sanchez  Advocacia"
          v-if="isMobile"
        />
      </router-link>
      <nav data-anima="right">
        <ul class="menu-items">
          <li><a href="#quem-somos">Quem somos</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#fale-conosco">Fale Conosco</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "BaseMenu",
  data() {
    return {
      client: {
        width: 0,
      },
    };
  },
  computed: {
    isMobile() {
      return this.client.width <= 768;
    },
  },
  methods: {
    handleResize() {
      this.client.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.menu {
  padding: 25px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu-items {
  display: flex;
  align-items: center;
  gap: 50px;
}
.menu-items li a {
  color: #fff;
  font-weight: 600;
  transition: 0.3;
  font-size: 1rem;
}
.menu-items li a:hover {
  color: #c7c7c7;
}

/* responsivo */
@media screen and (max-width: 1300px) {
}
@media screen and (max-width: 768px) {
  .menu {
    padding: 20px;
    justify-content: flex-start;
    gap: 25px;
  }
  .menu-items {
    gap: 25px;
  }
  .menu-items li a {
    font-size: 0.8rem;
  }
}
</style>