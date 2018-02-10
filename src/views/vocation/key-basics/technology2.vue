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
        <div class="service-header">二等级技术要求：</div>
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
                                <i-col span="24" class="visit-tr">物理位置的选择</i-col>
                                <i-col span="24" class="network-structure">物理访问控制</i-col>
                                <i-col span="24" class="network-design">防盗窃和防破坏</i-col>
                                <i-col span="24" class="physics-tr">防雷击</i-col>
                                <i-col span="24" class="physics-tr">防火</i-col>
                                <i-col span="24" class="network-visit">防水和防潮</i-col>
                                <i-col span="24" class="physics-tr">防静电</i-col>
                                <i-col span="24" class="visit-tr">温湿度控制</i-col>
                                <i-col span="24" class="network-structure">电力供应</i-col>
                                <i-col span="24" class="physics-tr-last">电磁防护</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                         <i-col span="24" class="visit-tr text-left">
                             机房和办公场地应选择在具有防震、防风和防雨等能力的建筑内
                         </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    机房出入应安排专人负责，控制、鉴别和记录进入的人员
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    需进入机房的来访人员应经过申请和审批流程，并限制和监控其活动范围
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应将主要设备放置在机房内
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应将设备或主要部件进行固定，并设置明显的不易除去的标记
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应将通信线缆铺设在隐蔽处，可铺设在地下或管道中
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对介质分类标识，存储在介质库或档案室中
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    主机房应安装必要的防盗报警设施
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr text-left">机房建筑应设置避雷装置</i-col>
                        <i-col span="24" class="physics-tr text-left">机房应设置灭火设备</i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    水管安装，不得穿过机房屋顶和活动地板下
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应采取措施防止雨水通过机房窗户、屋顶和墙壁渗透
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应采取措施防止机房内水蒸气结露和地下积水的转移与渗透
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr text-left">
                            关键设备应采用必要的接地防静电措施
                        </i-col>
                        <i-col span="24" class="visit-tr text-left">
                            机房应设置必要的温、湿度控制设施，使机房温、湿度的变化在设备运行所允许的范围之内
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应在机房供电线路上配置稳压器和过电压防护设备
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供短期的备用电力供应，至少满足关键设备在断电情况下的正常运行要求
                                </i-col>
                            </row>
                        </i-col>
                         <i-col span="24" class="physics-tr-last text-left">
                            应在机房供电线路上配置稳压器和过电压防护设备
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                         <i-col span="24" class="visit-tr">
                             <checkbox v-model="technology.tech_2_ca83f537077cbe1c5476f85034be5dfa"></checkbox>
                         </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_f651627d9cb8668b788f706d6b12261a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_c0a693e717ad8db2f6ed592b0b9e40ff"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_2_b84d9b4c81d8329fe18be2b2f598e0e2"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_2_58b5521a03185d6599ea2993039e2ec2"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_2_b4bbfa71b377eb9cf0f71f42bf3df76b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_51c7164a29ed74e48bdb3f6f037a8d43"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_e0e89832b59abc42222c43afd7596266"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="technology.tech_2_3308c91bcb1f7ec2cc352205616e309a"></checkbox>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="technology.tech_2_cb35abff1b5666e0d5b0568d2597f115"></checkbox>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_2_646a0c8b530e86fb0c537f6699235b0e"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_0882d21670d70557ef9c232e821ace4d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_1c307f5f1915d547a7b71e985f91eb4c"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="technology.tech_2_283a3b2e998fe644e6d3281cb64d5673"></checkbox>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="technology.tech_2_48f8e4aa7e35edba07c55aeaf4d229de"></checkbox>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_1caf718db55f75ddcede3e2783077008"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_2f13b7e26cb979b07f2968b27af30d54"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                         <i-col span="24" class="physics-tr-last">
                            <checkbox v-model="technology.tech_2_2cc98ce368e3cf1a27f9dde1ac22a7af"></checkbox>
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
                                <i-col span="24" class="network-design">结构安全</i-col>
                                <i-col span="24" class="network-design">访问控制</i-col>
                                <i-col span="24" class="network-structure">安全审计</i-col>
                                <i-col span="24" class="visit-tr">边界完整性检查</i-col>
                                <i-col span="24" class="visit-tr">入侵防范</i-col>
                                <i-col span="24" class="safety-program-last">网络设备防护</i-col>
                                
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应保证关键网络设备的业务处理能力具备冗余空间，满足业务高峰期需要
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应保证接入网络和核心网络的带宽满足业务高峰期需要 
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应绘制与当前运行情况相符的网络拓扑结构图
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据各部门的工作职能、重要性和所涉及信息的重要程度等因素，划分不同的子网或网段，并按照方便管理和控制的原则为各子网、网段分配地址段
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">应在网络边界部署访问控制设备，启用访问控制功能</i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应能根据会话状态信息为数据流提供明确的允许/拒绝访问的能力，控制粒度为网段级。/拒绝数据包出入</i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应按用户和系统之间的允许访问规则，决定允许或拒绝用户对受控系统进行资源访问，控制粒度为单个用户
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应限制具有拨号访问权限的用户数量
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应对网络系统中的网络设备运行状况、网络流量、用户行为等进行日志记录
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    审计记录应包括事件的日期和时间、用户、事件类型、事件是否成功及其他与审计相关的信息
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr text-left">
                            应能够对内部网络中出现的内部用户未通过准许私自联到外部网络的行为进行检查
                        </i-col>
                         <i-col span="24" class="visit-tr text-left">
                            应在网络边界处监视以下攻击行为：端口扫描、强力攻击、木马后门攻击、拒绝服务攻击、缓冲区溢出攻击、IP碎片攻击和网络蠕虫攻击等
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应对登录网络设备的用户进行身份鉴别
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应对网络设备的管理员登录地址进行限制
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    网络设备用户的标识应唯一
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    主要网络设备应对同一用户选择两种或两种以上组合的鉴别技术来进行身份鉴别
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    身份鉴别信息应具有不易被冒用的特点，口令应有复杂度要求并定期更换
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应具有登录失败处理功能，可采取结束会话、限制非法登录次数和当网络登录连接超时自动退出等措施
                                </i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_3fd0520ed0c4832195732b3cf424629b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_40f98b3ed49e25b0d99021f3b9db93b4"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_1ad553f870d68087b2ca3f9ef2e5a7a8"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_e60d7bcd759c591e4b5daba040277cfe"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_7fc3befd6909ddb524b0bac0f79bd4a9"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_b7085ef81d636e0639465719712bfc95"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_22e40b9ed32d006b86f53730ba6ad0d4"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_6caa72249c287bb10ccf8fd1087f2761"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_e35b0a6add802f4d9ec781e0f1da1d04"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_c84029b29eeba53ac683f6827ec640a7"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="technology.tech_2_9052bc202b506eaf1f7b25664a040fcb"></checkbox>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="technology.tech_2_47379759bba3c907bba5d509b5e194e0"></checkbox>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_2_8a29e81f6682e2ff4544fd845e5c5fc5"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_2_b7bacb714c295f8d5606acbbbe66d7b3"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_2_f51546c505fd011d35a7d971cd8ecc6a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_59c8d49719b143604d2dcc7bf06ed03d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_cbdf9f79e94b61844a7e8bb4e2036b7f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="technology.tech_2_e0700418373bb6279d1bdc642c4c08c0"></checkbox>
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
                                <i-col span="24" class="safety-program">身份鉴别</i-col>
                                <i-col span="24" class="network-design">访问控制</i-col>
                                <i-col span="24" class="network-design">安全审计</i-col>
                                <i-col span="24" class="safe-visit">入侵防范</i-col>
                                <i-col span="24" class="network-structure">恶意代码防范</i-col>
                                <i-col span="24" class="network-visit-last">资源控制</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应对登录操作系统和数据库系统的用户进行身份标识和鉴别
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    操作系统和数据库系统管理用户身份标识应具有不易被冒用的特点，口令应有复杂度要求并定期更换
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应启用登录失败处理功能，可采取结束会话、限制非法登录次数和自动退出等措施
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    当对服务器进行远程管理时，应采取必要措施，防止鉴别信息在网络传输过程中被窃听
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应为操作系统和数据库系统的不同用户分配不同的用户名，确保用户名具有唯一性
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">应启用访问控制功能，依据安全策略控制用户对资源的访问</i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应实现操作系统和数据库系统特权用户的权限分离
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应限制默认帐户的访问权限，重命名系统默认帐户，修改这些帐户的默认口令
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应及时删除多余的、过期的帐户，避免共享帐户的存在
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    审计范围应覆盖到服务器上的每个操作系统用户和数据库用户
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    审计内容应包括重要用户行为、系统资源的异常使用和重要系统命令的使用等系统内重要的安全相关事件
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    审计记录应包括事件的日期、时间、类型、主体标识、客体标识和结果等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应保护审计记录，避免受到未预期的删除、修改或覆盖等
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="precaution-tr text-left">
                            操作系统应遵循最小安装的原则，仅安装需要的组件和应用程序，并保持系统补丁及时得到更新
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应安装防恶意代码软件，并及时更新防恶意代码软件版本和恶意代码库
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应支持防恶意代码软件的统一管理
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应通过设定终端接入方式、网络地址范围等条件限制终端登录
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应根据安全策略设置登录终端的操作超时锁定
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应限制单个用户对系统资源的最大或最小使用限度
                                </i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_3e830a8c146ed4e461ddc612f6878773"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_e8d0fee3e2a46b582ea400f0534f6112"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_48a9d9411b1fab9914530560f9bfe868"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_20a74ac007edf7779b84d446b5ef4910"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_b23df1a4fdde5ac9a1ffad076f3f12ae"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_a0cdb8142b5b65ef5ec79e62d0d5b171"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_11d7864ce457612c9dc0dca3fc9da892"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_73fa79e0de26d6dccf8a68ba4d43d892"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_ccd50b18960f24a3e89cbabfd6eb5f99"></checkbox>
                                </i-col>

                            </row>
                        </i-col>
                       <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_b6b6f9285a4ee82749ca4ac1b7958c79"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_17aba70d2736236857f49ea87dd0a91a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_b08e59e7db169b6496353f3e064240f3"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_6083ac262c3b067bd24877d0281665ad"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <i-col span="24"> 
                                <checkbox v-model="technology.tech_2_12803640cfd61acd1ecb018d66a483df"></checkbox>
                            </i-col>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_431bc013ea26803d294612419ae7dd2d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_aaca964b489e8696008ee34b405e0611"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_cd9ccba5a562f730096ab4c7f006bc42"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_2_22fb62899529e6c0e587967cd32880f2"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="technology.tech_2_4b35880c8e4544a91d46eaaeb60bc829"></checkbox>
                                </i-col>
                            </row>
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
                                <i-col span="24" class="network-design">身份鉴别</i-col>
                                <i-col span="24" class="network-design">访问控制</i-col>
                                <i-col span="24" class="network-visit">安全审计</i-col>
                                <i-col span="24" class="visit-tr">通信完整性</i-col>
                                <i-col span="24" class="network-structure">通信保密性</i-col>
                                <i-col span="24" class="network-structure">软件容错</i-col>
                                <i-col span="24" class="monitoring-tr-last">资源控制</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供专用的登录控制模块对登录用户进行身份标识和鉴别
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供用户身份标识唯一和鉴别信息复杂度检查功能，保证应用系统中不存在重复用户身份标识，身份鉴别信息不易被冒用
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供登录失败处理功能，可采取结束会话、限制非法登录次数和自动退出等措施
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应启用身份鉴别、用户身份标识唯一性检查、用户身份鉴别信息复杂度检查以及登录失败处理功能，并根据安全策略配置相关参数
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供访问控制功能，依据安全策略控制用户对文件、数据库表等客体的访问
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    访问控制的覆盖范围应包括与资源访问相关的主体、客体及它们之间的操作
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应由授权主体配置访问控制策略，并严格限制默认用户的访问权限
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应授予不同帐户为完成各自承担任务所需的最小权限，并在它们之间形成相互制约的关系
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供覆盖到每个用户的安全审计功能，对应用系统重要安全事件进行审计
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应保证无法删除、修改或覆盖审计记录
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    审计记录的内容至少应包括事件日期、时间、发起者信息、类型、描述和结果等
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr text-left">
                            应采用校验码技术保证通信过程中数据的完整性
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    在通信双方建立连接之前，应用系统应利用密码技术进行会话初始化验证
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对通信过程中的敏感信息字段进行加密
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供数据有效性检验功能，保证通过人机接口输入或通过通信接口输入的数据格式或长度符合系统设定要求
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    在故障发生时，应用系统应能够继续提供一部分功能，确保能够实施必要的措施
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    当应用系统的通信双方中的一方在一段时间内未作任何响应，另一方应能够自动结束会话
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应能够对应用系统的最大并发会话连接数进行限制
                                </i-col>
                                 <i-col span="24" class="visit-tr-last text-left">
                                    应能够对单个帐户的多重并发会话进行限制
                                </i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_4fa58a449ac8013a231be49d012207af"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_3182b80f97e8de16dd21f8a944da8dda"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_ed5fe3e68332d195927b63971f82e704"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_73c851730a6a8616e3cd1764b8533a6a"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                         <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_708b59a0d66ba369efb784c476b923e4"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_849dde28910d5940e092fba7e3b648a6"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_fad4f85af75256aec9d576d63acebbec"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_cbdbece0902e891474ff20a4cf883165"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_a0c114b247b805d08f81bbeb8b8583a4"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_2_199f4cd9ee67153b96037d527d1599ef"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_9b0962f78513067e7f5ebee29f0f8819"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="technology.tech_2_3045ee8f40f0416da50f7d1d9edb0961"></checkbox>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_746972ed654b139b11bb4233edd7d001"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_b0bd9c9e9df43d6d1929338d459e3427"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_47fdc19c5cbb9cfcc53168ffa0889c9b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_74cc8dfdaa23811f3a3ba8ab0ad458c2"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_b57d2a5f7ac9692376d057cd81d37258"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_9adf853b0124231350edbc63b206040f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="technology.tech_2_d77d4e07ecfd02dca214aba2720f9b09"></checkbox>
                                </i-col>
                            </row>
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
                                <i-col span="24" class="visit-tr">数据完整性</i-col>
                                <i-col span="24" class="visit-tr">数据保密性</i-col>
                                <i-col span="24" class="network-structure-last">备份和恢复</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="visit-tr text-left">
                            应能够检测到重要用户数据在传输过程中完整性受到破坏
                        </i-col>
                        <i-col span="24" class="visit-tr text-left">
                            应采用加密或其他保护措施实现鉴别信息的存储保密性
                        </i-col>
                        <i-col span="24">
                             <row>
                                 <i-col span="24" class="visit-tr text-left">
                                    应能够对重要信息进行备份和恢复
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应提供关键网络设备、通信线路和数据处理系统的硬件冗余，保证系统的可用性
                                </i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                   <row>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="technology.tech_2_51746e012d87e064314eaa0130694d54"></checkbox>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="technology.tech_2_c9119ecbc285179f3e873dca3ec4cec0"></checkbox>
                        </i-col>
                        <i-col span="24">
                             <row>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_2_334d45b58242ec750d812cb1ad9a89ec"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="technology.tech_2_8d84d13118222e1e483a66519f3da098"></checkbox>
                                </i-col>
                            </row>
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
              tech_2_ca83f537077cbe1c5476f85034be5dfa:false,
              tech_2_f651627d9cb8668b788f706d6b12261a:false,
              tech_2_c0a693e717ad8db2f6ed592b0b9e40ff:false,
              tech_2_b84d9b4c81d8329fe18be2b2f598e0e2:false,
              tech_2_58b5521a03185d6599ea2993039e2ec2:false,
              tech_2_b4bbfa71b377eb9cf0f71f42bf3df76b:false,
              tech_2_51c7164a29ed74e48bdb3f6f037a8d43:false,
              tech_2_e0e89832b59abc42222c43afd7596266:false,
              tech_2_3308c91bcb1f7ec2cc352205616e309a:false,
              tech_2_cb35abff1b5666e0d5b0568d2597f115:false,
              tech_2_646a0c8b530e86fb0c537f6699235b0e:false,
              tech_2_0882d21670d70557ef9c232e821ace4d:false,
              tech_2_1c307f5f1915d547a7b71e985f91eb4c:false,
              tech_2_283a3b2e998fe644e6d3281cb64d5673:false,
              tech_2_48f8e4aa7e35edba07c55aeaf4d229de:false,
              tech_2_1caf718db55f75ddcede3e2783077008:false,
              tech_2_2f13b7e26cb979b07f2968b27af30d54:false,
              tech_2_2cc98ce368e3cf1a27f9dde1ac22a7af:false,
              tech_2_3fd0520ed0c4832195732b3cf424629b:false,
              tech_2_40f98b3ed49e25b0d99021f3b9db93b4:false,
              tech_2_1ad553f870d68087b2ca3f9ef2e5a7a8:false,
              tech_2_e60d7bcd759c591e4b5daba040277cfe:false,
              tech_2_7fc3befd6909ddb524b0bac0f79bd4a9:false,
              tech_2_b7085ef81d636e0639465719712bfc95:false,
              tech_2_22e40b9ed32d006b86f53730ba6ad0d4:false,
              tech_2_6caa72249c287bb10ccf8fd1087f2761:false,
              tech_2_e35b0a6add802f4d9ec781e0f1da1d04:false,
              tech_2_c84029b29eeba53ac683f6827ec640a7:false,
              tech_2_9052bc202b506eaf1f7b25664a040fcb:false,
              tech_2_47379759bba3c907bba5d509b5e194e0:false,
              tech_2_8a29e81f6682e2ff4544fd845e5c5fc5:false,
              tech_2_b7bacb714c295f8d5606acbbbe66d7b3:false,
              tech_2_f51546c505fd011d35a7d971cd8ecc6a:false,
              tech_2_59c8d49719b143604d2dcc7bf06ed03d:false,
              tech_2_cbdf9f79e94b61844a7e8bb4e2036b7f:false,
              tech_2_e0700418373bb6279d1bdc642c4c08c0:false,
              tech_2_3e830a8c146ed4e461ddc612f6878773:false,
              tech_2_e8d0fee3e2a46b582ea400f0534f6112:false,
              tech_2_48a9d9411b1fab9914530560f9bfe868:false,
              tech_2_20a74ac007edf7779b84d446b5ef4910:false,
              tech_2_b23df1a4fdde5ac9a1ffad076f3f12ae:false,
              tech_2_a0cdb8142b5b65ef5ec79e62d0d5b171:false,
              tech_2_11d7864ce457612c9dc0dca3fc9da892:false,
              tech_2_73fa79e0de26d6dccf8a68ba4d43d892:false,
              tech_2_ccd50b18960f24a3e89cbabfd6eb5f99:false,
              tech_2_b6b6f9285a4ee82749ca4ac1b7958c79:false,
              tech_2_17aba70d2736236857f49ea87dd0a91a:false,
              tech_2_b08e59e7db169b6496353f3e064240f3:false,
              tech_2_6083ac262c3b067bd24877d0281665ad:false,
              tech_2_12803640cfd61acd1ecb018d66a483df:false,
              tech_2_431bc013ea26803d294612419ae7dd2d:false,
              tech_2_aaca964b489e8696008ee34b405e0611:false,
              tech_2_cd9ccba5a562f730096ab4c7f006bc42:false,
              tech_2_22fb62899529e6c0e587967cd32880f2:false,
              tech_2_4b35880c8e4544a91d46eaaeb60bc829:false,
              tech_2_4fa58a449ac8013a231be49d012207af:false,
              tech_2_3182b80f97e8de16dd21f8a944da8dda:false,
              tech_2_ed5fe3e68332d195927b63971f82e704:false,
              tech_2_73c851730a6a8616e3cd1764b8533a6a:false,
              tech_2_708b59a0d66ba369efb784c476b923e4:false,
              tech_2_849dde28910d5940e092fba7e3b648a6:false,
              tech_2_fad4f85af75256aec9d576d63acebbec:false,
              tech_2_cbdbece0902e891474ff20a4cf883165:false,
              tech_2_a0c114b247b805d08f81bbeb8b8583a4:false,
              tech_2_199f4cd9ee67153b96037d527d1599ef:false,
              tech_2_9b0962f78513067e7f5ebee29f0f8819:false,
              tech_2_3045ee8f40f0416da50f7d1d9edb0961:false,
              tech_2_746972ed654b139b11bb4233edd7d001:false,
              tech_2_b0bd9c9e9df43d6d1929338d459e3427:false,
              tech_2_47fdc19c5cbb9cfcc53168ffa0889c9b:false,
              tech_2_74cc8dfdaa23811f3a3ba8ab0ad458c2:false,
              tech_2_b57d2a5f7ac9692376d057cd81d37258:false,
              tech_2_9adf853b0124231350edbc63b206040f:false,
              tech_2_d77d4e07ecfd02dca214aba2720f9b09:false,
              tech_2_51746e012d87e064314eaa0130694d54:false,
              tech_2_c9119ecbc285179f3e873dca3ec4cec0:false,
              tech_2_334d45b58242ec750d812cb1ad9a89ec:false,
              tech_2_8d84d13118222e1e483a66519f3da098:false

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
            data: { tech_assess: this.technology }
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