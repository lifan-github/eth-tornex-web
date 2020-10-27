<template>
  <div class="container">
    <div v-if="platform === 'PC'" class="effective-area">
      <div :class="platform === 'PC' ? 'p-header' : 'm-header'">使用平台的办法</div>
      <div :class="platform === 'PC' ? 'p-sub-header' : 'm-sub-header'">简单 <span class="text-color">3步骤</span> 获取收益
      </div>
      <div class="content-box">
        <div class="info-box">
          <div class="step1">
            <div class="step-header">步骤#1:缴纳保证金</div>
            <div class="step1-top-box">
              <div class="top-left-box">
                <div class="row color255 font14">
                  <span>收到</span>
                  <img class="tron-img" src="@/assets/tron.svg" alt="">
                  <span>TRON (TRX)</span>
                </div>
                <div class="text1 font16 gray">
                  我们建议使用: <span class="text-color">TronLink</span> / <span class="text-color">TronMask</span>
                  浏览器扩展或者 <a class="text-color" href="https://klever.io/en/" target="_blank">TronWallet</a>
                  / <a class="text-color" href="https://klever.io/en/" target="_blank">Banko</a> 手机应用.
                  You can get TRX coins via popular exchangers.
                </div>
                <div class="maindescbut">获取TRX的办法</div>
              </div>
              <div class="top-left-box">
                <div class="row color255 font14">
                  <span>SEND</span>
                  <img class="tron-img" src="@/assets/tron.svg" alt="">
                  <span>TRX到我们的智能合约</span>
                </div>
                <div class="text1 gray">
                  发送任何数量的TRX在智能合约地址上,并开始每时获得收益。最低存款金额为<span class="text-color">100TRX</span>。没有最大金额.
                </div>
                <div class="maindescbut" style="margin-top: 54px" @click="onInvest">缴纳保证金</div>
              </div>
            </div>
            <div class="user-wallet-addr">
              <div class="wallet-icon">
                <img src="@/assets/icostep3.png" alt="">
              </div>
              <div class="wallet-box">
                <div class="color255">您的TRX钱包地址:</div>
                <div class="user-address">
                  {{ data ? data : 'Connect with your wallet app...' }}
                </div>
                <div class="check-info" @click="getUserWalletStatic">检查钱包的统计信息</div>
              </div>
            </div>
          </div>
          <div class="step1" style="margin-top: 50px;">
            <div class="step-header">步骤#3:请求撤销</div>
            <div class="step1-top-box">
              <div class="step3-box">
                <div class="row color255 font14">
                  <span>请求信息</span>
                  <img class="tron-img" src="@/assets/tron.svg" alt="">
                  <span>TRX提款</span>
                </div>
                <div class="gray font13"><i style="font-size: 14px; margin-right: 5px; color: #54B798;"
                                            class="iconfont icon-xuanzhong"></i> 您的支出将到来<span
                    class="text-color">立即</span></div>
                <div class="gray font13"><i style="font-size: 14px; margin-right: 5px; color: #54B798;"
                                            class="iconfont icon-xuanzhong"></i>请求从您存入的<span
                    class="text-color">同一个钱包</span>提款
                </div>
                <div class="gray font13"><i style="font-size: 14px; margin-right: 5px; color: #54B798;"
                                            class="iconfont icon-xuanzhong"></i>您所有的钱包存款和推荐收入将被提取，每1个请求单次交易
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mid-line">
          <div class="circle"></div>
          <div class="circle position2"></div>
          <div class="circle position3"></div>
          <div class="bigstepline"></div>
        </div>
        <div class="info-box">
          <div class="wallet-icon" style="align-self: center; margin-bottom: 150px">
            <img src="@/assets/icostep2.png" alt="">
          </div>
          <div class="step1">
            <div class="step-header">步骤#2:获取收益</div>
            <div class="step1-top-box">
              <div class="step3-box">
                <div class="row color255 font14">
                  <span>收到您的</span>
                  <img class="tron-img" src="@/assets/tron.svg" alt="">
                  <span>TRX每一刻</span>
                </div>
                <div class="gray font13">您可以查看您的所有钱包信息,包括您的存款，收入，取款和推荐统计信息.</div>
                <div class="gray font13" style="text-decoration: underline">副生所得与推荐计划:</div>
                <div class="gray font13">3个级的伙伴酬金: <span class="text-color">5% - 2% - 0.5%</span></div>
                <div class="gray font13">.推荐奖励即时在您的钱包余额中出现，并且可以随时随地提取收益.</div>
                <div class="check-info check-info2" @click="getUserWalletStatic">您的钱包统计信息</div>
              </div>
            </div>
          </div>
          <div class="wallet-icon" style="align-self: center; margin-top: 150px">
            <img src="@/assets/icostep5.png" alt="">
          </div>
          <div class="check-info check-info2" @click="withdraw">请求撤销</div>
        </div>
      </div>
    </div>
    <div v-else class="m-container">
      <div class="m-header">使用平台的办法</div>
      <div class="m-sub-header">简单 <span class="text-color">3步骤</span> 获取收益</div>
      <div class="m-step-header">步骤#1:缴纳保证金</div>
      <div class="m-step1-box">
        <div class="row color255 font14">
          <span>收到</span>
          <img class="tron-img" src="@/assets/tron.svg" alt="">
          <span>TRON (TRX)</span>
        </div>
        <div class="text1 font16 gray">
          我们建议使用: <span class="text-color">TronLink</span> / <span class="text-color">TronMask</span>
          浏览器扩展或者 <a class="text-color" href="https://klever.io/en/" target="_blank">TronWallet</a>
          / <a class="text-color" href="https://klever.io/en/" target="_blank">Banko</a> 手机应用.
          You can get TRX coins via popular exchangers.
        </div>
        <div class="maindescbut">获取TRX的办法</div>
      </div>

      <div class="m-step1-box">
        <div class="row color255 font14">
          <span>SEND</span>
          <img class="tron-img" src="@/assets/tron.svg" alt="">
          <span>TRX到我们的智能合约</span>
        </div>
        <div class="text1 gray">
          发送任何数量的TRX在智能合约地址上,并开始每时获得收益。最低存款金额为<span class="text-color">100TRX</span>。没有最大金额.
        </div>
        <div class="maindescbut" style="margin-top: 54px" @click="onInvest">缴纳保证金</div>
      </div>

      <div class="m-step-header">步骤#2:获取收益</div>
      <div class="m-step1-box">
        <div class="row color255 font14">
          <span>收到您的</span>
          <img class="tron-img" src="@/assets/tron.svg" alt="">
          <span>TRX每一刻</span>
        </div>
        <div class="gray font13">您可以查看您的所有钱包信息,包括您的存款，收入，取款和推荐统计信息.</div>
        <div class="gray font13" style="text-decoration: underline">副生所得与推荐计划:</div>
        <div class="gray font13">3个级的伙伴酬金: <span class="text-color">5% - 2% - 0.5%</span></div>
        <div class="gray font13">.推荐奖励即时在您的钱包余额中出现，并且可以随时随地提取收益.</div>
        <div class="check-info check-info2" @click="getUserWalletStatic">您的钱包统计信息</div>
      </div>

      <div class="m-step-header">步骤#3:请求撤销</div>
      <div class="m-step1-box">
        <div class="row color255 font14">
          <span>请求信息</span>
          <img class="tron-img" src="@/assets/tron.svg" alt="">
          <span>TRX提款</span>
        </div>
        <div class="gray font13">
          <i style="font-size: 14px; margin-right: 5px; color: #54B798;" class="iconfont icon-xuanzhong"></i>
          您的支出将到来<span
            class="text-color">立即</span></div>
        <div class="gray font13"><i style="font-size: 14px; margin-right: 5px; color: #54B798;"
                                    class="iconfont icon-xuanzhong"></i>请求从您存入的<span
            class="text-color">同一个钱包</span>提款
        </div>
        <div class="gray font13"><i style="font-size: 14px; margin-right: 5px; color: #54B798;"
                                    class="iconfont icon-xuanzhong"></i>您所有的钱包存款和推荐收入将被提取，每1个请求单次交易
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import {checkPlatform} from "@/utils/fun";

export default {
  name: "ScreenModule5",
  props: {
    data: {
      type: String,
      default: '',
    }
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
    withdraw() {
      this.$emit('withdraw');
    },
    onInvest(){
      this.$emit('onInvest');
    },
    getUserWalletStatic(){
      this.$emit('getUserWalletStatic');
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #303030;
  padding-top: 50px;
}

.mid-line {
  display: flex;
  width: 80px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.content-box {
  display: flex;
  flex-direction: row;
  height: 1000px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.info-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}

.circle {
  width: 30px;
  height: 30px;
  border-radius: 18px;
  border: 3px solid #5D5E5D;
  background-color: #303030;
  position: absolute;
  top: 160px;
  left: 22px;
}

.position2 {
  top: 460px;
  left: 22px;
}

.position3 {
  top: 850px;
  left: 22px;
}

.bigstepline {
  width: 3px;
  height: 90%;
  background: url('../../../assets/dash2.png');
}

.step-header {
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
}

.step1-top-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.top-left-box {
  width: 42%;
  height: 240px;
  padding: 15px;
  border-top: 4px solid #54B798;
  box-shadow: 0 0 30px #1f1f1f;
  background: #282828;
  background: -moz-linear-gradient(left, #282828 0%, #353535 100%);
  background: -webkit-linear-gradient(left, #282828 0%, #353535 100%);
  background: linear-gradient(to right, #282828 0%, #353535 100%);
}

.top-left-box:hover {
  transition: all 0.5s;
  transform: scale(1.04);
}

.tron-img {
  height: 14px;
  margin-left: 4px;
  margin-right: 4px;
}

.text1 {
  font-size: 13px;
  line-height: 22px;
  margin-top: 10px;
  text-align: left;
}

.maindescbut {
  height: 30px;
  margin-top: 30px;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background: #02ba96;
  border-radius: 25px;
  font-weight: 500;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid #047d66;
  text-shadow: 1px 1px 1px #047d66;
  transition: .1s;
  cursor: pointer;
}

.user-wallet-addr {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wallet-icon {
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.wallet-icon img {
  width: 80px;
  height: 80px;
}

.user-address {
  width: 80%;
  padding: 10px 0;
  background-color: #1f1f1f;
  border-radius: 10px;
  color: #757575;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 30px;
}

.wallet-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.check-info {
  width: 70%;
  height: 30px;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background: #02ba96;
  border-radius: 25px;
  font-weight: 500;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid #047d66;
  text-shadow: 1px 1px 1px #047d66;
  transition: .1s;
  cursor: pointer;
}

.check-info2 {
  width: 100%;
  margin-top: 20px;
}

.step3-box {
  width: 100%;
  padding: 15px;
  border-top: 4px solid #54B798;
  box-shadow: 0 0 30px #1f1f1f;
  background: #282828;
  text-align: left;
  color: #fff;
  line-height: 28px;
  background: -moz-linear-gradient(left, #282828 0%, #353535 100%);
  background: -webkit-linear-gradient(left, #282828 0%, #353535 100%);
  background: linear-gradient(to right, #282828 0%, #353535 100%);
}

.step3-box:hover {
  transform: scale(1.02);
  transition: all 0.5s;
}

/***
 pc || mobile
 */
.p-header {
  font-size: 40px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}

.m-header {
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}

.p-sub-header {
  font-size: 18px;
  color: #fff;
  text-align: center;
}

.m-container {
  width: 100%;
}

.m-sub-header {
  font-size: 16px;
  color: #fff;
  text-align: center;
}

.m-step1-box {
  text-align: left;
  margin: 15px;
  padding: 15px;
  border-top: 4px solid #54B798;
  box-shadow: 0 0 30px #1f1f1f;
  background: #282828;
  background: -moz-linear-gradient(left, #282828 0%, #353535 100%);
  background: -webkit-linear-gradient(left, #282828 0%, #353535 100%);
  background: linear-gradient(to right, #282828 0%, #353535 100%);
}

.m-step-header {
  font-size: 18px;
  color: #fff;
}
</style>
