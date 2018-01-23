<style lang="less">
    @import 'menu.less';
</style>

<template>
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
                 }
            }
        }
};
</script>

<style>

</style>
