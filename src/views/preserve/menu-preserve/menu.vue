<style lang="less">
    @import 'menu.less';
</style>

<template>
    <row type="flex" class="menu-content">
        <i-col span="6">
            <tree :data="data1"></tree>
        </i-col>
        <i-col span="18">
            <div class="menu-preserve">
                <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                    <form-item label="名称" prop="name">
                        <i-input v-model="formValidate.name"></i-input>
                    </form-item>
                    <form-item label="是否用于导航" prop="navigation">
                        <radio-group v-model="formValidate.navigation">
                            <radio label="是">是</radio>
                            <radio label="否">否</radio>
                        </radio-group>
                    </form-item>
                    <form-item label="URL" prop="url">
                        <i-input v-model="formValidate.url"></i-input>
                    </form-item>
                    <form-item label="描述" prop="describe">
                        <i-input v-model="formValidate.describe" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></i-input>
                    </form-item>
                </i-form>
                <div slot="footer" class="footer">
                    <i-button type="primary"><Icon type="loop" class="icon"></Icon>保存</i-button>
                    <i-button type="ghost">刷新缓存</i-button>
                </div>
            </div>
        </i-col>
    </row>  
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data () {
        return {
           formValidate: {
                name: '',
                navigation: '',
                url:'',
                describe:''
                },
                 ruleValidate: {
                    name: [
                        { required: true, message: '内容不能为空！', trigger: 'blur' }
                    ],
                     url: [
                        { required: true, message: '内容不能为空！', trigger: 'blur' }
                    ],
                    navigation: [
                        { required: true, message: '请选择！', trigger: 'change' }
                    ],
                    describe: [
                        {
                            required: true, message: '内容不能为空！', trigger: 'blur'
                        }
                    ],
                },
                data1: [
                    {
                        title: '运维管理',
                        expand: true,
                        children: [
                            {
                                title: '资产管理',
                                expand: true,
                                children: [
                                    {
                                        title: '资产管理',
                                        expand:true,
                                        children: [
                                            {
                                                title:'资产管理'
                                            }
                                        ]
                                    },
                                    {
                                        title: '安全规则',
                                        expand:true,
                                        children: [
                                            {
                                                title:'规则配置'
                                            }
                                        ]
                                    },
                                    {
                                        title: '日志查询',
                                        expand:true,
                                        children: [
                                            {
                                                title:'日志信息'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                title: '系统管理',
                                expand: true,
                                children: [
                                    {
                                        title: '系统默认基本信息维护',
                                        expand:true,
                                        children: [
                                            {
                                                title:'菜单维护'
                                            },
                                             {
                                                title:'用户维护'
                                            },
                                             {
                                                title:'部门维护'
                                            },
                                             {
                                                title:'岗位维护'
                                            },
                                             {
                                                title:'消息模板维护'
                                            },
                                        ]
                                    },
                                    {
                                        title: '权限管理',
                                        expand:true,
                                        children: [
                                            {
                                                title:'角色维护'
                                            },
                                             {
                                                title:'URL权限维护'
                                            },
                                             {
                                                title:'组件维护'
                                            },
                                             {
                                                title:'角色成员维护'
                                            },
                                             {
                                                title:'群组维护'
                                            },
                                        ]
                                    },
                                    {
                                        title:'Excel导入',
                                        expand:true,
                                        children: [
                                            {
                                                title:'导入模板定义'
                                            },
                                             {
                                                title:'导入演示'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
        }
    }
};
</script>

