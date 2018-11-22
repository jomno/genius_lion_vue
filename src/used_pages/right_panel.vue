<template>
  <f7-page>
    <f7-block-title>{{this.$store.getters.user.name}}</f7-block-title>
    <f7-block>
      <p v-if="loading">Loading...</p>
    </f7-block>
    <template v-if="this.$store.getters.user">
      <img :src="this.$store.getters.user.photoUrl" alt="avatar" style="width: 30px; height: 30px; border-radius: 50%;">
      <button @click="signOut">Sign Out</button>
    </template>
    <template v-if="!this.$store.getters.user && !this.$store.getters.loading">
      <button @click="signInWithGoogle">Sign in with Google</button>
    </template>
    <f7-list>
      <f7-list-item link="/accordion/" title="보유 루비" panel-close></f7-list-item>
      <f7-list-item link="/action-sheet/" title="루비상점" panel-close></f7-list-item>
      <f7-list-item link="/badge/" title="친구목록" panel-close></f7-list-item>
      <f7-list-item link="/buttons/" title="버그신고" panel-close></f7-list-item>
      <f7-list-item link="/cards/" title="설정" panel-close></f7-list-item>
    </f7-list>
    <f7-block>
      <p>만든 이</p>
      갓성원, 시섹성준, 원트노우, 킹신우, 양송이유, 갓디주농
    </f7-block>
  </f7-page>
</template>

<script>
  import firebase from 'firebase'
  import firebaseui from 'firebaseui';
  import { config } from '@/helpers/firebaseConfig'
  import { f7Page, f7BlockTitle, f7Block, f7List, f7ListItem, f7Link } from 'framework7-vue';

  firebase.initializeApp(config);

  export default {
    // beforeCreate: function() {
    //   firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       this.user = user
    //     }
    //     this.loading = false
    //   })
    // },
    components: {
      f7Page,
      f7BlockTitle,
      f7Block,
      f7List,
      f7ListItem,
      f7Link,
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      loading () {
        return this.$store.getters.loading
      },
    },
    methods: {
      openIndicator() {
        const self = this;
        self.$f7.preloader.show();
        setTimeout(() => {
          self.$f7.preloader.hide();
        }, 500);
      },
      signInWithGoogle: function() {
        this.$store.dispatch('signUserInGoogle')
      },
      signOut: function() {
        this.$store.dispatch('logout')
      },
    }
  };
</script>
