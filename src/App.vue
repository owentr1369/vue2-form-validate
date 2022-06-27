<template>
  <div id="app">
    <signup-form />
  </div>
</template>

<script>
import SignupForm from "./components/SignupForm.vue";

export default {
  name: "App",
  components: {
    SignupForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #eee;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
