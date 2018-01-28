<style lang="less">
    @import 'news.less';
</style>

<template>
    <div class="news-preserve">
        <div class="news-button">
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
                <form-item label="模板名称" prop="newsName">
                    <i-input v-model="formItem.newsName"></i-input>
                </form-item>
                <form-item label="类型" prop="newsType">
                     <i-select v-model="formItem.newsType">
                        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                </form-item>
                <form-item label="内容" prop="content">
                    <i-input v-model="formItem.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></i-input>
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
            title: '',
            tableColumns1: [
                {
                    title: '模板名称',
                    key: 'newsName',
                },
                {
                    title: '类型',
                    key: 'newsType',
                },
                 {
                    title: '内容',
                    key: 'content',
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
                    newsName:'eee',
                    newsType:'eeee',
                    content:'fwefw'
                },
                 {
                    newsName:'eee',
                    newsType:'eeee',
                    content:'fwefw'
                },
                 {
                    newsName:'eee',
                    newsType:'eeee',
                    content:'fwefw'
                },
                 {
                    newsName:'eee',
                    newsType:'eeee',
                    content:'fwefw'
                },
            ],
            formItem: 
            {
                newsName:'',
                newsType:'',
                content:''
            },
            ruleValidate: 
            {
                newsName: [
                    {
                        required: true,
                        message: '请填写模板类型！', 
                        trigger: 'blur' 
                    }
                ],
                newsType: [
                    {
                        required:true,
                        message:'请选择模板名称！',
                        trigger:'change'
                    }
                ]
            },
            cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                newsType: ''
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
            addProperty() {
                // console.log('add')
                this.$refs['formItem'].resetFields();
                // this.title = '添加职位信息'
                this.modal = true
            },
            changePage (num) {
                // console.log(num)
                // this.tableData1 = this.mockTableData1();
            }, 
            editPlan(params) {
                // this.$refs['formItem'].resetFields();
                 console.log(params)
                this.title = ' '
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


