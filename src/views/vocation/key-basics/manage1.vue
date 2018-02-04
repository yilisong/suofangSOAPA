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
                        <i-col span="24" class="visit-tr">
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
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="formulate-tr">
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
                        <i-col span="24" class="spite-tr">
                            100
                        </i-col>
                        <i-col span="24" class="steal-content">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="formulate-tr">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                        <i-col span="24" class="emplor-tr">
                            <row>
                                <i-col span="24" class="formulate-tr">
                                    100
                                </i-col>
                                <i-col span="24" class="visit-tr-last">
                                    100
                                </i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
            </row>
        </div>
    </div>
</template>