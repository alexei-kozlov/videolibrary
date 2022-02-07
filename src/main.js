window.$ = JQuery;
import JQuery from 'jquery';
import './assets/styles/style.scss';
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CustomInput from '@/components/ui/CustomInput.vue';
import CustomTextarea from '@/components/ui/CustomTextarea.vue';
import CustomBtn from '@/components/ui/CustomBtn.vue';
import CustomRadio from '@/components/ui/CustomRadio.vue';

// Import the functions
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKW4WnGvKhAZs77qbmUiDUFtxb_lB9Fls",
  authDomain: "videolibrary-c5c51.firebaseapp.com",
  databaseURL: "https://videolibrary-c5c51-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "videolibrary-c5c51",
  storageBucket: "videolibrary-c5c51.appspot.com",
  messagingSenderId: "319341893539",
  appId: "1:319341893539:web:df607ad59082480628ac16"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();

const path = '/library';
onValue(ref(db, path), (snapshot) => {
  store.commit('library/clear');
  const libraryObject = snapshot.val();
  for (const [key, value] of Object.entries(libraryObject)) {
    store.commit('library/addMovie', value);
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commit('user/setUser', user);
  } else {
    store.dispatch('user/logOut');
  }
});

createApp(App)
    .component('CustomInput', CustomInput)
    .component('CustomTextarea', CustomTextarea)
    .component('CustomBtn', CustomBtn)
    .component('CustomRadio', CustomRadio)
    .use(router)
    .use(store)
    .mount('#app');