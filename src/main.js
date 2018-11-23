// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import firebaseui from 'firebaseui';
import { config } from './helpers/firebaseConfig'
import { $http } from '@/utils/api'
import { store } from './store'

import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import Routes from './used_routes';

import VueLodash from 'vue-lodash'

const options = { name: 'lodash' }

Framework7.use(Framework7Vue);

Vue.config.productionTip = false
Vue.use(VueLodash, options)
Vue.prototype.$http = $http
// Vue.prototype.firebase = firebase

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  render: (h) => h(App)
});
