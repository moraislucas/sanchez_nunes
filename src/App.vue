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
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #1a2025;
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
  font-family: "Montserrat", sans-serif;
  background: #3d5bf6;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  padding: 20px 35px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}
.btn:hover {
  background: #3550d6;
}
.identificador {
  color: #a7a5a5;
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-bottom: 20px;
}
label {
  margin-bottom: 5px;
}

input,
textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
  width: 100%;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
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
