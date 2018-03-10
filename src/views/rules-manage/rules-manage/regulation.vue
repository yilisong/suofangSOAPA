<style lang="less">
    @import 'regulation.less';
</style>
<template>
    <div class="blog-manage">
        <i-table class="table_blog" border :columns="regulations" :data="dataRegulation"></i-table>
        <div>
            <div class="block page_position" v-if="total > pageSize">
                <el-pagination @size-change="handleSizeChange" :current-page.sync="currentPage1" :page-size="pageSize" layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
        <modal v-model="modalDetail" title="详情" :mask-closable="false">
            <div class="modal_content clearfix">
                <div class="level_name">
                    <label>城市：</label>
                    <i-input type="text" v-model="cityData" style="width:180px;"></i-input>
                </div>
                <div class="level_right">
                    <label>国家：</label>
                    <i-input type="text" v-model="stateData" style="width:180px;"></i-input>
                </div>
            </div>
            <div class="modal_content clearfix">
                <label>详情：</label>
                <i-input v-model="value6" type="textarea" :rows="4"></i-input>
            </div>
            <div class="modal_content clearfix">
                <label style="width:60px;">解决方案：</label>
                <i-input v-model="value6" disabled type="textarea" :rows="4"></i-input>
            </div>
            <div slot="footer">
            </div>
        </modal>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    data() {
        return {
            levelOptions:[],
            handlInformation:[],
            utilitySystem:[],
            operatingSystem:[],
            threatValue:'',
            attackValue:'',
            hostValue:'',
            modalDetail: true,
            pageSize: 10,
            total: 0,
            pageNum: 1,
            currentPage1: 1,
            regulations: [
                {
                    title: 'ID',
                    key: 'log_id'
                },
                {
                    title:'时间',
                    key:'attack_time',
                },
                {
                    title:'名称',
                    key:'dealing',
                },
                {
                    title:'等级',
                    key:'level',
                },
                {
                    title: 'IP/主机名',
                    key: 'host'
                },
                {
                    title: '应用系统',
                    key: 'dstip'
                },
                 {
                    title: '处理情况',
                    key: 'describe'
                },
                {
                    title: '详情',
                    key: 'log_id',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.row.log_id, params.row.dealing)
                                    }
                                }
                            }, '详情'),
                        ]);
                    }
                }
                
            ],
            dataRegulation: [],
            modalDetaildata: {
                name: '',
                id: null,

            }
        }
    },
    created() {
        this.queryAboutList()
    },
    computed: {
        url () {
            return this.$store.state.userCode.url
        }
    },
    methods: {
        show(id, name) {
            this.modalDetail = true
            this.modalDetaildata = {
                name,
                id 
            }
            console.log(id,name)
        },
        handleSizeChange(num) {
            this.pageNum = num
            this.queryAboutList()
        },
        showVisible(deleteVisible) {
            deleteVisible = true
        },
        formatDate(now) {     
            const year = now.getYear();     
            const month = now.getMonth()+1;     
            const date = now.getDate();     
            const hour = now.getHours();     
            const minute = now.getMinutes();     
            const second = now.getSeconds();     
            return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second     
        },
        queryAboutList() {
            const params = {
                page: this.pageNum,
                per_page: this.pageSize
            }
            axios({
                method:'get',
                url: this.url + '/log_an/api/v1.0/log/logs',
                params:params
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data
                    const logs = res.logs
                    // let logsList = []
                    // logs.forEach((v, i) => {
                    //     logsList.push({
                    //         log_id: v.log_id,
                    //         host: v.host,
                    //         describe: v.describe,
                    //         attack_time: v.attack_time,
                    //         level: v.level,
                    //     })
                    // });
                    this.dataRegulation = logs
                    this.total = parseInt(res.total)
                } else {
                    this.$Message.error(response.data.desc)
                }
            })

            
        }
    }
}

</script>

<style>

</style>
