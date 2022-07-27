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
        <button class="btn btn-menu" @click="openMenu = !openMenu">MENU</button>
        <ul class="menu-items">
          <li><a href="#">Produtos Energy</a></li>
          <li><a href="#">Conta digital PJ</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Quem somos</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><button class="btn btn-conta">Abra sua conta digital</button></li>
        </ul>
      </nav>
    </div>

    <div class="menu-mobile" data-anima="top" :class="{ ativo: openMenu }">
      <nav class="">
        <ul>
          <li><a href="#">Produtos Energy</a></li>
          <li><a href="#">Conta digital PJ</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Quem somos</a></li>
          <li><a href="#">Ajuda</a></li>
          <li>
            <button class="btn btn-conta">Abra sua conta digital</button>
          </li>
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
      openMenu: false,
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
.btn-menu {
  display: none !important;
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
.menu-mobile {
  width: 100%;
  height: 27vh;
  transition: 0.3s;
  padding: 0 20px;
  display: none;
}

@media screen and (max-width: 768px) {
  .btn-menu {
    display: block !important;
  }
  .menu {
    padding: 20px;
    justify-content: space-between;
    gap: 25px;
    /* display: block; */
  }
  .menu-items {
    display: none !important;
  }

  .menu-mobile.ativo {
    display: block;
  }
  .menu-mobile li a {
    font-size: 16px;
    padding: 10px;
    padding-left: 0;
    color: #fff;
  }
  .menu-mobile li + li {
    margin-top: 20px;
  }
  .btn {
    padding: 10px 15px;
  }
  .btn-conta {
    display: none;
  }
}
</style>