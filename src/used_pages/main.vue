<template>
  <f7-page :page-content="false">
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
          <img src="../assets/img/gen_lion_logo.png" alt="genius_lion" style="display:block;width:30px;" >
        </a>
      </div>
      <f7-nav-right>
        <f7-link panel-open="right" icon-ios="f7:menu" icon-md="material:menu"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar tabbar labels>
      <f7-link tab-link="#game_desc" tab-link-active>
        <f7-icon ios="f7:home_fill">
        </f7-icon>
        <span class="tabbar-label">HOME</span>
      </f7-link>
      <f7-link tab-link="#join_room">
        <f7-icon ios="f7:add_round_fill">
        </f7-icon>
        <span class="tabbar-label">ROOM</span>
      </f7-link>
      <f7-link tab-link="#my_page">
        <f7-icon ios="f7:person_fill">
          <f7-badge color="red">1</f7-badge>
        </f7-icon>
        <span class="tabbar-label">MYPAGE</span>
      </f7-link>
    </f7-toolbar>

    <f7-tabs swipeable>
      <f7-tab id="game_desc" class="page-content" tab-active>
        <f7-block>
          <div class="card demo-card-header-pic">
            <div class="game_1 card-header align-items-flex-end">좀비 게임</div>
            <div class="card-footer"><a href="#" class="link">Like</a><f7-button raised popup-open=".game_1_popup">설명 보기</f7-button></div>
          </div>

          <div class="card demo-card-header-pic">
            <div class="game_2 card-header align-items-flex-end">신분 교환</div>
            <div class="card-footer"><a href="#" class="link">Like</a><f7-button raised popup-open=".game_1_popup">설명 보기</f7-button></div>
          </div>

          <div class="card demo-card-header-pic">
            <div class="game_3 card-header align-items-flex-end">멋사 지니어스란?</div>
            <div class="card-footer"><a href="#" class="link">Like</a><f7-button raised popup-open=".game_1_popup">설명 보기</f7-button></div>
          </div>

        </f7-block>
      </f7-tab>
      <f7-tab id="join_room" class="page-content">
        <f7-block>

          <div class="card demo-card-header-pic" v-for="room in rooms">
            <div class="game_1 card-header align-items-flex-end">{{room.title}}</div>
            <div class="card-footer"><a href="#" class="link">Like</a>
              <f7-button href="/jombie_game/" raised v-if="user.q_user_id">참가하기</f7-button>
              <f7-button panel-open="right" raised v-else>로그인해주세요</f7-button>
            </div>
          </div>

        </f7-block>
      </f7-tab>
      <f7-tab id="my_page" class="page-content">
        <f7-block>
          <p>{{threeno}}</p>
          <p>여기는 내 정보 페이지입니다.</p>
        </f7-block>
      </f7-tab>
    </f7-tabs>

    <!-- popup -->
    <!-- REVIEW 이 부분들은 하드 코딩 좀 부탁합니다. -->
    <f7-popup class="game_1_popup" :opened="popupOpened" @popup:closed="popupOpened = false">
      <f7-page>
        <f7-navbar title="Popup Title">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <p>Here comes popup. You can put here anything, even independent view with its own navigation. Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula...</p>
        </f7-block>
      </f7-page>
    </f7-popup>


  </f7-page>
</template>


<script>
  import { f7Page, f7Navbar, f7NavLeft, f7NavTitle, f7BlockTitle, f7Block, f7Tabs, f7Tab, f7Link, f7Toolbar} from 'framework7-vue';

  export default {
    components: {
      f7Page,
      f7Navbar,
      f7NavLeft,
      f7NavTitle,
      f7BlockTitle,
      f7Block,
      f7Tabs,
      f7Tab,
      f7Link,
      f7Toolbar,
    },
    methods: {
      openIndicator() {
        const self = this;
        self.$f7.preloader.show();
        setTimeout(() => {
          self.$f7.preloader.hide();
        }, 500);
      },
      toggleToolbarPosition() {
        this.$$(this.$el).find('.toolbar, .tabbar').toggleClass('toolbar-bottom-md');
      },
    },
    data() {
      return {
        wonno: "wonno",
        twono: "장순호",
        threeno: "미정",
        isBottom: false,
        popupOpened: false,
        rooms:  [
          { title: '좀비게임' },
          { title: '신분교환' }
        ]
      };
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      loading () {
        return this.$store.getters.loading
      },
      error () {
        return this.$store.getters.error
      },
    },
  };
</script>
