<!-- eslint-disable prettier/prettier -->
<template>
  <div class="first">
    <ModaleProduct
      class="modale"
      v-show="showBox"
      :image="src"
      :show="showBox"
      @closeModale="closeModale($event)"
    />
    <div class="card w-100 border-0">
      <h2 class="mx-auto mt-3 fs-1 mb-4 text-danger txt">FEATURED PRODUCTS</h2>
      <div class="categorie mx-auto mb-3">
        <ul class="d-flex list-group list-group-horizontal text-light bg-black">
          <li><div class="btn list-group-item">Choes</div></li>
          <li><div class="btn list-group-item">Choes</div></li>
          <li><div class="btn list-group-item">Choes</div></li>
        </ul>
      </div>
      <div class="list-produit bg-light">
        <div class="listP d-grid p-5">
          <ul class="ul grid">
            <li class="list-group-item col-sm p-3 list-item">
              <div class="img mx-auto bg-black h-25">
                <img src="@/assets/headaer.jpg" alt="" class="img-fluid" />
              </div>
              <div class="descri mt-5 position-relative">
                <div class="descript mx-auto">
                  <h5 class="mx-auto position-relative text-center">
                    Lorem ipsum dolor sit.
                  </h5>
                </div>
                <div class="ligne bg-black rounded-5 mx-auto"></div>
                <div class="prix mx-auto">
                  <p class="price text-danger text-center">$152</p>
                </div>
                <div class="btn bg-danger panier position-absolute" @click="toggleBox()">
                  <i class="fas fa-basket-shopping"></i>
                </div>
              </div>
            </li>
            <li class="list-group-item col-sm p-3 list-item">
              <div class="img mx-auto bg-black h-25">
                <img src="@/assets/headaer.jpg" alt="" class="img-fluid" />
              </div>
              <div class="descri mt-5 position-relative">
                <div class="descript mx-auto">
                  <h5 class="mx-auto position-relative text-center">
                    Lorem ipsum dolor sit.
                  </h5>
                </div>
                <div class="ligne bg-black rounded-5 mx-auto"></div>
                <div class="prix mx-auto">
                  <p class="price text-danger text-center">$152</p>
                </div>
                <div class="btn bg-danger panier position-absolute">
                  <i class="fas fa-basket-shopping"></i>
                </div>
              </div>
            </li>
            <li class="list-group-item col-sm p-3 list-item">
              <div class="img mx-auto bg-black h-25">
                <img src="@/assets/headaer.jpg" alt="" class="img-fluid" />
              </div>
              <div class="descri mt-5 position-relative">
                <div class="descript mx-auto">
                  <h5 class="mx-auto position-relative text-center">
                    Lorem ipsum dolor sit.
                  </h5>
                </div>
                <div class="ligne bg-black rounded-5 mx-auto"></div>
                <div class="prix mx-auto">
                  <p class="price text-danger text-center">$152</p>
                </div>
                <div class="btn bg-danger panier position-absolute">
                  <i class="fas fa-basket-shopping"></i>
                </div>
              </div>
            </li>
            <li class="list-group-item col-sm p-3 list-item">
              <div class="img mx-auto bg-black h-25">
                <img src="@/assets/headaer.jpg" alt="" class="img-fluid" />
              </div>
              <div class="descri mt-5 position-relative">
                <div class="descript mx-auto">
                  <h5 class="mx-auto position-relative text-center">
                    Lorem ipsum dolor sit.
                  </h5>
                </div>
                <div class="ligne bg-black rounded-5 mx-auto"></div>
                <div class="prix mx-auto">
                  <p class="price text-danger text-center">$152</p>
                </div>
                <div class="btn bg-danger panier position-absolute">
                  <i class="fas fa-basket-shopping"></i>
                </div>
              </div>
            </li>
            <li class="list-group-item col-sm p-3 list-item">
              <div class="img mx-auto bg-black h-25">
                <img src="@/assets/headaer.jpg" alt="" class="img-fluid" />
              </div>
              <div class="descri mt-5 position-relative">
                <div class="descript mx-auto">
                  <h5 class="mx-auto position-relative text-center">
                    Lorem ipsum dolor sit.
                  </h5>
                </div>
                <div class="ligne bg-black rounded-5 mx-auto"></div>
                <div class="prix mx-auto">
                  <p class="price text-danger text-center">$152</p>
                </div>
                <div class="btn bg-danger panier position-absolute">
                  <i class="fas fa-basket-shopping"></i>
                </div>
              </div>
            </li>
            <li class="list-group-item col-sm p-3 list-item">
              <div class="img mx-auto bg-black h-25">
                <img src="@/assets/headaer.jpg" alt="" class="img-fluid" />
              </div>
              <div class="descri mt-5 position-relative">
                <div class="descript mx-auto">
                  <h5 class="mx-auto position-relative text-center">
                    Lorem ipsum dolor sit.
                  </h5>
                </div>
                <div class="ligne bg-black rounded-5 mx-auto"></div>
                <div class="prix mx-auto">
                  <p class="price text-danger text-center">$152</p>
                </div>
                <div class="btn bg-danger panier position-absolute">
                  <i class="fas fa-basket-shopping"></i>
                </div>
              </div>
            </li>
            <li class="list-group-item col-sm p-3 list-item">
              <div class="img mx-auto bg-black h-25">
                <img src="@/assets/headaer.jpg" alt="" class="img-fluid" />
              </div>
              <div class="descri mt-5 position-relative">
                <div class="descript mx-auto">
                  <h5 class="mx-auto position-relative text-center">
                    Lorem ipsum dolor sit.
                  </h5>
                </div>
                <div class="ligne bg-black rounded-5 mx-auto"></div>
                <div class="prix mx-auto">
                  <p class="price text-danger text-center">$152</p>
                </div>
                <div class="btn bg-danger panier position-absolute">
                  <i class="fas fa-basket-shopping"></i>
                </div>
              </div>
            </li>
            <li class="list-group-item col-sm p-3 list-item">
              <div class="img mx-auto bg-black h-25">
                <img src="@/assets/headaer.jpg" alt="" class="img-fluid" />
              </div>
              <div class="descri mt-5 position-relative">
                <div class="descript mx-auto">
                  <h5 class="mx-auto position-relative text-center">
                    Lorem ipsum dolor sit.
                  </h5>
                </div>
                <div class="ligne bg-black rounded-5 mx-auto"></div>
                <div class="prix mx-auto">
                  <p class="price text-danger text-center">$152</p>
                </div>
                <div class="btn bg-danger panier position-absolute">
                  <i class="fas fa-basket-shopping"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ModaleProduct from "@/components/public/Modale_Product.vue";
export default {
  components: {
    // ModaleProduct,
  },
  name: "First-Product",
  data() {
    return {
      showBox: false,
      salut: "Bonjour",
      src: require("@/assets/headaer.jpg"),
    };
  },
  methods: {
    toggleBox() {
      // this.showBox = !this.showBox;
      this.showBox = true;
      console.log(this.showBox);
    },
    closeModale: function (res) {
      this.showBox = res;
      console.log(res);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 20rem;
  cursor: pointer;
}
h5 {
  width: 14rem;
  top: 2.5rem;
}
.ligne {
  width: 5rem;
  height: 0.2rem;
  margin-top: 3rem !important;
}
.descri {
  top: 1rem;
}
.prix p {
  margin-top: 0rem;
  font-weight: bold;
  font-size: 20px;
}
.panier {
  width: 45px;
  top: 7rem;
  left: 11.5rem;
}
.ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-column-gap: 2px;
  grid-row-gap: 20px;
  justify-content: center;
}
.list-item {
  border: 1px solid #eae7e7;
}
.list-item:hover {
  box-shadow: -2px 1px 37px -6px rgba(114, 107, 107, 0.97);
  -webkit-box-shadow: -2px 1px 37px -6px rgba(114, 107, 107, 0.97);
  -moz-box-shadow: -2px 1px 37px -6px rgba(114, 107, 107, 0.97);
  transition: 0.5s all;
  transition-duration: 1s;
}
.categorie ul li {
  height: 3rem;
}
.modale {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #ffffff52;
  z-index: 10;

  animation-name: shutter-in-right;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
}

@keyframes shutter-in-right {
  0% {
    transform: rotateY(-100deg);
    transform-origin: right;
    opacity: 1;
  }
  100% {
    transform: rotateY(0);
    transform-origin: right;
    opacity: 1;
  }
}
</style>
