<template>
  <div class="container">
    <div class="effective-area">
      <div :class="platform === 'PC' ? 'header' : 'm-header'">{{$t('lang.home.contactUs')}}</div>
      <div class="sub-header">
        <span>{{$t('lang.home.support')}}</span>
        <span class="text-color"> 24/7 </span>
        <span>{{$t('lang.home.may')}}</span>
      </div>
      <div :class="platform === 'PC' ? 'item-box' : 'm-item-box'">
        <div class="about-box">
          <div :class="platform === 'PC' ? 'item-title' : 'm-item-title'">{{$t('lang.home.contacts')}}</div>
          <div class="about-item-info" v-for="(item, index) in leftList" :key="index" @click="bindClick(item)">
            <div class="about-icon-box">
              <i style="font-size: 30px" class="iconfont" :class="item.icon_name"></i>
            </div>
            <span>{{$t(item.name)}}</span>
          </div>
        </div>
        <div class="about-box">
          <div :class="platform === 'PC' ? 'item-title' : 'm-item-title'">{{$t('lang.home.groups')}}</div>
          <div class="about-item-info" v-for="(item, index) in midList" :key="index" @click="bindClick(item)">
            <div class="about-icon-box">
              <i style="font-size: 30px" class="iconfont" :class="item.icon_name"></i>
            </div>
            <span>{{$t(item.name)}}</span>
          </div>
        </div>
        <div class="about-box">
          <div :class="platform === 'PC' ? 'item-title' : 'm-item-title'">SOCIAL NETWORKS:</div>
          <div class="about-item-info" v-for="(item, index) in rightList" :key="index" @click="bindClick(item)">
            <div class="about-icon-box">
              <i style="font-size: 30px" class="iconfont" :class="item.icon_name"></i>
            </div>
            <span>{{$t(item.name)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {checkPlatform} from "@/utils/fun";

export default {
  name: "ScreenModule6",
  data() {
    return {
      platform: 'PC',
      leftList: [
        {id: 0, name: 'lang.home.help', icon_name: 'icon-icon', url: 'https://t.me/tronexsupport'},
        {id: 1, name: 'lang.home.advertising', icon_name: 'icon-icon', url: 'https://t.me/tronex_net'},
        {id: 2, name: 'lang.home.email', icon_name: 'icon-youjian', url: 'https://t.me/tronexsupport'},
      ],
      midList: [
        {id: 3, name: 'lang.home.engGroups', icon_name: 'icon-zhifeiji', url: 'https://t.me/tronexgroup'},
      ],
      rightList: [
        {id: 4, name: 'lang.home.newsChannel', icon_name: 'icon-zhifeiji', url: 'https://t.me/tronexnews'},
        {id: 5, name: 'lang.home.twitterUser', icon_name: 'icon-icon', url: 'https://twitter.com/tronex_net'},
        {id: 6, name: 'lang.home.instagramUser', icon_name: 'icon-xiangji', url: 'https://www.instagram.com/accounts/login/?next=/tronex_net/'},
        {id: 7, name: 'lang.home.youtube', icon_name: 'icon-xueyuan-shipinbofang', url: 'https://www.youtube.com/channel/UCw3ck_M-JGnEkAph4Bb2HYQ'},
        {id: 8, name: 'lang.home.discord', icon_name: 'icon-youxishoubing', url: 'https://discord.com/invite/dwGFZVs'},
      ],
    }
  },
  created() {
    const platform = checkPlatform();
    if (platform !== 'PC') {
      this.platform = platform;
    }
  },
  methods: {
    bindClick(item){
      if(item.id === 2){
        console.log('-----');
      } else {
        window.open(item.url, '_blank');
      }
    },
    spliceStr(str){
      return str
    },
  }
}
</script>

<style scoped>
.container {
  background-color: #303030;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 50px 0;
}

.about-box {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 30px;
}

.about-item-info {
  margin-top: 20px;
  padding: 10px 0;
  text-shadow: 1px 1px 1px #333;
  box-shadow: 0 0 30px #1f1f1f;
  background: linear-gradient(to right,#282828 0%,#353535 100%);
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 60px;
  cursor: pointer;
}

.about-item-info:hover {
  transform: scale(1.1);
  transition: all 0.5s ease-in;
}

.header {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}

.m-header {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.sub-header {
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
}

.item-title {
  font-size: 20px;
}

.m-item-title {
  font-size: 16px;
  text-align: left;
  margin-top: 20px;
}

.item-box {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
}

.m-item-box {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.about-icon-box {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #34BA96;
  position: absolute;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>
