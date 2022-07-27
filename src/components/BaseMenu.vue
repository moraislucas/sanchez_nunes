<template>
  <header>
    <div class="container menu">
      <router-link to="/" data-anima="left">
        <img
          src="@/assets/logo.svg"
          alt="Logotipo Banco Energy"
          v-if="!isMobile"
        />
        <img
          src="@/assets/logo-mobile.svg"
          alt="Logotipo Banco Energy"
          v-if="isMobile"
        />
      </router-link>
      <nav data-anima="right">
        <ul class="menu-items">
          <li><a href="#">Produtos Energy</a></li>
          <li><a href="#">Conta digital PJ</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Quem somos</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><button class="btn">Abra sua conta digital</button></li>
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: #000;
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
  font-size: 15px;
}
.menu-items li a:hover {
  color: #c7c7c7;
}
.btn {
  background: transparent;
  color: #fff;
}
.btn:hover {
  background: #fff;
  color: #00b453;
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