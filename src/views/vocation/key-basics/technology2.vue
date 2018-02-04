<style lang="less">
    @import 'keyBasics.less';
</style>
<template>
    <div class="self-assessment">
        <div class="service-header"> 
            <span>XXX</span>
            系统的业务信息安全保护等级为X级，系统服务安全保护等级为
            <span>1</span>级，安全保护等级为
            <span>2</span>级
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
                            100
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            100
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            100
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            100
                        </i-col>
                        <i-col span="24" class="physics-tr-last">
                            100
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
                                    100
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr-es">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr-last-case">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit-last">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr-es">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr-last-case">
                                    100
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
                            100
                        </i-col>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    100
                                </i-col>

                            </row>
                        </i-col>
                        <i-col span="24" class="precaution-tr">
                            <i-col span="24"> 
                                100
                            </i-col>
                        </i-col>
                        <i-col span="24" class="precaution-tr-last">
                            <i-col span="24"> 
                                100
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
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="precaution-tr">
                            100
                        </i-col>
                        <i-col span="24" class="precaution-tr-last">
                            100
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
                            100
                        </i-col>
                        <i-col span="24" class="back-recover">
                            100
                        </i-col>
                    </row>
                </i-col>
            </row>
        </div>
    </div>
</template>