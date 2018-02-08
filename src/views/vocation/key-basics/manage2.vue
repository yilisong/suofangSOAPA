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
        <div class="service-header">二等级管理要求：</div>
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
                                <i-col span="24" class="network-visit">管理制度</i-col>
                                <i-col span="24" class="network-structure">制定和发布</i-col>
                                <i-col span="24" class="physics-tr-last">评审与修订</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="network-visit text-left">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定信息安全工作的总体方针和安全策略，说明机构安全工作的总体目标、范围、原则和安全框架等
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应对安全管理活动中重要的管理内容建立安全管理制度
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应对安全管理人员或操作人员执行的重要管理操作建立操作规程
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应指定或授权专门的部门或人员负责安全管理制度的制定
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应组织相关人员对制定的安全管理制度进行论证和审定
                                </i-col>
                                <i-col span="24" class="physics-tr-last text-left">
                                    应将安全管理制度以某种方式发布到相关人员手中
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr-last text-left">
                            应定期对安全管理制度进行评审，对存在不足或需要改进的安全管理制度进行修订
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_1784702f03a7a2deb07cc38a4e6a7676"></checkbox> 
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_df1603f3d33ef73d15f0bb83eb80d3cd"></checkbox> 
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="management.manage_2_11501e98f8cd56d243e091120fd9f6eb"></checkbox> 
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_0284a53b1891d3ecbbbf5e2355c88aab"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_552d97a7b00a3839605c06abd834bdde"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr-last">
                                    <checkbox v-model="management.manage_2_2391143d958c842fff389fcd3cd37ac5"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr-last">
                            <checkbox v-model="management.manage_2_a22be5172def81a1db804f0ce526334d"></checkbox>
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
                                <i-col span="24" class="network-structure">岗位设置</i-col>
                                <i-col span="24" class="network-structure">人员配备</i-col>
                                <i-col span="24" class="network-structure">授权和审批</i-col>
                                <i-col span="24" class="network-structure">沟通和合作</i-col>
                                <i-col span="24" class="visit-tr-last">审核和检查</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="network-structure text-left">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应设立安全主管、安全管理各个方面的负责人岗位，并定义各负责人的职责
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应设立系统管理员、网络管理员、安全管理员等岗位，并定义各个工作岗位的职责
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure text-left">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应配备一定数量的系统管理员、网络管理员、安全管理员等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    安全管理员不能兼任网络管理员、系统管理员、数据库管理员等
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure text-left">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据各个部门和岗位的职责明确授权审批部门及批准人，对系统投入运行、网络系统接入和重要资源的访问等关键活动进行审批 
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应针对关键活动建立审批流程，并由批准人签字确认
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure text-left">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应加强各类管理人员之间、组织内部机构之间以及信息安全职能部门内部的合作与沟通 
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应加强与兄弟单位、公安机关、电信公司的合作与沟通
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr-last text-left">
                            安全管理员应负责定期进行安全检查，检查内容包括系统日常运行、系统漏洞和数据备份等情况
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_ede1613bcb0eab321d530dfe71218407"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_0acaae47ebcd6bec3f2e79b7d0957ff5"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_90a1b26319d44f4e9597ff2f1fe80afa"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_12012c9654f083be2f3d0d6c8e24419c"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_401cb301075be62e8c99c1b9ff18047b"></checkbox> 
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_c1dc10fb1f793f5c1c4d0ae72668eb31"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_f0768c25af1e13d5af63f82b678171cc"></checkbox> 
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_21a1c824ac39a7b9d01d2180342e58e1"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr-last">
                            <checkbox v-model="management.manage_2_9c12977d0ee8bc7bc2907fe3ae86c1ce"></checkbox>
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
                                <i-col span="24" class="network-visit">人员录用</i-col>
                                <i-col span="24" class="network-visit">人员离岗</i-col>
                                <i-col span="24" class="physics-tr">人员考核</i-col>
                                <i-col span="24" class="network-visit">安全意识教育和培训</i-col>
                                <i-col span="24" class="physics-tr-last">外部人员访问管理</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定或授权专门的部门或人员负责人员录用
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应规范人员录用过程，对被录用人员的身份、背景和专业资格等进行审查，对其所具有的技术技能进行考核
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应与从事关键岗位的人员签署保密协议
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应规范人员离岗过程，及时终止离岗员工的所有访问权限
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应取回各种身份证件、钥匙、徽章等以及机构提供的软硬件设备
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应办理严格的调离手续
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr text-left">
                            应定期对各个岗位的人员进行安全技能及安全认知的考核
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应对各类人员进行安全意识教育、岗位技能培训和相关安全技术培训
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应告知人员相关的安全责任和惩戒措施，并对违反违背安全策略和规定的人员进行惩戒
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应制定安全教育和培训计划，对信息安全基础知识、岗位操作规程等进行培训
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr-last text-left">
                            应确保在外部人员访问受控区域前得到授权或审批，批准后由专人全程陪同或监督，并登记备案
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                     <row>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_e9d1eae819bd91d183cc90b2d34c4852"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_8ea54bb8667c225d8c0a8f5c3db94955"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_fae283fe48f9f05a55c7e180ec8699ee"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_3a383b41b3fb0ca600d1aa0aaeadcb1a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_be14cfe0e2fc00e3ae156c923b5050e1"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_7df4f19a1c8ab3ba59ce256cd339b75c"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="management.manage_2_573556ac1861d2c80afee3792df1b908"></checkbox>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_874597474ec6e42287c373525d53fcbd"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_094d6924073fe60f1c325d87f499d289"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_d76a69f3566886f4c6d27c974b64e129"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="management.manage_2_9ed1b2494ffcc27b38c17c8da6b64ec2"></checkbox>
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
                                <i-col span="24" class="network-design">安全方案设计</i-col>
                                <i-col span="24" class="network-structure">产品采购和使用</i-col>
                                <i-col span="24" class="network-visit">自行软件开发</i-col>
                                <i-col span="24" class="network-design">外包软件开发</i-col>
                                <i-col span="24" class="physics-tr-steal">工程实施</i-col>
                                <i-col span="24" class="network-visit">测试验收</i-col>
                                <i-col span="24" class="network-visit">系统交付</i-col>
                                <i-col span="24" class="network-visit-last">安全服务商选择</i-col>
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
                        <i-col span="24" class="design-tr">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据系统的安全保护等级选择基本安全措施，依据风险分析的结果补充和调整安全措施
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应以书面的形式描述对系统的安全保护要求和策略、安全措施等内容，形成系统的安全方案
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对安全方案进行细化，形成能指导安全系统建设、安全产品采购和使用的详细设计方案
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应组织相关部门和有关安全技术专家对安全设计方案的合理性和正确性进行论证和审定，并且经过批准后，才能正式实施
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应确保安全产品采购和使用符合国家的有关规定
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应确保密码产品采购和使用符合国家密码主管部门的要求
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应指定或授权专门的部门负责产品的采购
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应确保开发环境与实际运行环境物理分开
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保提供软件设计的相关文档和使用指南，并由专人负责保管
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定软件开发管理制度，明确说明开发过程的控制方法和人员行为准则
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="design-tr">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据开发要求检测软件质量
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应在软件安装之前检测软件包中可能存在的恶意代码
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保提供软件设计的相关文档和使用指南
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应要求开发单位提供软件源代码，并审查软件中可能存在的后门
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应指定或授权专门的部门或人员负责工程实施过程的管理
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应制定详细的工程实施方案，控制工程实施过程
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应对系统进行安全性测试验收
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    在测试验收前应根据设计方案或合同要求等制订测试验收方案，在测试验收过程中应详细记录测试验收结果，并形成测试验收报告
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应组织相关部门和相关人员对系统测试验收报告进行审定，并签字确认
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定系统交付清单，并根据交付清单对所交接的设备、软件和文档等进行清点
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应对负责系统运行维护的技术人员进行相应的技能培训
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保提供系统建设过程中的文档和指导用户进行系统运行维护的文档
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应确保安全服务商的选择符合国家的有关规定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应与选定的安全服务商签订与安全相关的协议，明确约定相关责任
                                </i-col>
                                
                                <i-col span="24" class="visit-tr-last text-left">
                                    应确保选定的安全服务商提供技术支持和服务承诺，必要的与其签订服务合同
                                </i-col>
                            </row>
                        </i-col>
                    </row> 
                </i-col>
                <i-col span="3">
                    <row>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_3e7810971bd64c16c3d7e1cc1e60f531"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_75863819c2c6a33959e7117cecedf582"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_bc827454956c16867166ab8331d67118"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="design-tr">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_66a1f16743a91b24fe6844b17872a430"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_3550dc3140f97b9369aef7bb80b29e58"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_e0ab6ee2ecef6405de65d7f498b885ac"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_6aefb8550b43854c8469e916406ca15e"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_e32678ef5c68343293c8a9bb11a71860"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_e07847847dc9633438c176d82f36c6e5"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_37337734ab902297bf8060236df54432"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_fe4ade2516985ebc7d328cf2729c71fb"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_a5ea40bde1d5bd6b43ce3e3bb807d538"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_b52f5f9287e9e0579a61440528186569"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="design-tr">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_2dbb880d5a9f9a98599a90b58dc63e35"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_4a6f4d2a223dd0cbd58fa3391eba3566"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_659b66e1c96f72fd43653213283dad6c"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_93a3ba7ea9664bb78a75c6cfcb5ad086"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_1d5848c20332b61028c2dae44d381bdc"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_6b94e44d42f119a626e2268fd056969a"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_ed15a7655b9bcb9771353155ef8589d4"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_99e1bad3d907129c1ee3a57950bc0c3a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_432c059aaf53700a850b48b27b70cd97"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-visit">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_e78f3dbdc334dd8fa7d29bc576a4b20a"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_adb9e9ce1f5caff3eb25293577d1d982"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_19c44d698075302681e9d1d130b215b0"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_bbf6746909a10ea06b5bf90da3febe75"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_411923a861d031194161faf46e18bbc6"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="management.manage_2_d9b06ee39794d7ba5009e48973557e7d"></checkbox>
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
                                <i-col span="24" class="environment-tr">环境管理</i-col>
                                <i-col span="24" class="network-structure">资产管理</i-col>
                                <i-col span="24" class="network-design">介质管理</i-col>
                                <i-col span="24" class="network-design">设备管理</i-col>
                                <i-col span="24" class="network-tr-steal">网络安全管理</i-col>
                                <i-col span="24" class="network-tr-steal">系统安全管理</i-col>
                                <i-col span="24" class="precaution-tr-steal">恶意代码防范管理</i-col>
                                <i-col span="24" class="physics-tr">密码管理</i-col>
                                <i-col span="24" class="network-structure">密码管理</i-col>
                                <i-col span="24" class="network-visit">备份与恢复管理</i-col>
                                <i-col span="24" class="network-design">安全事件处置</i-col>
                                <i-col span="24" class="network-structure-last">应急预案管理</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定专门的部门或人员定期对机房供配电、空调、温湿度控制等设施进行维护管理
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应对机房的出入、服务器的开机或关机等工作进行管理
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应配备机房安全管理人员，对机房的出入、服务器的开机或关机等工作进行管理
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立机房安全管理制度，对有关机房物理访问，物品带进、带出机房和机房环境安全等方面的管理作出规定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应加强对办公环境的保密性管理，包括工作人员调离办公室应立即交还该办公室钥匙和不在办公区接待来访人员等
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应编制与信息系统相关的资产清单，包括资产责任部门、重要程度和所处位置等内容
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立资产安全管理制度，规定信息系统资产管理的责任人员或责任部门，并规范资产管理和使用的行为
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保介质存放在安全的环境中，对各类介质进行控制和保护，并实行存储环境专人管理
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对介质归档和查询等过程进行记录，并根据存档介质的目录清单定期盘点
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    d ) 应对需要送出维修或销毁的介质，首先清除其中的敏感数据，防止信息的非法泄漏
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据所承载数据和软件的重要程度对介质进行分类和标识管理
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应对信息系统相关的各种设备（包括备份和冗余设备）、线路等指定专门的部门或人员定期进行维护管理
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立基于申报、审批和专人负责的设备安全管理制度，对信息系统的各种软硬件设备的选型、采购、发放和领用等过程进行规范化管理
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    d )	应对终端计算机、工作站、便携机、系统和网络等设备的操作和使用进行规范化管理，按操作规程实现关键设备（包括备份和冗余设备）的启动/停止、加电/断电等操作
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保信息处理设备必须经过审批才能带离机房或办公地点
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定人员对网络进行管理，负责运行日志、网络监控记录的日常维护和报警信息分析和处理工作
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定人员对网络进行管理，负责运行日志、网络监控记录的日常维护和报警信息分析和处理工作
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应根据厂家提供的软件升级版本对网络设备进行更新，并在更新前对现有的重要文件进行备份
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期进行网络系统漏洞扫描，对发现的网络系统安全漏洞进行及时的修补
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对网络设备的配置文件进行定期备份
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应保证所有与外部系统的连接均得到授权和批准
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应根据业务需求和系统安全分析确定系统的访问控制策略
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期进行漏洞扫描，对发现的系统安全漏洞进行及时的修补
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应安装系统的最新补丁程序，在安装系统补丁前，应首先在测试环境中测试通过，并对重要文件进行备份后，方可实施系统补丁程序的安装
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立系统安全管理制度，对系统安全策略、安全配置、日志管理和日常操作流程等方面作出规定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应依据操作手册对系统进行维护，详细记录操作日志，包括重要的日常操作、运行维护记录、参数的设置和修改等内容，严禁进行未经授权的操作
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期对运行日志和审计数据进行分析，以便及时发现异常行为
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-keep text-left">
                                    应提高所有用户的防病毒意识，告知及时升级防病毒软件，
                                    在读取移动存储设备上的数据以及网络上接收文件或邮件之前，先进行病毒检查，对外来计算机或存储设备接入网络系统之前也应进行病毒检查
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定专人对网络和主机进行恶意代码检测并保存检测记录
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对防恶意代码软件的授权使用、恶意代码库升级、定期汇报等作出明确规定
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr text-left">
                            应使用符合国家密码管理规定的密码技术和产品
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应确认系统中要发生的重要变更，并制定相应的变更方案
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    系统发生重要变更前，应向主管领导申请，审批后方可实施变更，并在实施后向相关人员通告
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                 <i-col span="24" class="physics-tr text-left">
                                    应识别需要定期备份的重要业务信息、系统数据及软件系统等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应规定备份信息的备份方式、备份频度、存储介质、保存期等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据数据的重要性及其对系统运行的影响，制定数据的备份策略和恢复策略，备份策略指明备份数据的放置场所、
                                    文件命名规则、介质替换频率和数据离站运输方法
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应报告所发现的安全弱点和可疑事件，但任何情况下用户均不应尝试验证弱点
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定安全事件报告和处置管理制度，明确安全事件类型，规定安全事件的现场处理、事件报告和后期恢复的管理职责 
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                     应根据国家相关管理部门对计算机安全事件等级划分方法和安全事件对本系统产生的影响，对本系统计算机安全事件进行等级划分
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应记录并保存所有报告的安全弱点和可疑事件，分析事件原因，监督事态发展，采取措施避免安全事件发生
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应在统一的应急预案框架下制定不同事件的应急预案，应急预案框架应包括启动应急预案的条件、
                                    应急处理流程、系统恢复流程、事后教育和培训等内容
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应对系统相关的人员进行应急预案培训，应急预案的培训应至少每年举办一次
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
                                    <checkbox v-model="management.manage_2_8db141fd5e8dddb3594bed79ee674186"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_3081e48da42de1a396f8dda358d693fa"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_87d4a14708f6701983920a4935214408"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_14cdd5aad050d35790f96d974af2649c"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_b0d790be4030038e65446eccb5285493"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_d70335f3e47765777e97a6df470954f0"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_022ebe22cee25ff5e7265baecf4f6823"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_f6dfa8d9685a26c0ce81348d2d380a1a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_6c77bfc322ce2b72a8eaeacdefc0010a"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_d106b597c61dd89ecd5192abdeae31df"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_5a8a09546feec04fec419ef2094dd1df"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_3048060d9498288d2aeba3c4e5d5ba15"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_f576fc31ec07438895c5d9fb7c3d90ab"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_ded5b84ad13c7f0044ea755372d7ff6a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_10daef5bbe24a06a76c39e0896059840"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_1aeb980bd390f9be7a4bdc8b172ae828"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_b99f96d633ec4cca32b0a754440b7895"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_8693ffe9d14fec917e6bc618641c85cb"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_265a1c4bf93a596bef3040e3588568ea"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_f09ec45d260a7fca5aab0558b5d2548f"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_3e2eef05a784fc9001173922dea56e27"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_1ef6036e9d9b07e287a79750e6a5748b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_cd38778d09b32c7abb4095dce7ea3867"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_ab64611b27126aa5fa6bb00e14dbe770"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_026bf9a9ea41b6fd5769e531cd1bae57"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_df528b717c7728adcda5d76590a0b4f6"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_79b3a69dba14385b93aab9f443c3cb9a"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-keep">
                                    <checkbox v-model="management.manage_2_8630039b1afea0b842b6ab05ec0a1d89"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_b4b892f4057915c31a561ff3b100799a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_dedb98b74bce9f2f7eca72985ea9d7dd"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="management.manage_2_b60335b17cf3e4dc9066505fb35387df"></checkbox>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_62949930b8d807f9b832f866b0d7d471"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_cfde17279ef02f66b9ae0bd6e7b489ff"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                 <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_2_e9a856899df2c12b16c6c603fba4b411"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_9678e4390b701312c1ab922251b890c6"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                   <checkbox v-model="management.manage_2_4368285008630edf7778c66da254dcf4"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_5fff530e4e66488a3954d0e78de763d0"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_eed84aedfb5f487ff568e3f2f3cfa3b0"></checkbox> 
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                     <checkbox v-model="management.manage_2_1a92576ece35e4ff790e03e7dd647238"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_60acd3408e095622fc7f3fac372754c0"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_2_7864f4e8b0104e5c8e21e8af13ad6d09"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="management.manage_2_5fec878ecdcdf5b2511085585b08ed52"></checkbox>
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
export default{
    data () {
      return  {
          system_name: '',
          business_level: '',
          system_level: '',
          security_level: '',
        management: {
            manage_2_df1603f3d33ef73d15f0bb83eb80d3cd:false,
            manage_2_1784702f03a7a2deb07cc38a4e6a7676:false,
            manage_2_11501e98f8cd56d243e091120fd9f6eb:false,
            manage_2_0284a53b1891d3ecbbbf5e2355c88aab:false,
            manage_2_552d97a7b00a3839605c06abd834bdde:false,
            manage_2_2391143d958c842fff389fcd3cd37ac5:false,
            manage_2_a22be5172def81a1db804f0ce526334d:false,
            manage_2_ede1613bcb0eab321d530dfe71218407:false,
            manage_2_0acaae47ebcd6bec3f2e79b7d0957ff5:false,
            manage_2_90a1b26319d44f4e9597ff2f1fe80afa:false,
            manage_2_12012c9654f083be2f3d0d6c8e24419c:false,
            manage_2_401cb301075be62e8c99c1b9ff18047b:false,
            manage_2_c1dc10fb1f793f5c1c4d0ae72668eb31:false,
            manage_2_f0768c25af1e13d5af63f82b678171cc:false,
            manage_2_21a1c824ac39a7b9d01d2180342e58e1:false,
            manage_2_9c12977d0ee8bc7bc2907fe3ae86c1ce:false,
            manage_2_e9d1eae819bd91d183cc90b2d34c4852:false,
            manage_2_8ea54bb8667c225d8c0a8f5c3db94955:false,
            manage_2_fae283fe48f9f05a55c7e180ec8699ee:false,
            manage_2_3a383b41b3fb0ca600d1aa0aaeadcb1a:false,
            manage_2_be14cfe0e2fc00e3ae156c923b5050e1:false,
            manage_2_7df4f19a1c8ab3ba59ce256cd339b75c:false,
            manage_2_573556ac1861d2c80afee3792df1b908:false,
            manage_2_874597474ec6e42287c373525d53fcbd:false,
            manage_2_094d6924073fe60f1c325d87f499d289:false,
            manage_2_d76a69f3566886f4c6d27c974b64e129:false,
            manage_2_9ed1b2494ffcc27b38c17c8da6b64ec2:false,
            manage_2_3e7810971bd64c16c3d7e1cc1e60f531:false,
            manage_2_75863819c2c6a33959e7117cecedf582:false,
            manage_2_bc827454956c16867166ab8331d67118:false,
            manage_2_66a1f16743a91b24fe6844b17872a430:false,
            manage_2_3550dc3140f97b9369aef7bb80b29e58:false,
            manage_2_e0ab6ee2ecef6405de65d7f498b885ac:false,
            manage_2_6aefb8550b43854c8469e916406ca15e:false,
            manage_2_e32678ef5c68343293c8a9bb11a71860:false,
            manage_2_e07847847dc9633438c176d82f36c6e5:false,
            manage_2_37337734ab902297bf8060236df54432:false,
            manage_2_fe4ade2516985ebc7d328cf2729c71fb:false,
            manage_2_a5ea40bde1d5bd6b43ce3e3bb807d538:false,
            manage_2_b52f5f9287e9e0579a61440528186569:false,
            manage_2_2dbb880d5a9f9a98599a90b58dc63e35:false,
            manage_2_4a6f4d2a223dd0cbd58fa3391eba3566:false,
            manage_2_659b66e1c96f72fd43653213283dad6c:false,
            manage_2_93a3ba7ea9664bb78a75c6cfcb5ad086:false,
            manage_2_1d5848c20332b61028c2dae44d381bdc:false,
            manage_2_6b94e44d42f119a626e2268fd056969a:false,
            manage_2_ed15a7655b9bcb9771353155ef8589d4:false,
            manage_2_99e1bad3d907129c1ee3a57950bc0c3a:false,
            manage_2_432c059aaf53700a850b48b27b70cd97:false,
            manage_2_e78f3dbdc334dd8fa7d29bc576a4b20a:false,
            manage_2_adb9e9ce1f5caff3eb25293577d1d982:false,
            manage_2_19c44d698075302681e9d1d130b215b0:false,
            manage_2_bbf6746909a10ea06b5bf90da3febe75:false,
            manage_2_411923a861d031194161faf46e18bbc6:false,
            manage_2_d9b06ee39794d7ba5009e48973557e7d:false,
            manage_2_8db141fd5e8dddb3594bed79ee674186:false,
            manage_2_3081e48da42de1a396f8dda358d693fa:false,
            manage_2_87d4a14708f6701983920a4935214408:false,
            manage_2_14cdd5aad050d35790f96d974af2649c:false,
            manage_2_b0d790be4030038e65446eccb5285493:false,
            manage_2_d70335f3e47765777e97a6df470954f0:false,
            manage_2_022ebe22cee25ff5e7265baecf4f6823:false,
            manage_2_f6dfa8d9685a26c0ce81348d2d380a1a:false,
            manage_2_6c77bfc322ce2b72a8eaeacdefc0010a:false,
            manage_2_d106b597c61dd89ecd5192abdeae31df:false,
            manage_2_5a8a09546feec04fec419ef2094dd1df:false,
            manage_2_3048060d9498288d2aeba3c4e5d5ba15:false,
            manage_2_f576fc31ec07438895c5d9fb7c3d90ab:false,
            manage_2_ded5b84ad13c7f0044ea755372d7ff6a:false,
            manage_2_10daef5bbe24a06a76c39e0896059840:false,
            manage_2_1aeb980bd390f9be7a4bdc8b172ae828:false,
            manage_2_b99f96d633ec4cca32b0a754440b7895:false,
            manage_2_8693ffe9d14fec917e6bc618641c85cb:false,
            manage_2_265a1c4bf93a596bef3040e3588568ea:false,
            manage_2_f09ec45d260a7fca5aab0558b5d2548f:false,
            manage_2_3e2eef05a784fc9001173922dea56e27:false,
            manage_2_1ef6036e9d9b07e287a79750e6a5748b:false,
            manage_2_cd38778d09b32c7abb4095dce7ea3867:false,
            manage_2_ab64611b27126aa5fa6bb00e14dbe770:false,
            manage_2_026bf9a9ea41b6fd5769e531cd1bae57:false,
            manage_2_df528b717c7728adcda5d76590a0b4f6:false,
            manage_2_79b3a69dba14385b93aab9f443c3cb9a:false,
            manage_2_8630039b1afea0b842b6ab05ec0a1d89:false,
            manage_2_b4b892f4057915c31a561ff3b100799a:false,
            manage_2_dedb98b74bce9f2f7eca72985ea9d7dd:false,
            manage_2_b60335b17cf3e4dc9066505fb35387df:false,
            manage_2_62949930b8d807f9b832f866b0d7d471:false,
            manage_2_cfde17279ef02f66b9ae0bd6e7b489ff:false,
            manage_2_e9a856899df2c12b16c6c603fba4b411:false,
            manage_2_9678e4390b701312c1ab922251b890c6:false,
            manage_2_4368285008630edf7778c66da254dcf4:false,
            manage_2_5fff530e4e66488a3954d0e78de763d0:false,
            manage_2_eed84aedfb5f487ff568e3f2f3cfa3b0:false,
            manage_2_1a92576ece35e4ff790e03e7dd647238:false,
            manage_2_60acd3408e095622fc7f3fac372754c0:false,
            manage_2_7864f4e8b0104e5c8e21e8af13ad6d09:false,
            manage_2_5fec878ecdcdf5b2511085585b08ed52:false
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
            const url = this.url + '/insp/api/v1.0/manage/assess/' + localStorage.inspId
            axios({
                method:'get',
                url: url
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data
                    this.management = res.manage_assess
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
            const url = this.url + '/insp/api/v1.0/manage/assess/' + localStorage.inspId
            axios({
                method:'post',
                url: url,
                data: { manage_assess: this.management }
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