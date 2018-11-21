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
      <f7-list-button href="/open_job/"  title="게임 시작" color="red"></f7-list-button>
    </f7-list>

    <f7-block-title>사용자 리스트</f7-block-title>
    <f7-list>
      <f7-list-item title="양송이">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
        <f7-toggle slot="after"></f7-toggle>
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
    methods: {
      openIndicator() {
        const self = this;
        self.$f7.preloader.show();
        setTimeout(() => {
          self.$f7.preloader.hide();
        }, 500);
      },
    }
  };
</script>

<style lang="css">
</style>
