<template>
  <div class="visualizar" data-anima="bottom">
    <h2>
      #{{ visualizar.id }} - {{ visualizar.title }}
      <div class="left-view">
        <div class="acoes">
          <a href="#">Editar</a>
          <a href="#">{{ visualizar.active ? "Desativar" : "Ativar" }}</a>
          <a href="#" class="excluir">Excluir</a>
        </div>
        <span class="ativo" v-if="visualizar.active">Ativado</span>
        <span class="desativado" v-else>Desativado</span>
      </div>
    </h2>
    <p>Conteudo do Artigo:</p>
    <div v-html="visualizar.about" class="artigo"></div>
  </div>
</template>

<script>
export default {
  name: "VisualizarArtigo",
  props: {
    visualizar: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.visualizar {
  border: 1px solid #23292e;
  padding: 30px;
  border-radius: 5px;
}
.visualizar h2,
.visualizar p {
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
}
.visualizar h2,
.left-view {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.visualizar h2 span {
  font-size: 13px;
  display: block;
  border-radius: 5px;
  padding: 8px 16px;
  font-weight: 500;
}
.visualizar h2 span.ativo {
  color: #149365;
  background: rgba(20, 147, 100, 0.2);
}
.visualizar h2 span.desativado {
  color: #ff0022;
  background: rgba(255, 0, 34, 0.1);
}
.visualizar p {
  font-size: 16px;
  line-height: 1.5;
}
.visualizar .artigo {
  color: #a7a5a5;
}
.acoes {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-right: 40px;
}
.acoes a {
  font-weight: 600;
  color: #a7a5a5;
  font-size: 14px;
}

.acoes a.excluir {
  color: #ff0022;
}
</style>