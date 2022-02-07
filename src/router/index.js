import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Library from '@/views/Library.vue';
import Profile from '@/views/Profile.vue';
import AddMovieForm from '@/components/AddMovieForm.vue';
import EditMovieForm from '@/components/EditMovieForm.vue';
import Movie from '@/components/Movie.vue';
import SignIn from '@/components/SignIn.vue';
import SignUp from '@/components/SignUp.vue';
import About from '@/views/About.vue';
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
    path: '/movie/new',
    name: 'Add Movie',
    component: AddMovieForm,
    beforeEnter(to, from, next) {
      if (store.getters['user/isAuth']) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/movie/edit/:id',
    name: 'Edit Movie',
    component: EditMovieForm,
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    component: SignIn,
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: SignUp,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router