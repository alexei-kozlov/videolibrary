import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Library from '@/views/Library.vue'
import Profile from '@/views/Profile.vue'
import AddMovieForm from '@/views/AddMovieForm.vue'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
import MovieForm from '@/components/MovieForm.vue'
import About from '@/views/About.vue'
import store from '@/store/index.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/library',
    name: 'Library',
    component: Library,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/new-movie',
    name: 'add-movie',
    component: AddMovieForm,
    beforeEnter(to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/authorization');
      }
    },
  },
  {
    path: '/library/:title',
    component: MovieForm,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router