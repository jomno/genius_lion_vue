<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <a class="link back">
          <i class="icon icon-back"></i>
          <span class="ios-only"></span>
        </a>
      </f7-nav-left>

      <div class="title" style="left: 2px;">
        <!-- <a class="link external" href="/">CLNK</a> -->
        <a href="/main/" class="link reload-all root-path-button" @click="openIndicator">
          <img src="../assets/img/gen_lion_logo.png" alt="genius_lion" style="display:block;width:30px;">
        </a>
      </div>
      <f7-nav-right>
        <f7-link panel-open="right" icon-ios="f7:menu" icon-md="material:menu"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-list inset>
      <f7-list-button @click="gameStart()"  title="게임 시작" color="red"></f7-list-button>
    </f7-list>

    <f7-block-title>좀비 게임 참가자들</f7-block-title>
    <f7-list inset>
      <f7-list-item v-for="user in users"
        v-bind:title="user.name"
        v-bind:key="user.id">
        <f7-icon slot="media" icon="demo-list-icon">

        </f7-icon>
        <!-- <f7-toggle slot="after" v-bind:checked="user.ready"></f7-toggle> -->
      </f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7List, f7ListItem, f7ListGroup, f7ListItemCell, f7ListItemRow, f7BlockFooter, f7Icon, f7Toggle } from 'framework7-vue';

  export default {
    data() {
      return {
        users: [],
        current_user_nums: 0,
        ready_user_nums: 0
      }
    },
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
      f7Block,
      f7List,
      f7ListItem,
      f7ListGroup,
      f7ListItemCell,
      f7ListItemRow,
      f7BlockFooter,
      f7Icon,
      f7Toggle,
    },
    methods: {
      openIndicator() {
        const self = this;
        self.$f7.preloader.show();
        setTimeout(() => {
          self.$f7.preloader.hide();
        }, 500);
      },
      gameStart() {
        this.$f7router.navigate('/open_job/')
      //   this.$http.post('/rooms/'+this.$f7route.params.roomId+"/game_start",
      //   {
      //     q_user_id: his.$store.getters.user.q_user_id
      //   }
      //   .then((result) => {
      //     console.log(result)
      //     this.users = result.data.room_players;
      //   })
      // )
      },
      getRoomUsers(){
        this.$http.get('/rooms/'+this.$f7route.params.roomId+".json?q_user_id="+this.$store.getters.user.q_user_id)
        .then((result) => {
            console.log(result)
            this.users = result.data.users;
        })
      },
      subscribe() {
        let pusher = new Pusher('05ae740a83e02c2ed494', { cluster: 'ap1' })
        pusher.subscribe('room_' + this.$f7route.params.roomId)
        pusher.bind('user_data', data => {
          this.users = data

        })
      },
    },
    mounted(){
      // this.joinRoomUsers();
      this.getRoomUsers();
    },
    created () {
      // ...
      this.subscribe()
    },
  };
</script>

<style lang="css">
</style>
