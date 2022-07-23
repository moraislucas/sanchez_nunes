<template>
  <div class="geral" data-anima="bottom">
    <section class="container quem-somos">
      <div class="infos-about">
        <h2 class="identificador">QUEM SOMOS</h2>
        <h1>Conheça nossa metodologia</h1>
        <div class="textos">
          <p>
            O nosso escritório de advocacia se destaca em razão da atuação
            prática, objetiva e moderna. visando propiciar atendimento
            personalizado para nossos clientes de modo a entregar resultados
            consistentes nas demandas que nos são propostas.
          </p>
          <p>
            Nosso objetivo é fornecer um servico técnico juridico especializado
            e de excelência, sem deixar de lembrar que estamos lidando com
            pessoas e suas garantias
          </p>
        </div>
        <div class="advs">
          <span>Dr. André</span>
          <span>Dr. Cicero</span>
        </div>
      </div>
      <div class="img-about">
        <img
          src="@/assets/img/imagem-2.png"
          alt="Sanchez & Nunes Advogados Associados"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Quem-Somos",
};
</script>

<style scoped>
.geral {
  background: #23292e;
}
.quem-somos {
  margin: 60px auto;
  padding: 80px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.img-about {
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

h1 {
  font-size: 40px;
  color: #fff;
  line-height: 1.2;
  font-weight: 600;
  margin: 10px 0 30px 0;
}
@media screen and (max-width: 768px) {
  .quem-somos {
    display: block;
    padding: 50px 20px;
  }
  .img-about {
    display: none;
  }
}
p {
  font-size: 18px;
  color: #a7a5a5;
  line-height: 1.5;
}
p + p {
  margin-top: 20px;
}
.advs {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
}
.advs span {
  color: #149365;
  background: rgba(20, 147, 100, 0.2);
  font-size: 13px;
  display: block;
  border-radius: 5px;
  padding: 10px 20px;
  transition: 0.3s;
}
.advs span:hover {
  background: #149365;
  color: #fff;
}
</style>