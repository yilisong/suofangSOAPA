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
                           <checkbox v-model="management.manage_1_9e37a8c6b6205b9878b78f280c88b8ac"></checkbox> 
                        </i-col>
                        <i-col span="24" class="issue-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    <checkbox v-model="management.manage_1_9d1358772faa8ba85e54cd4e0ab3d433"></checkbox> 
                                </i-col>
                                <i-col span="24" class="formulate-tr-last">
                                    <checkbox v-model="management.manage_1_2391143d958c842fff389fcd3cd37ac5"></checkbox> 
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
                            <checkbox v-model="management.manage_1_0acaae47ebcd6bec3f2e79b7d0957ff5"></checkbox>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="management.manage_1_90a1b26319d44f4e9597ff2f1fe80afa"></checkbox>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="management.manage_1_744b9d0b701c8474cc5da6be48742d10"></checkbox>
                        </i-col>
                        <i-col span="24" class="physics-tr-last">
                            <checkbox v-model="management.manage_1_21a1c824ac39a7b9d01d2180342e58e1"></checkbox>
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
                        <i-col span="24" class="physics-tr-last text-left">
                            应确保在外部人员访问受控区域前得到授权或审批，批准后由专人全程陪同或监督，并登记备案
                        </i-col>
                    </row>
                </i-col>
                <i-col span="3">
                     <row>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    <checkbox v-model="management.manage_1_e9d1eae819bd91d183cc90b2d34c4852"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_1_c7f43514fa8c4017a1e1dc9776b1743a"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    <checkbox v-model="management.manage_1_5dec290129895730b1597da231067ae5"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_1_be14cfe0e2fc00e3ae156c923b5050e1"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    <checkbox v-model="management.manage_1_cee71eefe24c3c4ef6c926a73c7a8ad9"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_1_b8146491f72ccfd7e88b6384d26616db"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr-last">
                            <checkbox v-model="management.manage_1_1472a3b957137d12244c5690e2d8dd63"></checkbox>
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
                                <i-col span="24" class="employ-tr-name">测试验收</i-col>
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
                        <i-col span="24" class="emplor-tr text-left">
                            <row>
                                <i-col span="24" class="physics-tr text-left">应对系统进行安全性测试验收</i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    在测试验收前应根据设计方案或合同要求等制订测试验收方案，在测试验收过程中应详细记录测试验收结果，并形成测试验收报告
                                </i-col>
                            </row>
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
                                    <checkbox v-model="management.manage_1_3e7810971bd64c16c3d7e1cc1e60f531"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_75863819c2c6a33959e7117cecedf582"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_bc827454956c16867166ab8331d67118"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_66a1f16743a91b24fe6844b17872a430"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_3550dc3140f97b9369aef7bb80b29e58"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_e0ab6ee2ecef6405de65d7f498b885ac"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="management.manage_1_e32678ef5c68343293c8a9bb11a71860"></checkbox>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_fe4ade2516985ebc7d328cf2729c71fb"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_3fcc9bf52e0059240ae570d151de1869"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_2dbb880d5a9f9a98599a90b58dc63e35"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_4a6f4d2a223dd0cbd58fa3391eba3566"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_659b66e1c96f72fd43653213283dad6c"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="physics-tr">
                            <checkbox v-model="management.manage_1_1d5848c20332b61028c2dae44d381bdc"></checkbox>
                        </i-col>
                        <i-col span="24" class="emplor-tr text-left">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_ed15a7655b9bcb9771353155ef8589d4"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_1_ac58c1c56627222eda2b9b82fb5fd95a"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                       
                        <i-col span="24" class="network-control">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_e78f3dbdc334dd8fa7d29bc576a4b20a"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_adb9e9ce1f5caff3eb25293577d1d982"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_bf42ff8e6e1abb8fd6eda46d1b65392f"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_bbf6746909a10ea06b5bf90da3febe75"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr-last">
                                    <checkbox v-model="management.manage_1_411923a861d031194161faf46e18bbc6"></checkbox>
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
                                <i-col span="24" class="physics-tr-steal">网络安全管理</i-col>
                                <i-col span="24" class="network-structure">系统安全管理</i-col>
                                <i-col span="24" class="physics-tr-steal">恶意代码防范管理</i-col>
                                <i-col span="24" class="physics-tr-steal">备份与恢复管理</i-col>
                                <i-col span="24" class="employ-tr-name-last">安全事件处置</i-col>
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
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr text-left">应对信息系统相关的各种设备、线路等指定专门的部门或人员定期进行维护管理</i-col>
                                <i-col span="24" class="visit-tr text-left">
                                    应建立基于申报、审批和专人负责的设备安全管理制度，对信息系统的各种软硬件设备的选型、采购、发放和领用等过程进行规范化管理
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="formulate-tr text-left">
                                    应指定人员对网络进行管理，负责运行日志、网络监控记录的日常维护和报警信息分析和处理工作
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应定期进行网络系统漏洞扫描，对发现的网络系统安全漏洞进行及时的修补
                                </i-col>
                            </row>
                        </i-col>
                        
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="physics-tr text-left">
                                    应根据业务需求和系统安全分析确定系统的访问控制策略
                                </i-col>
                                <i-col span="24" class="physics-tr text-left">
                                    应定期进行漏洞扫描，对发现的系统安全漏洞进行及时的修补
                                </i-col>
                                 <i-col span="24" class="physics-tr text-left">
                                    应安装系统的最新补丁程序，并在安装系统补丁前对现有的重要文件进行备份
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="spite-tr text-left">
                            应提高所有用户的防病毒意识，告知及时升级防病毒软件，在读取移动存储设备上的数据以及网络上接收文件或邮件之前，先进行病毒检查，对外来计算机或存储设备接入网络系统之前也应进行病毒检查
                        </i-col>
                        <i-col span="24" class="steal-content text-left">
                            <row>
                                <i-col span="24" class="formulate-tr text-left">
                                    应识别需要定期备份的重要业务信息、系统数据及软件系统等
                                </i-col>
                                <i-col span="24" class="formulate-tr text-left">
                                    应规定备份信息的备份方式、备份频度、存储介质、保存期等
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="emplor-tr text-left">
                            <row>
                                <i-col span="24" class="formulate-tr text-left">
                                    应报告所发现的安全弱点和可疑事件，但任何情况下用户均不应尝试验证弱点
                                </i-col>
                                <i-col span="24" class="visit-tr-last text-left">
                                    应制定安全事件报告和处置管理制度，规定安全事件的现场处理、事件报告和后期恢复的管理职责
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
                                    <checkbox v-model="management.manage_1_8db141fd5e8dddb3594bed79ee674186"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_3081e48da42de1a396f8dda358d693fa"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_14cdd5aad050d35790f96d974af2649c"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="visit-tr">
                            <checkbox v-model="management.manage_1_d70335f3e47765777e97a6df470954f0"></checkbox>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_a7642e389f5ace2e218d3f1e1219c987"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_6c77bfc322ce2b72a8eaeacdefc0010a"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    <checkbox v-model="management.manage_1_66e6c62c0c44534d8d77ffade8e38166"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr">
                                    <checkbox v-model="management.manage_1_f576fc31ec07438895c5d9fb7c3d90ab"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    <checkbox v-model="management.manage_1_1aeb980bd390f9be7a4bdc8b172ae828"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_265a1c4bf93a596bef3040e3588568ea"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="network-structure">
                            <row>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_1ef6036e9d9b07e287a79750e6a5748b"></checkbox>
                                </i-col>
                                <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_cd38778d09b32c7abb4095dce7ea3867"></checkbox>
                                </i-col>
                                 <i-col span="24" class="physics-tr">
                                    <checkbox v-model="management.manage_1_ab3b70d80fb94cd9e1f73730c45ca6ad"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="spite-tr">
                            <checkbox v-model="management.manage_1_8630039b1afea0b842b6ab05ec0a1d89"></checkbox>
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    <checkbox v-model="management.manage_1_e9a856899df2c12b16c6c603fba4b411"></checkbox>
                                </i-col>
                                <i-col span="24" class="formulate-tr">
                                    <checkbox v-model="management.manage_1_9678e4390b701312c1ab922251b890c6"></checkbox>
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    <checkbox v-model="management.manage_1_5fff530e4e66488a3954d0e78de763d0"></checkbox>
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    <checkbox v-model="management.manage_1_e6e838595b23e9c111adf7d36e6ae506"></checkbox>
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
  data () {
      return  {
          system_name: '',
          business_level: '',
          system_level: '',
          security_level: '',
        management: {
            manage_1_3081e48da42de1a396f8dda358d693fa:false,
            manage_1_14cdd5aad050d35790f96d974af2649c:false,
            manage_1_d70335f3e47765777e97a6df470954f0:false,
            manage_1_a7642e389f5ace2e218d3f1e1219c987:false,
            manage_1_6c77bfc322ce2b72a8eaeacdefc0010a:false,
            manage_1_66e6c62c0c44534d8d77ffade8e38166:false,
            manage_1_f576fc31ec07438895c5d9fb7c3d90ab:false,
            manage_1_1aeb980bd390f9be7a4bdc8b172ae828:false,
            manage_1_265a1c4bf93a596bef3040e3588568ea:false,
            manage_1_1ef6036e9d9b07e287a79750e6a5748b:false,
            manage_1_cd38778d09b32c7abb4095dce7ea3867:false,
            manage_1_ab3b70d80fb94cd9e1f73730c45ca6ad:false,
            manage_1_8630039b1afea0b842b6ab05ec0a1d89:false,
            manage_1_e9a856899df2c12b16c6c603fba4b411:false,
            manage_1_9678e4390b701312c1ab922251b890c6:false,
            manage_1_5fff530e4e66488a3954d0e78de763d0:false,
            manage_1_e6e838595b23e9c111adf7d36e6ae506:false,
            manage_1_9e37a8c6b6205b9878b78f280c88b8ac:false,
            manage_1_9d1358772faa8ba85e54cd4e0ab3d433:false,
            manage_1_2391143d958c842fff389fcd3cd37ac5:false,
            manage_1_0acaae47ebcd6bec3f2e79b7d0957ff5:false,
            manage_1_90a1b26319d44f4e9597ff2f1fe80afa:false,
            manage_1_744b9d0b701c8474cc5da6be48742d10:false,
            manage_1_21a1c824ac39a7b9d01d2180342e58e1:false,
            manage_1_e9d1eae819bd91d183cc90b2d34c4852:false,
            manage_1_c7f43514fa8c4017a1e1dc9776b1743a:false,
            manage_1_5dec290129895730b1597da231067ae5:false,
            manage_1_be14cfe0e2fc00e3ae156c923b5050e1:false,
            manage_1_cee71eefe24c3c4ef6c926a73c7a8ad9:false,
            manage_1_b8146491f72ccfd7e88b6384d26616db:false,
            manage_1_1472a3b957137d12244c5690e2d8dd63:false,
            manage_1_3e7810971bd64c16c3d7e1cc1e60f531:false,
            manage_1_75863819c2c6a33959e7117cecedf582:false,
            manage_1_bc827454956c16867166ab8331d67118:false,
            manage_1_66a1f16743a91b24fe6844b17872a430:false,
            manage_1_3550dc3140f97b9369aef7bb80b29e58:false,
            manage_1_e0ab6ee2ecef6405de65d7f498b885ac:false,
            manage_1_e32678ef5c68343293c8a9bb11a71860:false,
            manage_1_fe4ade2516985ebc7d328cf2729c71fb:false,
            manage_1_3fcc9bf52e0059240ae570d151de1869:false,
            manage_1_2dbb880d5a9f9a98599a90b58dc63e35:false,
            manage_1_4a6f4d2a223dd0cbd58fa3391eba3566:false,
            manage_1_659b66e1c96f72fd43653213283dad6c:false,
            manage_1_1d5848c20332b61028c2dae44d381bdc:false,
            manage_1_ed15a7655b9bcb9771353155ef8589d4:false,
            manage_1_ac58c1c56627222eda2b9b82fb5fd95a:false,
            manage_1_e78f3dbdc334dd8fa7d29bc576a4b20a:false,
            manage_1_adb9e9ce1f5caff3eb25293577d1d982:false,
            manage_1_bf42ff8e6e1abb8fd6eda46d1b65392f:false,
            manage_1_bbf6746909a10ea06b5bf90da3febe75:false,
            manage_1_411923a861d031194161faf46e18bbc6:false,
            manage_1_8db141fd5e8dddb3594bed79ee674186:false,
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
