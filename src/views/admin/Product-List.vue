<template>
  <div class="product-list">
    <h1>Public Layout</h1>
    <div class="box d-flex">
      <div class="add-product mt-5 ms-5 shadow p-3 mb-5 bg-body rounded">
        <h4 class="mt-3">Ajout de nouvelle produit</h4>
        <form action="#">
          <div class="field mt-5">
            <label for="nameProduct">Nom</label>
            <input
              type="text"
              name="nameProduct"
              class="form-control"
              v-model="name_product"
            />
          </div>
          <div class="field mt-3">
            <label for="descriptionfield">Description</label>
            <!-- <input
              type="text"
              name="nameProduct"
              class="form-control"
              v-model="name_product"
            /> -->
            <textarea
              class="form-control"
              aria-label="With textarea"
              name="descriptionfield"
            ></textarea>
          </div>
          <div class="field mt-3">
            <label for="selector" class="row ms-1">Inventair satue</label>
            <select class="custom-select" name="selector">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="field mt-3">
            <label for="radio_option" class="ms-2">Categorie</label>
            <div class="radio-list row mt-4">
              <div class="radio-left col">
                <div class="radio">
                  <input
                    type="radio"
                    name="done"
                    aria-label="Radio button for following text input"
                    class="mx-1 mb-4"
                    checked
                  />
                  <label for="" class="done">Chossure</label>
                </div>
                <div class="radio">
                  <input
                    type="radio"
                    name="done"
                    aria-label="Radio button for following text input"
                    class="mx-1 mb-4"
                  />
                  <label for="" class="done">Tuishort</label>
                </div>
              </div>
              <div class="radio-right col">
                <div class="radio">
                  <input
                    name="done"
                    type="radio"
                    aria-label="Radio button for following text input"
                    class="mx-1 mb-4"
                  />
                  <label for="" class="done">Chossure</label>
                </div>
                <div class="radio">
                  <input
                    name="done"
                    type="radio"
                    aria-label="Radio button for following text input"
                    class="mx-1 mb-4"
                  />
                  <label for="" class="done">Tuishort</label>
                </div>
              </div>
            </div>
          </div>
          <div class="field row mt-3">
            <div class="price-field col">
              <label for="price">prix</label>
              <input class="form-control" type="text" name="price" />
            </div>
            <div class="quantiter-field col">
              <label for="quantite">Quantiter</label>
              <input type="text" name="quantiter" id="" class="form-control" />
            </div>
          </div>
          <div class="btn btn-val">Valider</div>
        </form>
      </div>
      <!-- List des produit ajouter -->
      <div class="list-product mt-5 ms-4 shadow p-3 mb-5 bg-body rounded">
        <div class="top-bar d-flex">
          <h4>List des produits</h4>
          <input
            class="form-control mr-sm-2 search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div class="top-second">
          <span class="title">
            <ul class="d-flex">
              <input type="checkbox" aria-label="Checkbox for following text input" />

              <li class="p-2">
                Code <i class="fas fa-arrow-right-arrow-left ps-1 ms-2 dir"></i>
              </li>
              <li class="p-2">
                Nom <i class="fas fa-arrow-right-arrow-left ps-1 ms-2 dir"></i>
              </li>
              <li class="p-2 ms-3">
                Image
                <i class="fas fa-arrow-right-arrow-left ps-1 ms-2 dir"></i>
              </li>
              <li class="p-2">
                Price
                <i class="fas fa-arrow-right-arrow-left ps-1 ms-2 dir"></i>
              </li>
              <li class="p-2">
                Categorie
                <i class="fas fa-arrow-right-arrow-left ps-1 ms-2 dir"></i>
              </li>
              <li class="p-2">
                Statue
                <i class="fas fa-arrow-right-arrow-left ps-1 ms-2 dir"></i>
              </li>
              <li class="p-2">
                Quantiter
                <i class="fas fa-arrow-right-arrow-left ps-1 ms-2 dir"></i>
              </li>
              <li class="p-2">
                <div class="btn"></div>
                <div class="btn"></div>
              </li>
            </ul>
          </span>
        </div>
        <div class="central">
          <div class="title">
            <ul class="d-flex">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input lst1"
              />

              <li class="p-2 lst2">Code</li>
              <li class="p-2">Nom</li>
              <li class="p-2">Image</li>
              <li class="p-2">Price</li>
              <li class="p-2">Categorie</li>
              <li class="p-2">Statue</li>
              <li class="p-2">Quantiter</li>
              <li class="p-2">
                <div class="btn pen"><i class="fa-solid fa-pen"></i></div>
                <div class="btn croix"><i class="fa-solid fa-xmark"></i></div>
              </li>
            </ul>

            <ul class="d-flex">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input lst1"
              />

              <li class="p-2 lst2">Code</li>
              <li class="p-2">Nom</li>
              <li class="p-2">Image</li>
              <li class="p-2">Price</li>
              <li class="p-2">Categorie</li>
              <li class="p-2">Statue</li>
              <li class="p-2">Quantiter</li>
              <li class="p-2">
                <div class="btn pen"><i class="fa-solid fa-pen"></i></div>
                <div class="btn croix"><i class="fa-solid fa-xmark"></i></div>
              </li>
            </ul>
          </div>
        </div>
        <!-- <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Produit-List",
  data() {
    return {
      name_product: "",
    };
  },
};
</script>

<style>
.custom-select {
  width: 27.9rem;
  height: 2.5rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  background: transparent;
}
.add-product {
  width: 30rem;
  height: 50rem;
  border-radius: 10px;
  background: #f7f4f4;
}
.list-product {
  width: 65rem;
  height: 50rem;
  background: #f7f4f4;
}
input[type="radio"] {
  border: 0px;
  width: 15%;
  height: 1.5rem;
}
.done {
  margin-top: -3rem;
}
.btn-val {
  width: 15rem;
  background: #0d6dfd8a !important;
  margin: 6rem 6rem;
  color: #fff !important;
  font-weight: bold !important;
  font-size: 20px !important;
}
.btn-val:hover {
  background: transparent !important;
  border: 3px solid #0d6dfd8a !important;
  color: #0d6dfd8a !important;
}
.top-bar {
  background: #ced4da9c;
  height: 4rem;
  justify-content: space-between;
  color: #0d6dfd8a;
  border-radius: 5px;
}
.top-bar h4 {
  margin-top: 1rem;
  margin-left: 2rem;
}
.search {
  width: 20rem !important;
  height: 2.5rem;
  margin-top: 0.8rem;
  margin-right: 1rem;
}
.top-second {
  background: #ced4da9c;
  height: 3rem;
  margin-top: 6px;
  border-radius: 5px;
}
.top-second .title ul {
  justify-content: space-between;
}
.dir {
  transform: rotate(90deg) !important;
  color: #0d6dfd8a;
}
.central {
  height: 40rem;
  margin-top: 6px;
  border: 0;
  overflow: auto;
  scrollbar-color: rebeccapurple green !important;
}
.center .title {
  border-bottom: 10px solid #ced4da !important;
}
.central .title ul {
  justify-content: space-between;
  border-bottom: 1px solid #ced4da;
}
.dir {
  transform: rotate(90deg) !important;
  color: #0d6dfd8a;
}
input[type="checkbox"] {
  border: 0px;
  width: 2%;
  height: 1.5rem;
  margin-top: 0.5rem;
  margin-left: -1rem;
}
.lst1 {
  border: 0px;
  width: 1.5%;
  height: 1.5rem;
  margin-top: 0.5rem;
  margin-left: -1rem;
}
.lst2 {
  margin-left: -2rem !important;
}
.pen {
  border-radius: 100% !important;
  background: var(--color2) !important;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: -2rem;
  /* margin-right: -1rem; */
}
.croix {
  border-radius: 100% !important;
  background: var(--color1) !important;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 10px;
}
</style>
