<style lang="less">
    @import 'keyBasics.less';
</style>
<template>
    <div class="self-assessment">
        <div class="service-header"> 
            <span>{{system_name}}</span>
            系统的业务信息安全保护等级为<span>{{business_level}}</span>级，系统服务安全保护等级为
            <span>{{system_level}}</span>级，安全保护等级为
            <span>{{security_level}}</span>级
        </div>
        <div class="service-header">一等级技术要求：</div>
        <div class="technology-table">
            <row class="table-header">
                <i-col span="6" class="br">分类</i-col>
                <i-col span="15" class="br">基本要求</i-col>
                <i-col span="3">达标情况</i-col>
            </row>
            <row class="table-physics">
                <i-col span="6">
                    <row>
                        <i-col span="4" class="physics-name">物理安全</i-col>
                        <i-col span="20">
                            <row class="physics-type">
                                <i-col span="24" class="physics-tr">物理访问控制</i-col>
                                <i-col span="24" class="physics-tr-steal">防盗窃和防破坏</i-col>
                                <i-col span="24" class="physics-tr">防雷击</i-col>
                                <i-col span="24" class="physics-tr">防火</i-col>
                                <i-col span="24" class="physics-tr-steal">防水和防潮</i-col>
                                <i-col span="24" class="physics-tr">温湿度控制</i-col>
                                <i-col span="24" class="physics-tr-last">电力供应</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="physics-tr text-left">机房出入应安排专人负责，控制、鉴别和记录进入的人员</i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应将主要设备放置在机房内</i-col>
                                <i-col span="24" class="physics-tr text-left">防应将设备或主要部件进行固定，并设置明显的不易除去的标记火</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr text-left">机房建筑应设置避雷装置</i-col>
                        <i-col span="24" class="physics-tr text-left">机房应设置灭火设备</i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应对穿过机房墙壁和楼板的水管增加必要的保护措施</i-col>
                                <i-col span="24" class="physics-tr text-left">应采取措施防止雨水通过机房窗户、屋顶和墙壁渗透</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr text-left">机房应设置必要的温、湿度控制设施，使机房温、湿度的变化在设备运行所允许的范围之内</i-col>
                        <i-col span="24" class="physics-tr-last text-left">应在机房供电线路上配置稳压器和过电压防护设备</i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="technology.tech_1_f651627d9cb8668b788f706d6b12261a"></checkbox>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_b84d9b4c81d8329fe18be2b2f598e0e2"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_58b5521a03185d6599ea2993039e2ec2"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="technology.tech_1_1e6ea84aff15e04530304c6c9a73d1b4"></checkbox>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="technology.tech_1_8514ec39f04a59c662ec9ab122596f69"></checkbox>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_2d3635eb0f8a8d4561f387509d132f9c"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_0882d21670d70557ef9c232e821ace4d"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="technology.tech_1_daae56682bc69f98a0d969bad7372164"></checkbox>
                        </i-col>
                        <i-col span="24" class="physics-tr-last">
                            <checkbox v-model="technology.tech_1_1caf718db55f75ddcede3e2783077008"></checkbox>
                        </i-col>
                    </row>
                </i-col>
            </row>
            <row class="table-physics">
                <i-col span="6">
                    <row>
                        <i-col span="4" class="physics-name">网络安全</i-col>
                        <i-col span="20">
                            <row class="physics-type">
                                <i-col span="24" class="network-structure">结构安全</i-col>
                                <i-col span="24" class="network-visit">访问控制</i-col>
                                <i-col span="24" class="network-equipment">网络设备防护</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应保证关键网络设备的业务处理能力满足基本业务需要</i-col>
                                <i-col span="24" class="physics-tr text-left">应保证接入网络和核心网络的带宽满足基本业务需要</i-col>
                                <i-col span="24" class="physics-tr text-left">应绘制与当前运行情况相符的网络拓扑结构图</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应在网络边界部署访问控制设备，启用访问控制功能</i-col>
                                <i-col span="24" class="visit-tr text-left">应根据访问控制列表对源地址、目的地址、源端口、目的端口和协议等进行检查，以允许/拒绝数据包出入</i-col>
                                <i-col span="24" class="visit-tr-last text-left">应通过访问控制列表对系统资源实现允许或拒绝用户访问，控制粒度至少为用户组</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit-last">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应对登录网络设备的用户进行身份鉴别</i-col>
                                <i-col span="24" class="visit-tr text-left">应具有登录失败处理功能，可采取结束会话、限制非法登录次数和当网络登录连接超时自动退出等措施</i-col>
                                <i-col span="24" class="visit-tr-last text-left">当对网络设备进行远程管理时，应采取必要措施防止鉴别信息在网络传输过程中被窃听</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_a3a560958b6ce33f5eaa356286d5d0aa"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_00112f3f43564c0f0664c6c82ad13306"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_1ad553f870d68087b2ca3f9ef2e5a7a8"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_7fc3befd6909ddb524b0bac0f79bd4a9"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-es">
                                    <checkbox v-model="technology.tech_1_faa1b90884b8da5a51c773fc7956a7e2"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last-case">
                                    <checkbox v-model="technology.tech_1_32edec6845da3f3044901f147d6e0ee4"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit-last">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_8a29e81f6682e2ff4544fd845e5c5fc5"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-es">
                                    <checkbox v-model="technology.tech_1_e0700418373bb6279d1bdc642c4c08c0"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last-case">
                                    <checkbox v-model="technology.tech_1_4cd45c449016cfeb62bca6909f9c3740"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
            </row>
            <row class="table-physics">
                <i-col span="6">
                    <row>
                        <i-col span="4" class="physics-name">主机安全</i-col>
                        <i-col span="20">
                            <row class="physics-type">
                                <i-col span="24" class="physics-tr">身份鉴别</i-col>
                                <i-col span="24" class="network-visit">访问控制</i-col>
                                <i-col span="24" class="safe-visit">入侵防范</i-col>
                                <i-col span="24" class="safe-visit-last">恶意代码防范</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="physics-tr text-left">应对登录操作系统和数据库系统的用户进行身份标识和鉴别</i-col>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应启用访问控制功能，依据安全策略控制用户对资源的访问</i-col>
                                <i-col span="24" class="visit-tr text-left">应限制默认帐户的访问权限，重命名系统默认帐户，修改这些帐户的默认口令</i-col>
                                <i-col span="24" class="visit-tr text-left">应及时删除多余的、过期的帐户，避免共享帐户的存在</i-col>

                            </row>
                        </i-col>
                        <i-col span="24" class="precaution-tr text-left">
                            操作系统应遵循最小安装的原则，仅安装需要的组件和应用程序，并保持系统补丁及时得到更新
                        </i-col>
                        <i-col span="24" class="precaution-tr-last text-left">
                        应安装防恶意代码软件，并及时更新防恶意代码软件版本和恶意代码库
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="technology.tech_1_3e830a8c146ed4e461ddc612f6878773"></checkbox>
                        </i-col>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_a0cdb8142b5b65ef5ec79e62d0d5b171"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_1_73fa79e0de26d6dccf8a68ba4d43d892"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_1_ccd50b18960f24a3e89cbabfd6eb5f99"></checkbox>
                                </i-col>

                            </row>
                        </i-col>
                        <i-col span="24" class="precaution-tr">
                            <i-col span="24"> 
                                <checkbox v-model="technology.tech_1_0a19d0c6a8dc1dae56b78719df6cb336"></checkbox>
                            </i-col>
                        </i-col>
                        <i-col span="24" class="precaution-tr-last">
                            <i-col span="24"> 
                                <checkbox v-model="technology.tech_1_431bc013ea26803d294612419ae7dd2d"></checkbox>
                            </i-col>
                        </i-col>
                    </row>
                </i-col>
            </row>
            <row class="table-physics">
                <i-col span="6">
                    <row>
                        <i-col span="4" class="physics-name">应用安全</i-col>
                        <i-col span="20">
                            <row class="physics-type">
                                <i-col span="24" class="network-visit">身份鉴别</i-col>
                                <i-col span="24" class="physics-tr-steal">访问控制</i-col>
                                <i-col span="24" class="safe-visit">通信完整性</i-col>
                                <i-col span="24" class="safe-visit-last">软件容错</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应提供专用的登录控制模块对登录用户进行身份标识和鉴别</i-col>
                                <i-col span="24" class="visit-tr text-left">应提供登录失败处理功能，可采取结束会话、限制非法登录次数和自动退出等措施</i-col>
                                <i-col span="24" class="visit-tr text-left">应启用身份鉴别和登录失败处理功能，并根据安全策略配置相关参数</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应提供访问控制功能控制用户组/用户对系统功能和用户数据的访问</i-col>
                                <i-col span="24" class="physics-tr text-left">应由授权主体配置访问控制策略，并严格限制默认用户的访问权限</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="precaution-tr text-left">
                            应采用约定通信会话方式的方法保证通信过程中数据的完整性
                        </i-col>
                        <i-col span="24" class="precaution-tr-last text-left">
                            应提供数据有效性检验功能，保证通过人机接口输入或通过通信接口输入的数据格式或长度符合系统设定要求
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_4fa58a449ac8013a231be49d012207af"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_1_ed5fe3e68332d195927b63971f82e704"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_1_08dbf73fa35d6ff1bc44edff57334c85"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_62299caf5407a5860f52220b642e20ef"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_1_fad4f85af75256aec9d576d63acebbec"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="precaution-tr">
                            <checkbox v-model="technology.tech_1_8813133d0f0da4e76d3ce5c388bb1bce"></checkbox>
                        </i-col>
                        <i-col span="24" class="precaution-tr-last">
                            <checkbox v-model="technology.tech_1_0b05b22332ebe0e7f57e73974340f6ef"></checkbox>
                        </i-col>
                    </row>
                </i-col>
            </row>
            <row>
                <i-col span="6">
                    <row>
                        <i-col span="4" class="back-up">数据安全及备份恢复</i-col>
                        <i-col span="20">
                            <row class="physics-type">
                                <i-col span="24" class="network-structure">数据完整性</i-col>
                                <i-col span="24" class="back-recover">备份和恢复</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="network-structure text-left">
                            应能够检测到重要用户数据在传输过程中完整性受到破坏
                        </i-col>
                        <i-col span="24" class="back-recover text-left">
                            应能够对重要信息进行备份和恢复
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                   <row>
                        <i-col span="24" class="network-structure">
                            <checkbox v-model="technology.tech_1_4076256f6c966d12b98ea126c668db69"></checkbox>
                        </i-col>
                        <i-col span="24" class="back-recover">
                            <checkbox v-model="technology.tech_1_334d45b58242ec750d812cb1ad9a89ec"></checkbox>
                        </i-col>
                    </row>
                </i-col>
            </row>
        </div>
        <div style="width: 100%;text-align: center;margin-top: 5px;">
            <i-button type="primary" @click="submitAssess">提交</i-button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
      return {
          system_name: '',
          business_level: '',
          system_level: '',
          security_level: '',
          technology: {
              tech_1_f651627d9cb8668b788f706d6b12261a: false,
              tech_1_b84d9b4c81d8329fe18be2b2f598e0e2: false,
              tech_1_58b5521a03185d6599ea2993039e2ec2: false,
              tech_1_1e6ea84aff15e04530304c6c9a73d1b4: false,
              tech_1_8514ec39f04a59c662ec9ab122596f69: false,
              tech_1_2d3635eb0f8a8d4561f387509d132f9c: false,
              tech_1_0882d21670d70557ef9c232e821ace4d: false,
              tech_1_daae56682bc69f98a0d969bad7372164: false,
              tech_1_1caf718db55f75ddcede3e2783077008: false,
              tech_1_a3a560958b6ce33f5eaa356286d5d0aa: false,
              tech_1_00112f3f43564c0f0664c6c82ad13306: false,
              tech_1_1ad553f870d68087b2ca3f9ef2e5a7a8: false,
              tech_1_7fc3befd6909ddb524b0bac0f79bd4a9: false,
              tech_1_faa1b90884b8da5a51c773fc7956a7e2: false,
              tech_1_32edec6845da3f3044901f147d6e0ee4: false,
              tech_1_8a29e81f6682e2ff4544fd845e5c5fc5: false,
              tech_1_e0700418373bb6279d1bdc642c4c08c0: false,
              tech_1_4cd45c449016cfeb62bca6909f9c3740: false,
              tech_1_3e830a8c146ed4e461ddc612f6878773: false,
              tech_1_a0cdb8142b5b65ef5ec79e62d0d5b171: false,
              tech_1_73fa79e0de26d6dccf8a68ba4d43d892: false,
              tech_1_ccd50b18960f24a3e89cbabfd6eb5f99: false,
              tech_1_0a19d0c6a8dc1dae56b78719df6cb336: false,
              tech_1_431bc013ea26803d294612419ae7dd2d: false,
              tech_1_4fa58a449ac8013a231be49d012207af: false,
              tech_1_ed5fe3e68332d195927b63971f82e704: false,
              tech_1_08dbf73fa35d6ff1bc44edff57334c85: false,
              tech_1_62299caf5407a5860f52220b642e20ef: false,
              tech_1_fad4f85af75256aec9d576d63acebbec: false,
              tech_1_8813133d0f0da4e76d3ce5c388bb1bce: false,
              tech_1_0b05b22332ebe0e7f57e73974340f6ef: false,
              tech_1_4076256f6c966d12b98ea126c668db69: false,
              tech_1_334d45b58242ec750d812cb1ad9a89ec: false
          }
      }
  },
  computed: {
    url () {
        return this.$store.state.userCode.url
    }
  },
  mounted () {
        if(localStorage.inspId > 0) {
            this.queryList()
        } else {
        }
    },
  methods: {
      queryList() {
        const url = this.url + '/insp/api/v1.0/tech/assess/' + localStorage.inspId
        axios({
            method:'get',
            url: url
        })
        .then(response => {
            if(response.data.status) {
                const res = response.data
                this.technology = res.tech_assess
                this.system_name = res.system_name,
                this.business_level = res.business_level,
                this.system_level = res.system_level
                this.security_level = res.security_level
            } else {
                this.$Message.error(response.data.desc)
            }
        })
      },
      submitAssess() {
        const url = this.url + '/insp/api/v1.0/tech/assess/' + localStorage.inspId
        axios({
            method:'post',
            url: url,
            data: { tech_assessz: this.technology }
        })
        .then(response => {
            if(response.data.status) {
                this.$Message.info('添加成功')
                window.location.href = '/#/protectaionList'
            } else {
                this.$Message.error(response.data.desc)
            }
        })
      }
  }
}
</script>
