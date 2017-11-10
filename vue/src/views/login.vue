<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="title">[小美健康云平台]</div>
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">© 2017-2018 上海好卓数据服务有限公司</p>
                </div>
            </Card>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie';
import constant from '../config/constant';
import ajaxUtil from '@/libs/ajax/ajaxUtil';
import Util from '@/libs/util';
export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    //后台校验用户名和密码是否正确
                    var username = this.form.userName;
                    var password = this.form.password;
                    var store = this.$store;
                    var router = this.$router;
                    //后台获取sessionkey
                    var getSessionUrl = 'sysUser/getSessionKey';
                    var sessionParam = {};
                    ajaxUtil.post(getSessionUrl, sessionParam)
                    .then(function (data) {
                        Cookies.set('loginKey', data, {path: "/", expires: 60 * 1000});
                        //登录
                        var loginUrl = 'sysUser/login';
                        var encryPassword = '';
                        if(Cookies.get('loginKey')){
                            encryPassword = Util.EncryptX({
                                word:password,
                                key:'loginKey'
                            })
                        }
                        var loginParam = {
                            phone: username, 
                            password: encryPassword
                        };
                        ajaxUtil.post(loginUrl, loginParam)
                        .then(function (data) {
                            Cookies.set('u_id', data.userId, {path: "/", expires: 24 * 60 * 60 * 1000});
                            Cookies.set('u_name', data.phone, {path: "/", expires: 24 * 60 * 60 * 1000});
                            Cookies.set('tokenId', data.tokenId, {path: "/", expires: 24 * 60 * 60 * 1000});
                            //校验通过将用户名密码和头像存进状态管理store中
                            Cookies.set('user', username);
                            Cookies.set('password', password);
                            store.commit('setAvator', constant.loginImageUrl);
                            //登录成功，跳转到首页
                            router.push({
                                name: 'home_index'
                            });
                        });
                    });
                }
            });
        }
    }
};
</script>

<style>

</style>
