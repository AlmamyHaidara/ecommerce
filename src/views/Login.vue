<template>
  <div>
    <span class="form position-absolute top-0">
      <img src="@/assets/pngegg.png" alt="" srcset="" width="150" />
      <form action="">
        <div class="field form-outline">
          <i class="fas fa-user fs-4 test"></i>
          <input
            type="email"
            name="email"
            id="email"
            v-model="datalog.email"
            class="form-control"
            placeholder="Email"
            title="email@gmail.com"
          />
        </div>
        <div class="field">
          <i class="fas fa-lock fs-4 test passw"></i>
          <Password
            v-model="datalog.password"
            toggleMask
            placeholder="password"
            title="password"
          />
        </div>
        <div class="btnsection">
          <div class="btn forgot text-danger">Forget Password?</div>
          <div class="btn submitbtn" @click="submitLogin($event)">
            Login
          </div>
        </div>
        <InlineMessage severity="success" v-show="show">Success Content</InlineMessage>
    <!-- <Button label="Success" severity="success" @click="showSuccess" /> -->

      </form>
    </span>
  </div>
</template>

<script>
import {CheckEmail,CheckPassword} from '@/_helper/CheckData'
export default {
  name: "Login",
  data() {
    return {
      datalog: { email: null, password: null },
      show: false,
    };
  },
  methods: {
    submitLogin: function(evt){
      // console.log('test', evt);
      if((this.datalog.email || this.datalog.password)== null || (this.datalog.email.trim() || this.datalog.password.trim()) == ("" || " ")) {
        console.log(false);
      }else{
        CheckEmail(this.datalog.email)
        CheckPassword(this.datalog.password)
        this.$emit('loginData', this.datalog)
        this.show =true
        setInterval(()=>{
          this.show = false
        },1000)
      }
    },
    // showSuccess() {
    //         this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
            
    //       },
  },
};
</script>

<style scoped>

</style>
