<template>
  <footer class="container footer">
    <div class="top-footer">
      <!-- <img src="@/assets/logo-footer.svg" alt="Logotipo Sanchez e Nunes" /> -->
      <div class="item-social">
        <p>Acompanhe nas redes</p>
        <!-- <div class="redes-sociais">
          <a href="#">
            <img src="@/assets/icons/youtube.svg" alt="Youtube" />
          </a>
          <a href="#">
            <img src="@/assets/icons/linkedin.svg" alt="linkedin" />
          </a>
          <a href="#">
            <img src="@/assets/icons/facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="@/assets/icons/instagram.svg" alt="instagram" />
          </a>
          <a href="#">
            <img src="@/assets/icons/twitter.svg" alt="twitter" />
          </a>
        </div> -->
      </div>
    </div>
    <div class="bottom-footer">
      <p>
        SANCHEZ E NUNEZ - ADVOGADOS ASSOCIADOS – Av Logo Ali, 253 - São Paulo -
        SP, 0000-000
      </p>
      <a href="#">
        <span>Atendimento:</span>
        <p>faleconosco@sanchesnunes.com</p>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
</style>