<template>
  <span >
        <img src="@/assets/pngegg.png" alt="" srcset="" width="150" />
        <form action="">
          <div class="fieldRegister field">
            <input
              type="text"
              name="firstname"
              id="firstname"
              class="form-control"
              placeholder="Firstname"
              v-model="dataregister.fistname"
            />
          </div>
          <div class="fieldRegister field">
            <input
              type="text"
              name="lastname"
              id="lastname"
              class="form-control"
              placeholder="Lastname"
              v-model="dataregister.lastname"
            />
          </div>
          <div class="fieldRegister field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="form-control"
              v-model="dataregister.email"
            />
          </div>
          <div class="fieldRegister field">
            <input
              type="text"
              name="tel"
              id="tel"
              placeholder="Téléphone"
              class="form-control"
              v-model="dataregister.tel"
            />
          </div>
          <div class="fieldRegister field">
            <input
              type="password"
              name="password"
              id="password"
              class="form-control"
              placeholder="password"
              v-model="dataregister.password"
            />

          </div>
          <div class="fieldRegister field">
            <input
              type="password"
              name="passwordconf"
              id="passwordconf"
              placeholder="Confirmer"
              class="form-control"
              v-model="passwordconf"
            />
          </div>
          <div class="btnsection">
            <div class="btn submitbtnRegister" @click="submitRegister($event)">Submit</div>
          </div>
        </form>
      </span>
</template>

<script>
import { CheckEmail,CheckPassword } from '@/_helper/CheckData';

export default {
    data(){
        return{
            dataregister: {'fistname':null, 'lastname':null, 'email':null, 'tel':null,'password':null},
            passwordconf:null
        }
    },methods:{
        submitRegister: function(){
            CheckEmail(this.dataregister.email)
            CheckPassword(this.dataregister.password)
            this.$emit('dataregister',this.dataregister)
        }
    }

}
</script>

<style>
</style>