<template>
  <div class="container">
    <div class="effective-area">
      <div class="header-title">
        <div :class="platform === 'PC' ? 'pc-title' : 'm-title'">{{$t('lang.home.module4Title')}}</div>
        <div :class="platform === 'PC' ? 'pc-sub-title' : 'm-sub-title'"><span class="color-blue">{{$t('lang.home.module4Title1')}}</span> <span>{{$t('lang.home.module4Title2')}}</span></div>
      </div>

      <div v-if="platform === 'PC'" class="row">
        <div class="left-box">
          <div class="video-box" @click="playTron">
            <img class="mac-img" src="@/assets/macback.png" alt="">
            <img class="play-img" src="@/assets/play.png" alt="">
          </div>
          <div class="tron-info-box">
            <div class="info-box">{{$t('lang.home.text13')}}
              <i @click="onDoubtTrx" style="font-size: 40px; color: #54B798" class="iconfont icon-yiwen doubt-icon"></i>
            </div>
            <div class="info-box">{{$t('lang.home.text14')}}</div>
            <div class="info-box">{{$t('lang.home.text15')}}
              <i @click="onDoubtEarning" style="font-size: 40px; color: #54B798"
                 class="iconfont icon-yiwen doubt-icon"></i>
            </div>
            <div class="info-box">{{$t('lang.home.text16')}}</div>
          </div>
        </div>
        <div class="left-box">
          <div>
            <div class="text-color">
              <i style="font-size: 16px;" class="iconfont icon-yumijibencanshu"></i>
              {{$t('lang.home.itemTitle')}}
            </div>
            <div class="rate-box">{{$t('lang.home.text1')}}</div>
            <div class="rate-sub-title">{{$t('lang.home.text2')}}<span class="text-color">+0.0416%</span>{{$t('lang.home.text3')}}<span
                class="text-color">+1%</span>.
            </div>
          </div>
          <div>
            <div class="text-color">
              <i style="font-size: 16px;" class="iconfont icon-yumijibencanshu"></i>
              {{$t('lang.home.itemTitle2')}}
            </div>
            <div class="rate-box">{{$t('lang.home.text4')}}</div>
            <div class="rate-sub-title">{{$t('lang.home.text5')}}<span
                class="text-color">+0.1%</span>{{$t('lang.home.text6')}}<span class="text-color">+0.2%</span>{{$t('lang.home.text7')}}<span
                class="text-color">+0.3%</span>{{$t('lang.home.text8')}}
            </div>
          </div>
          <div>
            <div class="text-color">
              <i style="font-size: 16px;" class="iconfont icon-yumijibencanshu"></i>
              {{$t('lang.home.itemTitle3')}}
            </div>
            <div class="rate-box">{{$t('lang.home.text9')}}</div>
            <div>{{$t('lang.home.text10')}}<span class="text-color">{{$t('lang.home.text11')}}</span></div>
            <div class="text-color">{{$t('lang.home.text12')}}</div>
          </div>
          <div class="balance-total">
            <div class="total-tron">{{$t('lang.home.itemTitle4')}}</div>
            <div class="totalsumnum row">
              <div><i style="font-size: 30px;" class="iconfont icon-shengchanliangtongji"></i></div>
              <div style="flex: 1; text-align: center">0</div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="m-container">
        <div class="m-info-box">
          <div class="m-text-color">
            <i style="font-size: 16px;" class="iconfont icon-yumijibencanshu"></i>
            基本利率:
          </div>
          <div class="m-rate-box">+1%每24小时（+0.0416% 每个小时）</div>
          <div class="m-rate-sub-title">TRONex智能合约计算每笔存款的利润<span class="text-color">+0.0416%</span>,每天<span
              class="text-color">+1%</span>.
          </div>
        </div>

        <div class="m-info-box">
          <div class="m-text-color">
            <i style="font-size: 16px;" class="iconfont icon-yumijibencanshu"></i>
            个人保持奖金:
          </div>
          <div class="m-rate-box">+0.1%每24小时无退款</div>
          <div class="m-rate-sub-title">智能合约从您的存款或最后取款日期计算保留奖金。如果您没有要求付款，它将向您收取额外的奖金。24小时后<span
              class="text-color">+0.1%</span>,48小时后<span class="text-color">+0.2%</span>,72小时后<span
              class="text-color">+0.3%</span>等等
          </div>
        </div>

        <div class="m-info-box">
          <div class="m-text-color">
            <i style="font-size: 16px;" class="iconfont icon-yumijibencanshu"></i>
            合同总奖金:
          </div>
          <div class="m-rate-box">每1,000,000 TRX平台余额 +0.1％</div>
          <div class="m-rate-sub-title">智能合约检查其当前余额，并为余额中的每1,000,000 TRX收取额外的<span class="text-color">+0.1％最高至您的收入.</span></div>
          <div class="m-rate-sub-title"><span class="text-color">合约总额奖金: +0.0% </span></div>
        </div>

        <div class="m-balance-total">
          <div class="m-total-tron">当前平台余额(TRX):</div>
          <div class="m-totalsumnum row">
            <div><i style="font-size: 20px;" class="iconfont icon-shengchanliangtongji"></i></div>
            <div style="flex: 1; text-align: center">0</div>
          </div>
        </div>

        <div class="m-video-box" @click="playTron">
          <img class="mac-img" src="@/assets/macback.png" alt="">
          <img class="m-play-img" src="@/assets/play.png" alt="">
        </div>

        <div class="m-tron-info-box">
          <div class="mobile-info-box">{{$t('lang.home.text13')}}
            <i @click="onDoubtTrx" style="font-size: 40px; color: #54B798" class="iconfont icon-yiwen doubt-icon"></i>
          </div>
          <div class="mobile-info-box">{{$t('lang.home.text14')}}</div>
          <div class="mobile-info-box">{{$t('lang.home.text15')}}
            <i @click="onDoubtEarning" style="font-size: 40px; color: #54B798"
               class="iconfont icon-yiwen doubt-icon"></i>
          </div>
          <div class="mobile-info-box">{{$t('lang.home.text16')}}</div>
        </div>


      </div>

    </div>
    <!--  介绍modal  -->
  </div>
</template>

<script>
import {checkPlatform} from "@/utils/fun";

export default {
  name: "ScreenModule4",
  data() {
    return {
      platform: 'PC',
      visible: false,
      bodyStyle: {
        "background-color": '#333333',
        "border-top": '5px solid #02BA96',
      }
    }
  },
  created() {
    const platform = checkPlatform();
    if (platform !== 'PC') {
      this.platform = platform;
    }
  },
  methods: {
    onDoubtTrx() {
      this.visible = true;
    },
    onDoubtEarning() {

    },
    playTron() {
      const url = 'https://www.youtube.com/watch?v=nbj3fKtZ7Tw&feature=youtu.be';
      window.open(url, '_blank');
    },
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  background-image: url("../../../assets/workback.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
}

.header-title {
  margin-top: 60px;
  color: #fff;
  margin-bottom: 50px;
  text-align: center;
}

.color-blue {
  color: #047d66;
}

.left-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  color: #fff;
}

.video-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.mac-img {
  width: 70%;
  height: auto;
}

.play-img {
  width: 160px;
  height: 100px;
  position: absolute;
  top: 25%;
  left: 37%;
}

.play-img:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.totalsumnum {
  background: #282828;
  line-height: 80px;
  text-align: center;
  font-size: 40px;
  color: #02ba96;
  font-weight: 600;
  letter-spacing: 2px;
  box-shadow: inset 0 0 30px #1b1b1b;
  border-radius: 10px;
  padding-left: 20px;
}

.info-box {
  color: #fff;
  font-size: 20px;
  background-color: #323232;
  border-left: 4px solid #54B798;
  padding: 12px;
  margin-top: 10px;
  box-shadow: 0 0 30px #1f1f1f;
  cursor: pointer;
  position: relative;
}

.info-box:hover {
  transform: scale(1.02);
  transition: transform 1s ease, opacity 1s ease;
}

.rate-box {
  border-left: 4px solid #54B798;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #fff;
  padding-left: 10px;
}

.rate-sub-title {
  margin-bottom: 30px;
}

.tron-info-box {
  padding: 30px;
}

.doubt-icon {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.balance-total {
  margin-top: 30px;
}

.total-tron {
  font-size: 24px;
  margin-bottom: 10px;
}

.modal-box {
  height: 400px;
}

/****
 移动端 || web
 */

.pc-title {
  font-size: 44px;
  font-weight: bold;
}

.m-title {
  font-size: 30px;
  font-weight: bold;
}

.pc-sub-title {
  font-size: 20px;
  font-weight: 400;
}

.m-sub-title {
  font-size: 18px;
  font-weight: 400;
}

.m-container {
  margin: 15px;
}

.m-info-box {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.m-rate-box {
  border-left: 4px solid #54B798;
  font-size: 13px;
  color: #fff;
  margin-bottom: 10px;
  margin-top: 5px;
  text-align: left;
  padding-left: 10px;
}

.m-text-color {
  text-align: left;
  color: #02ba96;
}

.m-rate-sub-title {
  font-size: 13px;
  color: #fff;
  text-align: left;
}

.m-balance-total {
  margin-top: 30px;
  text-align: left;
}

.m-total-tron {
  font-size: 18px;
  color: #fff;
  margin-bottom: 5px;
}

.m-totalsumnum {
  background: #282828;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  color: #02ba96;
  box-shadow: inset 0 0 30px #1b1b1b;
  border-radius: 10px;
  padding-left: 10px;
}

.m-video-box {
  margin-top: 30px;
  position: relative;
}

.m-play-img {
  width: 80px;
  height: 50px;
  position: absolute;
  top: 25%;
  left: 38%;
}

.m-tron-info-box {
  /*padding: 30px;*/
}

.mobile-info-box {
  color: #fff;
  font-size: 14px;
  background-color: #323232;
  border-left: 4px solid #54B798;
  padding: 12px;
  margin-top: 10px;
  box-shadow: 0 0 30px #1f1f1f;
  cursor: pointer;
  position: relative;
}

</style>
