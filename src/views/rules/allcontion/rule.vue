<style lang="less">
    @import 'rule.less';
</style>

<template>
   <div class="rule-allocation">
       <row>
            <i-col span="8">
                <div class="rule-name">规则组GROUP信息</div>
                <div class="rule-button">
                    <Button><Icon type="plus-round" style="padding-right:5px"></Icon>添加</Button>
                    <Button><Icon type="minus-round" style="padding-right:5px"></Icon>删除</Button>
                    <Button><Icon type="refresh" style="padding-right:5px"></Icon>取消</Button>
                    <i-button type="primary">
                        <Icon type="edit" style="padding-right:5px"></Icon>编辑
                    </i-button>
                    <i-button type="plus-round">
                        <Icon type="edit" style="padding-right:5px"></Icon>高级
                    </i-button>
                    <i-button type="plus-round">
                        <Icon type="arrow-up-c" style="padding-right:5px"></Icon>上传FTP
                    </i-button>
                    <Button><Icon type="checkmark-round" style="padding-right:5px"></Icon>应用规则</Button>
                </div>
                <div class="table-data">
                    <i-table height="400" :columns="ruleHeader" :data="ruleData"></i-table>
                </div>

            </i-col>
            <i-col span="15" push="1">
                <div class="rule-name">规则组GROUP信息</div>
                <div>
                    <Button><Icon type="plus-round" style="padding-right:5px"></Icon>添加</Button>
                    <Button><Icon type="minus-round" style="padding-right:5px"></Icon>删除</Button>
                    <Button><Icon type="refresh" style="padding-right:5px"></Icon>取消</Button>
                    <i-button type="primary">
                        <Icon type="edit" style="padding-right:5px"></Icon>编辑
                    </i-button>
                </div>
                <div class="table-data">
                    <i-table width='100%' height="440" border :columns="newHeader" :data="newData"></i-table>
                </div>
            </i-col>
        </row>
      


       
   </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data () {
        return {
           ruleHeader: [
                {
                    title: 'autold',
                    key: 'autold',
                },
                {
                    title: 'name',
                    key: 'name',
                },
                {
                    title: 'fileName',
                    key: 'fileName',
                }
           ],
           ruleData: [
            {
                   autold:'1',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'2',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'3',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'4',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'5',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'6',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'7',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'8',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'9',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'10',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'11',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'12',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'13',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               },
               {
                   autold:'14',
                   name:'web,accesslog',
                   fileName:'0245-web_rules.xml'
               }
            ],
            newHeader: [
                {
                    title:'autold',
                    key:'autold',
                    width: 100,
                    fixed: 'left' 
                },
                {
                    title:'groupAutold',
                    key:'groutAutold1',
                    width: 120,
                },
               {
                    title:'groupAutold',
                    key:'groutAutold2',
                    width: 120,
                },
                {
                    title:'groupAutold',
                    key:'groutAutold3',
                    width: 120,
                },
                {
                    title:'groupAutold',
                    key:'groutAutold4',
                    width: 120,
                },
                {
                    title:'groupAutold',
                    key:'groutAutold5',
                    width: 120,
                },
                {
                    title:'groupAutold',
                    key:'groutAutold6',
                    width: 120,
                },
                {
                    title:'groupAutold',
                    key:'groutAutold7',
                    width: 120,
                },
                {
                    title:'groupAutold',
                    key:'groutAutold8',
                    width: 100,
                    fixed: 'right' 
                },
            ],
            newData:[
                {
                    autold:'1111111',
                    groutAutold1:'222',
                    groutAutold2:'2222',
                    groutAutold3:'33333333',
                    groutAutold4:"44444444444",
                    groutAutold5:'555555',
                    groutAutold6:'6666',
                    groutAutold7:'77777777',
                    groutAutold8:'8888888888',
                },
                {
                    autold:'1111111',
                    groutAutold1:'222',
                    groutAutold2:'2222',
                    groutAutold3:'33333333',
                    groutAutold4:"44444444444",
                    groutAutold5:'555555',
                    groutAutold6:'6666',
                    groutAutold7:'77777777',
                    groutAutold8:'8888888888',
                },
                {
                    autold:'1111111',
                    groutAutold1:'222',
                    groutAutold2:'2222',
                    groutAutold3:'33333333',
                    groutAutold4:"44444444444",
                    groutAutold5:'555555',
                    groutAutold6:'6666',
                    groutAutold7:'77777777',
                    groutAutold8:'8888888888',
                },
                {
                    autold:'1111111',
                    groutAutold1:'222',
                    groutAutold2:'2222',
                    groutAutold3:'33333333',
                    groutAutold4:"44444444444",
                    groutAutold5:'555555',
                    groutAutold6:'6666',
                    groutAutold7:'77777777',
                    groutAutold8:'8888888888',
                },
                {
                    autold:'1111111',
                    groutAutold1:'222',
                    groutAutold2:'2222',
                    groutAutold3:'33333333',
                    groutAutold4:"44444444444",
                    groutAutold5:'555555',
                    groutAutold6:'6666',
                    groutAutold7:'77777777',
                    groutAutold8:'8888888888',
                },
                {
                    autold:'1111111',
                    groutAutold1:'222',
                    groutAutold2:'2222',
                    groutAutold3:'33333333',
                    groutAutold4:"44444444444",
                    groutAutold5:'555555',
                    groutAutold6:'6666',
                    groutAutold7:'77777777',
                    groutAutold8:'8888888888',
                },
                {
                    autold:'1111111',
                    groutAutold1:'222',
                    groutAutold2:'2222',
                    groutAutold3:'33333333',
                    groutAutold4:"44444444444",
                    groutAutold5:'555555',
                    groutAutold6:'6666',
                    groutAutold7:'77777777',
                    groutAutold8:'8888888888',
                }
            ]
        }
    },
    // methods: {
    //     handleSubmit () {
    //         this.$refs.loginForm.validate((valid) => {
    //             if (valid) {
    //                 Cookies.set('user', this.form.userName);
    //                 Cookies.set('password', this.form.password);
    //                 this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
    //                 if (this.form.userName === 'iview_admin') {
    //                     Cookies.set('access', 0);
    //                 } else {
    //                     Cookies.set('access', 1);
    //                 }
    //                 this.$router.push({
    //                     name: 'home_index'
    //                 });
    //             }
    //         });
    //     }
    // }
};
</script>

<style>

</style>
