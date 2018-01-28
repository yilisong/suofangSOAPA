<style lang="less">
    @import 'section.less';
</style>

<template>

 <row type="flex" class="section-content">
    <i-col span="8">
         <i-menu :theme="theme1" active-name="1">
            <menu-item name="1">
                <icon type="chatbubbles"></icon>
                运维部
            </menu-item>
            <menu-item name="2">
                <icon type="chatbubbles"></icon>
                运维部2
            </menu-item>
            <menu-item name="3">
                <icon type="chatbubbles"></icon>
                运维部3
            </menu-item>
        </i-menu>
    </i-col>
    <i-col span="16">
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
            theme1: 'dark',
            formValidate: {
                name: '',
                navigation: '是',
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
                }
        }
    }
};
</script>