<template>
  <div class="geral">
    <div class="container">
      <h1>Página não encontrada</h1>
      <router-link to="/" class="home">Voltar para a Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NaoEncontrado",
};
</script>

<style scoped>
.geral {
  padding: 150px 0;
  width: 100%;
  min-height: 100vh;
}
h1 {
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 60px;
}
.home {
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 20px 40px;
}
</style>