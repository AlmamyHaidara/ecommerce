<template>
  <div class="dashbord mx-auto">
    <!-- <h1>Dasbord page</h1> -->
    <div class="box-min d-flex ms-1">
      <div class="shadow p-3 mb-5 bg-white rounded card-box mt-5 d-flex">
        <h5>Type produits</h5>
        <h1 class="chiffre text-primary">200</h1>
        <div class="bul">
          <!-- <i class="fas fa-cart-plus panier"></i> -->
          <i class="fas fa-box-archive panier ms-3"></i>
        </div>
      </div>
      <div class="shadow p-3 mb-5 bg-white rounded card-box ms-5 mt-5 d-flex">
        <h5>Commandes</h5>
        <h1 class="chiffre text-primary">200</h1>

        <div class="bul">
          <i class="fas fa-cart-plus panier ms-3"></i>
        </div>
      </div>
      <div class="shadow p-3 mb-5 bg-white rounded card-box ms-5 mt-5 d-flex">
        <h5>Commandes Livrer</h5>
        <h1 class="chiffre text-primary">200</h1>
        <div class="bul">
          <!-- <i class="fas fa-cart-plus panier"></i> -->
          <i class="fas fa-truck panier ms-3"></i>
        </div>
      </div>
      <div class="shadow p-3 mb-5 bg-white rounded card-box ms-5 mt-5 d-flex">
        <h5>Livraison en attente</h5>
        <h1 class="chiffre text-primary">200</h1>
        <div class="bul">
          <i class="fas fa-clipboard-user lts"></i>
        </div>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style>
.card-box {
  width: 20rem;
  height: 8rem;
  justify-content: space-between;
}
.bul {
  width: 4rem;
  height: 4rem;
  margin-top: 15px;
  border-radius: 50%;
  background: #0d6efd;
}
.panier {
  margin-top: 18px;
  margin-left: 15px;
  font-size: 30px;
  color: #faf6f6;
  font-weight: bold;
}
.lts {
  margin-top: 18px;
  margin-left: 20px;
  font-size: 30px;
  color: #faf6f6;
  font-weight: bold;
}
.chiffre {
  margin-top: 2rem;
  margin-left: -8rem;
}
</style>
