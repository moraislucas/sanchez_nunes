<template>
  <section class="main-geral">
    <div class="container main">
      <div>
        <span class="identificador" data-anima="bottom">
          Abra sua conta, é só baixar o app!</span
        >
        <h1 data-anima="top">
          Faça parte da maior plataforma de energia solar do Brasil
        </h1>
        <button class="btn">Abra sua conta digital</button>
        <div class="beneficios" data-anima="left">
          <div class="item-beneficio">
            <img src="@/assets/icons/top-pix.svg" alt="PIX com taxa zero" />
            <p>PIX com taxa zero</p>
          </div>
          <div class="item-beneficio">
            <img src="@/assets/icons/top-saque.svg" alt="Saque 24h por dia" />
            <p>Saque 24h por dia</p>
          </div>
          <div class="item-beneficio">
            <img
              src="@/assets/icons/top-pagamentos.svg"
              alt="Pagamento simplificados"
            />
            <p>Pagamento simplificados</p>
          </div>
        </div>
      </div>
      <div class="img-main" data-anima="right">
        <div>
          <h2>Banco 100% digital</h2>
          <img
            src="@/assets/img/cards_float.svg"
            alt="Cartões Banco Energy"
            class="cards_float"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.main-geral {
  background: #000;
}
.main {
  padding: 65px 0;
  display: grid;
  grid-template-columns: 639px 1fr;
}
h1 {
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  line-height: 70px;
}
h2 {
  color: rgba(255, 255, 255, 0.4);
  font-size: 40px;
  font-weight: 700;
  text-align: right;
}

.identificador {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  display: block;
  margin-bottom: 32px;
}
.img-main {
  position: relative;
}
.cards_float {
  position: absolute;
  bottom: 0px;
  left: 150px;
  animation: anima 3s infinite alternate;
}
.btn {
  color: #855b35;
  background: #ffc800;
  border: none !important;
  padding: 10px 30px !important;
  margin-top: 50px;
  font-size: 16px;
}

@keyframes anima {
  from {
    transform: translate3d(0, 40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
.beneficios {
  margin-top: 60px;
  display: flex;
  align-items: center;
  gap: 60px;
}
.beneficios a img {
  transition: 0.3;
}
.beneficios a img:hover {
  filter: invert(50%);
}
.item-beneficio {
  display: flex;
  align-items: center;
  gap: 15px;
}
.item-beneficio p {
  color: #fff;
  font-size: 18px;
}
@media screen and (max-width: 768px) {
  .main {
    padding: 20px;
    display: block;
  }
  h1 {
    font-size: 32px;
    line-height: 1.2;
  }
  .btn {
    margin-top: 20px;
    font-size: 14px;
  }
  .identificador {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .img-main {
    display: none;
  }
  .beneficios {
    display: block;
    margin-bottom: 40px;
  }
  .item-beneficio p {
    font-size: 16px;
  }
  .item-beneficio + .item-beneficio {
    margin-top: 20px;
  }
}
</style>