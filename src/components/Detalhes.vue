<template>
  <div class="geral" data-anima="bottom">
    <section class="container detalhes">
      <div>
        <img src="@/assets/img/mobile-app.svg" alt="" />
        <h5>Baixe nosso app</h5>
        <p>
          Que tal abrir uma conta digital para<br />
          ver como a gente faz a sua vida muito<br />
          mais simples?
        </p>
        <div class="btn-app">
          <button class="btn">
            <img
              src="@/assets/icons/apple.svg"
              alt="Baixe nosso app na AppleStore"
            />
            <div>
              <span>Download via</span>
              Apple Store
            </div>
          </button>
          <button class="btn">
            <img
              src="@/assets/icons/playstore.svg"
              alt="Baixe nosso app na PlayStore"
            />
            <div>
              <span>Download via</span>
              Google Play
            </div>
          </button>
        </div>
      </div>
      <div class="infos-about">
        <h1>
          Resolva sua vida com o<br />
          banco Energy!
        </h1>
        <BeneficiosDetalhes />
        <Contas />
      </div>
    </section>
  </div>
</template>

<script>
import BeneficiosDetalhes from "./BeneficiosDetalhes.vue";
import Contas from "./Contas.vue";
export default {
  name: "Detalhes",
  components: { BeneficiosDetalhes, Contas },
};
</script>

<style scoped>
.detalhes {
  margin: 60px auto;
  padding: 80px 0;
  display: grid;
  grid-template-columns: 400px 1fr;
}

h1 {
  font-size: 40px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 16px;
  color: #33303e;
  margin-bottom: 20px;
}
h5 {
  font-size: 24px;
  color: #33303e;
  text-align: center;
}
p {
  text-align: center;
  color: rgba(95, 92, 107, 0.8);
  line-height: 25px;
  font-size: 16px;
  margin-bottom: 25px;
}
.btn-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.btn {
  background: #33303e;
  display: inline-block;
  width: 202px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: #fff;
  gap: 12px;
}
.btn span,
.btn div {
  color: #fff;
  font-size: 13px;
}
.btn div {
  font-weight: 700;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 32px;
  }

  .detalhes {
    display: block;
    padding: 50px 20px;
  }
}
</style>