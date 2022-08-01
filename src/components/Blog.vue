<template>
  <section class="blog" v-if="posts.length">
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
import { api } from "@/services.js";

import PostItem from "@/components/PostItem.vue";
export default {
  name: "Blog",
  components: {
    PostItem,
  },
  data() {
    return {
      posts: [],
      tentativas: 0,
    };
  },
  methods: {
    getBlog() {
      api
        .get("card")
        .then((resp) => {
          this.posts = resp.data;
        })
        .catch(() => {
          this.tentativas++;
          if (this.tentativas < 3) {
            this.getBlog();
          }
        })
    },
  },
  mounted() {
    this.tentativas = 0;
    this.getBlog();
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