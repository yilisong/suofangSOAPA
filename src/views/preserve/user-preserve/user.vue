<style lang="less">
    @import 'user.less';
</style>

<template>
   <div class="user-preserve">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户" name="first">
                <div>
                    <Button  @click="addProperty">
                        <Icon type="plus-round" class="icon"></Icon>添加
                    </Button>
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
                    <el-table :data="tableData1" border style="width: 100%">
                        <el-table-column label="账号" width="180" prop="cname"></el-table-column>
                        <el-table-column label="用户名" prop="name"></el-table-column>
                        <!-- 业务描述 -->
                        <el-table-column label="手机" width="180" prop="mobile"></el-table-column>
                        <el-table-column label="邮箱" width="180" prop="email"></el-table-column>
                        <el-table-column label="部门" prop="department"></el-table-column>
                        <el-table-column label="激活">
                            <template scope="scope">
                                <el-switch v-model="scope.row.status" on-color="#13ce66" off-color="#ff4949" disabled="true"></el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column label="用户组" prop="group_ids"></el-table-column>
                        <el-table-column label="操作" width="250">
                            <template scope="scope">
                                <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
                                <el-popover ref="popover5" placement="top" width="160" v-model="scope.row.deleteVisible">
                                    <p>您确定删除当前信息么？</p>
                                    <div style="text-align: right; margin: 0">
                                        <el-button size="mini" type="text" @click="scope.row.deleteVisible = false">取消</el-button>
                                        <el-button type="primary" size="mini" @click="deleteList(scope.$index, scope.row.id)">确定</el-button>
                                    </div>
                                </el-popover>
                                <el-button type="primary" size="small" v-popover:popover5 @click="showVisible(scope.row.deleteVisible)">删除</el-button>
                                <el-dropdown>
                                    <el-button size="small" type="primary">
                                        自评<i class="el-icon-caret-bottom el-icon--right"></i>
                                    </el-button>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item  @click="handleLevel(scope.row.security_level, scope.row.id)">等级自评详情</el-dropdown-item>
                                        <el-dropdown-item  @click="handleTec(scope.row.security_level, scope.row.id)">技术自评详情</el-dropdown-item>
                                        <el-dropdown-item  @click="handleManage(scope.row.security_level, scope.row.id)">管理自评详情</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </template>
                        </el-table-column>
                    </el-table>
                    <!-- <Table :data="tableData1" :columns="tableColumns1" stripe></Table> -->
                </div>
            </el-tab-pane>
            <el-tab-pane label="用户组" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="权限" name="third">角色管理</el-tab-pane>
        </el-tabs>
   </div>
</template>

<script>
import axios from 'axios';
import 'element-ui/lib/theme-default/index.css'
export default {
    data () {
        return {
            activeName2: 'first',
            total: 0,
            pageSize:1,
            modal: false,
            title: '增加资产信息',
            tableColumns1: [
                {
                    title:'邮箱',
                    key:'email',
                },
                {
                    title:'部门',
                    key:'department',
                },
                {
                    title:'激活',
                    key:'status',
                },
                {
                    title:'用户组',
                    key:'group_ids',
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 200,
                    align: 'center',
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
                name:'',//用户名
                cname:'',//账号
                group_ids:'',//用户组
                // status:,
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
    computed: {
        url () {
            return this.$store.state.userCode.url
        }
    },
    created(){
        this.queryUsers()
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        },
        queryUsers() {
            const url = this.url + '/user/api/v1.0/users'
            axios({
                method:'get',
                url: url,
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data
                    this.tableData1 = res.users
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
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
<style>
.el-tabs__item.is-active {
    background: #20a0ff;
    color: #fff
}
</style>

