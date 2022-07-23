<template>
  <div class="post">
    <!-- <img src="@/assets/img/imagem-1.png" alt="" /> -->
    <div class="info">
      <h2>{{ post.title }}</h2>
      <p>{{ post.obs }}</p>
      <a href="#">Saiba mais</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.post {
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  min-height: 200px;
  position: relative;
}
@media screen and (max-width: 768px) {
  .post {
    min-height: 150px;
  }
}
.post .info {
  padding: 30px 20px;
}
.post h2 {
  font-size: 15px;
  color: #23292e;
  margin-bottom: 10px;
  font-weight: 600;
}
.post p {
  color: #23292e;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  /* margin-bottom: 25px; */
}
.post a {
  font-weight: 600;
  font-size: 13px;
  color: #23292e;
  position: absolute;
  bottom: 30px;
}
</style>
