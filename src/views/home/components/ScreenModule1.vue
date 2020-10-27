<template>
  <div class="container">
    <div class="effective-area">
      <div class="content-box">
        <div v-if="platform === 'PC'" class="left-img">
          <img src="@/assets/mainphone.png" alt="">
        </div>
        <div class="right-text">
          <h1 class="color255">{{$t('lang.home.InvestTitle')}}</h1>
          <img class="logo-name" src="@/assets/tron_full.png" alt="">
          <div class="recive-text">{{$t('lang.home.received')}} <span class="proportion"> +200% </span>{{$t('lang.home.deposit')}}</div>
          <div class="tips-text"><img src="@/assets/checked.png" alt="">{{$t('lang.home.module1Tips1')}}</div>
          <div class="tips-text"><img src="@/assets/checked.png" alt="">{{$t('lang.home.module1Tips2')}}</div>
          <div class="tips-text"><img src="@/assets/checked.png" alt="">{{$t('lang.home.module1Tips3')}}</div>
          <span class="maindescbut" @click="investBtn">{{$t('lang.home.withdrawBtn')}}</span>
          <div class="check-text" @click="checkContract">{{$t('lang.home.contractAddress')}}</div>
          <div class="check-text" @click="printPdf">Platform presentation (PDF)</div>
          <a name="aboutUs"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {checkPlatform} from '@/utils/fun';
export default {
  name: "ScreenModule1",
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
  methods: {
    investBtn() {
      this.$emit('oninvest');
    },
    checkContract() {
      const addr = 'https://tronscan.org/#/contract/TWiti6GpPJPRXtCFKURdTtxN7UEcurQoeS/code';
      window.open(addr, "_blank");
    },
    printPdf() {
      const url = 'https://tronex.net/files/presentation.pdf?v=1';
      window.open(url, "_blank");
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 600px;
  background-image: url("../../../assets/mainback.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  height: 480px;
}

.left-img {
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.right-text {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  color: #fff;
  padding: 0 30px;
}

.maindescbut {
  display: block;
  width: 100%;
  height: 46px;
  margin-top: 30px;
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  background: #02ba96;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid #047d66;
  text-shadow: 1px 1px 1px #047d66;
  transition: .1s;
  cursor: pointer;
  text-transform: uppercase;
}

.recive-text {
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 4px solid #54B798;
  text-align: left;
  margin-bottom: 20px;
  padding: 10px 0;
}

.proportion {
  color: #54B798;
}

.tips-text {
  font-size: 14px;
  color: #DADADA;
  line-height: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.tips-text img {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}

.logo-name {
  height: 50px;
}

.check-text {
  width: 100%;
  font-size: 16px;
  color: #DADADA;
  line-height: 28px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
}
</style>
