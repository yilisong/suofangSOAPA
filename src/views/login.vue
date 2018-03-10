<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <i-input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </i-input>
                        </FormItem>
                        <FormItem prop="password">
                            <i-input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </i-input>
                        </FormItem>
                        <!-- <FormItem prop="auth_code">
                            <i-input type="text" v-model="form.auth_code" placeholder="请输入验证码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </i-input>
                            <img :src="src" alt="">
                        </FormItem> -->
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import axios from 'axios';
export default {
    data () {
        return {
            form: {
                userName: '',
                password: '',
                // auth_code: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                // ],
                // auth_code: [
                //     { required: true, message: '验证码不能为空', trigger: 'blur' }
                ]
            },
            src: ''
        };
    },
    computed: {
        url () {
            return this.$store.state.userCode.url
        }
    },
    created() {
        // this.getAuthCode()
    },
    methods: {
        getAuthCode() {
            this.src = this.url + '/users/code'
        },
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                //     const url = this.url + '/api/login'
                //     axios({
                //         method: "post",
                //         url: url,
                //         data: this.form
                //     })
                //     .then(response => {
                //         if(response.data.status) {
                //             // window.location.href = '/#/home'
                            Cookies.set('user', this.form.userName);
                            Cookies.set('user_suofangsoapa', this.form.userName);
                            Cookies.set('password', this.form.password);
                //             //  Cookies.set('auth_code', this.form.auth_code);
                            this.$router.push({
                                name: 'home_index'
                            })
                            window.location.href = '/#/home'
                //         } else {
                //             this.$Message.error(response.data.desc)
                //         }
                //     })
                }
            });
        }
    }
};
</script>

<style>

</style>
