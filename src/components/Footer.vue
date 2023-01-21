<template>
  <footer class="container footer">
    <div class="top-footer">
      <img
        src="@/assets/logo.svg"
        alt="Logotipo André Sanchez Advocacia"
        @click="topo"
        class="logo"
      />
      <div class="item-social">
        <p>Acompanhe nas redes</p>
        <div class="redes-sociais">
          <!-- <a href="#">
            <img src="@/assets/icons/youtube.svg" alt="Youtube" />
          </a> -->
          <!-- <a href="#">
            <img src="@/assets/icons/linkedin.svg" alt="linkedin" />
          </a> -->
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511982877508&text=Ol%C3%A1%2C%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20(vim%20pelo%20site)"
            ><img
              src="@/assets/icons/whatsapp.svg"
              alt="whatsapp Andre Sanchez Advogado"
          /></a>
          <!-- <a href="https://www.facebook.com/sanchez.nunes.77" target="_blank">
            <img src="@/assets/icons/facebook.svg" alt="facebook" />
          </a> -->
          <a
            href="https://www.instagram.com/andresanchezadvocacia/"
            target="_blank"
          >
            <img src="@/assets/icons/instagram.svg" alt="instagram" />
          </a>
          <!-- <a href="#">
            <img src="@/assets/icons/twitter.svg" alt="twitter" />
          </a> -->
        </div>
      </div>
    </div>
    <div class="bottom-footer">
      <p>
        ANDRÉ SANCHEZ ADVOCACIA
        <br />
        Av Hilario Pereira de Souza, 406 - Torre 2, CJ 2608 - Centro, Osasco/SP
      </p>
      <a href="mailto:andresanchez@adv.oabsp.org.br">
        <span>Atendimento:</span>
        <p>andresanchez@adv.oabsp.org.br</p>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    topo() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.footer {
  padding: 70px 0;
}
.top-footer,
.bottom-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-footer {
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.bottom-footer {
  padding-top: 60px;
}
.top-footer p {
  color: #fff;
}
.item-social,
.redes-sociais {
  display: flex;
  align-items: center;
  gap: 30px;
}

.redes-sociais a img {
  transition: 0.3;
}
.redes-sociais a img:hover {
  filter: invert(50%);
}
.bottom-footer p {
  color: #fff;
  font-size: 15px;
  line-height: 1.6;
}
.bottom-footer a {
  background: rgba(255, 255, 255, 0.2);
  padding: 17px 24px;
  border-radius: 5px;
  line-height: 1.5;
}
.bottom-footer a span {
  display: block;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
}
@media screen and (max-width: 768px) {
  .footer {
    padding: 70px 20px;
  }
  .top-footer,
  .bottom-footer {
    display: block;
  }
  .top-footer .item-social {
    margin-top: 30px;
    display: block;
  }
  .top-footer .item-social .redes-sociais {
    margin-top: 20px;
  }
  .bottom-footer a {
    margin-top: 30px;
    width: auto;
    display: inline-block;
  }
  p {
    font-size: 14px;
  }
}
.logo {
  cursor: pointer;
}
</style>