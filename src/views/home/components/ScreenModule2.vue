<template>
  <div class="container">
    <div class="effective-area">
      <div :class="platform === 'PC' ? 'pc-header' : 'm-header'">{{$t('lang.home.module2Title1')}}<span class="gt">{{$t('lang.home.module2Title2')}}</span>{{$t('lang.home.module2Title3')}}</div>
      <div :class="platform === 'PC' ? 'pc-tips-text' : 'm-tips-text'">{{$t('lang.home.module2subTitle')}}</div>
      <div v-if="platform !== 'PC'" class="small-screen">
        <img class="main-logo m-logo" src="@/assets/ico1.png" alt="">
        <h4 style="color: #fff">{{$t('lang.home.module2CardTitle2')}}</h4>
        <div class="m-card-text">{{$t('lang.home.module2Card2Text')}}</div>
      </div>

      <div v-if="platform === 'PC'" class="card-box row">
        <div class="item-box">
          <h3 class="color255">{{$t('lang.home.module2CardTitle1')}}</h3>
          <div class="card-text">{{$t('lang.home.module2CardText')}}</div>
          <div>{{$t('lang.home.module2CardText2')}}</div>
        </div>
        <div class="item-box main-box">
          <img class="main-logo" style="margin-bottom: 15px" src="@/assets/ico1.png" alt="">
          <h3 class="color255">{{$t('lang.home.module2CardTitle2')}}</h3>
          <div class="card-text">{{$t('lang.home.module2Card2Text')}}</div>
        </div>
        <div class="item-box">
          <h3 class="color255">{{$t('lang.home.module2CardTitle3')}}</h3>
          <div class="card-text">{{$t('lang.home.module2Card3Text')}}</div>
          <div>{{$t('lang.home.module2Card3Text2')}}</div>
        </div>
      </div>

      <div v-else class="m-item-box">
        <h4 class="color255">{{$t('lang.home.module2CardTitle3')}}</h4>
        <div class="m-card-text">{{$t('lang.home.module2Card3Text')}}</div>
        <div class="m-join-us">{{$t('lang.home.module2Card3Text2')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {checkPlatform} from '@/utils/fun';

export default {
  name: "ScreenModule2",
  data() {
    return {
      platform: 'PC',
    }
  },
  created() {
    const platform = checkPlatform();
    if (platform !== 'PC') {
      this.platform = platform;
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  background-color: #303030;
  padding-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.gt {
  color: #02ba96;
  vertical-align: baseline;
  margin: 0 10px;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.card-box {
  margin: 60px 20px 30px 20px;
}

.item-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 280px;
  border-top: 4px solid #54B798;
  background-color: #363636;
  box-shadow: 0 0 20px 2px #1f1f1f;
  padding: 20px;
  color: #fff;
  margin-right: 5px;
}

.item-box:nth-child(3n) {
  margin-right: 0;
}

.main-box {
  min-height: 330px;
}

.item-box:hover {
  -webkit-transform: scale(1.01, 1.01);
  transform: scale(1.01, 1.01);
}

.card-text {
  font-size: 14px;
  color: #DADADA;
  text-align: left;
  line-height: 28px;
}

.main-logo {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.small-screen {
  margin: 0 30px;
  text-align: center;
}

/**
  移动端m样式 || pc端样式
*/
.m-header {
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
}

.pc-header {
  color: #fff;
  text-align: center;
  font-size: 44px;
  font-weight: bold;
  margin-top: 40px;
}

.m-tips-text {
  color: #fff;
  font-size: 18px;
  text-align: center;
}

.pc-tips-text {
  color: #fff;
  font-size: 22px;
  text-align: center;
}

.m-logo {
  width: 80px;
  height: 80px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.m-card-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

.m-item-box {
  margin: 20px 10px;
  border-top: 4px solid #54B798;
  background-color: #363636;
  box-shadow: 0 0 20px 2px #1f1f1f;
  padding: 10px;
  color: #fff;
}

.m-join-us {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
