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
      <span class="form position-absolute top-0" v-show="activate">
        <img src="@/assets/pngegg.png" alt="" srcset="" width="150" />
        <form action="">
          <div class="field form-outline">
            <i class="fas fa-user fs-4 test"></i>
            <input
              type="email"
              name="email"
              id="email"
              :model="email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="field">
            <i class="fas fa-lock fs-4 test"></i>
            <input
              type="password"
              name="password"
              id="password"
              :model="password"
              class="form-control"
              placeholder="password"
            />
          </div>
          <div class="btnsection">
            <div class="btn forgot text-danger">Forget Password?</div>
            <div class="btn submitbtn">Login</div>
          </div>
        </form>
      </span>
      <span class="formRegister position-absolute top-0" v-show="!activate">
        <img src="@/assets/pngegg.png" alt="" srcset="" width="150" />
        <form action="">
          <div class="fieldRegister field">
            <input
              type="text"
              name="firstname"
              id="firstname"
              class="form-control"
              placeholder="Firstname"
            />
          </div>
          <div class="fieldRegister field">
            <input
              type="text"
              name="lastname"
              id="lastname"
              class="form-control"
              placeholder="Lastname"
            />
          </div>
          <div class="fieldRegister field">
            <input
              type="text"
              name="tel"
              id="tel"
              placeholder="Téléphone"
              class="form-control"
            />
          </div>
          <div class="fieldRegister field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="form-control"
            />
          </div>
          <div class="fieldRegister field">
            <input
              type="password"
              name="password"
              id="password"
              class="form-control"
              placeholder="password"
            />
          </div>
          <div class="fieldRegister field">
            <input
              type="password"
              name="passwordconf"
              id="passwordconf"
              placeholder="Confirmer"
              class="form-control"
            />
          </div>
          <div class="btnsection">
            <div class="btn submitbtnRegister">Submit</div>
          </div>
        </form>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isActivate: false,
      email: "",
      password: "",
      activate: true,
    };
  },
  methods: {
    // activateBtn: function (evt) {
    //   let login = document.querySelector("#login");
    //   let sign = document.querySelector("#sign");
    //   if (this.activate) {
    //     evt.target.style.background = "#a6b0afc4";
    //     evt.target.style.transition = "1s";
    //     sign.style.background = "transparent";
    //   } else if (!this.activate) {
    //     evt.target.style.background = "#a6b0afc4";
    //     login.style.background = "transparent";
    //   }
    // },
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
  },
};
</script>

<style scoped>
.activate {
  background: hsla(174, 6%, 67%, 0.769);
  transition: 0.5s;
  font-size: 20px !important;
}
.activate:hover {
  background: #a6b0afc4;
}
#login {
  padding: 1rem 4.2rem 1rem 10px;
}
.login-card {
  width: 1100px;
  height: 500px;
  margin-top: 22vh;
  margin-left: 23vh;
  box-shadow: -1px -2px 23px 13px #1d1c1a77;
  -webkit-box-shadow: -1px -2px 23px 13px #1d1c1a26;
  -moz-box-shadow: -1px -2px 23px 13px #1d1c1a77;
}
.login {
  position: absolute;
  top: 0;
  background: rgb(172, 86, 17);
  width: 100%;
  height: 100vh;
}
.img img {
  margin-top: -1px;
  margin-left: -1px;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.log-btn {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 11.5rem;
  left: 22.5rem;
}
.log-btn .btn {
  color: aliceblue;
  padding: 1rem 3.1rem 1rem 10px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 1rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;
}
.bg {
  background: "#a6b0afc4";
}
.form {
  left: 37rem;
  -webkit-animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
.form img {
  margin-top: 1rem;
  margin-left: 10rem;
}

.test {
  position: relative;
  left: 3.5rem;
  top: 33px;
}
input {
  border: 0;
  border-bottom: 1px solid #1d1c1a26;
  width: 15rem;
  margin-bottom: 3rem;
  margin-left: 5rem;
}
.fieldRegister input {
  border: 0;
  border-bottom: 1px solid #1d1c1a26;
  width: 15rem;
  margin-bottom: 3rem;
  margin-left: 3rem;
}
.btnsection {
  display: flex;
  position: relative;
  top: 4rem;
  left: 20rem;
}
.submitbtn {
  width: 10rem;
  height: 2.5rem;
  color: aliceblue;
  font-weight: bold;
  margin-left: 3rem;
  border: 0;
  border-radius: 20px;
  /* background: rgb(172, 86, 17); */
  background: linear-gradient(
    59deg,
    rgba(172, 86, 17, 1) 46%,
    rgba(225, 167, 19, 0.6980042016806722) 100%
  );
}
.submitbtnRegister {
  width: 10rem;
  height: 2.5rem;
  color: aliceblue;
  font-weight: bold;
  margin-top: -2rem;
  margin-left: 15rem;
  border: 0;
  border-radius: 20px;
  /* background: rgb(172, 86, 17); */
  background: linear-gradient(
    59deg,
    rgba(172, 86, 17, 1) 46%,
    rgba(225, 167, 19, 0.6980042016806722) 100%
  );
  cursor: pointer;
}
.forgot {
  margin-top: 0rem;
  margin-left: 2rem;
  border: 0;
}
.formRegister {
  left: 31rem;
  width: 37.5rem;
  height: 500px;
  -webkit-animation: scale-up-center 0.8s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.formRegister img {
  margin-top: 0rem;
  margin-left: 15rem;
}

.formRegister form {
  position: relative;
  top: 2rem !important;
  left:-2rem !important;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.btnsection {
  display: flex;
  margin-top: 1rem;
  margin-left: -20rem;
}
/* .submitbtn {
  width: 10rem;
  height: 2.5rem;
  color: aliceblue;
  font-weight: bold;
  position: relative;
  top: -2rem !important;
  left: 18rem;
  border: 0;
  border-radius: 20px !important;
  background: linear-gradient(
    59deg,
    rgba(172, 86, 17, 1) 46%,
    rgba(225, 167, 19, 0.6980042016806722) 100%
  );
} */
.field {
  width: 18rem;
  height: 2.2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
}
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
