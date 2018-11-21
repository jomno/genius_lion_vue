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

    <f7-block-title>사진을 드래그해서 돌려주세요.</f7-block-title>

    <div data-effect="flip" class="swiper-container swiper-init demo-swiper demo-swiper-cube">
      <div class="swiper-wrapper">
        <img src="../assets/img/job_back.png" alt="" class="swiper-slide">
        <img src="../assets/img/job_human_b.png" alt="" class="swiper-slide">
      </div>
    </div>


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
