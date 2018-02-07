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
        <div class="service-header">四等级管理要求：</div>
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
                                <i-col span="24" class="network-design">管理制度</i-col>
                                <i-col span="24" class="environment-tr">制定和发布</i-col>
                                <i-col span="24" class="network-design-last">评审与修订</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定信息安全工作的总体方针和安全策略，说明机构安全工作的总体目标、范围、原则和安全框架等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对安全管理活动中的各类管理内容建立安全管理制度
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对要求管理人员或操作人员执行的日常管理操作建立操作规程
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应形成由安全策略、管理制度、操作规程等构成的全面的信息安全管理制度体系
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定或授权专门的部门或人员负责安全管理制度的制定
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应组织相关人员对制定的安全管理制度进行论证和审定
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    安全管理制度应通过正式、有效的方式发布
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    安全管理制度应注明发布范围，并对收发文进行登记
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    安全管理制度应具有统一的格式，并进行版本控制
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    有密级的安全管理制度，应注明安全管理制度密级，并进行密级管理
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    信息安全领导小组应负责定期组织相关部门和相关人员对安全管理制度体系的合理性和适用性进行审定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期或不定期对安全管理制度进行检查和审定，对存在不足或需要改进的安全管理制度进行修订
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应明确需要定期修订的安全管理制度，并指定负责人或负责部门负责制度的日常维护
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应根据安全管理制度的相应密级确定评审和修订的操作范围
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
                                    <checkbox v-model="management.manage_4_1784702f03a7a2deb07cc38a4e6a7676"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_1b2fa800469f72920e553be8f0f0050a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_52ec361c63e26a864749fb265fad4988"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_f3e71772c13bc31ddc51abdda96e88be"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_0284a53b1891d3ecbbbf5e2355c88aab"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_2e0da90099efab7fe7989659d5b70903"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_75b5af1d8a6026cb3bd5a21ff0497cfa"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_a3bbd7277f73d693e2b5c4d55b234590"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_0c7a27e7151c71506068714a16a1396a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_de1f51138b5b887be514efec84ebf4b8"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_9ea83032a64975bec561075d1b2ef156"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_0ab905737e33f544d9afa1ef1e88497b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_41538c05be28fd77c59e821c15a0fa9d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="management.manage_4_b8d89523101aa1498be492504c819771"></checkbox>
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
                                <i-col span="24" class="network-design">岗位设置</i-col>
                                <i-col span="24" class="network-visit">人员配备</i-col>
                                <i-col span="24" class="network-design">授权和审批</i-col>
                                <i-col span="24" class="environment-tr">沟通和合作</i-col>
                                <i-col span="24" class="network-design-last">审核和检查</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应设立安全主管、安全管理各个方面的负责人岗位，并定义各负责人的职责
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应设立系统管理员、网络管理员、安全管理员等岗位，并定义各个工作岗位的职责
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应成立指导和管理信息安全工作的委员会或领导小组，其最高领导由单位主管领导委任或授权
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定文件明确安全管理机构各个部门和岗位的职责、分工和技能要求
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应配备一定数量的系统管理员、网络管理员、安全管理员等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应配备专职安全管理员，不可兼任
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    关键事务岗位应配备多人共同管理
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据各个部门和岗位的职责明确授权审批事项、审批部门和批准人等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应针对系统变更、重要操作、物理访问和系统接入等事项建立审批程序，按照审批程序执行审批过程，对重要活动建立逐级审批制度
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期审查审批事项，及时更新需授权和审批的项目、审批部门和审批人等信息
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应记录审批过程并保存审批文档
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应加强各类管理人员之间、组织内部机构之间以及信息安全职能部门内部的合作与沟通，定期或不定期召开协调会议，共同协作处理信息安全问题
                                </i-col> 
                                <i-col span="24" class="physics-tr text-left">
                                    应加强与兄弟单位、公安机关、电信公司的合作与沟通
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应加强与供应商、业界专家、专业的安全公司、安全组织的合作与沟通
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立外联单位联系列表，包括外联单位名称、合作内容、联系人和联系方式等信息
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应聘请信息安全专家作为常年的安全顾问，指导信息安全建设，参与安全规划和安全评审等
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    安全管理员应负责定期进行安全检查，检查内容包括系统日常运行、系统漏洞和数据备份等情况
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应由内部人员或上级单位定期进行全面安全检查，检查内容包括现有安全技术措施的有效性、安全配置与安全策略的一致性、安全管理制度的执行情况等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定安全检查表格实施安全检查，汇总安全检查数据，形成安全检查报告，并对安全检查结果进行通报
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应制定安全审核和安全检查制度规范安全审核和安全检查工作，定期按照程序进行安全审核和安全检查活动
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
                                    <checkbox v-model="management.manage_4_430e75afb6e21afb74d07ac670891c0e"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_0acaae47ebcd6bec3f2e79b7d0957ff5"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_38d031c966024f3595b2bf8f9585b8ae"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_4755a88b0f54d0e29bc41c473021f100"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_90a1b26319d44f4e9597ff2f1fe80afa"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_56922f04db70967bcc4b72af91c9744e"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_a03ca7fc5a14b85f3f3f928a8d95c341"></checkbox>
                                </i-col>

                            </row>
                        </i-col>
                         <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_dcca99ed1b358a46b7400da590394f87"></checkbox> 
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_fb725c2ca87dd9b56b09081c42cb9e60"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_278f3f6593391ec67bcee8d089b8c150"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_65eb85a42b370990d6897109e471f843"></checkbox> 
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_b4011036049c7d4fb25b99c174fdfc59"></checkbox> 
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_5632ce02ad46d277a2df8eae1d24635f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_ffff835fe83366332dfdde5afc4b84df"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_cc999f9227c2b8e0a11b2d6829291088"></checkbox> 
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_99778777b99cd0eb74d863765df5025e"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_9c12977d0ee8bc7bc2907fe3ae86c1ce"></checkbox> 
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_487e496ccbbf6c1ca5ee589ec67b8a2f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_ae21f04ed8a69c59ea7b34b01b71d4b8"></checkbox> 
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="management.manage_4_fa47342b49c0f17671e3640a2ee2f5c1"></checkbox>
                                </i-col>
                            </row>
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
                                <i-col span="24" class="network-design">人员录用</i-col>
                                <i-col span="24" class="network-visit">人员离岗</i-col>
                                <i-col span="24" class="network-design">人员考核</i-col>
                                <i-col span="24" class="network-design">安全意识教育和培训</i-col>
                                <i-col span="24" class="network-visit-last">外部人员访问管理</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定或授权专门的部门或人员负责人员录用
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应规范人员录用过程，对被录用人员的身份、背景和专业资格等进行审查，对其所具有的技术技能进行考核
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应签署保密协议
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应从内部人员中选拔从事关键岗位的人员，并签署岗位安全协议
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应严格规范人员离岗过程，及时终止离岗员工的所有访问权限
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应取回各种身份证件、钥匙、徽章等以及机构提供的软硬件设备
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应办理严格的调离手续，关键岗位人员离岗须承诺调离后的保密义务后方可离开
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期对各个岗位的人员进行安全技能及安全认知的考核
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对关键岗位的人员进行全面、严格的安全审查和技能考核
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对考核结果进行记录并保存
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立保密制度，并定期或不定期的对保密制度执行情况进行检查或考核
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应对各类人员进行安全意识教育、岗位技能培训和相关安全技术培训
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应告知人员相关的安全责任和惩戒措施，并对违反违背安全策略和规定的人员进行惩戒
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对定期安全教育和培训进行书面规定，针对不同岗位制定不同的培训计划，对信息安全基础知识、岗位操作规程等进行培训
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应对安全教育和培训的情况和结果进行记录并归档保存
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保在外部人员访问受控区域前先提出书面申请，批准后由专人全程陪同或监督，并登记备案
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    对外部人员允许访问的区域、系统、设备、信息等内容应进行书面的规定，并按照规定执行
                                </i-col>
                                <i-col span="24" class="physics-tr-last text-left">
                                    对关键区域不允许外部人员访问
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
                                    <checkbox v-model="management.manage_4_e9d1eae819bd91d183cc90b2d34c4852"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_c3831721cf393a34e36a8d2095a20a34"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_bcc9a00112c9315164f179e190d7204d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_294113df964c4fc6e0211071f973de04"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_361cf309388b8cf38c5f5bc0ec61bce3"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_be14cfe0e2fc00e3ae156c923b5050e1"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_857f5958942444fdeb35771ab224bd42"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_573556ac1861d2c80afee3792df1b908"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_066182ac96b0849d9880c24e3de6a36a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_177fe7fe11cffab5b0c767492e7b453e"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_0e558a8054de07eef8489a8120a4f6b5"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_874597474ec6e42287c373525d53fcbd"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_2e170ca61b2c314d970ef9e10e6ec138"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_99bb3d870245bb85dffc7264c753d8ec"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_82439849d89f32d9af15797fb0a648d5"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_53787b2e00ab03bc3e5c95bbebf57e35"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_4c7e79be1f9dc3635f77864148d2f95e"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr-last">
                                    <checkbox v-model="management.manage_4_d6478bc788a13f3f60530e69e2a84297"></checkbox>
                                </i-col>
                            </row>
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
                                <i-col span="24" class="network-design">系统定级</i-col>
                                <i-col span="24" class="safety-program">安全方案设计</i-col>
                                <i-col span="24" class="environment-tr">产品采购和使用</i-col>
                                <i-col span="24" class="safety-program">自行软件开发</i-col>
                                <i-col span="24" class="network-design">外包软件开发</i-col>
                                <i-col span="24" class="network-design">工程实施</i-col>
                                <i-col span="24" class="safety-program">测试验收</i-col>
                                <i-col span="24" class="safety-program">系统交付</i-col>
                                <i-col span="24" class="network-visit">系统备案</i-col>
                                <i-col span="24" class="network-design">等级测评</i-col>
                                <i-col span="24" class="network-visit-last">安全服务商选择</i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
                <i-col span="15">
                    <row class="br">
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应明确信息系统的边界和安全保护等级
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应以书面的形式说明信息系统确定为某个安全保护等级的方法和理由
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保信息系统的定级结果经过相关部门的批准
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应组织相关部门和有关安全技术专家对信息系统定级结果的合理性和正确性进行论证和审定
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据系统的安全保护等级选择基本安全措施，依据风险分析的结果补充和调整安全措施
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定和授权专门的部门对信息系统的安全建设进行总体规划，制定近期和远期的安全建设工作计划
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据信息系统的等级划分情况，统一考虑安全保障体系的总体安全策略、安全技术框架、安全管理策略、总体建设规划和详细设计方案，并形成配套文件
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应组织相关部门和有关安全技术专家对总体安全策略、安全技术框架、安全管理策略、总体建设规
                                    划、详细设计方案等相关配套文件的合理性和正确性进行论证和审定，并且经过批准后，才能正式实施
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据等级测评、安全评估的结果定期调整和修订总体安全策略、安全技术框架、安全管理策略、总体建设规划、详细设计方案等相关配套文件
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应确保安全产品采购和使用符合国家的有关规定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保密码产品采购和使用符合国家密码主管部门的要求
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定或授权专门的部门负责产品的采购
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应预先对产品进行选型测试，确定产品的候选范围，并定期审定和更新候选产品名单
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对重要部位的产品委托专业测评单位进行专项测试，根据测试结果选用产品
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保开发环境与实际运行环境物理分开，开发人员和测试人员分离，测试数据和测试结果受到控制
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保提供软件设计的相关文档和使用指南，并由专人负责保管
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定软件开发管理制度，明确说明开发过程的控制方法和人员行为准则
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应制定代码编写安全规范，要求开发人员参照规范编写代码
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保对程序资源库的修改、更新、发布进行授权和批准
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
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
                                    应要求开发单位提供软件源代码，并审查软件中可能存在的后门和隐蔽信道
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定或授权专门的部门或人员负责工程实施过程的管理
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定详细的工程实施方案控制实施过程，并要求工程实施单位能正式地执行安全工程过程
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定工程实施方面的管理制度，明确说明实施过程的控制方法和人员行为准则
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应通过第三方工程监理控制项目的实施过程
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应委托公正的第三方测试单位对系统进行安全性测试，并出具安全性测试报告
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    在测试验收前应根据设计方案或合同要求等制订测试验收方案，在测试验收过程中应详细记录测试验收结果，并形成测试验收报告
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应组织相关部门和相关人员对系统测试验收报告进行审定，并签字确认
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对系统测试验收的控制方法和人员行为准则进行书面规定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定或授权专门的部门负责系统测试验收的管理，并按照管理规定的要求完成系统测试验收工作
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应制定详细的系统交付清单，并根据交付清单对所交接的设备、软件和文档等进行清点
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对负责系统运行维护的技术人员进行相应的技能培训
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保提供系统建设过程中的文档和指导用户进行系统运行维护的文档
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对系统交付的控制方法和人员行为准则进行书面规定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定或授权专门的部门负责系统交付的管理工作，并按照管理规定的要求完成系统交付工作
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定专门的部门或人员负责管理系统定级的相关材料，并控制这些材料的使用
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应将系统等级及相关材料报系统主管部门备案
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应将系统等级及其他要求的备案材料报相应公安机关备案
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    在系统运行过程中，应至少每年对系统进行一次等级测评，发现不符合相应等级保护标准要求的及时整改
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应在系统发生变更时及时对系统进行等级测评，发现级别发生变化的及时调整级别并进行安全改造，发现不符合相应等级保护标准要求的及时整改
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应选择具有国家相关技术资质和安全资质的测评单位进行等级测评
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定或授权专门的部门或人员负责等级测评的管理
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
                    <row >
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_3e7810971bd64c16c3d7e1cc1e60f531"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_75863819c2c6a33959e7117cecedf582"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_bc827454956c16867166ab8331d67118"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_54637e5fc9c3dd067c7f6289f5247010"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_66a1f16743a91b24fe6844b17872a430"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_b9892ddb8a0b9654d4ff8406993faa96"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_c18cf11fc3ebb6fd9d95b2e420144b92"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_c14108c1fcbacaa193fbb485a829b017"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_242cf7b5c644c245b6290caecd11c3cd"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_e32678ef5c68343293c8a9bb11a71860"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_e07847847dc9633438c176d82f36c6e5"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_0516050074fa345f10017f2816a732d2"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_29321414df8be6688ab025127fda9289"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_dde46ebbd8c24c0f1d1f233ffe240069"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_4489de51b0b204faf4b88b978549ea2b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_a5ea40bde1d5bd6b43ce3e3bb807d538"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_b52f5f9287e9e0579a61440528186569"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_5aa761326a701eb01719b8e633277493"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_07941e72cf8767ad23314a0a783b73b6"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_2dbb880d5a9f9a98599a90b58dc63e35"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_4a6f4d2a223dd0cbd58fa3391eba3566"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_659b66e1c96f72fd43653213283dad6c"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_6ecba0f5f0ecfe74cc87fcdc3c99ef54"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_1d5848c20332b61028c2dae44d381bdc"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_eb00f80d664cb611ce62816a4ad23594"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_912d60f11677fed3e391c9e5b2bb9794"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_c37e4a282ab9471c1087c8bd01fb900d"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_f2abe985570eedf6eeda3df7d13a2094"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_ac58c1c56627222eda2b9b82fb5fd95a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_432c059aaf53700a850b48b27b70cd97"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_e8f3a25a0a3775964b63bfccbb287af3"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_dfccd9642f75f1f62888307aa5301bcb"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_74abadfdeb7decb4d0577a40ef150f1d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_adb9e9ce1f5caff3eb25293577d1d982"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_bf42ff8e6e1abb8fd6eda46d1b65392f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_5f9c1f54ce9c89bea9b3833c811c450b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_16d466abdb3c26d7a496d0a67b4010a3"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_2ba8cf705aea312e43d958248adddae2"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_a010c3e6ea6992ec91a5fb88a9fb81e1"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_cff9f54431cfe72837d0d5fce4812c0e"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_46d8521a50355dbfe0244bc190f5c6d4"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_2680b594ea04e1eaa2f0f86fa8703927"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_f89059fa8cf6a4e2aa4ac25bf918eb93"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_f89059fa8cf6a4e2aa4ac25bf918eb93"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_bbf6746909a10ea06b5bf90da3febe75"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_411923a861d031194161faf46e18bbc6"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="management.manage_4_d9b06ee39794d7ba5009e48973557e7d"></checkbox>
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
                                <i-col span="24" class="network-environment">环境管理</i-col>
                                <i-col span="24" class="environment-tr">资产管理</i-col>
                                <i-col span="24" class="network-medium">介质管理</i-col>
                                <i-col span="24" class="safety-program">设备管理</i-col>
                                <i-col span="24" class="monitoring-tr">监控管理和安全管理中心</i-col>
                                <i-col span="24" class="network-safe-steal">网络安全管理</i-col>
                                <i-col span="24" class="network-medium-steal">系统安全管理</i-col>
                                <i-col span="24" class="environment-tr">恶意代码防范管理</i-col>
                                <i-col span="24" class="visit-tr">密码管理</i-col>
                                <i-col span="24" class="safety-program">变更管理</i-col>
                                <i-col span="24" class="network-medium">备份与恢复管理</i-col>
                                <i-col span="24" class="network-safe-steal">安全事件处置</i-col>
                                <i-col span="24" class="safety-warn-last">应急预案管理</i-col>
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
                                <i-col span="24" class="visit-tr text-left">
                                    应指定部门负责机房安全，并配备机房安全管理人员，对机房的出入、服务器的开机或关机等工作进行管理
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立机房安全管理制度，对有关机房物理访问，物品带进、带出机房和机房环境安全等方面的管理作出规定
                                </i-col>
                                <i-col span="24" class="spite-tr text-left">
                                    应加强对办公环境的保密性管理，规范办公环境人员行为，包括工作人员调离办公室应立即交还该办公室钥匙、
                                    不在办公区接待来访人员、工作人员离开座位应确保终端计算机退出登录状态和桌面上没有包含敏感信息的纸档文件等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对机房和办公环境实行统一策略的安全管理，对出入人员进行相应级别的授权，对进入重要安全区域的活动行为实时监视和记录
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应编制与信息系统相关的资产清单，包括资产责任部门、重要程度和所处位置等内容
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应建立资产安全管理制度，规定信息系统资产
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    管理的责任人员或责任部门，并规范资产管理和使用的行为
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据资产的重要程度对资产进行标识管理，根据资产的价值选择相应的管理措施
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对信息分类与标识方法作出规定，并对信息的使用、传输和存储等进行规范化管理
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立介质安全管理制度，对介质的存放环境、使用、维护和销毁等方面作出规定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保介质存放在安全的环境中，对各类介质进行控制和保护，并实行存储环境专人管理
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应对介质在物理传输过程中的人员选择、打包、交付等情况进行控制，对介质归档和查询等进行登记记录，并根据存档介质的目录清单定期盘点 
                                </i-col>
                                <i-col span="24" class="spite-tr text-left">
                                    应对存储介质的使用过程、送出维修以及销毁等进行严格的管理，
                                    对带出工作环境的存储介质进行内容加密和监控管理，对送出维修或销毁的介质应首先清除介质中的敏感数据，对保密性较高的存储介质未经批准不得自行销毁 
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据数据备份的需要对某些介质实行异地存储，存储地的环境要求和管理方法应与本地相同
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对重要介质中的数据和软件采取加密存储，并根据所承载数据和软件的重要程度对介质进行分类和标识管理
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
                                   应建立配套设施、软硬件维护方面的管理制度，对其维护进行有效的管理，包括明确维护人员的责任、涉外维修和服务的审批、维修过程的监督控制等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对终端计算机、工作站、便携机、系统和网络等设备的操作和使用进行规范化管理，按操作规程实现关键设备（包括备
                                    份和冗余设备）的启动/停止、加电/断电等操作
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应确保信息处理设备必须经过审批才能带离机房或办公地点
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应对通信线路、主机、网络设备和应用软件的运行状况、网络流量、用户行为等进行监测和报警，形成记录并妥善保存
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应组织相关人员定期对监测和报警记录进行分析、评审，发现可疑行为，形成分析报告，并采取必要的应对措施
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应建立安全管理中心，对设备状态、恶意代码、补丁升级、安全审计等安全相关事项进行集中管理
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定人员对网络进行管理，负责运行日志、网络监控记录的日常维护和报警信息分析和处理工作
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立网络安全管理制度，对网络安全配置、日志保存时间、安全策略、升级与打补丁、口令更新周期等方面作出规定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据厂家提供的软件升级版本对网络设备进行更新，并在更新前对现有的重要文件进行备份
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期进行网络系统漏洞扫描，对发现的网络系统安全漏洞进行及时的修补
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应实现设备的最小服务配置，并对配置文件进行定期离线备份
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应保证所有与外部系统的连接均得到授权和批准
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应禁止便携式和移动式设备接入网络
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期检查违反规定拨号上网或其他违反网络安全策略的行为
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应严格控制网络管理用户的授权，授权程序中要求必须有两人在场，并经双重认可后方可操作，操作过程应保留不可更改的审计日志
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应根据业务需求和系统安全分析确定系统的访问控制策略
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应定期进行漏洞扫描，对发现的系统安全漏洞进行及时的修补
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应安装系统的最新补丁程序，在安装系统补丁前，应首先在测试环境中测试通过，并对重要文件进行备份后，方可实施系统补丁程序的安装
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立系统安全管理制度，对系统安全策略、安全配置、日志管理和日常操作流程等方面作出规定
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定专人对系统进行管理，划分系统管理员角色，明确各个角色的权限、责任和风险，权限设定应当遵循最小授权原则
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应依据操作手册对系统进行维护，详细记录操作日志，包括重要的日常操作、运行维护记录、参数的设置和修改等内容，严禁进行未经授权的操作
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期对运行日志和审计数据进行分析，以便及时发现异常行为
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对系统资源的使用进行预测，以确保充足的处理速度和存储容量，管理人员应随时注意系统资源的使用情况，包括处理器、存储设备和输出设备
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="spite-tr text-left">
                                    应提高所有用户的防病毒意识，告知及时升级防病毒软件，
                                    在读取移动存储设备上的数据以及网络上接收文件或邮件之前，先进行病毒检查，对外来计算机或存储设备接入网络系统之前也应进行病毒检查
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应指定专人对网络和主机进行恶意代码检测并保存检测记录
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对防恶意代码软件的授权使用、恶意代码库升级、定期汇报等作出明确规定
                                </i-col>
                                <i-col span="24" class="spite-tr text-left">
                                    应定期检查信息系统内各种产品的恶意代码库的升级情况并进行记录，
                                    对主机防病毒产品、防病毒网关和邮件防病毒网关上截获的危险病毒或恶意代码进行及时分析处理，并形成书面的报表和总结汇报
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr text-left">
                            应建立密码使用管理制度，使用符合国家密码管理规定的密码技术和产品
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应确认系统中要发生的重要变更，并制定相应的变更方案
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立变更管理制度，系统发生变更前，向主管领导申请，变更和变更方案经过评审、审批后方可实施变更，并在实施后将变更情况向相关人员通告
                                </i-col>
                                 <i-col span="24" class="visit-tr text-left">
                                    应建立变更控制的申报和审批文件化程序，对变更影响进行分析并文档化，记录变更实施过程，并妥善保存所有文档和记录
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立中止变更并从失败变更中恢复的文件化程序，明确过程控制方法和人员职责，必要时对恢复过程进行演练
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期检查变更控制的申报和审批程序的执行情况，评估系统现有状况与文档记录的一致性
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应识别需要定期备份的重要业务信息、系统数据及软件系统等
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立备份与恢复管理相关的安全管理制度，对备份信息的备份方式、备份频度、存储介质和保存期等进行规范
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应根据数据的重要性及其对系统运行的影响，制定数据的备份策略和恢复策略，备份策略指明备份数据的放置场所、文件命名规则、介质替换频率和数据离站运输方法
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立控制数据备份和恢复过程的程序，对备份过程进行记录，所有文件和记录应妥善保存
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期执行恢复程序，检查和测试备份介质的有效性，确保可以在恢复程序规定的时间内完成备份的恢复
                                </i-col>
                                <i-col span="24" class="spite-tr text-left">
                                    应根据信息系统的备份技术要求，制定相应的灾难恢复计划，并对其进行测试以确保各个恢复规程的正确性和计划整体的有效性，
                                    测试内容包括运行系统恢复、人员协调、备用系统性能测试、通信连接等，根据测试结果，对不适用的规定进行修改或更新
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
                                    应制定安全事件报告和响应处理程序，确定事件的报告流程，响应和处置的范围、程度，以及处理方法等
                                </i-col>
                                <i-col span="24" class="spite-tr text-left">
                                     应在安全事件报告和响应处理过程中，分析和鉴定事件产生的原因，收集证据，记录处理过程，总结经验教训，制定防止再次发生的补救措施，过程形成的所有文件和记录均应妥善保存
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    对造成系统中断和造成信息泄密的安全事件应采用不同的处理程序和报告程序
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                     发生可能涉及国家秘密的重大失、泄密事件，应按照有关规定向公安、安全、保密等部门汇报
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应严格控制参与涉及国家秘密事件处理和恢复的人员，重要操作要求至少两名工作人员在场并登记备案
                                </i-col>
                                
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr text-left">
                                    应在统一的应急预案框架下制定不同事件的应急预案，应急预案框架应包括启动应急预案的条件、应急处理流程、系统恢复流程、事后教育和培训等内容
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应从人力、设备、技术和财务等方面确保应急预案的执行有足够的资源保障
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应对系统相关的人员进行应急预案培训，应急预案的培训应至少每年举办一次
                                </i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应定期对应急预案进行演练，根据不同的应急恢复内容，确定演练的周期
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应规定应急预案需要定期审查和根据实际情况更新的内容，并按照执行
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应随着信息系统的变更定期对原有的应急预案重新评估，修订完善
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
                                    <checkbox v-model="management.manage_4_8db141fd5e8dddb3594bed79ee674186"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_451a378bb130e37c0d6df8ade5ee878d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_14cdd5aad050d35790f96d974af2649c"></checkbox>
                                </i-col>
                                <i-col span="24" class="spite-tr">
                                    <checkbox v-model="management.manage_4_9d7aca86b492f2f3de6e76cc46eb6f1f"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_76716eb43df3567c5ed6b188a8b47fdd"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_d70335f3e47765777e97a6df470954f0"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_7ed26d75aa5fc9f64aa2e928e0bc6820"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_c1983b64fa2e69ba09728a887d228188"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_112b1dd14dc3be34ab5c2a94164b1289"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_8d330a272821944b135de0bd17a893c5"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_335dcb273e0ba2bb5636934cd5a2aa70"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_f6dfa8d9685a26c0ce81348d2d380a1a"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_dff0c79df0904929718acaf090a74bdf"></checkbox> 
                                </i-col>
                                <i-col span="24" class="spite-tr">
                                    <checkbox v-model="management.manage_4_e93d61b20525888e48a176c41c3f538b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_f2996afbc040676b42fcfa9104f440cb"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_e0bcac6378e3fcb149335f5dcba32356"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_3048060d9498288d2aeba3c4e5d5ba15"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_f576fc31ec07438895c5d9fb7c3d90ab"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                   <checkbox v-model="management.manage_4_b7c98041fd8581cba620a358fd8edb75"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_798c851a424a86c0cadbe5100929ba9b"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_10daef5bbe24a06a76c39e0896059840"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_74d8cbb1962d864490a38c613fa378bd"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_de46d98a01545b07759eb91f5d9f6987"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_de95ecbdb72168bc543dd72f9d861a4f"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_1aeb980bd390f9be7a4bdc8b172ae828"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_b99f96d633ec4cca32b0a754440b7895"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_06976eb5f713263d7dbfdd3c3b8d6a6f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_265a1c4bf93a596bef3040e3588568ea"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_366952a4034149cf5580d8c46ba00ff8"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_7d7e295174d1f7a3d5e3bf8bc4d73942"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_05f7a6bc8b65f288cc98aae76f8ae12d"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_62e6ea8450dc11c783647133dc8b1554"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_785886cd58745f75c9c7fa0ba9b47d12"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_1ef6036e9d9b07e287a79750e6a5748b"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_4_cd38778d09b32c7abb4095dce7ea3867"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_ab64611b27126aa5fa6bb00e14dbe770"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_026bf9a9ea41b6fd5769e531cd1bae57"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_ffdefc228bb8e3d7f56b69847849038a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_df528b717c7728adcda5d76590a0b4f6"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_79b3a69dba14385b93aab9f443c3cb9a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_a918c6d98e42bff00f1df3aacf09f754"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="spite-tr">
                                    <checkbox v-model="management.manage_4_8630039b1afea0b842b6ab05ec0a1d89"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_b4b892f4057915c31a561ff3b100799a"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_4_dedb98b74bce9f2f7eca72985ea9d7dd"></checkbox>
                                </i-col>
                                <i-col span="24" class="spite-tr">
                                   <checkbox v-model="management.manage_4_ea4763bbd1b49c428b0b2fb3f8dded89"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="management.manage_4_14df7ba5dc3fbf14ed5898233f5896e8"></checkbox>
                        </i-col>
                        <!-- <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_62949930b8d807f9b832f866b0d7d471"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_d29661a94cf457ec07499954dd05d7f2"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_e328c5236eb83fa6d0432e417eb4c25f"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_446ece75157eb3fccc8aa63c14b85def"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_e9a856899df2c12b16c6c603fba4b411"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_8e759579f91e3a675274bc5aa36b8ee9"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_4368285008630edf7778c66da254dcf4"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_782f8101b4770f25ffe86634f1e1b318"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_0861209991e052d001cf674a1335307a"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_5fff530e4e66488a3954d0e78de763d0"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_3456ba8782c9cf701e44fb5bd1430c18"></checkbox> 
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                     <checkbox v-model="management.manage_3_1a92576ece35e4ff790e03e7dd647238"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_a57ba6720d4dcb0731d3e87e9223f663"></checkbox>
                                </i-col>
                                 <i-col span="24" class="visit-tr">
                                     <checkbox v-model="management.manage_3_c79ebd2801044f09160a6ecf71e963e9"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_9004da7bb73e3ac7de31529593cb1ced"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24">
                            <row>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_7864f4e8b0104e5c8e21e8af13ad6d09"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_81e62723630207cfcae11df7ef24c560"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_5fec878ecdcdf5b2511085585b08ed52"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_3_b74624489b34ddf9f0bc7b533b827a67"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="management.manage_3_c0dca038c0236fdfe708f4c330efcccc"></checkbox>
                                </i-col>
                            </row>
                        </i-col> -->
                    </row>
                </i-col>
            </row>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
     data () {
      return  {
          management: {
              manage_4_14df7ba5dc3fbf14ed5898233f5896e8:false,


              



              manage_4_1784702f03a7a2deb07cc38a4e6a7676:false,
              manage_4_1b2fa800469f72920e553be8f0f0050a:false,
              manage_4_52ec361c63e26a864749fb265fad4988:false,
              manage_4_f3e71772c13bc31ddc51abdda96e88be:false,
              manage_4_0284a53b1891d3ecbbbf5e2355c88aab:false,
              manage_4_2e0da90099efab7fe7989659d5b70903:false,
              manage_4_a3bbd7277f73d693e2b5c4d55b234590:false,
              manage_4_75b5af1d8a6026cb3bd5a21ff0497cfa:false,
              manage_4_0c7a27e7151c71506068714a16a1396a:false,
              manage_4_de1f51138b5b887be514efec84ebf4b8:false,
              manage_4_9ea83032a64975bec561075d1b2ef156:false,
              manage_4_0ab905737e33f544d9afa1ef1e88497b:false,
              manage_4_41538c05be28fd77c59e821c15a0fa9d:false,
              manage_4_b8d89523101aa1498be492504c819771:false,
              manage_4_430e75afb6e21afb74d07ac670891c0e:false,
              manage_4_0acaae47ebcd6bec3f2e79b7d0957ff5:false,
              manage_4_38d031c966024f3595b2bf8f9585b8ae:false,
              manage_4_4755a88b0f54d0e29bc41c473021f100:false,
              manage_4_90a1b26319d44f4e9597ff2f1fe80afa:false,
              manage_4_56922f04db70967bcc4b72af91c9744e:false,
              manage_4_a03ca7fc5a14b85f3f3f928a8d95c341:false,
              manage_4_dcca99ed1b358a46b7400da590394f87:false,
              manage_4_fb725c2ca87dd9b56b09081c42cb9e60:false,
              manage_4_278f3f6593391ec67bcee8d089b8c150:false,
              manage_4_65eb85a42b370990d6897109e471f843:false,
              manage_4_b4011036049c7d4fb25b99c174fdfc59:false,
              manage_4_5632ce02ad46d277a2df8eae1d24635f:false,
              manage_4_ffff835fe83366332dfdde5afc4b84df:false,
              manage_4_cc999f9227c2b8e0a11b2d6829291088:false,
              manage_4_99778777b99cd0eb74d863765df5025e:false,
              manage_4_9c12977d0ee8bc7bc2907fe3ae86c1ce:false,
              manage_4_487e496ccbbf6c1ca5ee589ec67b8a2f:false,
              manage_4_ae21f04ed8a69c59ea7b34b01b71d4b8:false,
              manage_4_fa47342b49c0f17671e3640a2ee2f5c1:false,
              manage_4_e9d1eae819bd91d183cc90b2d34c4852:false,
              manage_4_c3831721cf393a34e36a8d2095a20a34:false,
              manage_4_bcc9a00112c9315164f179e190d7204d:false,
              manage_4_294113df964c4fc6e0211071f973de04:false,
              manage_4_361cf309388b8cf38c5f5bc0ec61bce3:false,
              manage_4_be14cfe0e2fc00e3ae156c923b5050e1:false,
              manage_4_857f5958942444fdeb35771ab224bd42:false,
              manage_4_573556ac1861d2c80afee3792df1b908:false,
              manage_4_066182ac96b0849d9880c24e3de6a36a:false,
              manage_4_177fe7fe11cffab5b0c767492e7b453e:false,
              manage_4_0e558a8054de07eef8489a8120a4f6b5:false,
              manage_4_874597474ec6e42287c373525d53fcbd:false,
              manage_4_2e170ca61b2c314d970ef9e10e6ec138:false,
              manage_4_99bb3d870245bb85dffc7264c753d8ec:false,
              manage_4_82439849d89f32d9af15797fb0a648d5:false,
              manage_4_53787b2e00ab03bc3e5c95bbebf57e35:false,
              manage_4_4c7e79be1f9dc3635f77864148d2f95e:false,
              manage_4_d6478bc788a13f3f60530e69e2a84297:false,
              manage_4_3e7810971bd64c16c3d7e1cc1e60f531:false,
              manage_4_75863819c2c6a33959e7117cecedf582:false,
              manage_4_bc827454956c16867166ab8331d67118:false,
              manage_4_54637e5fc9c3dd067c7f6289f5247010:false,
              manage_4_66a1f16743a91b24fe6844b17872a430:false,
              manage_4_b9892ddb8a0b9654d4ff8406993faa96:false,
              manage_4_c18cf11fc3ebb6fd9d95b2e420144b92:false,
              manage_4_c14108c1fcbacaa193fbb485a829b017:false,
              manage_4_242cf7b5c644c245b6290caecd11c3cd:false,
              manage_4_e32678ef5c68343293c8a9bb11a71860:false,
              manage_4_e07847847dc9633438c176d82f36c6e5:false,
              manage_4_0516050074fa345f10017f2816a732d2:false,
              manage_4_29321414df8be6688ab025127fda9289:false,
              manage_4_dde46ebbd8c24c0f1d1f233ffe240069:false, 
              manage_4_4489de51b0b204faf4b88b978549ea2b:false,
              manage_4_a5ea40bde1d5bd6b43ce3e3bb807d538:false,
              manage_4_b52f5f9287e9e0579a61440528186569:false,
              manage_4_5aa761326a701eb01719b8e633277493:false,
              manage_4_07941e72cf8767ad23314a0a783b73b6:false,
              manage_4_2dbb880d5a9f9a98599a90b58dc63e35:false,
              manage_4_4a6f4d2a223dd0cbd58fa3391eba3566:false,
              manage_4_659b66e1c96f72fd43653213283dad6c:false,
              manage_4_6ecba0f5f0ecfe74cc87fcdc3c99ef54:false,
              manage_4_1d5848c20332b61028c2dae44d381bdc:false,
              manage_4_eb00f80d664cb611ce62816a4ad23594:false,
              manage_4_912d60f11677fed3e391c9e5b2bb9794:false,
              manage_4_c37e4a282ab9471c1087c8bd01fb900d:false,
              manage_4_f2abe985570eedf6eeda3df7d13a2094:false,
              manage_4_ac58c1c56627222eda2b9b82fb5fd95a:false,
              manage_4_432c059aaf53700a850b48b27b70cd97:false,
              manage_4_e8f3a25a0a3775964b63bfccbb287af3:false,
              manage_4_dfccd9642f75f1f62888307aa5301bcb:false,
              manage_4_74abadfdeb7decb4d0577a40ef150f1d:false,
              manage_4_adb9e9ce1f5caff3eb25293577d1d982:false,
              manage_4_bf42ff8e6e1abb8fd6eda46d1b65392f:false,
              manage_4_5f9c1f54ce9c89bea9b3833c811c450b:false,
              manage_4_16d466abdb3c26d7a496d0a67b4010a3:false,
              manage_4_2ba8cf705aea312e43d958248adddae2:false,
              manage_4_a010c3e6ea6992ec91a5fb88a9fb81e1:false,
              manage_4_cff9f54431cfe72837d0d5fce4812c0e:false,
              manage_4_46d8521a50355dbfe0244bc190f5c6d4:false,
              manage_4_2680b594ea04e1eaa2f0f86fa8703927:false,
              manage_4_f89059fa8cf6a4e2aa4ac25bf918eb93:false,
              manage_4_1471a27379c7520d8e9827274f4eda4c:false,
              manage_4_411923a861d031194161faf46e18bbc6:false,
              manage_4_d9b06ee39794d7ba5009e48973557e7d:false,
              manage_4_8db141fd5e8dddb3594bed79ee674186:false,
              manage_4_451a378bb130e37c0d6df8ade5ee878d:false,
              manage_4_14cdd5aad050d35790f96d974af2649c:false,
              manage_4_9d7aca86b492f2f3de6e76cc46eb6f1f:false,
              manage_4_76716eb43df3567c5ed6b188a8b47fdd:false,
              manage_4_d70335f3e47765777e97a6df470954f0:false,
              manage_4_7ed26d75aa5fc9f64aa2e928e0bc6820:false,
              manage_4_c1983b64fa2e69ba09728a887d228188:false,
              manage_4_112b1dd14dc3be34ab5c2a94164b1289:false,
              manage_4_8d330a272821944b135de0bd17a893c5:false,
              manage_4_335dcb273e0ba2bb5636934cd5a2aa70:false,
              manage_4_f6dfa8d9685a26c0ce81348d2d380a1a:false,
              manage_4_dff0c79df0904929718acaf090a74bdf:false,
              manage_4_e93d61b20525888e48a176c41c3f538b:false,
              manage_4_f2996afbc040676b42fcfa9104f440cb:false,
              manage_4_e0bcac6378e3fcb149335f5dcba32356:false,
              manage_4_3048060d9498288d2aeba3c4e5d5ba15:false,
              manage_4_f576fc31ec07438895c5d9fb7c3d90ab:false,
              manage_4_b7c98041fd8581cba620a358fd8edb75:false,
              manage_4_798c851a424a86c0cadbe5100929ba9b:false,
              manage_4_10daef5bbe24a06a76c39e0896059840:false,
              manage_4_74d8cbb1962d864490a38c613fa378bd:false,
              manage_4_de46d98a01545b07759eb91f5d9f6987:false,
              manage_4_de95ecbdb72168bc543dd72f9d861a4f:false,
              manage_4_1aeb980bd390f9be7a4bdc8b172ae828:false,
              manage_4_b99f96d633ec4cca32b0a754440b7895:false,
              manage_4_06976eb5f713263d7dbfdd3c3b8d6a6f:false,
              manage_4_265a1c4bf93a596bef3040e3588568ea:false,
              manage_4_366952a4034149cf5580d8c46ba00ff8:false,
              manage_4_7d7e295174d1f7a3d5e3bf8bc4d73942:false,
              manage_4_05f7a6bc8b65f288cc98aae76f8ae12d:false,
              manage_4_62e6ea8450dc11c783647133dc8b1554:false,
              manage_4_785886cd58745f75c9c7fa0ba9b47d12:false,
              manage_4_1ef6036e9d9b07e287a79750e6a5748b:false,
              manage_4_cd38778d09b32c7abb4095dce7ea3867:false,
              manage_4_ab64611b27126aa5fa6bb00e14dbe770:false,
              manage_4_026bf9a9ea41b6fd5769e531cd1bae57:false,
              manage_4_ffdefc228bb8e3d7f56b69847849038a:false,
              manage_4_df528b717c7728adcda5d76590a0b4f6:false,
              manage_4_79b3a69dba14385b93aab9f443c3cb9a:false,
              manage_4_a918c6d98e42bff00f1df3aacf09f754:false,
              manage_4_8630039b1afea0b842b6ab05ec0a1d89:false,
              manage_4_b4b892f4057915c31a561ff3b100799a:false,
              manage_4_dedb98b74bce9f2f7eca72985ea9d7dd:false,
              manage_4_ea4763bbd1b49c428b0b2fb3f8dded89:false,
              
          }
      }
     }
}
</script>