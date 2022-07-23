<template>
  <div>
    <form action="">
      <label for="nome">Nome</label>
      <input type="text" id="nome" placeholder="Lucas Paulo" required />
      <label for="email">Endereço de e-mail</label>
      <input
        type="email"
        id="email"
        placeholder="lucas@paulo.com.br"
        required
      />

      <label for="assunto">Qual assunto?</label>
      <select name="assunto" id="assunto" required>
        <option
          :value="assunto.value"
          v-for="assunto in assuntos"
          :key="assunto.value"
        >
          {{ assunto.text }}
        </option>
      </select>

      <label for="mensagem">Mensagem</label>
      <textarea
        required
        id="Mensagem"
        placeholder="Conserve os olhos fixos num ideal sublime, e lute sempre pelo que deseja"
      ></textarea>

      <button class="btn">Enviar dados</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      assuntos: [
        {
          text: "Selecione o assunto",
          value: "",
        },
        {
          text: "Direito Civil",
          value: "direito-civil",
        },
        {
          text: "Direito do Trabalho",
          value: "direito-trabalho",
        },
        {
          text: "Direito Penal",
          value: "direito-penal",
        },
        {
          text: "Direito de Família e Sucessões",
          value: "direito-familia",
        },
        {
          text: "Direito Previdenciário",
          value: "direito-previdenciario",
        },
        {
          text: "Direito do Consumidor",
          value: "direito-consumidor",
        },
      ],
    };
  },
};
</script>

<style scoped>
textarea {
  height: 13vh;
}
.btn {
  width: 100%;
  background: #23292e;
  color: #fff;
}
</style>