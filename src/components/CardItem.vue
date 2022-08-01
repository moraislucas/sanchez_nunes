<template>
  <div class="card">
    <h2>
      #{{ card.id }} - {{ card.title }}
      <span class="ativo" v-if="card.active">Ativado</span>
      <span class="desativado" v-else>Desativado</span>
    </h2>
    <div class="acoes">
      <a href="#" @click.prevent="visualizar">Visualizar</a>
      <a href="#" @click.prevent="editar">Editar</a>
      <a href="#" @click.prevent="changeStatus">{{
        card.active ? "Desativar" : "Ativar"
      }}</a>
      <a href="#" class="excluir" @click.prevent="excluir">Excluir</a>
    </div>
  </div>
</template>

<script>
import { api } from "@/services.js";
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    changeStatus() {
      const status = this.card.active ? false : true;
      const data = {
        about: this.card.about,
        id: this.card.id,
        title: this.card.title,
        active: status,
      };

      api
        .put(`card/${this.card.id}`, data)
        .then(() => {
          this.$emit("getCards");
        })
        .catch(() => {
          alert("Erro ao tentar modificar esse artigo");
        });
    },
    editar() {
      this.$emit("editar", this.card);
    },
    visualizar() {
      this.$emit("visualizar", this.card);
    },
    excluir() {
      const retorno = confirm(
        `Deseja continuar excluir esse Artigo? [#${this.card.id} - ${this.card.title}]`
      );
      if (retorno) {
        api
          .delete(`card/${this.card.id}`)
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
.card {
  border: 1px solid #23292e;
  padding: 30px;
  border-radius: 5px;
}
.card h2,
.card p {
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
}
.card h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card h2 span {
  font-size: 13px;
  display: block;
  border-radius: 5px;
  padding: 8px 16px;
  font-weight: 500;
}
.card h2 span.ativo {
  color: #149365;
  background: rgba(20, 147, 100, 0.2);
}
.card h2 span.desativado {
  color: #ff0022;
  background: rgba(255, 0, 34, 0.1);
}
.card p {
  font-size: 16px;
  line-height: 1.5;
}
.artigo {
  color: #a7a5a5;
}
.acoes {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 20px;
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