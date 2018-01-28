<style lang="less">
    @import 'post.less';
</style>

<template>
    <div class="post-preserve">
        <div class="post-button">
            <Button  @click="addProperty">
                <Icon type="plus-round" class="icon"></Icon>添加
            </Button>
        </div>

        <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
        <div class="page">
            <div class="page-show">
                <Page show-total :total="total" :current="pageSize" @on-change="changePage"></Page>
            </div>
        </div>
         <modal v-model="modal" :title="title" :mask-closable="false">
            <i-form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="100">
                <form-item label="ID" prop="ID">
                    <i-input v-model="formItem.ID"></i-input>
                </form-item>
                <form-item label="岗位名称" prop="postName">
                    <i-input v-model="formItem.postName"></i-input>
                </form-item>
                <form-item label="描述" prop="describe">
                    <i-input v-model="formItem.describe" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></i-input>
                </form-item>
            </i-form>
            <div slot="footer">
                <i-button type="primary" @click="handleSubmit('formItem')">提交</i-button>
                <i-button type="ghost" @click="handleReset('formItem')" style="margin-left: 8px">取消</i-button>
            </div>
        </modal>
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
            title: '添加职位信息',
            tableColumns1: [
                {
                    title: '岗位名称',
                    key: 'postName',
                },
                {
                    title: '描述',
                    key: 'describe',
                },
                {
                    title: '操作',
                    key: 'action',
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
                    ID:'1',
                    postName:'eee',
                    describe:'eeee'
                },
                 {
                    ID:'2',
                    postName:'eee',
                    describe:'eeee'
                },
                 {
                    ID:'3',
                    postName:'eee',
                    describe:'eeee'
                },
            ],
            formItem: 
            {
                ID:'',
                postName:'',
                describe:''
            },
            ruleValidate: 
            {
                ID: [
                    {
                        required: true,
                        message: '请填写您的ID！', 
                        trigger: 'blur' 
                    }
                ],
                postName: [
                    {
                        required:true,
                        message:'请填写您的岗位名称！',
                        trigger:'blur'
                    }
                ]
            }
        }
    },
     methods: {
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage (num) {
                console.log(num)
                // this.tableData1 = this.mockTableData1();
            }, 
            addProperty() {
                // console.log('add')
                 this.$refs['formItem'].resetFields();
                this.title = '添加岗位信息'
                this.modal = true
            },
            editPlan(params) {
                // this.$refs['formItem'].resetFields();
                // console.log(params)
                this.title = '修改岗位信息'
                this.formItem = params.row
                this.modal = true
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        this.modal = false
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


