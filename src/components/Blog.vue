<template>
  <section class="blog">
    <div class="container">
      <h2 class="identificador">NOSSO BLOG</h2>
      <h1>
        Publicações mais <br />
        recentes
      </h1>
      <div class="posts">
        <div class="post-item" v-for="post in posts" :key="post.title">
          <PostItem :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  name: "Blog",
  components: {
    PostItem,
  },
  data() {
    return {
      posts: [
        {
          title: "Como funciona tal coisa?",
          obs: "Conserve os olhos fixos num ideal sublime, e lute sempre pelo que deseja",
        },
        {
          title: "Como funciona outra coisa?",
          obs: "Oportunidades não acontecem, você as cria.",
        },
        {
          title: "Como coisa?",
          obs: "Sempre que você se encontra do lado da maioria, é hora de parar e refletir.",
        },
        {
          title: "Como funciona?",
          obs: "Se você quer alcançar a grandeza, pare de pedir permissão.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.blog {
  background: #fff;
  padding: 70px 0;
}
h1 {
  font-size: 40px;
  color: #23292e;
  line-height: 1.2;
  font-weight: 600;
  margin: 10px 0 50px 0;
}
.posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 32px;
  }
  .blog {
    padding: 70px 20px;
  }
  .posts {
    grid-template-columns: 1fr;
  }
}
</style>