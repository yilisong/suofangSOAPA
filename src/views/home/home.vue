<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main">
        <div>
            <Button @click="addProperty"><Icon type="plus-round" class="icon"></Icon>添加</Button>
            <upload action="http://192.168.4.182:8092/asset/api/v1.0/assets/file">
                <Button><Icon type="share" class="icon"></Icon>Excel导入</Button>
            </upload>
        </div>
        <modal v-model="modal" :title="title" :mask-closable="false">
            <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
                <form-item label="资产编号" prop="serial_no">
                    <i-input v-model="formValidate.serial_no" placeholder="8位数的资产编号"></i-input>
                </form-item>
                <form-item label="资产名称" prop="name">
                    <i-input v-model="formValidate.name" placeholder="资产名称"></i-input>
                </form-item>
                <form-item label="地点" prop="location">
                    <i-input v-model="formValidate.location" placeholder="资产放置地点"></i-input>
                </form-item>
                <form-item label="责任人" prop="owner">
                    <i-input v-model="formValidate.owner" placeholder="资产负责人"></i-input>
                </form-item>
                <form-item label="责任人联系方式" prop="owner_contact">
                    <i-input v-model="formValidate.owner_contact" placeholder="联系方式"></i-input>
                </form-item>
                <form-item label="资产类型" prop="asset_type_name">
                    <radio-group v-model="formValidate.asset_type_name">
                        <radio label="个人终端"></radio>
                        <radio label="服务器"></radio>
                        <radio label="网络设备"></radio>
                        <radio label="周边设备"></radio>
                        <radio label="应用系统"></radio>
                    </radio-group>
                </form-item>
                <form-item label="IP地址" prop="ip">
                    <i-input v-model="formValidate.ip" placeholder="IP地址"></i-input>
                </form-item>
                <form-item label="端口" prop="port">
                    <i-input v-model="formValidate.port" placeholder="资产对外开放端口"></i-input>
                </form-item>
                <form-item label="所属网络" prop="network">
                    <i-input v-model="formValidate.network" placeholder="资产所在网络名称"></i-input>
                </form-item>
                <form-item label="制造商" prop="manufacturer">
                    <i-input v-model="formValidate.manufacturer" placeholder="资产生产厂商"></i-input>
                </form-item>
                <form-item label="Agent/Syelog" prop="asset_agent_type_name">
                    <radio-group v-model="formValidate.asset_agent_type_name">
                        <radio label="无"></radio>
                        <radio label="Agent"></radio>
                        <radio label="Syelog"></radio>
                    </radio-group>
                </form-item>
                <form-item label="告警信息" prop="alarm_count">
                    <i-input v-model="formValidate.alarm_count" placeholder="告警信息"></i-input>
                </form-item>
                <form-item label="备注" prop="describe">
                    <i-input v-model="formValidate.describe" placeholder="其他信息"></i-input>
                </form-item>
            </i-form> 
            <div slot="footer">
                <i-button type="primary" @click="handleSubmit('formValidate')">保存</i-button>
                <i-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</i-button>
            </div>
        </modal>
        <div style="margin-top:10px">
           <i-table width="80%" border :columns="tableHeader" :data="tableData"></i-table>
           <div style="margin: 10px;overflow: hidden;float: right;">
                <Page :total="total" :page-size="pageSize" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
</template>

<script>
import Resource from '@/store/recouse/recouse'

import axios from 'axios'
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
                    key: 'serial_no',
                    width:100,
                    height:'40px',
                    fixed: 'left'
                },
                {
                    title: '资产名称',
                    key: 'name',
                    width:100,
                    fixed: 'left'
                },
                {
                    title: '地点',
                    key: 'location',
                    width:150
                },
                {
                    title: '责任人',
                    key: 'owner',
                    width:100
                },
                {
                    title: '责任人联系方式',
                    key: 'owner_contact',
                    width:150
                },
                {
                    title: '资产类型',
                    key: 'asset_type_name',
                    width:100
                },
                {
                    title: 'IP地址',
                    key: 'ip',
                    width:120,
                },
                {
                    title: '端口',
                    key: 'port',
                    width:100
                },
                {
                    title: '所属网络',
                    key: 'network',
                    width:100
                },
                {
                    title: '制造商',
                    key: 'manufacturer',
                    width:100
                },
                {
                    title: 'Agent/Syslog',
                    key: 'asset_agent_type_name',
                    width: 120
                },
                {
                    title: '告警信息',
                    key: 'alarm_count',
                    width:100
                },
                {
                    title: '备注',
                    key: 'describe',
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
            tableData: [],
            formValidate: {
                serial_no:'',
                name: '',
                location:'',
                owner:'',
                owner_contact:'',
                asset_type_name:'',
                ip:'',
                port:'',
                network:'',
                manufacturer:'',
                asset_agent_type_name:'',
                alarm_count:'',
                describe:''
            },
            ruleValidate: {
                serial_no: [
                    { 
                        required: true,
                        message: '请输入8位数的资产编号', 
                        trigger: 'blur' 
                    }
                ],
                name: [
                    { 
                        required: true, 
                        message: '请输入资产名称', 
                        trigger: 'blur' 
                    }
                ],
                location: [
                    {
                        required: true, 
                        message: '请输入资产放置地点', 
                        trigger: 'blur' 
                    }
                ],
                owner: [
                    { 
                        required: true, 
                        message: '请输入资产负责人', 
                        trigger: 'blur' 
                    }
                ],
                owner_contact: [
                    { 
                        required: true, 
                        message: '请输入资产负责人的联系方式', 
                        trigger: 'blur'
                    }
                ],
                asset_type_name: [
                    { 
                        required: true, 
                        type: 'date', 
                        message: '请选择资产类型', 
                        trigger: 'change' 
                    }
                ],
                ip: [
                    { 
                        required: true, 
                        type: 'date', 
                        message: '请输入IP地址',
                        trigger: 'blur' 
                    }
                ],
                port: [
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
                asset_agent_type_name: [
                    { 
                        required: true, 
                        message: '请选择', 
                        trigger: 'change'
                    },
                ],
                alarm_count: [
                    { 
                        required: true, 
                        message: '请填写告警信息', 
                        trigger: 'blur' 
                    },
                ],
                describe: [
                    { 
                        required: true, 
                        message: '备注', 
                        trigger: 'blur' 
                    },
                ], 
            },
            total: 0,
            pageSize: 10,
            pageNum: 1
        };
    },
    computed: {
        url () {
            return this.$store.state.userCode.url
        }
    },
    created() {
        this.queryAboutList()
    },
    methods: {
        queryAboutList() {
            const params = {
                page: this.pageNum,
                per_page: this.pageSize,
                search_msg: ''
            }
            axios({
                method:'get',
                url: this.url + '/asset/api/v1.0/assets',
                params:params
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data
                    this.total = res.total
                    this.tableData = res.assets
                }
            })
        },
        changePage(num) {
            this.pageNum = num
        },
        deletelist (params) {
            console.log(params)
            const url = this.url + '/asset/api/v1.0/assets/' + params.row.id
            axios({
                method:'delete',
                url: url
            })
            .then(response => {
                if(response.data.status) {
                    this.$Message.success('删除成功!');
                    this.tableData.splice(params.index, 1);
                } else {
                    this.$Message.error('删除失败');
                }
            })
        },
        editPlan(params) {
            // this.$refs['formValidate'].resetFields();
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
            // this.$refs[name].validate((valid) => {
            //     console.log(valid)
            //     if (valid) {
                    console.log(2)
                    let url
                    const params = this.formValidate
                    if(this.title === '增加资产信息') {
                        url = this.url + '/asset/api/v1.0/assets'
                        axios({
                            method:'post',
                            url: url,
                            data:params
                        })
                        .then(response => {
                            if(response.data.status) {
                                this.$Message.success('保存成功!');
                            } else {
                                this.$Message.error('保存失败');
                            }
                        })
                    } else {
                        url = this.url + '/asset/api/v1.0/assets/' + this.formValidate.id
                        axios({
                            method:'put',
                            url: url,
                            data:params
                        })
                        .then(response => {
                            if(response.data.status) {
                                this.$Message.success('保存成功!');
                            } else {
                                this.$Message.error('保存失败');
                            }
                        })
                    }
                    // this.$Message.success('保存成功!');
                // } else {
                //     this.$Message.error('保存失败');
                // }
            // })
        },
        handleReset(name) {
            this.modal = false
        }
    }
}

</script>
