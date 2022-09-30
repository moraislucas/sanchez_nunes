<template>
  <section class="fale-conosco">
    <div class="container grid-contato">
      <div class="infos">
        <h2 class="identificador">FALE CONOSCO</h2>
        <h1>Entre em contato</h1>
        <div class="contatos">
          <a
            href="mailto:andresanchez@adv.oabsp.org.br"
            class="item-contato"
            target="_blank"
          >
            <div class="icon">
              <img src="@/assets/icons/duvida.svg" alt="Dúvidas" />
            </div>
            <div>
              <span>Dúvidas ? Fale conosco</span>
              <p>andresanchez@adv.oabsp.org.br</p>
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511982877508&text=Ol%C3%A1%2C%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20(vim%20pelo%20site)"
            class="item-contato"
            target="_blank"
          >
            <div class="icon">
              <img src="@/assets/icons/whats.svg" alt="WhatsApp" />
            </div>
            <div>
              <span>WhatsApp</span>
              <p>(11) 9.8287-7508</p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/dir//Av.+Hil%C3%A1rio+Pereira+de+Souza,+406+-+Centro,+Osasco+-+SP,+06010-170/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94ceff14236e2f9d:0x92ae39598fa5584d?sa=X&ved=2ahUKEwia-KfCsr36AhVWq5UCHdmuDpsQwwV6BAgDEAM"
            class="item-contato"
            target="_blank"
          >
            <div class="icon">
              <img
                src="@/assets/icons/endereco.svg"
                alt="Endereço/Localização"
              />
            </div>
            <p>
              Av Hilario Pereira de Souza, 406 - Torre 2, CJ 2608 - Centro, Osasco/SP
            </p>
          </a>
        </div>
      </div>
      <div class="form">
        <h2 class="identificador"></h2>
        <h3>Como podemos ajudar ?</h3>
        <Formulario />
      </div>
    </div>
  </section>
</template>

<script>
import Formulario from "./Formulario.vue";
export default {
  name: "Fale-conosco",
  components: { Formulario },
};
</script>

<style scoped>
.fale-conosco {
  background: #fff;
  padding: 70px 0;
}
h1,
.form h3 {
  font-size: 40px;
  color: #23292e;
  line-height: 1.2;
  font-weight: 600;
  margin: 10px 0 50px 0;
}
.contato {
  margin-top: 65px;
}
.item-contato {
  display: flex;
  align-items: center;
  gap: 25px;
  transition: 0.3s;
  border-radius: 5px;
}
.item-contato:hover {
  background: #f7f7f7;
  padding: 10px;
}
.item-contato + .item-contato {
  margin-top: 35px;
}
.item-contato .icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
  border-radius: 5px;
}
.item-contato span {
  display: block;
  color: #23292e;
  font-size: 14px;
  margin-bottom: 15px;
}
.item-contato p {
  font-weight: 600;
  font-size: 17px;
  color: #23292e;
  line-height: 1.5;
}
.grid-contato {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
}
.form h3 {
  font-size: 36px;
}
@media screen and (max-width: 768px) {
  h1,
  .form h3 {
    font-size: 32px;
  }
  .item-contato .icon {
    width: 40px;
    height: 40px;
  }
  .item-contato .icon img {
    width: 20px;
    height: 20px;
  }
  .item-contato span {
    font-size: 13px;
  }
  .item-contato p {
    font-size: 14px;
  }
  .fale-conosco {
    padding: 70px 20px;
  }
  .grid-contato {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>