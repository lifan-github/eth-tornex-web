<template>
  <div class="nav-container">
    <div class="effective-area row" style="justify-content: space-between">
      <div class="row">
        <div v-if="platform === 'PC'" class="logo">
          <img src="@/assets/logo.svg" alt="">
        </div>
        <div class="info-box">
          <div>{{ $t('lang.footer.copyright') }}</div>
          <div>TRONEX LTD | <span @click="backTop" class="url-text">https://tronex.net</span></div>
          <div>{{ $t('lang.footer.platform') }}</div>
          <div>{{ $t('lang.footer.ownership') }}</div>
        </div>
        <div class="info-box">
          <div>{{ $t('lang.footer.contractAddr') }}</div>
          <div class="url-text" @click="bindAddress">{{contract_addr}}</div>
          <div class="row">
            <span>{{ $t('lang.footer.userFrom') }}</span>
            <img class="tron-img" src="@/assets/tron.svg" alt="">
            <span>{{ $t('lang.footer.blockchain') }}</span>
          </div>
        </div>
      </div>
      <div v-if="platform === 'PC'" class="footer-action-box">
        <div class="footer-btn">{{ $t('lang.nav.withdraw') }}</div>
        <div class="footer-btn">{{ $t('lang.nav.statistical') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {checkPlatform} from "@/utils/fun";

export default {
  name: "FooterNav",
  data(){
    return {
      platform: 'PC',
      contract_addr: 'TWiti6GpPJPRXtCFKURdTtxN7UEcurQoeS'
    }
  },
  created() {
    const platform = checkPlatform();
    if (platform !== 'PC') {
      this.platform = platform;
    }
  },
  methods: {
    backTop(){

    },
    bindAddress(){
      const contract_addr = this.contract_addr;
      const url = `https://tronscan.org/#/contract/${contract_addr}/code`;
      window.open(url, '_blank');
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
  height: 100px;
  background: linear-gradient(to bottom, #303030 0%, #161616 100%);
  box-shadow: 0 0 20px #1f1f1f;
  font-size: 13px;
  color: #fff;
}

.logo img {
  width: 100px;
}

.footer-btn {
  width: 300px;
  height: 24px;
  margin-top: 10px;
  line-height: 26px;
  text-align: center;
  font-size: 13px;
  color: #fff;
  background: #02ba96;
  border-radius: 25px;
  font-weight: 500;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid #047d66;
  text-shadow: 1px 1px 1px #047d66;
  cursor: pointer;
  margin-right: 30px;
}

.info-box {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  align-items: flex-start;
  margin-right: 30px;
}

.url-text {
  color: #02ba96;
  text-decoration: underline;
  cursor: pointer;
}

.tron-img {
  height: 14px;
  margin-left: 4px;
  margin-right: 4px;
}
</style>
