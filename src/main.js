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
import {getAuth, onAuthStateChanged} from "firebase/auth";

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKW4WnGvKhAZs77qbmUiDUFtxb_lB9Fls",
  authDomain: "videolibrary-c5c51.firebaseapp.com",
  projectId: "videolibrary-c5c51",
  storageBucket: "videolibrary-c5c51.appspot.com",
  messagingSenderId: "319341893539",
  appId: "1:319341893539:web:df607ad59082480628ac16"
};
// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  store.commit('user/setAuthUser', user);
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
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