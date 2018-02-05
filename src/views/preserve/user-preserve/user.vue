<style lang="less">
    @import 'user.less';
</style>

<template>
   <div class="user-preserve">
        <tabs value="name1">
            <tab-pane label="用户" name="name1">
                <div>
            <Button  @click="addProperty">
                <Icon type="plus-round" class="icon"></Icon>添加
            </Button>
            <!-- <Button><Icon type="key" class="icon"></Icon>重置密码</Button>
            <Button><Icon type="star" class="icon"></Icon>岗位</Button>
            <Button><Icon type="person-stalker" class="icon"></Icon>部门</Button>
            <Button><Icon type="backspace" class="icon"></Icon>清空岗位</Button> -->
        </div>
        <modal v-model="modal" :title="title" :mask-closable="false">
            <i-form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="100">
                <form-item label="账号" prop="name">
                    <i-input v-model="formItem.name"></i-input>
                </form-item>
                <form-item label="用户名" prop="name">
                    <i-input v-model="formItem.name"></i-input>
                </form-item>
                <form-item label="密码" prop="password">
                    <i-input v-model="formItem.password"></i-input>
                </form-item>
                <form-item label="确认密码" prop="confirmPassword">
                    <i-input v-model="formItem.confirmPassword"></i-input>
                </form-item>
                <form-item label="所属用户组" prop="address">
                    <i-input v-model="formItem.address"></i-input>
                </form-item>
                <form-item label="手机" prop="phone">
                    <i-input v-model="formItem.phone"></i-input>
                </form-item>
                <form-item label="邮箱" prop="email">
                    <i-input v-model="formItem.email"></i-input>
                </form-item>
            </i-form>
            <div slot="footer">
                <i-button type="primary" @click="handleSubmit('formItem')">保存</i-button>
                <i-button type="ghost" @click="handleReset('formItem')" style="margin-left: 8px">取消</i-button>
            </div>
        </modal>
        <div class="table-name">
            <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
            <div class="page">
                <div class="page-show">
                    <Page show-total :total="total" :current="pageSize" @on-change="changePage"></Page>
                </div>
            </div>
        </div>
            </tab-pane>
            <tab-pane label="用户组" name="name2">标签二的内容</tab-pane>
            <tab-pane label="权限" name="name3">标签三的内容</tab-pane>
        </tabs>
   </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data () {
        return {
            total: 2,
            pageSize:1,
            modal: false,
            title: '增加资产信息',
            tableColumns1: [
                {
                    title: '账号',
                    key: 'admin',
                },
                {
                    title: '用户名',
                    key: 'name',
                },
                {
                    title: '手机',
                    key: 'phone',
                },
                {
                    title:'邮箱',
                    key:'email',
                },
                {
                    title:'部门',
                    key:'section',
                },
                {
                    title:'激活',
                    key:'use',
                },
                {
                    title:'用户组',
                    key:'post',
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 200,
                    align: 'center',
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
                        }, '密码管理'),
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
            tableData1: [
                {
                    name:'用户名',
                    china:'中文名',
                    english:'英文名',
                    sex:'女',
                    administrator:'否',
                    phone:'123456789012',
                    email:'123.com',
                    use:'否',
                    post:'前端',
                    section:'研发',
                    born:'1990-01-01',
                    address:'上海',
                    password: '123456',
                    confirmPassword:'123456'
                },
                {
                    name:'用户名',
                    china:'中文名',
                    english:'英文名',
                    sex:'女',
                    administrator:'否',
                    phone:'123456789012',
                    email:'123.com',
                    use:'否',
                    post:'前端',
                    section:'研发',
                    born:'1990-01-01',
                    address:'上海',
                    password: '123456',
                    confirmPassword:'123456'
                },
                {
                    name:'用户名',
                    china:'中文名',
                    english:'英文名',
                    sex:'女',
                    administrator:'否',
                    phone:'123456789012',
                    email:'123.com',
                    use:'否',
                    post:'前端',
                    section:'研发',
                    born:'1990-01-01',
                    address:'上海',
                    password: '123456',
                    confirmPassword:'123456'
                },
                {
                    name:'用户名',
                    china:'中文名',
                    english:'英文名',
                    sex:'女',
                    administrator:'否',
                    phone:'123456789012',
                    email:'123.com',
                    use:'否',
                    post:'前端',
                    section:'研发',
                    born:'1990-01-01',
                    address:'上海',
                    password: '123456',
                    confirmPassword:'123456'
                },
            ],
            formItem: 
            {
                name:'',
                password:'',
                confirmPassword:'',
                sex:'male',
                use:'male',
                administrator:'male',
                born:'',
                address:'',
                china:'',
                english:'',
                phone:'',
                email:''
            },
            ruleValidate: 
            {
                name: [
                    {
                        required: true,
                        message: '请填写您的用户名！', 
                        trigger: 'blur' 
                    }
                ],
                password: [
                    {
                        required:true,
                        message:'请填写您的密码！',
                        trigger:'blur'
                    }
                ],
                confirmPassword:[
                    {
                        required:true,
                        message:'请确认密码是否一致！',
                        trigger:'blur'
                    }
                ],
                address:[
                    {
                        required:'ture',
                        message:'请填写您的地址！'
                    }
                ],
                phone:[
                    {
                        required:'true',
                        message:'请填写您的手机号！',
                        trigger:'blur'
                    }
                ],
                email:[
                    {
                        required:'true',
                        message:'请填写您的邮箱！',
                        trigger:'blur'
                    }
                ],
                use:[
                    {
                        required: true, 
                        type: 'date', 
                        message: '请选择资产类型', 
                        trigger: 'change' 
                    }
                ]
            }
        }
    },
     methods: {
            changePage (num) {
                console.log(num)
                // this.tableData1 = this.mockTableData1();
            },
            addProperty() {
                // console.log('add')
                this.$refs['formItem'].resetFields();
                this.title = '请提交用户信息'
                this.modal = true
            },
            editPlan(params) {
                // this.$refs['formItem'].resetFields();
                console.log(params)
                this.title = '修改用户信息'
                this.formItem = params.row
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
        
};
</script>

