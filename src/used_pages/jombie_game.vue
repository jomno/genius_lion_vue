<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link panel-open="left" icon-ios="f7:menu" icon-md="material:menu"></f7-link>
      </f7-nav-left>
      <div class="title" style="left: 2px;">
        <!-- <a class="link external" href="/">CLNK</a> -->
        <a href="/main/" class="link reload-all root-path-button" @click="openIndicator">
          <img src="../assets/img/gen_lion_logo.png" alt="genius_lion" style="display:block;width:30px;">
        </a>
      </div>
      <f7-nav-right>
        <a class="link back">
          <i class="icon icon-back"></i>
          <span class="ios-only"></span>
        </a>
      </f7-nav-right>
    </f7-navbar>
    <f7-list inset>
      <f7-list-button title="방 만들기" color="red" popover-open=".popover-menu"></f7-list-button>
    </f7-list>

    <f7-block-title>생성된 방</f7-block-title>
    <f7-list inset>
      <f7-list-item link="#" title="원노와 함깨 춤을"  badge="1 / 8">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
      </f7-list-item>
      <f7-list-item link="#" title="양송이 버섯은 이응이 네개"  badge="2 / 8">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
      </f7-list-item>
      <f7-list-item link="#" title="ㄴㄴ"  badge="8 / 8">
        <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
      </f7-list-item>
    </f7-list>

    <f7-popover class="popover-menu">
      <f7-block-title>기본 설정</f7-block-title>
      <f7-block strong class="text-align-center">
        <small class="display-block">방 최대 인원</small>
        <f7-stepper :value="8" :min="4" :max="18" :step="1"></f7-stepper>
      </f7-block>
      <f7-list>
        <f7-list-item link="#" popover-close title="랜덤"></f7-list-item>
        <f7-list-item link="#" popover-close title="고정"></f7-list-item>
      </f7-list>

    </f7-popover>

  </f7-page>
</template>
<script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7List, f7Row, f7Col, f7ListButton, f7Button, f7Segmented } from 'framework7-vue';

  export default {
    components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
      f7Block,
      f7List,
      f7Row,
      f7Col,
      f7ListButton,
      f7Button,
      f7Segmented,
    },
    methods: {
      openIndicator() {
        const self = this;
        self.$f7.preloader.show();
        setTimeout(() => {
          self.$f7.preloader.hide();
        }, 2000);
      },
    }
  }
</script>
