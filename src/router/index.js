import { createRouter, createWebHistory } from "vue-router";
import * as publicLayout from '@/views/public/index'
import * as adminLayout from '@/views/admin/index'
import { authGoard } from "@/_helper/auth_goard";
import LoginVue from "@/views/Login.vue";
// localStorage.setItem('token', 'jtrhguygt_yy')
const routes = [
  {
    path: '/',
    name: 'public',
    component: publicLayout.LayoutViewVue,
    children:[
      {
        path:'/',
        name:'home',
        component:publicLayout.LayoutViewVue
      }, {
        path:'list-products',
        name:'ListProduct',
        component:publicLayout.ListProductVue
      },{
        path:'payement',
        name:'payed',
        component:publicLayout.PayedProductVue
      },{
        path:'contact',
        name:'ContactView',
        component:publicLayout.ContactVue
      }
    ]
  },{
    path:'/admin',
    name:'admin',
    component: adminLayout.LayoutViewVue,
    children:[
      {
        path:'dashboard',
        name:'Dashboard',
        component:adminLayout.DashbordVue
      },{
        path:'list-users',
        name:'ListUsesr',
        component: adminLayout.UserListVue
      },{
        path:'crud-products',
        name:'CrudProduct',
        component: adminLayout.CrudVue
      },{
        path:'list-products',
        name:'ListProducts',
        component:adminLayout.ProductListVue
      }
    ]
  },{
    path:'/login',
    name:'Login',
    component: LoginVue
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next)=>{
  // console.log(to.matched[0].name);
  if(to.matched[0].name == 'admin'){
    authGoard()
  }
  next()
})

export default router;
