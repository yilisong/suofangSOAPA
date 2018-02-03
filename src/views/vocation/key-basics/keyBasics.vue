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
        <div class="service-header">一等级管理要求：</div>
        <div class="technology-table">
            <row class="table-header">
                <i-col span="6" class="br">分类</i-col>
                <i-col span="15" class="br">基本要求</i-col>
                <i-col span="3">达标情况</i-col>
            </row>
            <row class="table-physics">
                <i-col span="6">
                    <row>
                        <i-col span="4" class="physics-name">安全管理制度</i-col>
                        <i-col span="20">
                            <row class="physics-type">
                                <i-col span="24" class="physics-tr">管理制度</i-col>
                                <i-col span="24" class="issue-tr-name">制定和发布</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="physics-tr text-left">应建立日常管理活动中常用的安全管理制度</i-col>
                        <i-col span="24" class="issue-tr">
                            <row>
                                <i-col span="24" class="formulate-tr text-left">应指定或授权专门的人员负责安全管理制度的制定</i-col>
                                <i-col span="24" class="formulate-tr-last text-left">应将安全管理制度以某种方式发布到相关人员手中</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24" class="physics-tr">
                            100
                        </i-col>
                        <i-col span="24" class="issue-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="formulate-tr-last">
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
                        <i-col span="4" class="physics-name">安全管理机构</i-col>
                        <i-col span="20">
                            <row class="physics-type">
                                <i-col span="24" class="physics-tr">岗位设置</i-col>
                                <i-col span="24" class="physics-tr">人员配备</i-col>
                                <i-col span="24" class="visit-tr">授权和审批</i-col>
                                <i-col span="24" class="physics-tr-last">沟通和合作</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="physics-tr text-left">应设立系统管理员、网络管理员、安全管理员等岗位，并定义各个工作岗位的职责</i-col>
                        <i-col span="24" class="physics-tr text-left">应配备一定数量的系统管理员、网络管理员、安全管理员等</i-col>
                        <i-col span="24" class="visit-tr text-left">
                            应根据各个部门和岗位的职责明确授权审批部门及批准人，对系统投入运行、网络系统接入和重要资源的访问等关键活动进行审批
                        </i-col>
                        <i-col span="24" class="physics-tr-last text-left">应加强与兄弟单位、公安机关、电信公司的合作与沟通</i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24" class="physics-tr">
                            100
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            100
                        </i-col>
                        <i-col span="24" class="visit-tr">
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
                        <i-col span="4" class="physics-name">人员安全管理</i-col>
                        <i-col span="20">
                            <row class="physics-type">
                                <i-col span="24" class="employ-tr-name">人员录用</i-col>
                                <i-col span="24" class="employ-tr-name">人员离岗</i-col>
                                <i-col span="24" class="employ-tr-name">安全意识教育和培训</i-col>
                                <i-col span="24" class="physics-tr-last">外部人员访问管理</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr text-left">应指定或授权专门的部门或人员负责人员录用</i-col>
                                <i-col span="24" class="visit-tr text-left">应对被录用人员的身份和专业资格等进行审查，并确保其具有基本的专业技术水平和安全管理知识</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr text-left">应立即终止由于各种原因离岗员工的所有访问权限</i-col>
                                <i-col span="24" class="visit-tr text-left">应取回各种身份证件、钥匙、徽章等以及机构提供的软硬件设备</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr text-left">应对各类人员进行安全意识教育和岗位技能培训</i-col>
                                <i-col span="24" class="visit-tr text-left">应告知人员相关的安全责任和惩戒措施</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr-last text-left">应确保在外部人员访问受控区域前得到授权或审</i-col>
                    </row>
                </i-col>
                <i-col span="3">
                     <row>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    100
                                </i-col>
                            </row>
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
                        <i-col span="4" class="physics-name">系统建设管理</i-col>
                        <i-col span="20">
                            <row class="physics-type">
                                <i-col span="24" class="network-structure">系统定级</i-col>
                                <i-col span="24" class="network-structure">安全方案设计</i-col>
                                <i-col span="24" class="physics-tr">产品采购和使用</i-col>
                                <i-col span="24" class="physics-tr-steal">自行软件开发</i-col>
                                <i-col span="24" class="network-structure">外包软件开发</i-col>
                                <i-col span="24" class="physics-tr">工程实施</i-col>
                                <i-col span="24" class="visit-tr">测试验收</i-col>
                                <i-col span="24" class="network-structure">系统交付</i-col>
                                <i-col span="24" class="service-tr-name">安全服务商选择</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应明确信息系统的边界和安全保护等级</i-col>
                                <i-col span="24" class="physics-tr text-left">应以书面的形式说明信息系统确定为某个安全保护等级的方法和理由</i-col>
                                <i-col span="24" class="physics-tr text-left">应确保信息系统的定级结果经过相关部门的批准</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应根据系统的安全保护等级选择基本安全措施，依据风险分析的结果补充和调整安全措施</i-col>
                                <i-col span="24" class="physics-tr text-left">应以书面的形式描述对系统的安全保护要求和策略、安全措施等内容，形成系统的安全方案</i-col>
                                <i-col span="24" class="physics-tr text-left">应对安全方案进行细化，形成能指导安全系统建设、安全产品采购和使用的详细设计方案</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr text-left">应确保安全产品采购和使用符合国家的有关规定</i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应确保开发环境与实际运行环境物理分开</i-col>
                                <i-col span="24" class="physics-tr text-left">应确保软件设计相关文档由专人负责保管</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应根据开发要求检测软件质量</i-col>
                                <i-col span="24" class="physics-tr text-left">应在软件安装之前检测软件包中可能存在的恶意代码</i-col>
                                <i-col span="24" class="physics-tr text-left">应确保提供软件设计的相关文档和使用指南</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr text-left">应指定或授权专门的部门或人员负责工程实施过程的管理</i-col>
                        <i-col span="24" class="visit-tr text-left">
                            应对系统进行安全性测试验收，在测试验收前应根据设计方案或合同要求等制订测试验收方案，在测试验收过程中应详细记录测试验收结果，并形成测试验收报告
                        </i-col>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应制定系统交付清单，并根据交付清单对所交接的设备、软件和文档等进行清点</i-col>
                                <i-col span="24" class="physics-tr text-left">应对负责系统运行维护的技术人员进行相应的技能培训</i-col>
                                <i-col span="24" class="physics-tr text-left">应确保提供系统建设过程中的文档和指导用户进行系统运行维护的文档</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应确保安全服务商的选择符合国家的有关规定</i-col>
                                <i-col span="24" class="physics-tr-last text-left">应确保软件设计相关文档由专人负责保管</i-col>
                            </row>
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
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-control">
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
                        <i-col span="24" class="physics-tr">
                            100
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            100
                        </i-col>
                        <i-col span="24" class="network-control">
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
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="physics-tr-last">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
            </row>
            <row>
                <i-col span="6">
                    <row>
                        <i-col span="4" class="physics-name">系统运维管理</i-col>
                        <i-col span="20">
                            <row class="physics-type">
                                <i-col span="24" class="network-structure">环境管理</i-col>
                                <i-col span="24" class="visit-tr">资产管理</i-col>
                                <i-col span="24" class="physics-tr-steal">介质管理</i-col>
                                <i-col span="24" class="employ-tr-name">设备管理</i-col>
                                
                                <!-- <i-col span="24" class="network-structure">安全方案设计</i-col>
                                <i-col span="24" class="physics-tr">产品采购和使用</i-col>
                                <i-col span="24" class="physics-tr-steal">自行软件开发</i-col>
                                <i-col span="24" class="network-structure">外包软件开发</i-col>
                                <i-col span="24" class="physics-tr">工程实施</i-col>
                                <i-col span="24" class="visit-tr">测试验收</i-col>
                                <i-col span="24" class="network-structure">系统交付</i-col>
                                <i-col span="24" class="service-tr-name">安全服务商选择</i-col> -->
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应指定专门的部门或人员定期对机房供配电、空调、温湿度控制等设施进行维护管理</i-col>
                                <i-col span="24" class="physics-tr text-left">应对机房的出入、服务器的开机或关机等工作进行管理</i-col>
                                <i-col span="24" class="physics-tr text-left">应建立机房安全管理制度，对有关机房物理访问，物品带进、带出机房和机房环境安全等方面的管理作出规定</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr text-left">应编制与信息系统相关的资产清单，包括资产责任部门、重要程度和所处位置等内容</i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应确保介质存放在安全的环境中，对各类介质进行控制和保护</i-col>
                                <i-col span="24" class="physics-tr text-left">应对介质归档和查询等过程进行记录，并根据存档介质的目录清单定期盘点</i-col>
                            </row>
                        </i-col>
                        <!-- <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应根据系统的安全保护等级选择基本安全措施，依据风险分析的结果补充和调整安全措施</i-col>
                                <i-col span="24" class="physics-tr text-left">应以书面的形式描述对系统的安全保护要求和策略、安全措施等内容，形成系统的安全方案</i-col>
                                <i-col span="24" class="physics-tr text-left">应对安全方案进行细化，形成能指导安全系统建设、安全产品采购和使用的详细设计方案</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr text-left">应确保安全产品采购和使用符合国家的有关规定</i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应确保开发环境与实际运行环境物理分开</i-col>
                                <i-col span="24" class="physics-tr text-left">应确保软件设计相关文档由专人负责保管</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应根据开发要求检测软件质量</i-col>
                                <i-col span="24" class="physics-tr text-left">应在软件安装之前检测软件包中可能存在的恶意代码</i-col>
                                <i-col span="24" class="physics-tr text-left">应确保提供软件设计的相关文档和使用指南</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr text-left">应指定或授权专门的部门或人员负责工程实施过程的管理</i-col>
                        <i-col span="24" class="visit-tr text-left">
                            应对系统进行安全性测试验收，在测试验收前应根据设计方案或合同要求等制订测试验收方案，在测试验收过程中应详细记录测试验收结果，并形成测试验收报告
                        </i-col>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应制定系统交付清单，并根据交付清单对所交接的设备、软件和文档等进行清点</i-col>
                                <i-col span="24" class="physics-tr text-left">应对负责系统运行维护的技术人员进行相应的技能培训</i-col>
                                <i-col span="24" class="physics-tr text-left">应确保提供系统建设过程中的文档和指导用户进行系统运行维护的文档</i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应确保安全服务商的选择符合国家的有关规定</i-col>
                                <i-col span="24" class="physics-tr-last text-left">应确保软件设计相关文档由专人负责保管</i-col>
                            </row>
                        </i-col> -->
                    </row>
                </i-col>
                <!-- <i-col span="3">
                    <row>
                        <i-col span="24" class="network-control">
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
                        <i-col span="24" class="network-control">
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
                        <i-col span="24" class="physics-tr">
                            100
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            100
                        </i-col>
                        <i-col span="24" class="network-control">
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
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="physics-tr-last">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col> -->
            </row>
        </div>
    </div>
</template>