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
                        <form-item label="账号" prop="cname">
                            <i-input v-model="formItem.cname"></i-input>
                        </form-item>
                        <form-item label="用户名" prop="name">
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
                        <form-item label="用户名" prop="username">
                            <i-input v-model="formItem2.username"></i-input>
                        </form-item>
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
                                <el-button type="primary" size="small" v-popover:popover5>删除</el-button>
                                <el-button type="primary" size="small" @click="changePassWords(scope.row,scope.row.id)">修改密码</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="用户组" name="second">
                <div>
                    <Button  @click="addGroup">
                        <Icon type="plus-round" class="icon"></Icon>添加
                    </Button>
                </div>
                <modal v-model="modal3" title="请提交用户组信息:" :mask-closable="false">
                    <i-form ref="formItem3" :model="formItem3" :rules="ruleValidate3" :label-width="100">
                        <form-item label="名称" prop="cname">
                            <i-input v-model="formItem3.cname"></i-input>
                        </form-item>
                        <form-item label="说明" prop="name">
                            <i-input v-model="formItem3.name"></i-input>
                        </form-item>
                        <form-item label="权限" prop="selectors">
                            <i-input v-model="formItem3.selectors"></i-input>
                        </form-item>
                    </i-form>
                    <div slot="footer">
                        <i-button type="primary" @click="handleInfoAboutUsers('formItem3')">保存</i-button>
                        <i-button type="ghost" @click="handleResetInfoAboutUsers('formItem3')" style="margin-left: 8px">取消</i-button>
                    </div>
                </modal>
                <div class="table-name">
                    <el-table :data="tableData2" border style="width: 100%">
                        <el-table-column label="ID" width="180" prop="id"></el-table-column>
                        <el-table-column label="名称" prop="cname"></el-table-column>
                        <!-- 业务描述 -->
                        <el-table-column label="说明" width="" prop="name"></el-table-column>
                        <el-table-column label="权限" width="" prop="selectors"></el-table-column>
                        <el-table-column label="操作" width="250">
                            <template scope="scope">
                                <el-button type="primary" size="small" @click="editPlan2(scope.$index, scope.row)">编辑</el-button>
                                <el-popover ref="popover2" placement="top" width="160" v-model="scope.row.deleteVisible">
                                    <p>您确定删除当前信息么？</p>
                                    <div style="text-align: right; margin: 0">
                                        <el-button size="mini" type="text" @click="scope.row.deleteVisible = false">取消</el-button>
                                        <el-button type="primary" size="mini" @click="deleteUsers2(scope.$index, scope.row.id)">确定</el-button>
                                    </div>
                                </el-popover>
                                <el-button type="primary" size="small" v-popover:popover2>删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="权限" name="third">
                <div>
                    <Button  @click="addPower">
                        <Icon type="plus-round" class="icon"></Icon>添加
                    </Button>
                </div>
                <modal v-model="modal4" title="请提交权限信息:" :mask-closable="false">
                    <i-form ref="formItem4" :model="formItem4" :rules="ruleValidate4" :label-width="100">
                        <form-item label="名称" prop="name">
                            <i-input v-model="formItem4.name"></i-input>
                        </form-item>
                        <form-item label="说明" prop="cname">
                            <i-input v-model="formItem4.cname"></i-input>
                        </form-item>
                        <form-item label="类型" prop="kind">
                            <i-input v-model="formItem4.kind"></i-input>
                        </form-item>
                    </i-form>
                    <div slot="footer">
                        <i-button type="primary" @click="handlePrower('formItem4')">保存</i-button>
                        <i-button type="ghost" @click="handleResetPrower('formItem4')" style="margin-left: 8px">取消</i-button>
                    </div>
                </modal>
                <div class="table-name">
                    <el-table :data="tableData3" border style="width: 100%">
                        <el-table-column label="ID" width="180" prop="id"></el-table-column>
                        <el-table-column label="名称" prop="name"></el-table-column>
                        <!-- 业务描述 -->
                        <el-table-column label="说明" width="" prop="cname"></el-table-column>
                        <el-table-column label="类型" width="" prop="kind"></el-table-column>
                        <el-table-column label="操作" width="250">
                            <template scope="scope">
                                <el-button type="primary" size="small" @click="editPlan3(scope.$index, scope.row)">编辑</el-button>
                                <el-popover ref="popover2" placement="top" width="160" v-model="scope.row.deleteVisible">
                                    <p>您确定删除当前信息么？</p>
                                    <div style="text-align: right; margin: 0">
                                        <el-button size="mini" type="text" @click="scope.row.deleteVisible = false">取消</el-button>
                                        <el-button type="primary" size="mini" @click="deleteUsers3(scope.$index, scope.row.id)">确定</el-button>
                                    </div>
                                </el-popover>
                                <el-button type="primary" size="small" v-popover:popover2>删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-tab-pane>
        </el-tabs>
   </div>
</template>

<script>
import axios from 'axios';
import 'element-ui/lib/theme-default/index.css'
export default {
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入新密码'));
            } else {
                if (this.formCustom.passwdCheck !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formCustom.validateField('passwdCheck');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入新密码'));
            } else if (value !== this.formCustom.passwd) {
                callback(new Error('两次密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            activeName2: 'first',
            total: 0,
            pageSize:1,
            modal: false,
            modal2: false,
            modal3: false,
            modal4: false,
            title: '增加用户信息',
            tableData1: [],
            tableData2:[],
            tableData3: [],
            formItem: {
                name:'',//用户名
                group_ids:'',//用户组
                status: true,
                department:'',
                email:'',
                mobile:'',
                cname: ''
            },
            ruleValidate: {
                cname: [
                    {
                        required: true,
                        message: '请填写您的账号！', 
                        trigger: 'blur' 
                    }
                ],
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
            },
            formItem2: {
                username: '',
                passwd: '',
                passwords: ''
            },
            ruleValidate2: {
                passwd: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwords: [
                    { validator: validatePassCheck, trigger: 'blur' }
                ]
            },
            formItem3: {
                cname: '',
                name: '',
                selectors: ''
            },
            ruleValidate3: {
                cname: [
                    {
                        required: true,
                        message: '请填写您的名称！', 
                        trigger: 'blur' 
                    }
                ],
                name: [
                    {
                        required: true,
                        message: '请填写您的说明！', 
                        trigger: 'blur' 
                    }
                ],
                selectors: [
                    {
                        required: true,
                        message: '请填写您的权限！', 
                        trigger: 'blur' 
                    }
                ]
            },
            title1: '增加用户组信息',
            formItem4: {
                cname: '',
                name: '',
                kind: ''
            },
            ruleValidate4: {
                cname: [
                    {
                        required: true,
                        message: '请填写您的名称！', 
                        trigger: 'blur' 
                    }
                ],
                name: [
                    {
                        required: true,
                        message: '请填写您的说明！', 
                        trigger: 'blur' 
                    }
                ],
                kind: [
                    {
                        required: true,
                        message: '请填写您的类型！', 
                        trigger: 'blur' 
                    }
                ]
            },
            title2: '增加权限信息',
        }
    },
    computed: {
        url () {
            return this.$store.state.userCode.url
        }
    },
    created(){
        this.queryUsers()
        this.queryAboutGroup()
        this.queryPower()
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
                                this.modal = false
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
                                this.modal = false
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
        changePassWords(parmas, id) {
            this.formItem2.username = parmas.name
            console.log(parmas)
            this.modal2 = true
        },
        handleSubmitPassWords(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    const url = this.url + '/user/api/v1.0/password'
                    axios({
                        method:'post',
                        url: url,
                        data: this.formItem2
                    })
                    .then(response => {
                        if(response.data.status) {
                            this.modal2 = false
                            this.$Message.info('修改成功')
                            this.queryUsers()
                        } else {
                            this.$Message.error(response.data.desc)
                        }
                    })
                } else {

                }
            })
        },
        handleResetPassWords(name) {
            this.modal2 = false
        },
        //用户组
        queryAboutGroup() {
            const url = this.url + '/group/api/v1.0/groups'
            axios({
                method:'get',
                url: url,
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data
                    this.tableData2 = res.groups
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
        },
        addGroup() {
            this.title1 = '增加用户组信息'
            this.formItem3 = {
                cname: '',
                name: '',
                selectors: ''
            }
            this.modal3 = true
        },
        editPlan2(index, params) {
            this.title1 = '修改用户组信息'
            this.formItem3 = params
            this.modal3 = true
        },
        deleteUsers2(index, id) {
            const url = this.url + '/group/api/v1.0/groups/' + id
            axios({
                method:'delete',
                url: url,
            })
            .then(response => {
                if(response.data.status) {
                    this.$Message.info('删除成功')
                    this.queryAboutGroup()
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
        },
        handleInfoAboutUsers(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let url
                    let methodT
                    if(this.title1 === '增加用户组信息') {
                        methodT = 'post'
                        url = this.url + '/group/api/v1.0/groups'
                    } else {
                        methodT = 'put'
                        url = this.url + '/group/api/v1.0/groups/' + this.formItem3.id
                    }
                    axios({
                        method:methodT,
                        url: url,
                        data: this.formItem3
                    })
                    .then(response => {
                        if(response.data.status) {
                            this.modal3 = false
                            this.$Message.info('操作成功')
                            this.queryAboutGroup()
                        } else {
                            this.$Message.error(response.data.desc)
                        }
                    })
                } else {

                }
            })
        },
        handleResetInfoAboutUsers(name) {
            this.modal3 = false
        },
        //权限
        queryPower() {
            const url = this.url + '/selector/api/v1.0/selectors'
            axios({
                method:'get',
                url: url,
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data
                    this.tableData3 = res.selectors
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
        },
        addPower() {
            this.title2 = '增加权限信息'
            this.formItem4 = {
                cname: '',
                name: '',
                kind: ''
            }
            this.modal4 = true
        },
        editPlan3(index, params) {
            this.title2 = '修改权限信息'
            this.formItem4 = params
            this.modal4 = true
        },
        deleteUsers3(index, id) {
            const url = this.url + '/selector/api/v1.0/selectors/' + id
            axios({
                method:'delete',
                url: url,
            })
            .then(response => {
                if(response.data.status) {
                    this.$Message.info('删除成功')
                    this.queryPower()
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
        },
        handlePrower(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let url
                    let methodT
                    if(this.title2 === '增加权限信息') {
                        methodT = 'post'
                        url = this.url + '/selector/api/v1.0/selectors'
                    } else {
                        methodT = 'put'
                        url = this.url + '/selector/api/v1.0/selectors/' + this.formItem4.id
                    }
                    axios({
                        method:methodT,
                        url: url,
                        data: this.formItem4
                    })
                    .then(response => {
                        if(response.data.status) {
                            this.modal4 = false
                            this.$Message.info('操作成功')
                            this.queryPower()
                        } else {
                            this.$Message.error(response.data.desc)
                        }
                    })
                } else {

                }
            })
        },
        handleResetPrower(name) {
            this.modal4 = false
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

