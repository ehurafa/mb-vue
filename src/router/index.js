import Vue from 'vue';
import Router from 'vue-router';
import Welcome from "@/pages/Welcome";
import LegalPerson from "@/pages/LegalPerson";
import PhysicalPerson from "@/pages/PhysicalPerson";
import Password from "@/pages/Password";
import ReviewInformation from "@/pages/ReviewInformation";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/pessoa-juridica',
      name: 'LegalPerson',
      component: LegalPerson,
      beforeEnter: (to, from, next) => {
        console.log('testeee')
        // reject the navigation
        next()
        // return true
      },
    },
    {
      path: '/pessoa-fisica',
      name: 'PhysicalPerson',
      component: PhysicalPerson
    },
    {
      path: '/senha-de-acesso',
      name: 'Password',
      component: Password
    },
    {
      path: '/revise-suas-informacoes',
      name: 'ReviewInformation',
      component: ReviewInformation
    }
  ]
})

export default router;
