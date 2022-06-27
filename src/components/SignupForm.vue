<template>
  <div class="signup-form">
    <h1>Sign Up</h1>
    <form>
      <label for="">Email:</label>
      <input type="email" required v-model="email" />
      <label for="">Password:</label>
      <input type="password" required v-model="password" />
      <label for="">Confirm password:</label>
      <input type="password" required v-model="confirmPassword" />
      <label for="">Role:</label>
      <select v-model="selectedRole">
        <option v-for="(role, index) in roles" :key="index" :value="role.value">
          {{ role.title }}
        </option>
      </select>
      <label for="">Skills:</label>
      <input type="text" v-model="tempSkill" @keyup="addSkill" />
      <div
        class="pill"
        @click="deleteSkill(skill)"
        v-for="(skill, index) in skills"
        :key="index"
      >
        {{ skill }}
      </div>
      <div class="terms">
        <input type="checkbox" id="terms" v-model="terms" required />
        <label for="terms">Accept the terms and conditions</label>
      </div>
      <div class="submit">
        <button class="signin" @click.prevent="signUp">Sign Up</button>
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
      confirmPassword: "",
      selectedRole: "developer",
      terms: false,
      tempSkill: "",
      skills: [],
      roles: [
        { title: "Web Developer", value: "developer" },
        { title: "Designer", value: "designer" },
        { title: "Tester", value: "tester" },
        { title: "Marketing", value: "marketing" },
      ],
    };
  },
  methods: {
    signUp() {
      if (this.password != this.confirmPassword) {
        alert("Passwords do not match!");
        this.password = "";
        this.confirmPassword = "";
      } else {
        alert("Sign up successful!");
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.terms = false;
        this.selectedRole = "developer";
        this.tempSkill = "";
        this.skill = [];
      }
    },
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill.slice(0, -1));
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
  },
};
</script>

<style>
.signup-form {
  width: 50%;
  background: #fff;
  border-radius: 30px;
}
form {
  max-width: 420px;
  margin: 30px auto;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  outline: none;
}
select {
  display: block;
  width: 100%;
  height: 36.5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
.terms {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 14px;
}
.terms input {
  width: 14px;
}
.terms label {
  margin: 0;
  font-size: 12px;
  line-height: 19px;
  margin-top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fff;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
</style>