<template>
  <div class="card">
    <div class="top-card">
      <div class="icon">
        <img
          :src="require(`@/assets/icons/${servico.icon}.svg`)"
          :alt="servico.icon"
        />
      </div>
      <span class="type">{{ servico.type }}</span>
    </div>
    <h2>{{ servico.title }}</h2>
  </div>
</template>

<script>
export default {
  name: "CardServico",
  props: {
    servico: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.card {
  padding: 40px 30px;
  background: #23292e;
  border-radius: 5px;
}
.top-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a2025;
  border-radius: 5px;
}
.type {
  color: #149365;
  background: rgba(20, 147, 100, 0.2);
  font-size: 13px;
  display: block;
  border-radius: 5px;
  padding: 10px 20px;
}
h2 {
  font-size: 18px;
  color: #fff;
  font-weight: 600;
}
</style>