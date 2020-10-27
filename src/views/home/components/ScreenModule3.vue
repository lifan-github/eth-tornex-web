<template>
  <div class="withdraw-container">
    <div class="effective-area">
      <div class="row">
        <div class="left-box">
          <div :class="platform === 'PC' ? 'pc-item-box' : 'm-item-box'">
            <div :class="platform === 'PC' ? 'pc-title' : 'm-title'">{{$t('lang.home.module3Total')}}</div>
            <div :class="platform === 'PC' ? 'pc-totalsumnum' : 'm-totalsumnum'">
              <i style="font-size: 30px; margin-right: 5px" class="iconfont icon-LC_icon_user_fill_confirm"></i>
              <div class="number-box">{{contractTotal}}</div>
            </div>
          </div>
          <div :class="platform === 'PC' ? 'pc-item-box' : 'm-item-box'">
            <div :class="platform === 'PC' ? 'pc-title' : 'm-title'">{{$t('lang.home.module3ActiveUser')}}</div>
            <div :class="platform === 'PC' ? 'pc-totalsumnum' : 'm-totalsumnum'">
              <i style="font-size: 30px; margin-right: 5px" class="iconfont icon-LC_icon_user_fill_confirm"></i>
              <div class="number-box">{{activeParticipant}}</div>
            </div>
          </div>
        </div>
        <div v-show="platform === 'PC'" class="right-box">
          <div class="row">
            <div>
              <div class="title-style">{{$t('lang.home.company')}}</div>
              <div class="value-style">TRONex LTD</div>
              <div class="title-style">{{$t('lang.home.tel')}}</div>
              <div class="value-style">#12739027</div>
              <div class="title-style">{{$t('lang.home.addr')}}</div>
              <div class="value-style">10 Creek Road, London</div>
              <div class="value-style">England, SE8 3BN</div>
            </div>
            <div class="certificate-box">
              <img src="@/assets/certificate.jpg" alt="">
            </div>
          </div>
          <div class="row">
            <div class="check-btn row" style="margin-right: 20px" @click="checkCertificate">
              <i style="font-size: 20px; margin-right: 5px" class="iconfont icon-htmal5icon25"></i>
              {{$t('lang.home.certificate')}}
            </div>
            <div class="check-btn row" @click="checkAddr">
              <i style="font-size: 20px; margin-right: 5px" class="iconfont icon-htmal5icon25"></i>
              {{$t('lang.home.companyAddr')}}
            </div>
          </div>
        </div>
      </div>

      <div v-show="platform !== 'PC'" class="right-box" style="margin-top: 30px">
        <div class="row">
          <div>
            <div class="m-title-style">{{$t('lang.home.company')}}</div>
            <div class="m-value-style">TRONex LTD</div>
            <div class="m-title-style">{{$t('lang.home.tel')}}</div>
            <div class="m-value-style">#12739027</div>
            <div class="m-title-style">{{$t('lang.home.addr')}}</div>
            <div class="m-value-style">10 Creek Road, London</div>
            <div class="m-value-style">England, SE8 3BN</div>
          </div>
          <div class="certificate-box">
            <img src="@/assets/certificate.jpg" alt="">
          </div>
        </div>
        <div class="row">
          <div class="m-check-btn" style="margin-right: 10px;" @click="checkCertificate">
            <i style="font-size: 20px; margin-right: 5px" class="iconfont icon-htmal5icon25"></i>
            {{$t('lang.home.certificate')}}
          </div>
          <div class="m-check-btn" @click="checkAddr">
            <i style="font-size: 20px; margin-right: 5px" class="iconfont icon-htmal5icon25"></i>
            {{$t('lang.home.companyAddr')}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {checkPlatform} from "@/utils/fun";

export default {
  name: "ScreenModule3",
  props: {
    contractTotal: {
      type: String,
      default: '0'
    },
    activeParticipant: {
      type: String,
      default: '0'
    },
  },
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
    checkCertificate(){
      const url = 'https://tronex.net/img/certificate.pdf';
      window.open(url, "_blank");
    },
    checkAddr(){
      const url = 'https://find-and-update.company-information.service.gov.uk/company/12739027';
      window.open(url, "_blank");
    }
  }
}
</script>

<style scoped>
.withdraw-container {
  background-color: #303030;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.left-box {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.right-box {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.number-box {
  flex: 1;
  text-align: center;
  font-size: 26px;
}

.icon-style {
  font-size: 20px;
}

.certificate-box {
  border: 3px solid #54B798;
  margin-left: 20px;
}

.title-style {
  font-size: 18px;
  color: #fff;
  text-align: right;
}

.value-style {
  font-size: 16px;
  color: #54B798;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: right;
}

.check-btn {
  width: 220px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  line-height: 48px;
  font-size: 16px;
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

/****
  移动端 || web端
 */
.m-item-box {
  margin-bottom: 20px;
  width: 70%;
}

.pc-item-box {
  margin-bottom: 20px;
  width: 90%;
}

.pc-title {
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
}

.m-title {
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
}

.pc-totalsumnum {
  background: #282828;
  font-size: 40px;
  color: #02ba96;
  font-weight: 600;
  box-shadow: inset 0 0 30px #1b1b1b;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.m-totalsumnum {
  background: #282828;
  color: #02ba96;
  font-weight: bold;
  box-shadow: inset 0 0 30px #1b1b1b;
  border-radius: 10px;
  padding: 4px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.m-title-style {
  font-size: 13px;
  color: #fff;
  text-align: right;
}

.m-value-style {
  font-size: 13px;
  color: #54B798;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: right;
}

.m-check-btn {
  min-width: 140px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 13px;
  line-height: 32px;
  color: #fff;
  background: #02ba96;
  border-radius: 25px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid #047d66;
  text-shadow: 1px 1px 1px #047d66;
  transition: .1s;
  cursor: pointer;
}
</style>
