<template>
  <div>
    <div class="beneficios">
      <div class="item-beneficio">
        <img src="@/assets/icons/financiamento.svg" alt="Financiamento Solar" />
        <div class="info-beneficio">
          <div>
            <h3>Financiamento Solar</h3>
            <p>Gestão de Crédito, Maquina de Cartão.</p>
          </div>

          <img
            src="@/assets/icons/arrow-right.svg"
            alt="Seta para direita"
            class="arrow"
          />
        </div>
      </div>
      <div class="item-beneficio">
        <img src="@/assets/icons/pagamentos.svg" alt="Meios de Pagamento" />
        <div class="info-beneficio">
          <div>
            <h3>Meios de Pagamento</h3>
            <p>Emissão de Boleto, Antecipação de Vendas.</p>
          </div>

          <img
            src="@/assets/icons/arrow-right.svg"
            alt="Seta para direita"
            class="arrow"
          />
        </div>
      </div>
      <div class="item-beneficio">
        <img src="@/assets/icons/seguro.svg" alt="Seguro Solar" />
        <div class="info-beneficio">
          <div>
            <h3>Seguro Solar</h3>
            <p>
              A cobertura cobre dados provacados por incêndio de qualquer<br />
              natureza, raios, explosões e roubos
            </p>
          </div>

          <img
            src="@/assets/icons/arrow-right.svg"
            alt="Seta para direita"
            class="arrow"
          />
        </div>
      </div>
    </div>
    <a href="#" class="produtos">Conheça outros produtos <span>_</span></a>
  </div>
</template>

<script>
export default {
  name: "BeneficiosDetalhes",
};
</script>

<style scoped>
.beneficios {
  border-bottom: 1px solid rgba(225, 224, 231, 0.9);
  padding-bottom: 20px;
}
.item-beneficio {
  display: flex;
  align-items: center;
  gap: 40px;
  /* padding: 20px 25px; */
  padding: 20px 0;
  border-radius: 5px;
  transition: 0.3s;
  border: 1px solid #fff;
}
.arrow {
  display: none;
  transition: 0.3s;
}
.item-beneficio:hover {
  box-shadow: 10px 0 20px rgba(78, 75, 89, 0.1);
  border-color: rgba(78, 75, 89, 0.1);
  padding: 20px;
}
.item-beneficio:hover .arrow {
  display: block;
}

.item-beneficio + .item-beneficio {
  margin-top: 10px;
}
.item-beneficio h3 {
  font-size: 24px;
  color: #4e4b59;
  font-weight: 700;
  margin-bottom: 5px;
}
.item-beneficio p {
  color: #7a7786;
  line-height: 1.4;
  font-size: 14px;
}
.item-beneficio .info-beneficio {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.produtos {
  color: #00b453;
  font-weight: 600;
  margin-top: 40px;
  display: inline-block;
}
.produtos span {
  color: #ffc800;
  font-weight: 600;
  margin-left: 5px;
  transition: 0.3s;
}
.produtos:hover span {
  margin: 0;
}
@media screen and (max-width: 768px) {
  .item-beneficio h3 {
    font-size: 20px;
  }
  .item-beneficio:hover .arrow {
    display: none;
  }
  .item-beneficio p {
    font-size: 13px;
  }
}
</style>