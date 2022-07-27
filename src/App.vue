<template>
  <div id="app">
    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>


<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Nunito", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #33303e;
}

ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
  display: block;
}

[data-anima="top"] {
  animation: showTop 0.5s forwards;
}
@keyframes showTop {
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
[data-anima="bottom"] {
  animation: showBottom 0.5s forwards;
}
@keyframes showBottom {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
[data-anima="left"] {
  animation: showLeft 0.5s forwards;
}
@keyframes showLeft {
  from {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
[data-anima="right"] {
  animation: showRight 0.5s forwards;
}
@keyframes showRight {
  from {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 10px;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}
.btn {
  display: block;
  font-family: "Nunito", sans-serif;
  background: #fff;
  border: 1px solid #fff !important;
  color: #00b453;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 25px;
  border: none;
  cursor: pointer;
  border-radius: 100px;
  transition: 0.3s !important;
}
.btn:hover {
  transform: scale(1.05) !important;
}

label {
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 15px;
  color: #23292e;
  display: block;
}

input,
textarea,
select {
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  padding: 15px;
  height: 55px;
  transition: all 0.3s;
  font-size: 15px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 15px;
  width: 100%;
  resize: none;
  background: transparent;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus,
select:hover,
select:focus {
  outline: none;
  border-color: #23292e;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
