<template>
  <div class="visualizar" data-anima="bottom">
    <h2>
      #{{ visualizar.id }} - {{ visualizar.title }}
      <div class="left-view" v-if="!read">
        <div class="acoes">
          <a href="#" @click.prevent="editar">Editar</a>
          <a href="#" @click.prevent="changeStatus">{{
            visualizar.active ? "Desativar" : "Ativar"
          }}</a>
          <a href="#" class="excluir" @click.prevent="excluir">Excluir</a>
        </div>
        <span class="ativo" v-if="visualizar.active">Ativado</span>
        <span class="desativado" v-else>Desativado</span>
      </div>
    </h2>
    <p>Resumo:</p>
    <div class="artigo">{{ visualizar.summary }}</div>

    <p v-if="!read">Conteudo do Artigo:</p>
    <div v-html="visualizar.about" class="artigo"></div>
  </div>
</template>

<script>
import { api } from "@/services.js";

export default {
  name: "VisualizarArtigo",
  props: {
    visualizar: {
      type: Object,
      default: () => {},
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeStatus() {
      const status = this.visualizar.active ? false : true;
      const data = {
        about: this.visualizar.about,
        id: this.visualizar.id,
        title: this.visualizar.title,
        active: status,
        summary: this.visualizar.summary,
      };

      api
        .put(`card/${this.visualizar.id}`, data)
        .then(() => {
          this.$emit("getCards");
        })
        .catch(() => {
          alert("Erro ao tentar modificar esse artigo");
        });
    },
    editar() {
      this.$emit("editar", this.visualizar);
    },
    excluir() {
      const retorno = confirm(
        `Deseja continuar excluir esse Artigo? [#${this.visualizar.id} - ${this.visualizar.title}]`
      );
      if (retorno) {
        api
          .delete(`card/${this.visualizar.id}`)
          .then(() => {
            this.$emit("getCards");
          })
          .catch(() => {
            alert("Erro ao tentar excluir esse artigo");
          });
      }
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
  margin-bottom: 20px;
  line-height: 1.5;
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
@media screen and (max-width: 768px) {
  .visualizar {
    padding: 15px;
  }
  .visualizar h2 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
  }
  .visualizar p,
  .visualizar .artigo {
    font-size: 14px;
  }
  .visualizar h2 {
    font-size: 16px;
  }
}
</style>