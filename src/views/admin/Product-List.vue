<template>
  <div class="product-list">
    <!-- <h1>Public Layout</h1> -->
    <div class="box d-flex ">
      <div class="add-product mt-5 ms-3 shadow p-3 mb-5 bg-body rounded">
        <!-- <h4 class="mt-3">Ajout de nouvelle produit</h4> -->
        <form action="#">
          <div class="fields-upload">
            <Toast />
            <FileUpload
              name="demo[]"
              url="./upload.js"
              @upload="onAdvancedUpload($event)"
              :multiple="true"
              accept="image/*"
              :maxFileSize="1000000"
            >
              <template #empty>
                <p>Drag and drop files to here to upload.</p>
              </template>
            </FileUpload>
          </div>
          <div class="field">
            <label for="nameProduct">Nom</label>
            <InputText type="text" v-model="name_product" class="row nom" />
          </div>
          <div class="field  mt-5">
            <label for="descriptionfield">Description</label>
            <!-- <input
              type="text"
              name="nameProduct"
              class="form-control"
              v-model="name_product"
            /> -->
            <!-- <textarea
              class="form-control"
              aria-label="With textarea"
              name="descriptionfield"
            ></textarea> -->
            <Textarea
              v-model="value"
              autoResize
              rows="1"
              cols="44"
              name="descriptionfield"
              class="row"
            />
          </div>
          <div class="field mt-5">
            <label for="selector" class="row ms-1">Inventair satue</label>
            <select class="custom-select" name="selector">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="field mt-5">
            <label for="radio_option" class="ms-2">Categorie</label>
            <div class="radio-list row mt-3">
              <div class="radio-left col">
                <div class="radio" >
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
          <div class="field row  pri">
            <div class="price-field row mt-5">
              <label for="price">prix</label>
              <InputNumber
                v-model="value2"
                inputId="currency-germany"
                mode="currency"
                currency="CFA"
                locale="de-DE"
                class="price"
              />
            </div>
            <div class="quantiter-field row">
              <label for="quantite">Quantiter</label>
              <InputNumber
                v-model="value1"
                inputId="integeronly"
                name="quantiter"
              />
            </div>
          </div>
          <!-- <div class="btn btn-val">Valider</div> -->
          <Button
            label="Save"
            icon="pi pi-check"
            class="p-button-text btn-val"
            @click="saveProduct"
          />
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
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />

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
                <div class="btn pen" title="Update"><i class="fa-solid fa-pen"></i></div>
                <div class="btn croix" title="Delete"><i class="fa-solid fa-xmark"></i></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "primevue/usetoast";
export default {
  name: "Produit-List",
  data() {
    return {
      name_product: "",
    };
  },
  methods: {
    onAdvancedUpload: () => {
      const toast = useToast();
      toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
  },
};
</script>

<style >
.box{
  height: 56rem;
}
.field-upload{
  width: 24rem !important;
  height: 7rem;
}
.field{
  margin-top: 1rem !important;
}
.field input{
  margin-bottom: 5rem !important;
}
.nom {
  width: 28rem;
}
.custom-select {
  width: 27.9rem;
  height: 2.5rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  background: transparent;
}
.add-product {
  width: 30rem;
  height: 56rem;
  border-radius: 10px;
  background: #f7f4f4;
}
.list-product {
  width: 65rem;
  height: 56rem;
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
  margin-top: 10rem !important;
  margin-left: 5rem !important;;
  float: right;
  margin-right: 1rem;
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
.upload{
  width: 20rem;
}
.radio{
  margin-bottom: -2rem;
}

.quantiter-field {
  margin-top: -4rem !important;
}

.pri {
    margin-top: 5rem !important;
    height: 5rem;
}
.b-example-vr {
    height: 100vh;
}
</style>
