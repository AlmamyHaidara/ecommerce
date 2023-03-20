<template>
  <div class="login">
    <div class="card mx-auto login-card">
      <div class="img">
        <img
          src="@/assets/Nike.jpg"
          alt=""
          srcset=""
          width="500"
          height="500"
          class="rounded-2 bor"
        />
        <span class="log-btn">
          <div
            class="btn list-group-item activate"
            id="login"
            @click="loginFunction($event)"
          >
            LOGIN
          </div>
          <div
            class="btn list-group-item"
            id="sign"
            @click="registerFunction($event)"
          >
            SIGN UP
          </div>
        </span>
      </div>
      <!-- Login section -->
      <Login v-show="activate" @loginData="loginData" />
      <!-- Register section -->
      <Register
        class="formRegister position-absolute top-0"
        v-show="!activate"
        @dataregister="dataregister"
      />
    </div>
  </div>
</template>

<script>
import Login from "./Login.vue";
import Register from "./register.vue";
export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      isActivate: false,
      email: "",
      password: "",
      activate: true,
    };
  },
  methods: {
    loginFunction: function (evt) {
      if (
        document.querySelector("#sign").className ===
        "btn list-group-item activate"
      ) {
        document.querySelector("#sign").classList.remove("activate");
        evt.target.classList.add("activate");
      }
      console.log(evt.target.className === "btn list-group-item activate");
      this.activate = evt.target.className === "btn list-group-item activate";
    },
    registerFunction: function (evt) {
      this.activate = !evt.target.className === "btn list-group-item activate";
      if (
        document.querySelector("#login").className ===
        "btn list-group-item activate"
      ) {
        document.querySelector("#login").classList.remove("activate");
        evt.target.classList.add("activate");
      }
      console.log(evt.target.className === "btn list-group-item activate");
    },
    loginData:  function (data_l) {
      console.log( data_l);
    },
    dataregister: function(data_r){
      console.log(data_r);
    }
  },
};
</script>

<style >
@import url("@/assets/css/Login.css");
</style>
