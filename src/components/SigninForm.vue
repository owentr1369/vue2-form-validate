<template>
  <div class="signup-form">
    <h1>Sign In</h1>
    <form>
      <label for="">Email:</label>
      <input type="email" required v-model="email" />
      <label for="">Password:</label>
      <input type="password" required v-model="password" />
      <div class="submit">
        <span><a href="#">Forgot password?</a></span>
        <button class="signin" @click.prevent="signIn">Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      alert("Sign in");
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
</style>