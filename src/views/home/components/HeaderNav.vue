<template>
  <div class="nav-container" :class="navBg && 'nav-bg'">
    <div class="effective-area row">
      <div
          v-for="(item, index) in navList"
          :key="index"
          :class="navBg ? 'nav-item-small' : 'nav-item-big'"
          @click="onclickNav(item)"
          v-show="item.show"
      >
        <div class="nav-item-li">
          <a class="nav-title" v-if="item.name !== 'logo'" :href="item.event">{{ $t(item.name) }}</a>
          <img style="width: 80px" v-else src="@/assets/logo.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {checkPlatform} from '@/utils/fun';

export default {
  name: "HeaderNav",
  data() {
    return {
      navBg: false,
      navList: [
        {index: 0, name: 'lang.nav.aboutUs', event: '#aboutUs', show: true},
        {index: 1, name: 'lang.nav.investment', event: '#', show: true},
        {index: 2, name: 'lang.nav.contest', icon_name: '', event: '#', show: true},
        {index: 3, name: 'logo', icon_name: '', event: '#', show: true},
        {index: 4, name: 'lang.nav.withdraw', icon_name: '', event: '#', show: true},
        {index: 5, name: 'lang.nav.statistical', icon_name: '', event: '#', show: true},
      ],
    }
  },
  created() {
    const platform = checkPlatform();
    const navList = this.navList;
    if (platform !== 'PC') {
      navList[0].show = false;
      navList[1].show = false;
      navList[2].show = false;
    }
  },
  methods: {
    setNavStyle(scrollTop) {
      if (Number(scrollTop) > 80) {
        this.navBg = true;
      } else {
        this.navBg = false;
      }
    },
    onclickNav(item) {
      console.log(item);
    },
  }
}
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 14px;
  color: #DADADA;
  z-index: 1000;
}

.nav-bg {
  background: #303030;
  box-shadow: 1px 1px 20px #1f1f1f;
  font-size: 14px;
}

.nav-item-small {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80px;
  cursor: pointer;
  border-bottom: 4px solid transparent;
}

.nav-item-small:hover {
  border-bottom: 4px solid #54B798;
  font-size: 16px;
  color: #54B798;
}

.nav-item-big {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  cursor: pointer;
  border-top: 6px solid transparent;
}

.nav-item-big:hover {
  border-top: 6px solid #54B798;
  font-size: 16px;
  color: #54B798;
}

.nav-item-li {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-title {
  color: #fff;
  text-decoration: none;
}

</style>
