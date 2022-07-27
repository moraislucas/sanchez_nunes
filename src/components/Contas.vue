<template>
  <div class="section">
    <h2>Tudo em um só lugar</h2>
    <h3>
      Um banco digital feito para você,<br />
      que trabalha com Energia Solar
    </h3>
    <div class="energy-pj">
      <div>
        <h3>Energy Pejota</h3>
        <h4>
          Contas digitais PJ gratuitas<br />
          para decolar seu negócio!
        </h4>
        <p>
          As melhores contas para fazer pagamentos, compras e receber dos seus
          clientes.
        </p>
        <div class="btns">
          <button class="btn">Sou MEI</button>
          <button class="btn">Sou ME</button>
        </div>
      </div>
      <img
        src="@/assets/img/card-front.svg"
        alt="Cartão Energy Bank"
        class="img-card"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Contas",
};
</script>

<style scoped>
.section {
  margin: 50px auto;
}
h2,
h3 {
  color: #e1e0e7;
  font-size: 40px;
  font-weight: 700;
}
h3 {
  color: #33303e;
}
.energy-pj {
  margin: 40px 0;
  background: linear-gradient(100.52deg, #00b555 5.63%, #3ec681 95.75%);
  border-radius: 12px;
  padding: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
}
.img-card {
  position: relative;
  right: -130px;
}
.energy-pj h3,
.energy-pj h4 {
  color: #fff;
}
.energy-pj h4 {
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
}
.energy-pj p {
  font-size: 16px;
  color: #fff;
  line-height: 1.5;
  margin-top: 7px;
  margin-bottom: 30px;
}
.btns {
  display: flex;
  align-items: center;
  gap: 20px;
}
.btn {
  color: #855b35;
  background: #ffc800;
  border: none !important;
}

@media screen and (max-width: 768px) {
  h2,
  h3 {
    font-size: 32px;
  }
  .img-card {
    display: none;
  }
  .energy-pj {
    grid-template-columns: 1fr;
  }
  .energy-pj h4 {
    font-size: 20px;
    margin-top: 5px;
  }
  .energy-pj p {
    margin-bottom: 15px;
  }
  .energy-pj p,
  .btn {
    font-size: 14px;
  }
}
</style>