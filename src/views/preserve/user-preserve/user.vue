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
                        <form-item label="手机" prop="mobile">
                            <i-input v-model="formItem.mobile"></i-input>
                        </form-item>
                        <form-item label="邮箱" prop="email">
                            <i-input v-model="formItem.email"></i-input>
                        </form-item>
                        <form-item label="部门" prop="department">
                            <i-input v-model="formItem.department"></i-input>
                        </form-item>
                        <form-item label="激活" prop="status">
                            <el-switch v-model="formItem.status" on-color="#13ce66" off-color="#ff4949"></el-switch>
                        </form-item>
                        <form-item label="所属用户组" prop="group_ids">
                            <i-input v-model="formItem.group_ids"></i-input>
                        </form-item>
                    </i-form>
                    <div slot="footer">
                        <i-button type="primary" @click="handleSubmit('formItem')">保存</i-button>
                        <i-button type="ghost" @click="handleReset('formItem')" style="margin-left: 8px">取消</i-button>
                    </div>
                </modal>
                <modal v-model="modal2" title="修改密码" :mask-closable="false">
                    <i-form ref="formItem2" :model="formItem2" :rules="ruleValidate2" :label-width="100">
                        <form-item label="输入新密码" prop="passWord">
                            <i-input v-model="formItem2.passWord"></i-input>
                        </form-item>
                        <form-item label="确认新密码" prop="passWords">
                            <i-input v-model="formItem2.passWords"></i-input>
                        </form-item>
                    </i-form>
                    <div slot="footer">
                        <i-button type="primary" @click="handleSubmitPassWords('formItem2')">保存</i-button>
                        <i-button type="ghost" @click="handleResetPassWords('formItem2')" style="margin-left: 8px">取消</i-button>
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
                                <el-switch v-model="scope.row.status" on-color="#13ce66" off-color="#ff4949" disabled></el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column label="用户组" prop="group_ids"></el-table-column>
                        <el-table-column label="操作" width="250">
                            <template scope="scope">
                                <el-button type="primary" size="small" @click="editPlan(scope.$index, scope.row)">编辑</el-button>
                                <el-popover ref="popover5" placement="top" width="160" v-model="scope.row.deleteVisible">
                                    <p>您确定删除当前信息么？</p>
                                    <div style="text-align: right; margin: 0">
                                        <el-button size="mini" type="text" @click="scope.row.deleteVisible = false">取消</el-button>
                                        <el-button type="primary" size="mini" @click="deleteUsers(scope.$index, scope.row.id)">确定</el-button>
                                    </div>
                                </el-popover>
                                <el-button type="primary" size="small" v-popover:popover5 @click="deleteUsers(scope.row.deleteVisible)">删除</el-button>
                                <el-button type="primary" size="small" @click="changePassWords(scope.row.id)">修改密码</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
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
            modal2: false,
            title: '增加用户信息',
            tableData1: [],
            formItem2: {
                password: '',
                passwords: ''
            },
            formItem: {
                name:'',//用户名
                group_ids:'',//用户组
                status: true,
                department:'',
                email:'',
                mobile:''
            },
            ruleValidate2: {},
            ruleValidate: {
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
            this.$refs['formItem'].resetFields();
            this.title = '增加用户信息'
            this.modal = true
        },
        editPlan(index, params) {
            console.log(params)
            this.title = '修改用户信息'
            this.formItem = params
            this.modal = true
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let url
                    if (this.title === '增加用户信息') {
                        url = this.url + '/user/api/v1.0/users'
                        axios({
                            method:'post',
                            url: url,
                            data: this.formItem
                        })
                        .then(response => {
                            if(response.data.status) {
                                this.$Message.info('添加成功')
                            } else {
                                this.$Message.error(response.data.desc)
                            }
                        })
                    } else {
                        url = this.url + '/user/api/v1.0/users/' + this.formItem.id
                        axios({
                            method:'put',
                            url: url,
                            data:this.formItem
                        })
                        .then(response => {
                            if(response.data.status) {
                                this.$Message.info('修改成功')
                            } else {
                                this.$Message.error(response.data.desc)
                            }
                        })
                    }
                } else {
                    this.$Message.error('提交失败');
                }
            })
        },
        handleReset(name) {
            this.modal = false
        },
        showVisible(deleteVisible) {
            deleteVisible = true
        },
        deleteUsers(index, id) {
            const url = this.url + '/user/api/v1.0/users/' + id
            axios({
                method:'delete',
                url: url,
            })
            .then(response => {
                if(response.data.status) {
                    this.$Message.info('删除成功')
                    this.queryUsers()
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
        },
        changePassWords(id) {

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

