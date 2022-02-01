import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Library from '@/views/Library.vue'
import Profile from '@/views/Profile.vue'
import AddMovieForm from '@/views/AddMovieForm.vue'
import Authorization from '@/components/Authorization.vue'
import MovieForm from '@/components/MovieForm.vue'
import About from '@/views/About.vue'
import {isAuth} from '@/App.vue';

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
    /*beforeEnter(to, from, next) {
      if (isAuth) {
        next();
      } else {
        next('/authorization');
      }
    },*/
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
    path: '/authorization',
    name: 'Authorization',
    component: Authorization,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router