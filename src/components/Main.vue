<template>
  <section class="container main">
    <div>
      <span class="identificador" data-anima="bottom">SEJAM BEM-VINDO (A)</span>
      <h1 data-anima="top">
        Do ínicio ao fim, sempre ajudando nossos clientes.
      </h1>
      <h2 data-anima="bottom">Sanchez & Nunes Advogados Associados</h2>
      <a href="#fale-conosco" class="btn">Entrar em contato conosco</a>
      <div class="social-media" data-anima="left">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=551125768639&text=Ol%C3%A1%2C%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20(vim%20pelo%20site)"
          ><img
            src="@/assets/icons/whatsapp.svg"
            alt="whatsapp Sanchez & Nunes Advogados Associados"
        /></a>
        <a
          href="https://www.instagram.com/sanchezenunesadvocacia/"
          target="_blank"
          ><img
            src="@/assets/icons/instagram.svg"
            alt="instagram Sanchez & Nunes Advogados Associados"
        /></a>
        <a href="https://www.facebook.com/sanchez.nunes.77" target="_blank"
          ><img
            src="@/assets/icons/facebook.svg"
            alt="facebook Sanchez & Nunes Advogados Associados"
        /></a>
      </div>
    </div>
    <div class="img-main" data-anima="right">
      <img
        src="@/assets/img/imagem-1.png"
        alt="Sanchez & Nunes Advogados Associados"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.main {
  padding: 65px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
h1 {
  color: #fff;
  font-size: 55px;
  font-weight: 600;
  line-height: 70px;
}
h2 {
  color: #a7a5a5;
  font-size: 16px;
  margin-top: 30px;
  margin-bottom: 40px;
  font-weight: 500;
}
.img-main {
  margin-left: auto;
  animation: anima 3s infinite alternate;
}
@keyframes anima {
  from {
    transform: translate3d(0, 40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@media screen and (max-width: 768px) {
  .main {
    padding: 20px;
    display: block;
  }
  h1 {
    font-size: 40px;
    line-height: 1.2;
  }
  .img-main {
    display: none;
  }
}
.social-media {
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 50px;
}
.social-media a img {
  transition: 0.3;
}
.social-media a img:hover {
  filter: invert(50%);
}
</style>