<template>
  <div style="height: 100%;">

    <div class="lang-change-box">
      <div class="lang-item" @click="changeLaguages()">
        CN
      </div>
      <div class="lang-item" @click="changeLaguages()">
        EN
      </div>
    </div>

    <HeaderNav
        ref="HeaderNav"
    />
    <div id="wrap" class="content-body">
      <!-- 模块一  -->
      <ScreenModule1
          @oninvest="onInvest"
      />
      <!-- 模块二  -->
      <ScreenModule2/>
      <!-- 模块三  -->
      <ScreenModule3 :contractTotal="totalInvested" :activeParticipant="totalUsers"/>
      <!-- 模块四  -->
      <ScreenModule4 :contractTotal="contractBalance"/>
      <!-- 模块五 -->
      <ScreenModule5
          :data="userAddr"
          @getcoin="getcoin"
          @onInvest="onInvest"
          @withdraw="withdraw"
          @getUserWalletStatic="getUserWalletStatic"
      />
      <ScreenModule7/>
      <!-- 模块六 -->
      <ScreenModule6/>
      <!--  footer  -->
      <FooterNav/>

      <!-- 钱包的统计信息 -->
      <el-dialog
          title="钱包的统计信息"
          :visible.sync="dialogVisible"
          width="50%">
        <div>
          <div class="wallet-static-box">
            <span>用户的利率：</span> <span>{{ userPercentRate }}</span>
          </div>
          <div class="wallet-static-box">
            <span>用户分红：</span> <span>{{ userDividends }}</span>
          </div>
          <div class="wallet-static-box">
            <span>用户检查点：</span> <span>{{ userCheckpoint }}</span>
          </div>
          <div class="wallet-static-box">
            <span>推荐人：</span> <span>{{ userReferrer }}</span>
          </div>
          <div class="wallet-static-box">
            <span>用户推荐奖金：</span> <span>{{ userReferralBonus }}</span>
          </div>
          <div class="wallet-static-box">
            <span>用户的可用奖励：</span> <span>{{ userAvailable }}</span>
          </div>
          <div class="wallet-static-box">
            <span>用户的充值次数：</span> <span>{{ userAmountOfDeposits }}</span>
          </div>
          <div class="wallet-static-box">
            <span>获取用户的充值总额：</span> <span>{{ userTotalDeposits }}</span>
          </div>
          <div class="wallet-static-box">
            <span>获取用户的取现总额：</span> <span>{{ userTotalWithdrawn }}</span>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
      </el-dialog>
    </div>
  </div>

</template>

<script>
import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";
import ScreenModule1 from "./components/ScreenModule1";
import ScreenModule2 from "./components/ScreenModule2";
import ScreenModule3 from "./components/ScreenModule3";
import ScreenModule4 from "./components/ScreenModule4";
import ScreenModule5 from "./components/ScreenModule5";
import ScreenModule6 from "./components/ScreenModule6";
import ScreenModule7 from "./components/ScreenModule7";
import Web3 from 'web3';
import abi from '@/utils/abi';
import {formatDate} from '@/utils/fun';

export default {
  name: 'Home',
  components: {
    HeaderNav,
    FooterNav,
    ScreenModule1,
    ScreenModule2,
    ScreenModule3,
    ScreenModule4,
    ScreenModule5,
    ScreenModule6,
    ScreenModule7
  },
  data() {
    return {
      network: 'https://ropsten.infura.io/v3/b585cd0331e04f82b5aa70840f45fe2c', // 注册的测试网络
      userAddr: "",
      default_send_eth: '1', // 默认投资 1 ETH

      // ==== 自定义合约
      abi: abi,  // 合约的ABI信息
      contractAddress: '0xf5df8f4c67175d6222f643e230c3f2093b771133', // 合约地址
      accounts: [], // metamask 账户列表
      to: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',

      contractBalance: '0',     // 平台总额
      totalInvested: '0',       // 总投资金额
      totalUsers: '0',          // 活动参与者的总数
      userPercentRate: '0',     // 用户的利率
      userDividends: '0',        // 用户分红
      userCheckpoint: '',       // 用户检查点
      userReferrer: '',         // 推荐人
      userReferralBonus: '0',   // 用户推荐奖金
      userAvailable: '0',       // 用户的可用奖励
      userAmountOfDeposits: '0',// 用户的充值次数
      userTotalDeposits: '0',   // 获取用户的充值总额
      userTotalWithdrawn: '0',  // 获取用户的取现总额

      dialogVisible: false,
    }
  },
  created() {
    // 1、初始化网络
    this.initWeb3();
    // 监听滚动条
    window.addEventListener('scroll', this.handleScroll, true);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    changeLaguages() {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
    },
    handleScroll() {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      this.$refs.HeaderNav.setNavStyle(scrollTop);
    },
    setWeb3Network() {
      const network = this.network;
      let web3 = new Web3(network);
      // 自定义合约
      let abi = this.abi;
      let contractAddress = this.contractAddress;
      this.TokenContract = new web3.eth.Contract(abi, contractAddress);
      this.web3 = web3;
    },
    // 初始化网络
    initWeb3() {
      if (typeof window.ethereum !== 'undefined') {
        this.setWeb3Network();
        // 获取合约的基本信息
        this.getTotalInvested();
        this.contractStatic();
        // 获取活动参与者的总数
        this.getTotalUsers();
      }
    },
    // 总投资金额
    getTotalInvested() {
      this.TokenContract.methods.totalInvested().call()
          .then(res => {
            console.log(res, 'res--总投资金额--');
            this.totalInvested = res;
          }).catch(err => {
        console.log(err, 'err-总投资金额---');
        this.$message({
          type: 'warning',
          message: '获取总投资金额失败！'
        });
      })
    },
    // 获取平台总数
    contractStatic() {
      this.TokenContract.methods.getContractBalance().call()
          .then(res => {
            console.log(res, 'res----');
            this.contractBalance = res;
          }).catch(err => {
        console.log(err, 'err----');
        this.$message({
          type: 'warning',
          message: '获取平台总额失败！'
        });
      })
    },
    // 获取活动参与者的总数
    getTotalUsers() {
      console.log(this.TokenContract, 'this.TokenContract.methods');
      this.TokenContract.methods.totalUsers().call()
          .then(res => {
            console.log(res, 'res--totalUsers--');
            this.totalUsers = res;
          }).catch(err => {
        console.log(err, 'err--totalUsers--');
        this.$message({
          type: 'warning',
          message: '获取活动参与者失败！'
        });
      })
    },
    // 发送以太坊
    sendETH() {
      const params = {
        from: this.accounts[0],
        to: this.to,
        value: '0x29a2241af62c0000',
        gasPrice: '0x09184e72a000',
        gas: '0x2710'
      };
      console.log(params, 'params--22222-');
      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [params]
      })
          .then(txHash => {
            console.log(txHash, 'txHash')
            // 0x150d63d39de57e91d386657a403ba04875183fcd1cb85e784c74bc044efd0fcc
          })
          .catch(err => {
            console.log(err, 'err---txHash');
          })
    },
    // 获取币种
    getcoin() {
      console.log('获取币种');
    },
    // 立马投资
    conectSend() {
      const userAddr = this.userAddr;  // 插件用户地址
      const contractAddress = this.contractAddress; // 接受的合约地址
      const referrer = '0x75268517cA98858ABf8a1B0cFDa31b6dF9E2BBce';    // 邀请人
      const default_send_eth = this.default_send_eth;

      const web3 = this.web3;
      const myData = this.TokenContract.methods.invest(referrer).encodeABI();
      console.log(myData, 'myData---');

      const params = {
        from: userAddr,
        to: contractAddress,
        value: web3.utils.toHex(web3.utils.toWei(default_send_eth, 'ether')),
        gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
        gasLimit: 21000,
        data: myData
      };
      console.log(params, '构建交易');

      // 发送交易
      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [params]
      }).then(txHash => {
        console.log(txHash, 'txHash')
      }).catch(() => {
        this.$message({
          type: 'warning',
          message: '交易失败！'
        });
      })
    },
    // 建立连接并返回插件的与用户的地址
    onInvest() {
      try {
        window.ethereum.request({method: 'eth_requestAccounts'})
            .then(res => {
              console.log(res, 'res---->>>>');
              this.userAddr = res[0];
              this.conectSend();
            }).catch(() => {
          this.$message({
            type: 'warning',
            message: '获取账户信息失败！'
          });
        })
      } catch (e) {
        this.$message({
          type: 'warning',
          message: '请先安装MetaMask插件！'
        });
      }
    },
    // 提取（撤销投资）
    withdraw() {
      const myData = this.TokenContract.methods.withdraw().encodeABI();
      console.log('提币', myData);

      // 合约交易构建格式
      const web3 = this.web3;
      const params = {
        from: this.userAddr,
        value: web3.utils.toHex(web3.utils.toWei('0', 'ether')),       // 合约交易值
        gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
        gasLimit: 21000,
        data: myData,
        to: this.contractAddress,  // 接收方
      };
      console.log(params, 'params--99-');

      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [params]
      }).then(txHash => {
        console.log(txHash, 'txHash')
      }).catch(err => {
        console.log(err, 'err---txHash');
      })
    },
    // 您的钱包统计信息
    getUserWalletStatic() {
      const that = this;
      if (!this.userAddr) {
        this.$alert('请链接好您的钱包', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            if (action === 'confirm') {
              window.ethereum.request({method: 'eth_requestAccounts'})
                  .then(res => {
                    this.userAddr = res[0];
                  }).catch(() => {
                    that.$message({
                      type: 'warning',
                      message: '获取账户信息失败！'
                    });
              })
            }
          }
        });
      } else {
        this.getUserPercentRate();
        this.getUserDividends();
        this.getUserCheckpoint();
        this.getUserReferrer();
        this.getUserReferralBonus();
        this.getUserAvailable();
        this.getUserAmountOfDeposits();
        this.getUserTotalDeposits();
        this.getUserTotalWithdrawn();
        this.dialogVisible = true;
      }
    },
    // 用户利率
    getUserPercentRate() {
      const userAddr = this.userAddr;
      this.TokenContract.methods.getUserPercentRate(userAddr).call()
          .then(res => {
            console.log(res, 'res--用户利率--');
            this.userPercentRate = res;
          })
          .catch(err => {
            console.log(err, 'err--用户利率--');
          })
    },
    // 获取用户分红
    getUserDividends() {
      const userAddr = this.userAddr;
      this.TokenContract.methods.getUserDividends(userAddr).call()
          .then(res => {
            console.log(res, 'res--获取用户分红--');
            this.userDividends = res;
          })
          .catch(err => {
            console.log(err, 'err--获取用户分红--');
          })
    },
    // 获取用户检查点
    getUserCheckpoint() {
      const userAddr = this.userAddr;
      this.TokenContract.methods.getUserCheckpoint(userAddr).call()
          .then(res => {
            console.log(res, 'res--获取用户检查点--');
            this.userCheckpoint = formatDate(new Date(res * 1000), 'yyyy-MM-dd HH:mm:ss');
          })
          .catch(err => {
            console.log(err, 'err--获取用户检查点--');
          })
    },
    // 获取用户的推荐人
    getUserReferrer() {
      const userAddr = this.userAddr;
      this.TokenContract.methods.getUserReferrer(userAddr).call()
          .then(res => {
            console.log(res, 'res--获取用户的推荐人--');
            this.userReferrer = res;
          })
          .catch(err => {
            console.log(err, 'err--获取用户的推荐人--');
          })
    },
    // 获取用户推荐奖金
    getUserReferralBonus() {
      const userAddr = this.userAddr;
      this.TokenContract.methods.getUserReferralBonus(userAddr).call()
          .then(res => {
            console.log(res, 'res--获取用户推荐奖金--');
            this.userReferralBonus = res;
          })
          .catch(err => {
            console.log(err, 'err--获取用户推荐奖金--');
          })
    },
    // 获取用户可用奖励
    getUserAvailable() {
      const userAddr = this.userAddr;
      this.TokenContract.methods.getUserAvailable(userAddr).call()
          .then(res => {
            console.log(res, 'res--获取用户可用奖励--');
            this.userAvailable = res;
          })
          .catch(err => {
            console.log(err, 'err--获取用户可用奖励--');
          })
    },
    // 获取用户充值次数
    getUserAmountOfDeposits() {
      const userAddr = this.userAddr;
      this.TokenContract.methods.getUserAmountOfDeposits(userAddr).call()
          .then(res => {
            console.log(res, 'res--获取用户充值次数--');
            this.userAmountOfDeposits = res;
          })
          .catch(err => {
            console.log(err, 'err--获取用户充值次数--');
          })
    },
    // 获取用户的充值总额
    getUserTotalDeposits() {
      const userAddr = this.userAddr;
      this.TokenContract.methods.getUserTotalDeposits(userAddr).call()
          .then(res => {
            console.log(res, 'res--获取用户的充值总额--');
            this.userTotalDeposits = res;
          })
          .catch(err => {
            console.log(err, 'err--获取用户的充值总额--');
          })
    },
    // 获取用户的取现总额
    getUserTotalWithdrawn() {
      const userAddr = this.userAddr;
      this.TokenContract.methods.getUserTotalWithdrawn(userAddr).call()
          .then(res => {
            console.log(res, 'res--获取用户的取现总额--');
            this.userTotalWithdrawn = res;
          })
          .catch(err => {
            console.log(err, 'err--获取用户的取现总额--');
          })
    },

  },
}
</script>

<style>
.content-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #2c3e50;
}

.lang-change-box {
  width: 40px;
  height: 300px;
  position: fixed;
  left: 0;
  top: 150px;
  z-index: 1000;
}

.lang-item {
  width: 40px;
  height: 40px;
  border: 1px solid #54B798;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
}

.wallet-static-box {
  height: 30px;
  line-height: 30px;
}
</style>
