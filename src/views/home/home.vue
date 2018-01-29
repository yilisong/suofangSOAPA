<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main">
        <div>
            <Button @click="addProperty"><Icon type="plus-round" class="icon"></Icon>添加</Button>
            <Button><Icon type="share" class="icon"></Icon>Excel导入</Button>
        </div>
        <modal v-model="modal" :title="title" :mask-closable="false">
            <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                <form-item label="资产编号" prop="AssetNum">
                    <i-input v-model="formValidate.AssetNum" placeholder="8位数的资产编号"></i-input>
                </form-item>
                <form-item label="资产名称" prop="AssetName">
                    <i-input v-model="formValidate.AssetName" placeholder="资产名称"></i-input>
                </form-item>
                <form-item label="地点" prop="address">
                    <i-input v-model="formValidate.address" placeholder="资产放置地点"></i-input>
                </form-item>
                <form-item label="责任人" prop="AssetPer">
                    <i-input v-model="formValidate.AssetPer" placeholder="资产负责人"></i-input>
                </form-item>
                <form-item label="责任人联系方式" prop="contact">
                    <i-input v-model="formValidate.contact" placeholder="联系方式"></i-input>
                </form-item>
                <form-item label="资产类型" prop="AssetType">
                    <radio-group v-model="formValidate.AssetType">
                        <radio label="个人终端"></radio>
                        <radio label="服务器"></radio>
                        <radio label="网络设备"></radio>
                        <radio label="周边设备"></radio>
                        <radio label="应用系统"></radio>
                    </radio-group>
                </form-item>
                <form-item label="IP地址" prop="IPAddress">
                    <i-input v-model="formValidate.IPAddress" placeholder="IP地址"></i-input>
                </form-item>
                <form-item label="端口" prop="COMport">
                    <i-input v-model="formValidate.COMport" placeholder="资产对外开放端口"></i-input>
                </form-item>
                <form-item label="所属网络" prop="network">
                    <i-input v-model="formValidate.network" placeholder="资产所在网络名称"></i-input>
                </form-item>
                <form-item label="制造商" prop="Maker">
                    <i-input v-model="formValidate.Maker" placeholder="资产生产厂商"></i-input>
                </form-item>
                <form-item label="Agent/Syelog" prop="Agent">
                    <radio-group v-model="formValidate.Agent">
                        <radio label="无"></radio>
                        <radio label="Agent"></radio>
                        <radio label="Syelog"></radio>
                    </radio-group>
                </form-item>
                <form-item label="告警信息" prop="warn">
                    <i-input v-model="formValidate.warn" placeholder="告警信息"></i-input>
                </form-item>
                <form-item label="备注" prop="remarks">
                    <i-input v-model="formValidate.remarks" placeholder="其他信息"></i-input>
                </form-item>
            </i-form> 
            <div slot="footer">
                <i-button type="primary" @click="handleSubmit('formValidate')">保存</i-button>
                <i-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</i-button>
            </div>
        </modal>
        <div style="margin-top:10px">
           <i-table width="80%" height="400" border :columns="tableHeader" :data="tableData"></i-table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'home',
    components: {
    },
    data () {
        return {
            // value: '',
            modal: false,
            title: '增加资产信息',
            tableHeader: [
                {
                    title: '资产编号',
                    key: 'AssetNum',
                    width:100,
                    height:'40px',
                    fixed: 'left'
                },
                {
                    title: '资产名称',
                    key: 'AssetName',
                    width:100,
                    fixed: 'left'
                },
                {
                    title: '地点',
                    key: 'address',
                    width:150
                },
                {
                    title: '责任人',
                    key: 'AssetPer',
                    width:100
                },
                {
                    title: '责任人联系方式',
                    key: 'contact',
                    width:150
                },
                {
                    title: '资产类型',
                    key: 'AssetType',
                    width:100
                },
                {
                    title: 'IP地址',
                    key: 'IPAddress',
                    width:120,
                },
                {
                    title: '端口',
                    key: 'COMport',
                    width:100
                },
                {
                    title: '所属网络',
                    key: 'network',
                    width:100
                },
                {
                    title: '制造商',
                    key: 'Maker',
                    width:100
                },
                {
                    title: 'Agent/Syslog',
                    key: 'Agent',
                    width: 120
                },
                {
                    title: '告警信息',
                    key: 'warn',
                    width:100
                },
                {
                    title: '备注',
                    key: 'remarks',
                    width:100
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 140,
                    // align: 'center',
                    // fixed: 'right',
                    render: (h, params) => {
                        return h('div', [
                        h('Button', {
                            props: {
                                size: 'small'
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.editPlan(params)
                                }
                            }
                        }, '修改'),
                        h('Poptip', {
                            props: {
                                confirm: true,
                                title: '您确定要删除这条数据吗?',
                                transfer: true,
                                placement: "left"
                            },
                            on: {
                                'on-ok': () => {
                                    let vm = this
                                    vm.deletelist(params)
                                }
                            }
                        }, [
                            h('Button', {
                                style: {
                                    marginRight: '5px'
                                },
                                props: {
                                    size: 'small',
                                    placement: 'top'
                                }
                                }, '删除')
                            ])
                        ]);
                    }
                }
            ],
            tableData: [
                {
                    id: 2,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },{
                    id: 2,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },{
                    id: 2,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },{
                    id: 2,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },{
                    id: 2,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },{
                    id: 2,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },{
                    id: 2,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },{
                    id: 2,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },{
                    id: 2,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },
                {
                    id: 3,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },
                {
                    id: 4,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },
                {
                    id: 5,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                },
                {
                    id: 6,
                    AssetNum:'VZSP1001',
                    AssetName: '思科防护墙',
                    address:'杭州高科技园',
                    AssetPer:'王某某',
                    contact:'wang@123.com',
                    AssetType:'个人终端',
                    IPAddress:'192.168.1.1',
                    COMport:'80',
                    network:'办公室',
                    Maker:'思科',
                    Agent:'agent',
                    warn:'无',
                    remarks:'无'
                }
            ],
            formValidate: {
                AssetNum:'',
                AssetName: '',
                address:'',
                AssetPer:'',
                contact:'',
                AssetType:'',
                IPAddress:'',
                COMport:'',
                network:'',
                Maker:'',
                Agent:'',
                warn:'',
                remarks:''
            },
            ruleValidate: {
                AssetNum: [
                    { 
                        required: true,
                        message: '请输入8位数的资产编号', 
                        trigger: 'blur' 
                    }
                ],
                AssetName: [
                    { 
                        required: true, 
                        message: '请输入资产名称', 
                        trigger: 'blur' 
                    }
                ],
                address: [
                    {
                        required: true, 
                        message: '请输入资产放置地点', 
                        trigger: 'blur' 
                    }
                ],
                AssetPer: [
                    { 
                        required: true, 
                        message: '请输入资产负责人', 
                        trigger: 'blur' 
                    }
                ],
                contact: [
                    { 
                        required: true, 
                        message: '请输入资产负责人的联系方式', 
                        trigger: 'blur'
                    }
                ],
                AssetType: [
                    { 
                        required: true, 
                        type: 'date', 
                        message: '请选择资产类型', 
                        trigger: 'change' 
                    }
                ],
                IPAddress: [
                    { 
                        required: true, 
                        type: 'date', 
                        message: '请输入IP地址',
                        trigger: 'blur' 
                    }
                ],
                COMport: [
                    { 
                        required: true, 
                        message: '请输入资产对外开放端口', 
                        trigger: 'blur' 
                    },
                ],
                network: [
                    { 
                        required: true, 
                        message: '请填写资产所在网络名称', 
                        trigger: 'blur' 
                    },
                ],
                Marker: [
                    { 
                        required: true, 
                        message: '请填写资产生产厂商', 
                        trigger: 'blur' 
                    },
                ],
                Agent: [
                    { 
                        required: true, 
                        message: '请选择', 
                        trigger: 'change'
                    },
                ],
                warn: [
                    { 
                        required: true, 
                        message: '请填写告警信息', 
                        trigger: 'blur' 
                    },
                ],
                remarks: [
                    { 
                        required: true, 
                        message: '备注', 
                        trigger: 'blur' 
                    },
                ], 
            }
        };
    },
    
    computed: {
        avatorPath () {
            return localStorage.avatorImgPath;
        }
    },
    methods: {
        deletelist (index) {
            this.tableData.splice(index, 1);
        },
        editPlan(params) {
            this.$refs['formValidate'].resetFields();
            console.log(params)
            this.title = '修改资产信息'
            this.formValidate = params.row
            this.modal = true
        },
        addProperty() {
            console.log('add')
            this.$refs['formValidate'].resetFields();
            this.title = '增加资产信息'
            this.modal = true
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset(name) {
            this.modal = false
        }
    }
}

</script>
