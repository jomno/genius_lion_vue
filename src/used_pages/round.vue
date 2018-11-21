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

    <f7-block-title>남은 시간</f7-block-title>
    <div class="list simple-list">
      <ul>
        <li>
          <f7-progressbar v-bind:progress="progress" color="multi"></f7-progressbar>

        </li>
      </ul>
    </div>

    <f7-block-title>유저리스트</f7-block-title>
    <f7-list media-list inset >
      <f7-list-item v-for="user in users"
        swipeout
        v-bind:title="user.name"
        v-bind:badge="user.status"
        v-bind:badge-color="user.statusColor"
        v-bind:subtitle="user.subtitle"
      >
        <f7-swipeout-actions right>
          <f7-swipeout-button @click="more">아이템</f7-swipeout-button>
          <f7-swipeout-button color="orange" @click="mark" v-if="user.status === '변경 전' ">터치</f7-swipeout-button>
          <!-- <f7-swipeout-button delete overswipe confirm-text="Are you sure you want to delete this item?">Delete</f7-swipeout-button> -->
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7List, f7ListItem, f7ListGroup, f7ListItemCell, f7ListItemRow, f7BlockFooter, f7Icon, f7Toggle } from 'framework7-vue';

  export default {
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
    data() {
      return {
        start_time: 1542820154497, // 이 부분은 후에 데이터를 받아와서 비교하겠음
        timer: null,
        progress: 1,
        users: [
          {
            name: "원트노",
            status: "변경완료",
            statusColor: "green",
            subtitle: "이 친구는 허접입니다."
          },
          {
            name: "정준홍",
            status: "변경 전",
            statusColor: "red",
            subtitle: "이 친구는 허접입니다."
          },
          {
            name: "정신우",
            status: "변경 전",
            statusColor: "red",
            subtitle: "이 친구는 허접입니다."
          },
          {
            name: "개고수",
            status: "변경완료",
            statusColor: "green",
            subtitle: "이 친구는 개고수입니다."
          },
        ]
      };
    },
    methods: {
      openIndicator() {
        const self = this;
        self.$f7.preloader.show();
        setTimeout(() => {
          self.$f7.preloader.hide();
        }, 500);
      },
      more() {
        this.onPageInit();
        const self = this;
        self.actions.open();
      },
      mark() {
        const app = this.$f7;
        app.dialog.alert('Mark');
      },
      reply() {
        const app = this.$f7;
        app.dialog.alert('Reply');
      },
      forward() {
        const app = this.$f7;
        app.dialog.alert('Forward');
      },
      onDeleted() {
        const app = this.$f7;
        app.dialog.alert('Thanks, item removed!');
      },
      onPageInit() {
        const self = this;
        const app = self.$f7;
        self.actions = app.actions.create({
          buttons: [
            [
              {
                text: '보기를 누르면 현재 아이템을 볼 수 있습니다. \n\r 교환을 누르면 아이템을 교환할 수 있습니다.',
                label: true,
              },
              {
                text: '보기',
              },
              {
                text: '교환',
              },
            ],
            [
              {
                text: 'Cancel',
                bold: true,
              },
            ],
          ],
        });
      },
    },
    mounted () {
      this.timer = setInterval(() => {
        if(this.progress < 100){
          this.progress = this.progress + 1
          var d = new Date();
          var now = d.getTime();
          var outTime = now - this.start_time
          console.log("지난 시간 : " + outTime/1000 + "초");
        }
      }, 9000)
    },
    beforeDestroy () {
      clearInterval(this.timer)
      this.timer = null
    }
  };
</script>

<style lang="css">
</style>
