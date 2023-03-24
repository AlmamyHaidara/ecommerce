import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import PrimeVue from "primevue/config";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";
//icone
import "primeicons/primeicons.css";

//icons
import "primeicons/primeicons.css";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import MegaMenu from "primevue/megamenu";
import FileUpload from "primevue/fileupload";
import Dialog from "primevue/dialog";
import RadioButton from "primevue/radiobutton";
import DataView from "primevue/dataview";
import Rating from "primevue/rating";
import Tag from "primevue/tag";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Password from "primevue/password";
import Toast from "primevue/toast";
import InlineMessage from "primevue/inlinemessage";
import Sidebar from "primevue/sidebar";


const app = createApp(App);
//App User
app.use(store);
app.use(PrimeVue, { ripple: true });
app.use(router);

app.component("Button", Button);
app.component("InputNumber", InputNumber);
app.component("InputText", InputText);
app.component("Textarea", Textarea);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("MegaMenu", MegaMenu);
app.component("FileUpload", FileUpload);
app.component("Dialog", Dialog);
app.component("RadioButton", RadioButton);
app.component("DataView", DataView);
app.component("Rating", Rating);
app.component("Tag", Tag);
app.component("DataViewLayoutOptions", DataViewLayoutOptions);
app.component("Password", Password);
app.component("Toast", Toast);
app.component("InlineMessage", InlineMessage);
app.component("Sidebar", Sidebar);

app.mount("#app");
