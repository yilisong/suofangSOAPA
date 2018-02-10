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
        <div class="service-header">四等级技术要求：</div>
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
                                <i-col span="24" class="network-structure">物理位置的选择</i-col>
                                <i-col span="24" class="network-design">物理访问控制</i-col>
                                <i-col span="24" class="network-design">防盗窃和防破坏</i-col>
                                <i-col span="24" class="network-structure">防雷击</i-col>
                                <i-col span="24" class="monitoring-tr">防火</i-col>
                                <i-col span="24" class="network-design">防水和防潮</i-col>
                                <i-col span="24" class="network-structure">防静电</i-col>
                                <i-col span="24" class="visit-tr">温湿度控制</i-col>
                                <i-col span="24" class="network-design">电力供应</i-col>
                                <i-col span="24" class="network-structure-last">电磁防护</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                         <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    机房和办公场地应选择在具有防震、防风和防雨等能力的建筑内
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    机房场地应避免设在建筑物的高层或地下室，以及用水设备的下层或隔壁
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    机房出入口应安排专人值守并配置电子门禁系统，控制、鉴别和记录进入的人员
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    需进入机房的来访人员应经过申请和审批流程，并限制和监控其活动范围
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对机房划分区域进行管理，区域和区域之间设置物理隔离装置，在重要区域前设置交付或安装等过渡区域
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    重要区域应配置第二道电子门禁系统，控制、鉴别和记录进入的人员
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
                                <i-col span="24" class="physics-tr text-left">
                                    应对介质分类标识，存储在介质库或档案室中
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应利用光、电等技术设置机房防盗报警系统
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应对机房设置监控报警系统
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    机房建筑应设置避雷装置
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    机房应设置交流电源地线
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应设置防雷保安器，防止感应雷
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    机房应设置火灾自动消防系统，能够自动检测火情、自动报警，并自动灭火
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    机房及相关的工作房间和辅助房应采用具有耐火等级的建筑材料	
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    机房应采取区域隔离防火措施，将重要设备与其他设备隔离开
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    水管安装，不得穿过机房屋顶和活动地板下
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应采取措施防止雨水通过机房窗户、屋顶和墙壁渗透
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应采取措施防止机房内水蒸气结露和地下积水的转移与渗透
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应安装对水敏感的检测仪表或元件，对机房进行防水检测和报警
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    主要设备应采用必要的接地防静电措施
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    机房应采用防静电地板
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应采用静电消除器等装置，减少静电的产生
                                </i-col>
                            </row>
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
                                <i-col span="24" class="visit-tr text-left">
                                    应设置冗余或并行的电力电缆线路为计算机系统供电
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立备用供电系统
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应采用接地方式防止外界电磁干扰和设备寄生耦合干扰
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    电源线和通信线缆应隔离铺设，避免互相干扰
                                </i-col>
                                <i-col span="24" class="physics-tr-last text-left">
                                    应对关键设备和磁介质实施电磁屏蔽
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
                                    <checkbox v-model="technology.tech_4_e5b57a55f70856c81a40c7b525cdded6"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_7dcd3ba2d92770cdba20d75df2bcbf5d"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_94b8f70eb2f4c6b77072172e415b3797"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_c0a693e717ad8db2f6ed592b0b9e40ff"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_5aa9876f4ea24e2a24b7d96f8e21f072"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_24c0b1026dee899c8144d0ac46740d67"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_b84d9b4c81d8329fe18be2b2f598e0e2"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_58b5521a03185d6599ea2993039e2ec2"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_b4bbfa71b377eb9cf0f71f42bf3df76b"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_51c7164a29ed74e48bdb3f6f037a8d43"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_505d1423446b0a2b88f3183dd3f84eeb"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_5f66286097ae0d7c1ae4517215a886ce"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_1e6ea84aff15e04530304c6c9a73d1b4"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_83fa74a1e7ed1f0db00c4700c6d59f3b"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_073853a7b1da359a4d43bd216e92861e"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_afcf135789ccd6a479706cdf2436d88b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_1b51dc2d4ed3bbe71728c25d7f6d0f76"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_54fa492902e364a6f551c0e093ec7729"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_646a0c8b530e86fb0c537f6699235b0e"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_0882d21670d70557ef9c232e821ace4d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_1c307f5f1915d547a7b71e985f91eb4c"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_efdb1ad253ca31c0970165319f6ee9f9"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_53eac9565188c5879453c491cbf92dde"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_8fc1d78fdcae8ff64757cdb234efd7ec"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_0e785ac527e346129630a0205fe1219d"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="technology.tech_4_48f8e4aa7e35edba07c55aeaf4d229de"></checkbox>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_1caf718db55f75ddcede3e2783077008"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_39c654050dc969eb29dedfb5e2ec26cc"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_41486591ac6545414b5c0403534cf98f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_3dc981337dfcd8d4e20ec64d0026e5c4"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_729ada3391b3a61fef5f648a1fd3f91a"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_c5f4ac43417d67783b848281790712ad"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr-last">
                                    <checkbox v-model="technology.tech_4_3e132cd59946e9b74b8ed4362d01a8b2"></checkbox>
                                </i-col>
                            </row>
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
                                <i-col span="24" class="network-safe">结构安全</i-col>
                                <i-col span="24" class="network-medium-steal">访问控制</i-col>
                                <i-col span="24" class="safety-warn">安全审计</i-col>
                                <i-col span="24" class="network-structure">边界完整性检查</i-col>
                                <i-col span="24" class="network-structure">入侵防范</i-col>
                                <i-col span="24" class="physics-tr-steal">恶意代码防范</i-col>
                                <i-col span="24" class="network-steal-last">网络设备防护</i-col>
                                
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应保证网络设备的业务处理能力具备冗余空间，满足业务高峰期需要
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应保证网络各个部分的带宽满足业务高峰期需要 
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应在业务终端与业务服务器之间进行路由控制建立安全的访问路径
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应绘制与当前运行情况相符的网络拓扑结构图
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应根据各部门的工作职能、重要性和所涉及信息的重要程度等因素，划分不同的子网或网段，并按照方便管理和控制的原则为各子网、网段分配地址段
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应避免将重要网段部署在网络边界处且直接连接外部信息系统，重要网段与其他网段之间采取可靠的技术隔离手段 
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应按照对业务服务的重要次序来指定带宽分配优先级别，保证在网络发生拥堵的时候优先保护重要主机
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应在网络边界部署访问控制设备，启用访问控制功能
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应不允许数据带通用协议通过/拒绝访问的能力，控制粒度为端口级
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据数据的敏感标记允许或拒绝数据通过
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应在会话处于非活跃一定时间或会话结束后终止网络连接
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应限制网络最大流量数及网络连接数
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    重要网段应采取技术手段防止地址欺骗/拒绝访问的能力，控制粒度为网段级。
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应按用户和系统之间的允许访问规则，决定允许或拒绝用户对受控系统进行资源访问，控制粒度为单个用户
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应不开放远程拨号访问功能
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
                                <i-col span="24" class="visit-tr text-left">
                                    应能够根据记录数据进行分析，并生成审计报表
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对审计记录进行保护，避免受到未预期的删除、修改或覆盖等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定义审计跟踪极限的阈值，当存储空间接近极限时，能采取必要的措施，当存储空间被耗尽时，终止可审计事件的发生
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据信息系统的统一安全策略，实现集中审计，时钟保持与时钟服务器同步
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应能够对非授权设备私自联到内部网络的行为进行检查，准确定出位置，并对其进行有效阻断
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应能够对内部网络用户私自联到外部网络的行为进行检查，准确定出位置，并对其进行有效阻断
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应在网络边界处监视以下攻击行为：端口扫描、强力攻击、木马后门攻击、拒绝服务攻击、缓冲区溢出攻击、IP碎片攻击和网络蠕虫攻击等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    当检测到攻击行为时，记录攻击源IP、攻击类型、攻击目的、攻击时间，在发生严重入侵事件时应提供报警及自动采取相应动作
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应在网络边界处对恶意代码进行检测和清除
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应维护恶意代码库的升级和检测系统的更新
                                </i-col>
                            </row>
                         </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应对登录网络设备的用户进行身份鉴别
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应对网络设备的管理员登录地址进行限制
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    网络设备用户的标识应唯一
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    主要网络设备应对同一用户选择两种或两种以上组合的鉴别技术来进行身份鉴别
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    身份鉴别信息应具有不易被冒用的特点，口令应有复杂度要求并定期更换
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应具有登录失败处理功能，可采取结束会话、限制非法登录次数和当网络登录连接超时自动退出等措施
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    当对网络设备进行远程管理时，应采取必要措施防止鉴别信息在网络传输过程中被窃听
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应实现设备特权用户的权限分离
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    网络设备用户的身份鉴别信息至少应有一种是不可伪造的
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
                                    <checkbox v-model="technology.tech_4_e1ad1364c045ae1aaf180982943d9134"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_7ed7de822f3dbdfc439c0469086122e0"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_0b2e94a14886b2e2f246bc5557169e3f"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_1ad553f870d68087b2ca3f9ef2e5a7a8"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_e60d7bcd759c591e4b5daba040277cfe"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_0b0c45967439096c13eb3984ab080f08"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_ed0480999b5ab062393cf85ec653284c"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_7fc3befd6909ddb524b0bac0f79bd4a9"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_c0f0862f05d7c5c6b8ac66fba4f32c54"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_6d989b8bbfb8f2bf5db3f96e40e79b05"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_024559e738a2d273ffa0ce6418db1c4c"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_0cfe7f0258357519ef9101c41688f963"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_67c6dad22ece5fc258ba0ba263ac7348"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_22e40b9ed32d006b86f53730ba6ad0d4"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_85922139bdb23708391e935ede1778bd"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_e35b0a6add802f4d9ec781e0f1da1d04"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_c84029b29eeba53ac683f6827ec640a7"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_21ad3934a3978d92474f59d91e67e61d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_779c3a9c539d63b10240ddfe5ae8afc8"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_58f8260e48b5c66b0474844f287424f0"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_6143c17cee973d6bb8a96f1b653e9b86"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_02e22ef93ed2027c13cdcd2a4e56022f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_9f08aa10be9f2752fb43e6fba87635c7"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_016b9d319fb231c13b4f6a04ec154ce9"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_9d7927bd8dcb6d745fb9b71a413cff25"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_c2182b9a4318c0bcd5a8140b07b6daa8"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_87224ed46306cda7135226d668efaeef"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_8a29e81f6682e2ff4544fd845e5c5fc5"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_b7bacb714c295f8d5606acbbbe66d7b3"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_f51546c505fd011d35a7d971cd8ecc6a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_59c8d49719b143604d2dcc7bf06ed03d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_cbdf9f79e94b61844a7e8bb4e2036b7f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_e0700418373bb6279d1bdc642c4c08c0"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_4cd45c449016cfeb62bca6909f9c3740"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_37243a4c0ffddca5e701abd4298addf5"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr-last">
                                    <checkbox v-model="technology.tech_4_3860781a17028df9214246adfc7bfafc"></checkbox>
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
                                <i-col span="24" class="network-safe">身份鉴别</i-col>
                                <i-col span="24" class="environment-tr">访问控制</i-col>
                                <i-col span="24" class="network-structure">可信路径</i-col>
                                <i-col span="24" class="network-tr-steal">安全审计</i-col>
                                <i-col span="24" class="network-structure">剩余信息保护</i-col>
                                <i-col span="24" class="monitoring-tr">入侵防范</i-col>
                                <i-col span="24" class="network-visit">恶意代码防范</i-col>
                                <i-col span="24" class="safety-program-last">资源控制</i-col>
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
                                <i-col span="24" class="visit-tr text-left">
                                    应采用两种或两种以上组合的鉴别技术对管理用户进行身份鉴别，并且身份鉴别信息至少有一种是不可伪造的
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应设置鉴别警示信息，描述未授权访问可能导致的后果
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应依据安全策略和所有主体和客体设置的敏感标记控制主体对客体的访问
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                     应根据管理用户的角色分配权限，实现管理用户的权限分离，仅授予管理用户所需的最小权限
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应对重要信息资源设置敏感标记
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应依据安全策略严格控制用户对有敏感标记重要信息资源的操作
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    访问控制的粒度应达到主体为用户级或进程级，客体为文件、数据库表、记录和字段级
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    在系统对用户进行身份鉴别时，系统与用户之间应能够建立一条安全的信息传输路径。
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    在用户对系统进行访问时，系统与用户之间应能够建立一条安全的信息传输路径
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    审计范围应覆盖到服务器和重要客户端上的每个操作系统用户和数据库用户
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    审计内容应包括重要用户行为、系统资源的异常使用和重要系统命令的使用等系统内重要的安全相关事件
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    审计记录应包括事件的日期、时间、类型、主体标识、客体标识和结果等
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应能够根据记录数据进行分析，并生成审计报表
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应保护审计进程，避免受到未预期的中断
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应保护审计记录，避免受到未预期的删除、修改或覆盖等
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应能够根据信息系统的统一安全策略，实现集中审计
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应保证操作系统和数据库系统用户的鉴别信息所在的存储空间，被释放或再分配给其他用户前得到完全清除，无论这些信息是存放在硬盘上还是在内存中
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保系统内的文件、目录和数据库记录等资源所在的存储空间，被释放或重新分配给其他用户前得到完全清除
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应能够检测到对重要服务器进行入侵的行为，能够记录入侵的源IP、攻击的类型、攻击的目的、攻击的时间，并在发生严重入侵事件时提供报警
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应能够对重要程序的完整性进行检测，并在检测到完整性受到破坏后具有恢复的措施
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    操作系统应遵循最小安装的原则，仅安装需要的组件和应用程序，并通过设置升级服务器等方式保持系统补丁及时得到更新
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应安装防恶意代码软件，并及时更新防恶意代码软件版本和恶意代码库应安装防恶意代码软件，并及时更新防恶意代码软件版本和恶意代码库
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    主机防恶意代码产品应具有与网络防恶意代码产品不同的恶意代码库
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应支持防恶意代码软件的统一管理
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应通过设定终端接入方式、网络地址范围等条件限制终端登录
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据安全策略设置登录终端的操作超时锁定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对重要服务器进行监视，包括监视服务器的CPU、硬盘、内存、网络等资源的使用情况
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应限制单个用户对系统资源的最大或最小使用限度
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应能够对系统的服务水平降低到预先规定的最小值进行检测和报警
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
                                    <checkbox v-model="technology.tech_4_3e830a8c146ed4e461ddc612f6878773"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_e8d0fee3e2a46b582ea400f0534f6112"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_48a9d9411b1fab9914530560f9bfe868"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_20a74ac007edf7779b84d446b5ef4910"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_b23df1a4fdde5ac9a1ffad076f3f12ae"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_839cd9df3300fa110c2ac326da9f1457"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_1be1b639edda223cf70094686f28ddb7"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_8c31c108ecef183f6bb56be2a6af0e10"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_b70559a65a607ae9c110a9b426889560"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_6a4e40e359ea8f75c8288d71184b8cd7"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_87b10f1d1f4e94477a0284d387d90508"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_a7d32890ed089dee7adb346bd7a4ec64"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_f8e5ec9314baf20e6868a5629521eacb"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_3_0c5b2ce703c07d3ff75e59d2fbb61d6e"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_375bef6f9b1824870d10fa126b7c0463"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_17aba70d2736236857f49ea87dd0a91a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_b08e59e7db169b6496353f3e064240f3"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_708f8771cea17673b251daa09e2becf8"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_3b0d33942072c3e6af565c3640e0e006"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_6083ac262c3b067bd24877d0281665ad"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_f35071975cf085d51bb54cde6fa067e4"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_b571845403091994600dace74ea09325"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_0c5b2ce703c07d3ff75e59d2fbb61d6e"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_c2aed29667653c002310699a7dc912fa"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_45d1b51805d9235fcda0e1adb04b219a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_12803640cfd61acd1ecb018d66a483df"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_b5eab036092551401cf6c3424f2875cc"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_7d584df39c2e11ab18d0fa94748b2a07"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="technology.tech_4_aaca964b489e8696008ee34b405e0611"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_cd9ccba5a562f730096ab4c7f006bc42"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_22fb62899529e6c0e587967cd32880f2"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_e34235044f31e0f9c801c8cdde2f6f06"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_4b35880c8e4544a91d46eaaeb60bc829"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_52ae33837406384779b51a5ff53e9dc5"></checkbox>
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
                                <i-col span="24" class="safety-program">身份鉴别</i-col>
                                <i-col span="24" class="visit-tr">安全标记</i-col>
                                <i-col span="24" class="safety-warn">访问控制</i-col>
                                <i-col span="24" class="network-structure">可信路径</i-col>
                                <i-col span="24" class="safety-program">安全审计</i-col>
                                <i-col span="24" class="network-structure">剩余信息保护</i-col>
                                <i-col span="24" class="visit-tr">通信完整性</i-col>
                                <i-col span="24" class="monitoring-tr">通信保密性</i-col>
                                <i-col span="24" class="network-structure">抗抵赖</i-col>
                                <i-col span="24" class="monitoring-tr">软件容错</i-col>
                                <i-col span="24" class="safety-warn-last">资源控制</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供专用的登录控制模块对登录用户进行身份标识和鉴别，其中一种是不可伪造的
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对同一用户采用两种或两种以上组合的鉴别技术实现用户身份鉴别
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
                        <i-col span="24" class="visit-tr text-left">
                            应提供为主体和客体设置安全标记的功能并在安装后启用
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
                                     应由授权主体配置访问控制策略，并禁止默认帐户的访问
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应授予不同帐户为完成各自承担任务所需的最小权限，并在它们之间形成相互制约的关系
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应通过比较安全标记来确定是授予还是拒绝主体对客体的访问
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应依据安全策略严格控制用户对有敏感标记重要信息资源的操作
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    在应用系统对用户进行身份鉴别时，应能够建立一条安全的信息传输路径
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    在用户通过应用系统对资源进行访问时，应用系统应保证在被访问的资源与用户之间应能够建立一条安全的信息传输路径
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供覆盖到每个用户的安全审计功能，对应用系统重要安全事件进行审计
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应保证无法单独中断审计进程，无法删除、修改或覆盖审计记录
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    审计记录的内容至少应包括事件日期、时间、发起者信息、类型、描述和结果等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供对审计记录数据进行统计、查询、分析及生成审计报表的功能
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据系统统一安全策略，提供集中审计接口
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应保证用户鉴别信息所在的存储空间被释放或再分配给其他用户前得到完全清除，无论这些信息是存放在硬盘上还是在内存中
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应保证系统内的文件、目录和数据库记录等资源所在的存储空间被释放或重新分配给其他用户前得到完全清除
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr text-left">
                            应采用密码技术保证通信过程中数据的完整性
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    在通信双方建立连接之前，应用系统应利用密码技术进行会话初始化验证
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对通信过程中的整个报文或会话过程进行加密
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应基于硬件化的设备对重要通信过程进行加解密运算和密钥管理
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应具有在请求的情况下为数据原发者或接收者提供数据原发证据的功能
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应具有在请求的情况下为数据原发者或接收者提供数据接收证据的功能
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供数据有效性检验功能，保证通过人机接口输入或通过通信接口输入的数据格式或长度符合系统设定要求
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供自动保护功能，当故障发生时自动保护当前所有状态，保证系统能够进行恢复
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应提供自动恢复功能，当故障发生时立即自动启动新的进程，恢复原来的工作状态
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
                                 <i-col span="24" class="visit-tr text-left">
                                    应能够对单个帐户的多重并发会话进行限制
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应能够对一个时间段内可能的并发会话连接数进行限制
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应能够对一个访问帐户或一个请求进程占用的资源分配最大限额和最小限额
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应能够对系统服务水平降低到预先规定的最小值进行检测和报警
                                </i-col>
                                 <i-col span="24" class="visit-tr-last text-left">
                                    应提供服务优先级设定功能，并在安装后根据安全策略设定访问帐户或请求进程的优先级，根据优先级分配系统资源
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
                                    <checkbox v-model="technology.tech_4_56c03d94e564bf08f44237c5ff23ee2e"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_8ec8bb169e944239d32283e88568c84d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_3182b80f97e8de16dd21f8a944da8dda"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_ed5fe3e68332d195927b63971f82e704"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_73c851730a6a8616e3cd1764b8533a6a"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="technology.tech_4_ff50a8390c0875a616220ab18e140552"></checkbox>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_708b59a0d66ba369efb784c476b923e4"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_849dde28910d5940e092fba7e3b648a6"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_ea1618e7a8ddf6b866bb11011bb3e611"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_cbdbece0902e891474ff20a4cf883165"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_1bb2beb479693568ac36e0bfd8a1b07e"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_bfe5068dcda314f156078eef4fc007cf"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_6da570ae0fbc060a33e69816af469eac"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_d3350364667cc19d3799b4b52aa4bc06"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_a0c114b247b805d08f81bbeb8b8583a4"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_1b92d86416361c3b7786555ba8f3a3f3"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_9b0962f78513067e7f5ebee29f0f8819"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_4e9c89595fdfbec8eea0d35d9b9e1587"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_c125b7b394420d6cb5f16a709fbb0093"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_6a3ec74413d83f71569b801b5ffe1b73"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_120eab8ffbbdae6612935a330225fcd5"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="technology.tech_4_a7fe621869806ab654b59a1060f45387"></checkbox>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_746972ed654b139b11bb4233edd7d001"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_88de033f0b976e7736b28a8247ed43e3"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_8b12a2cf9a0c9eec064b9c09a1ebf95c"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_03e6c66a502fced69f6349253d99ea9b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_668c380ad56aa1fdadcbb57592efe90e"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_47fdc19c5cbb9cfcc53168ffa0889c9b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_58eb95a1746bf374cbf7d724ddfb354a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_fa58b5bf97b0564ee4138f424166e29f"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_b57d2a5f7ac9692376d057cd81d37258"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_9adf853b0124231350edbc63b206040f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_d77d4e07ecfd02dca214aba2720f9b09"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_b0b199471b6794e49263437c498ab3d8"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_b757918196e2dd4ef7e24ea012d953f7"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_25ddcd8443f3c0bc0bd62073636117ff"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="technology.tech_4_9e792858130c71d38f5d2b773dc5b647"></checkbox>
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
                                <i-col span="24" class="monitoring-tr">数据完整性</i-col>
                                <i-col span="24" class="monitoring-tr">数据保密性</i-col>
                                <i-col span="24" class="network-design-last">备份和恢复</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                             <row>
                                 <i-col span="24" class="visit-tr text-left">
                                    应能够检测到系统管理数据、鉴别信息和重要业务数据在传输过程中完整性受到破坏，并在检测到完整性错误时采取必要的恢复措施
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应能够检测到系统管理数据、鉴别信息和重要业务数据在存储过程中完整性受到破坏，并在检测到完整性错误时采取必要的恢复措施
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对重要通信提供专用通信协议或安全通信协议服务，避免来自基于通用通信协议的攻击破坏数据完整性
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                             <row>
                                 <i-col span="24" class="visit-tr text-left">
                                    应采用加密或其他有效措施实现系统管理数据、鉴别信息和重要业务数据传输保密性
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应采用加密或其他保护措施实现系统管理数据、鉴别信息和重要业务数据存储保密性
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对重要通信提供专用通信协议或安全通信协议服务，避免来自基于通用协议的攻击破坏数据保密性
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                             <row>
                                 <i-col span="24" class="visit-tr text-left">
                                    应提供本地数据备份与恢复功能，完全数据备份至少每天一次，备份介质场外存放
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立异地灾难备份中心，配备灾难恢复所需的通信线路、网络设备和数据处理设备，提供业务应用的实时无缝切换
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应采用冗余技术设计网络拓扑结构，避免关键节点存在单点故障
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应提供异地实时备份功能，利用通信网络将数据实时备份至灾难备份中心
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
                                    <checkbox v-model="technology.tech_4_fdc03384a0fbdfef66af15d7b28993a7"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_b9f137837cd7b8340d141a33d9081226"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_7da0ad5c4f0cf8cea729d99427f52da5"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                             <row>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_0b26ac6ea674596909269808eb7f8f75"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_cb327008b5fe201af9e484f9e3f270a6"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_d0e070ae51e07b8178e195ff69c63465"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                             <row>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_551421c68b5a3448f7af164aa4d6a792"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_79f74f905891b698a74b6f883f7386ea"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="technology.tech_4_6eb7d7a4cae409663cd75ff3b3192ef2"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="technology.tech_4_ed6c22ce560dc69a9786a88ba9233400"></checkbox>
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
              tech_4_e5b57a55f70856c81a40c7b525cdded6:false,
              tech_4_7dcd3ba2d92770cdba20d75df2bcbf5d:false,
              tech_4_94b8f70eb2f4c6b77072172e415b3797:false,
              tech_4_c0a693e717ad8db2f6ed592b0b9e40ff:false,
              tech_4_5aa9876f4ea24e2a24b7d96f8e21f072:false,
              tech_4_24c0b1026dee899c8144d0ac46740d67:false,
              tech_4_b84d9b4c81d8329fe18be2b2f598e0e2:false,
              tech_4_58b5521a03185d6599ea2993039e2ec2:false,
              tech_4_b4bbfa71b377eb9cf0f71f42bf3df76b:false,
              tech_4_51c7164a29ed74e48bdb3f6f037a8d43:false,
              tech_4_505d1423446b0a2b88f3183dd3f84eeb:false,
              tech_4_5f66286097ae0d7c1ae4517215a886ce:false,
              tech_4_1e6ea84aff15e04530304c6c9a73d1b4:false,
              tech_4_83fa74a1e7ed1f0db00c4700c6d59f3b:false,
              tech_4_073853a7b1da359a4d43bd216e92861e:false,
              tech_4_afcf135789ccd6a479706cdf2436d88b:false,
              tech_4_1b51dc2d4ed3bbe71728c25d7f6d0f76:false,
              tech_4_54fa492902e364a6f551c0e093ec7729:false,
              tech_4_646a0c8b530e86fb0c537f6699235b0e:false,
              tech_4_0882d21670d70557ef9c232e821ace4d:false,
              tech_4_1c307f5f1915d547a7b71e985f91eb4c:false,
              tech_4_efdb1ad253ca31c0970165319f6ee9f9:false,
              tech_4_53eac9565188c5879453c491cbf92dde:false,
              tech_4_8fc1d78fdcae8ff64757cdb234efd7ec:false,
              tech_4_0e785ac527e346129630a0205fe1219d:false,
              tech_4_48f8e4aa7e35edba07c55aeaf4d229de:false,
              tech_4_1caf718db55f75ddcede3e2783077008:false,
              tech_4_39c654050dc969eb29dedfb5e2ec26cc:false,
              tech_4_41486591ac6545414b5c0403534cf98f:false,
              tech_4_3dc981337dfcd8d4e20ec64d0026e5c4:false,
              tech_4_729ada3391b3a61fef5f648a1fd3f91a:false,
              tech_4_c5f4ac43417d67783b848281790712ad:false,
              tech_4_3e132cd59946e9b74b8ed4362d01a8b2:false,
              tech_4_e1ad1364c045ae1aaf180982943d9134:false,
              tech_4_7ed7de822f3dbdfc439c0469086122e0:false,
              tech_4_0b2e94a14886b2e2f246bc5557169e3f:false,
              tech_4_1ad553f870d68087b2ca3f9ef2e5a7a8:false,
              tech_4_e60d7bcd759c591e4b5daba040277cfe:false,
              tech_4_0b0c45967439096c13eb3984ab080f08:false,
              tech_4_ed0480999b5ab062393cf85ec653284c:false,
              tech_4_7fc3befd6909ddb524b0bac0f79bd4a9:false,
              tech_4_c0f0862f05d7c5c6b8ac66fba4f32c54:false,
              tech_4_6d989b8bbfb8f2bf5db3f96e40e79b05:false,
              tech_4_024559e738a2d273ffa0ce6418db1c4c:false,
              tech_4_0cfe7f0258357519ef9101c41688f963:false,
              tech_4_67c6dad22ece5fc258ba0ba263ac7348:false,
              tech_4_22e40b9ed32d006b86f53730ba6ad0d4:false,
              tech_4_85922139bdb23708391e935ede1778bd:false,
              tech_4_e35b0a6add802f4d9ec781e0f1da1d04:false,
              tech_4_c84029b29eeba53ac683f6827ec640a7:false,
              tech_4_21ad3934a3978d92474f59d91e67e61d:false,
              tech_4_779c3a9c539d63b10240ddfe5ae8afc8:false,
              tech_4_58f8260e48b5c66b0474844f287424f0:false,
              tech_4_6143c17cee973d6bb8a96f1b653e9b86:false,
              tech_4_02e22ef93ed2027c13cdcd2a4e56022f:false,
              tech_4_9f08aa10be9f2752fb43e6fba87635c7:false,
              tech_4_016b9d319fb231c13b4f6a04ec154ce9:false,
              tech_4_9d7927bd8dcb6d745fb9b71a413cff25:false,
              tech_4_c2182b9a4318c0bcd5a8140b07b6daa8:false,
              tech_4_87224ed46306cda7135226d668efaeef:false,
              tech_4_8a29e81f6682e2ff4544fd845e5c5fc5:false,
              tech_4_b7bacb714c295f8d5606acbbbe66d7b3:false,
              tech_4_f51546c505fd011d35a7d971cd8ecc6a:false,
              tech_4_59c8d49719b143604d2dcc7bf06ed03d:false,
              tech_4_cbdf9f79e94b61844a7e8bb4e2036b7f:false,
              tech_4_e0700418373bb6279d1bdc642c4c08c0:false,
              tech_4_4cd45c449016cfeb62bca6909f9c3740:false,
              tech_4_37243a4c0ffddca5e701abd4298addf5:false,
              tech_4_3860781a17028df9214246adfc7bfafc:false,
               tech_4_3e830a8c146ed4e461ddc612f6878773:false,
              tech_4_e8d0fee3e2a46b582ea400f0534f6112:false,
              tech_4_48a9d9411b1fab9914530560f9bfe868:false,
              tech_4_20a74ac007edf7779b84d446b5ef4910:false,
              tech_4_b23df1a4fdde5ac9a1ffad076f3f12ae:false,
              tech_4_839cd9df3300fa110c2ac326da9f1457:false,
              tech_4_1be1b639edda223cf70094686f28ddb7:false,
              tech_4_8c31c108ecef183f6bb56be2a6af0e10:false,
              tech_4_b70559a65a607ae9c110a9b426889560:false,
              tech_4_6a4e40e359ea8f75c8288d71184b8cd7:false,
              tech_4_87b10f1d1f4e94477a0284d387d90508:false,
              tech_4_a7d32890ed089dee7adb346bd7a4ec64:false,
              tech_4_f8e5ec9314baf20e6868a5629521eacb:false,
              tech_4_01e44b2fc6f38afe8a022056549e731d:false,
              tech_4_375bef6f9b1824870d10fa126b7c0463:false,
              tech_4_17aba70d2736236857f49ea87dd0a91a:false,
              tech_4_b08e59e7db169b6496353f3e064240f3:false,
              tech_4_708f8771cea17673b251daa09e2becf8:false,
              tech_4_3b0d33942072c3e6af565c3640e0e006:false,
              tech_4_6083ac262c3b067bd24877d0281665ad:false,
              tech_4_f35071975cf085d51bb54cde6fa067e4:false,
              tech_4_b571845403091994600dace74ea09325:false,
             tech_4_0c5b2ce703c07d3ff75e59d2fbb61d6e:false,
             tech_4_c2aed29667653c002310699a7dc912fa:false,
             tech_4_45d1b51805d9235fcda0e1adb04b219a:false,
             tech_4_12803640cfd61acd1ecb018d66a483df:false,
             tech_4_b5eab036092551401cf6c3424f2875cc:false,
             tech_4_7d584df39c2e11ab18d0fa94748b2a07:false,
             tech_4_aaca964b489e8696008ee34b405e0611:false,
             tech_4_cd9ccba5a562f730096ab4c7f006bc42:false,
             tech_4_22fb62899529e6c0e587967cd32880f2:false,
             tech_4_e34235044f31e0f9c801c8cdde2f6f06:false,
             tech_4_4b35880c8e4544a91d46eaaeb60bc829:false,
             tech_4_52ae33837406384779b51a5ff53e9dc5:false,
             tech_4_56c03d94e564bf08f44237c5ff23ee2e:false,
             tech_4_8ec8bb169e944239d32283e88568c84d:false,
             tech_4_3182b80f97e8de16dd21f8a944da8dda:false,
             tech_4_ed5fe3e68332d195927b63971f82e704:false,
             tech_4_73c851730a6a8616e3cd1764b8533a6a:false,
             tech_4_ff50a8390c0875a616220ab18e140552:false,
             tech_4_708b59a0d66ba369efb784c476b923e4:false,
             tech_4_849dde28910d5940e092fba7e3b648a6:false,
             tech_4_ea1618e7a8ddf6b866bb11011bb3e611:false,
             tech_4_cbdbece0902e891474ff20a4cf883165:false,
             tech_4_1bb2beb479693568ac36e0bfd8a1b07e:false,
             tech_4_bfe5068dcda314f156078eef4fc007cf:false,
             tech_4_6da570ae0fbc060a33e69816af469eac:false,
             tech_4_d3350364667cc19d3799b4b52aa4bc06:false,
             tech_4_a0c114b247b805d08f81bbeb8b8583a4:false,
             tech_4_1b92d86416361c3b7786555ba8f3a3f3:false,
             tech_4_9b0962f78513067e7f5ebee29f0f8819:false,
             tech_4_4e9c89595fdfbec8eea0d35d9b9e1587:false,
             tech_4_c125b7b394420d6cb5f16a709fbb0093:false,
             tech_4_6a3ec74413d83f71569b801b5ffe1b73:false,
             tech_4_120eab8ffbbdae6612935a330225fcd5:false,
             tech_4_a7fe621869806ab654b59a1060f45387:false,
             tech_4_746972ed654b139b11bb4233edd7d001:false,
             tech_4_88de033f0b976e7736b28a8247ed43e3:false,
             tech_4_8b12a2cf9a0c9eec064b9c09a1ebf95c:false,
             tech_4_03e6c66a502fced69f6349253d99ea9b:false,
             tech_4_668c380ad56aa1fdadcbb57592efe90e:false,
             tech_4_47fdc19c5cbb9cfcc53168ffa0889c9b:false,
             tech_4_58eb95a1746bf374cbf7d724ddfb354a:false,
             tech_4_fa58b5bf97b0564ee4138f424166e29f:false,
             tech_4_b57d2a5f7ac9692376d057cd81d37258:false,
             tech_4_9adf853b0124231350edbc63b206040f:false,
             tech_4_d77d4e07ecfd02dca214aba2720f9b09:false,
             tech_4_b0b199471b6794e49263437c498ab3d8:false,
             tech_4_b757918196e2dd4ef7e24ea012d953f7:false,
             tech_4_25ddcd8443f3c0bc0bd62073636117ff:false,
             tech_4_9e792858130c71d38f5d2b773dc5b647:false,
             tech_4_fdc03384a0fbdfef66af15d7b28993a7:false,
             tech_4_b9f137837cd7b8340d141a33d9081226:false,
             tech_4_7da0ad5c4f0cf8cea729d99427f52da5:false,
             tech_4_0b26ac6ea674596909269808eb7f8f75:false,
             tech_4_cb327008b5fe201af9e484f9e3f270a6:false,
             tech_4_d0e070ae51e07b8178e195ff69c63465:false,
             tech_4_551421c68b5a3448f7af164aa4d6a792:false,
             tech_4_79f74f905891b698a74b6f883f7386ea:false,
             tech_4_6eb7d7a4cae409663cd75ff3b3192ef2:false,
             tech_4_ed6c22ce560dc69a9786a88ba9233400:false
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