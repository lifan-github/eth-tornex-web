<template>
  <div class="container">
    <div v-if="platform === 'PC'" class="effective-area">
      <div class="header-title">
        <div class="title">{{$t('lang.home.module5Title1')}} <span class="text-color">{{$t('lang.home.module5Title2')}}</span> {{$t('lang.home.module5Title3')}}</div>
      </div>

      <div class="row">
        <div class="left-box">
          <div class="row">
            <img class="img1-style" src="@/assets/icostep4.png" alt="">
            <div class="tron-info">
              {{$t('lang.home.info')}}
            </div>
          </div>
          <div class="pdf-box row">
            <img class="review-img" src="@/assets/review.jpg" alt="">
            <div>
              <div>{{$t('lang.home.independentCompany')}}</div>
              <div><span class="text-color">GROX Solutions</span> ({{$t('lang.home.website')}} <span class="text-color">grox.solutions</span>)
              </div>
              <div>{{$t('lang.home.auditionStatus')}}</div>
              <div class="text-color row">
                <i style="font-size: 20px; margin-right: 5px" class="iconfont icon-xuanzhong"></i>
                {{$t('lang.home.successPassed')}}
              </div>
              <div class="maindescbut" @click="checkPDF">{{$t('lang.home.conclusion')}}（PDF）</div>
              <div class="maindescbut" @click="checkPDF2">
                <img style="width: 18px; margin-right: 5px;" src="@/assets/chi2.svg" alt="">
                {{$t('lang.home.conclusion')}}（PDF）
              </div>
            </div>
          </div>
        </div>
        <div class="left-box contract-container">
          <div class="contract-code">
            <i style="font-size: 18px; margin-right: 5px" class="iconfont icon-chaxun"></i>
            <span>{{$t('lang.home.code')}}</span>
          </div>
          <div class="code-show-box">
            <textarea class="textarea-code" name="code" id="code" cols="50" rows="3000">
            </textarea>
          </div>
        </div>
      </div>

      <div class="row" style="margin-top: 50px">
        <div class="left-box">
          <div class="row">
            <i style="font-size: 18px; margin-right: 5px" class="iconfont icon-pinglun"></i>
            <div class="tron-info">
              {{$t('lang.home.comments')}}
            </div>
          </div>
          <div class="row partners-box">
            <div class="partners-item" v-for="(item, index) in logo" :key="index">
              <div class="partners-logo" @click="onClick(item.url)">
                <img :src="getImgUrl(item.name)" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="left-box contract-container">
          <div class="contract-code">
            <i style="font-size: 18px; margin-right: 5px" class="iconfont icon-zu-copy"></i>
            <span>{{$t('lang.home.lastDeposit')}}</span>
          </div>
          <div class="withdraw-box">
            <div class="withdraw-item row" v-for="(item, index) in withdrawRecode" :key="index" @click="onAddress(item)">
              <div class="flex1">
                <i style="font-size: 16px; margin-right: 5px" class="iconfont icon-xiazai"></i>
                {{item.amount}}
              </div>
              <div style="height: 50%; width: 1px; background-color: #F0F0F0"></div>
              <div class="flex2">
                <span>{{substr(item.address)}}</span>
                <div class="eyes-icon">
                  <i style="font-size: 22px;" class="iconfont icon-yanjing"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-else>
      <div class="header-title">
        <div class="m-title">{{$t('lang.home.module5Title1')}} <span class="text-color">{{$t('lang.home.module5Title2')}}</span> {{$t('lang.home.module5Title3')}}</div>
      </div>
      <div style="text-align: center">
        <img class="m-img1-style" src="@/assets/icostep4.png" alt="">
        <div class="m-tron-info">
          {{$t('lang.home.info')}}
        </div>
      </div>

      <div class="m-left-box" style="margin: 10px">
        <div class="row">
          <i style="font-size: 18px; margin-right: 5px" class="iconfont icon-pinglun"></i>
          <div class="tron-info">
            {{$t('lang.home.comments')}}
          </div>
        </div>
        <div class="row partners-box">
          <div class="partners-item" v-for="(item, index) in logo" :key="index">
            <div class="partners-logo" @click="onClick(item.url)">
              <img style="width: 80px" :src="getImgUrl(item.name)" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="m-left-box contract-container">
        <div class="contract-code" style="width: 100%; padding-left: 15px">
          <i style="font-size: 18px; margin-right: 5px" class="iconfont icon-zu-copy"></i>
          <span>{{$t('lang.home.lastDeposit')}}</span>
        </div>
        <div class="withdraw-box">
          <div class="m-withdraw-item row" v-for="(item, index) in withdrawRecode" :key="index" @click="onAddress(item)">
            <div class="flex1">
              <i style="font-size: 16px; margin-right: 5px" class="iconfont icon-xiazai"></i>
              {{item.amount}}
            </div>
            <div style="height: 50%; width: 1px; background-color: #F0F0F0"></div>
            <div class="flex2">
              <span>{{substr(item.address)}}</span>
              <div class="eyes-icon">
                <i style="font-size: 22px;" class="iconfont icon-yanjing"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {checkPlatform} from "@/utils/fun";

export default {
  name: "ScreenModule4",
  data() {
    return {
      platform: 'PC',
      logo: [
        {name: 'dappradar.svg', url: 'https://dappradar.com/tron/high-risk/tronex'},
        {name: 'dappstats.svg', url: 'https://www.dappstats.com/dapp/tronex'},
        {name: 'dapponline.svg', url: 'https://dapponline.io/dapp-detail/3698'},
        {name: 'dappcom.png', url: 'https://www.dapp.com/app/tronex'},
        {name: 'dappcom.png', url: 'https://www.stateofthedapps.com/dapps/tronex'},
        {name: 'dappworld.png', url: 'https://dapp-world.com/dapp/tronex'},
        {name: 'dappreview.svg', url: 'https://dapp.review/dapp/13532/TRONexnet'},
        {name: 'onlinebitz.png', url: 'https://onlinebitz.net/tronex.net-review'},
        {name: 'hyiphunter.png', url: 'https://hyiphunter.org/tronex-otzyvy-i-obzor/'},
      ],
      withdrawRecode: [
        {amount: '103TRX', address: '578c5d42dbf07dc79a32ebefaa17dfafa272d7afe4d7b3789c1c61b6521d9dc1'},
        {amount: '23500TRX', address: '8697fd77000fed03bde48ea6cbb890c98bdff010a1c1ce4346f60045d77412a4'},
        {amount: '380TRX', address: 'e9e83de011913fc14d2c18f1e7445f402a46155d0c6bcd6b1fd3909437abf6e6'},
        {amount: '6800TRX', address: '2fdda69d5d8bbe5fb2bdb23595607e14fbb671675b4ec914f74152be72e92a3e'},
      ]
    }
  },
  created() {
    const platform = checkPlatform();
    if (platform !== 'PC') {
      this.platform = platform;
    }
  },
  methods: {
    getImgUrl(name){
      return require(`@/assets/${name}`);
    },
    substr(str){
      return str.substring(0, 20) + '...';
    },
    onClick(url){
      window.open(url, '_blank');
    },
    onAddress(item){
      const url = `https://tronscan.org/#/transaction/${item.address}`;
      window.open(url, '_blank');
    },
    checkPDF(){
      const url = 'https://tronex.net/files/audit_en.pdf';
      window.open(url, "_blank");
    },
    checkPDF2(){
      const url = 'https://tronex.net/files/audit_zh.pdf?v=3';
      window.open(url, "_blank");
    }
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
  align-items: center;
  justify-content: center;
}

.header-title {
  margin-top: 60px;
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
}

.title {
  font-size: 40px;
  font-weight: bold;
}

.m-title {
  font-size: 30px;
  font-weight: bold;
}

.left-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 400px;
  text-align: left;
  color: #fff;
}

.m-left-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
  color: #fff;
}

.img1-style {
  width: 100px;
  margin-right: 20px;
}

.m-img1-style {
  width: 80px;
}

.tron-info {
  font-size: 16px;
  font-weight: 400;
}

.m-tron-info {
  font-size: 14px;
  color: #fff;
  margin: 10px;
  text-align: left;
}

.pdf-box {
  box-shadow: 0 0 30px #1f1f1f;
  border-left: 5px solid #02ba96;
  background: linear-gradient(to right, #282828 0%, #353535 100%);
  margin-top: 30px;
  padding: 20px 0;
}

.pdf-box:hover {
  transform: scale(1.02);
  transition: all 0.5s ease-in;
}

.review-img {
  border: 2px solid #02ba96;
  margin-left: 15px;
  margin-right: 15px;
}

.maindescbut {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  margin-top: 20px;
  font-size: 14px;
  background: #02ba96;
  border-radius: 25px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid #047d66;
  text-shadow: 1px 1px 1px #047d66;
  cursor: pointer;
}

.contract-code {
  width: 80%;
  font-size: 16px;
}

.code-show-box {
  height: 320px;
  width: 78%;
  margin-top: 10px;
}

.contract-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.textarea-code {
  height: 100%;
  width: calc(100% - 32px);
  text-align: left;
  line-height: 14px;
  background-color: #282828;
  border-radius: 15px;
  box-shadow: inset 0 0 50px #1b1b1b;
  color: #fff;
  padding: 16px;
  font-size: 12px;
  border: none;
  outline: none;
  overflow-y: scroll;
}

.partners-box {
  flex-wrap: wrap;
}

.partners-item {
  height: 70px;
  width: 33%;
  margin-top: 20px;
  cursor: pointer;
}

.partners-item:hover {
  transform: scale(1.03);
  transition: all 0.5s;
}

.partners-logo {
  width: 90%;
  height: 100%;
  border-left: 5px solid #02ba96;
  box-shadow: 0 0 30px #1f1f1f;
  background: #282828;
  background: -moz-linear-gradient(left,#282828 0%,#353535 100%);
  background: -webkit-linear-gradient(left,#282828 0%,#353535 100%);
  background: linear-gradient(to right,#282828 0%,#353535 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#282828',endColorstr='#353535',GradientType=1);
  transition: .3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partners-logo img {
  height: 30px;
  width: 100px;
}

.withdraw-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.withdraw-item {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20px;
  height: 48px;
  border-left: 5px solid #02ba96;
  box-shadow: 0 0 30px #1f1f1f;
  background: #282828;
  background: -moz-linear-gradient(left,#282828 0%,#353535 100%);
  background: -webkit-linear-gradient(left,#282828 0%,#353535 100%);
  background: linear-gradient(to right,#282828 0%,#353535 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#282828',endColorstr='#353535',GradientType=1);
  transition: .3s;
}

.m-withdraw-item {
  margin: 15px;
  height: 48px;
  border-left: 5px solid #02ba96;
  box-shadow: 0 0 30px #1f1f1f;
  background: #282828;
  background: -moz-linear-gradient(left,#282828 0%,#353535 100%);
  background: -webkit-linear-gradient(left,#282828 0%,#353535 100%);
  background: linear-gradient(to right,#282828 0%,#353535 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#282828',endColorstr='#353535',GradientType=1);
  transition: .3s;
}

.flex1 {
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
  font-weight: bold;
}

.flex2 {
  display: flex;
  flex: 2;
  font-size: 16px;
  align-items: center;
  justify-content: center;
}

.eyes-icon {
  width: 40px;
  height: 30px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #02ba96;
  border-radius: 13px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid #047d66;
  text-shadow: 1px 1px 1px #047d66;
  transition: .1s;
  cursor: pointer;
}

.eyes-icon:hover {
  transform: scale(1.08);
  transition: all 0.5s;
}
</style>
