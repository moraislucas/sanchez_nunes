<template>
  <section class="container nossos-servicos">
    <h2 class="identificador">NOSSOS SERVIÇOS</h2>
    <h1>Nossas áreas de atuação</h1>

    <div class="servicos">
      <div
        class="servico-item"
        v-for="servico in servicos"
        :key="servico.title"
      >
        <CardServico :servico="servico" />
      </div>
    </div>
    <div class="call-to-action">
      <p>Vamos conversar sobre o seu problema, podemos ajudar</p>
      <button class="btn">Entrar em contato conosco</button>
    </div>
  </section>
</template>

<script>
import CardServico from "./CardServico.vue";
export default {
  name: "Nossos-serviços",
  data() {
    return {
      servicos: [
        {
          type: "Jurídico",
          title: "Direito Civil",
          icon: "direito-civil",
        },
        {
          type: "Jurídico",
          title: "Direito do Trabalho",
          icon: "direito-trabalho",
        },
        {
          type: "Jurídico",
          title: "Direito Penal",
          icon: "direito-penal",
        },
        {
          type: "Físico",
          title: "Direito de Família e Sucessões",
          icon: "direito-familia",
        },
        {
          type: "Físico",
          title: "Direito Previdenciário",
          icon: "direito-civil",
        },
        {
          type: "Físico",
          title: "Direito do Consumidor",
          icon: "direito-consumidor",
        },
      ],
    };
  },
  components: { CardServico },
};
</script>

<style scoped>
.nossos-servicos {
  padding: 70px 0;
}
h1 {
  font-size: 40px;
  color: #fff;
  line-height: 1.2;
  font-weight: 600;
  margin: 10px 0 30px 0;
}
.servicos {
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
@media screen and (max-width: 768px) {
  .nossos-servicos {
    padding: 70px 20px;
  }
  .servicos {
    grid-template-columns: 1fr;
  }
}
.call-to-action {
  margin: 0 auto;
  text-align: center;
  color: #fff;
}
.call-to-action .btn {
  display: inline-block;
  margin-top: 25px;
  background: #fff;
  color: #333;
}
</style>