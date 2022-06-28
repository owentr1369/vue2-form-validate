<template>
  <div id="app">
    <nav>
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/signin">Sign In</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
body {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
