import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ResetPasswordView from '../views/ResetPasswordView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/forgot-password', // New route for forgot password
      name: 'forgot-password',
      component: () => import('../views/ForgotPasswordView.vue') // Replace with your actual forgot password component
    },
    {
      path: '/reset-password', // New route for reset password
      name: 'reset-password',
      component: () => import('../views/ResetPasswordView.vue') // Replace with your actual reset password component
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPasswordView
    }    
  ]
});

export default router;
