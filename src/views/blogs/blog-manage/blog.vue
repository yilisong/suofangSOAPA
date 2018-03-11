<style lang="less">
    @import 'blog.less';
</style>
<template>
    <div class="blog-manage">
        <row>
            <i-col span="20">
                <collapse v-model="value1">
                    <panel name="1">
                        展开搜索条件
                        <div slot="content">
                            <div class="threat_level clearfix">
                                <div class="level_name">威胁等级：</div>
                                <div class="level_name">
                                    <checkbox-group v-model="searchData.level">
                                        <checkbox label="1"></checkbox>
                                        <checkbox label="2"></checkbox>
                                        <checkbox label="3"></checkbox>
                                        <checkbox label="4"></checkbox>
                                        <checkbox label="5"></checkbox>
                                        <checkbox label="6"></checkbox>
                                    </checkbox-group>
                                </div>
                            </div>
                            <div class="threat_level clearfix">
                                <div class="level_name">时间范围：</div>
                                <div class="level_name">
                                    <date-picker type="date" placeholder="开始时间" style="width: 200px" @on-change='getStartTime'></date-picker>
                                    <date-picker type="date" placeholder="截止时间" style="width: 200px" @on-change='getEndtTime'></date-picker>
                                </div>
                            </div>
                            <div class="threat_level clearfix">
                                <div class="level_name">处理情况：</div>
                                <div class="level_name">
                                    <radio-group v-model="searchData.dealing">
                                        <radio label="1">未处置</radio>
                                        <radio label="2">应急处置</radio>
                                        <radio label="3">安全处置</radio>
                                    </radio-group>
                                </div>
                            </div>
                            <div class="threat_level clearfix">
                                <div class="level_name">应用系统：</div>
                                <div class="level_name">
                                    <checkbox-group v-model="searchData.asset_type">
                                        <checkbox label="IIS"></checkbox>
                                        <checkbox label="EXCHAHANGE"></checkbox>
                                        <checkbox label="APACHE"></checkbox>
                                        <checkbox label="MYSQL"></checkbox>
                                    </checkbox-group>
                                </div>
                            </div>
                            <div class="threat_level clearfix">
                                <div class="level_name">操作系统：</div>
                                <div class="level_name">
                                    <checkbox-group v-model="searchData.server_os">
                                        <checkbox label="Windows"></checkbox>
                                        <checkbox label="linux"></checkbox>
                                        <checkbox label="unix"></checkbox>
                                    </checkbox-group>
                                </div>
                            </div>
                            <div class="threat_level clearfix">
                                <div class="level_name">威胁名称：</div>
                                <div class="level_name">
                                    <i-input v-model="searchData.describe" style="width: 300px"></i-input>
                                </div>
                            </div>
                            <div class="threat_level clearfix">
                                <div class="level_name">攻击来源：</div>
                                <div class="level_name">
                                    <i-input v-model="searchData.srcip" style="width: 300px"></i-input>
                                </div>
                            </div>
                            <div class="threat_level clearfix">
                                <div class="level_name">被攻击主机：</div>
                                <div class="level_name">
                                    <i-input v-model="searchData.dstip" style="width: 300px"></i-input>
                                </div>
                            </div>
                        </div>
                    </panel>
                </collapse>
            </i-col>
            <i-col span="4">
                <div>
                    <i-button type="primary" @click="searchInfo">查询</i-button>
                </div>
            </i-col>
        </row>
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
                    <i-input type="text" v-model="details.city_name" style="width:150px;"></i-input>
                </div>
                <div class="level_right">
                    <label>国家：</label>
                    <i-input type="text" v-model="details.country_name" style="width:150px;"></i-input>
                </div>
            </div>
            <div class="modal_content clearfix">
                <div class="level_name">
                    <label>源ip/域名：</label>
                    <i-input v-model="details.srcip" type="text" style="width:150px;"></i-input>
                </div>
            </div>
            <div class="modal_content clearfix">
                <label>详情：</label>
                <i-input v-model="details.full_log" type="textarea" :rows="4"></i-input>
            </div>
            <div class="modal_content clearfix">
                <label style="width:60px;">解决方案：</label>
                <i-input v-model="details.solution" disabled type="textarea" :rows="4"></i-input>
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
            value1: '',
            searchData: {
                dstip: '',
                level: ['4', '5', '6'],
                dealing: '',
                start_time: '',
                end_time: '',
                describe: '',
                server_os: ['Windows', 'Centos Redhat Ubuntu', 'MACOS'],
                srcip: '',
                asset_type: ['IIS', 'OA', 'APACHE', 'MYSQL']
            },
            modalDetail: false,
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
                    key:'describe',
                },
                {
                    title:'等级',
                    key:'level',
                },
                {
                    title: 'IP/主机名',
                    key: 'dstip'
                },
                {
                    title: '应用系统',
                    key: 'host'
                },
                 {
                    title: '处理情况',
                    key: 'dealing'
                },
                {
                    title: '详情',
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
            details: {
                solution: '',
                full_log: '',
                srcip: '',
                id: null,
                country_name: '',
                city_name: ''
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
        getStartTime(date) {
            this.searchData.start_time = date
        },
        getEndtTime(date) {
            this.searchData.end_time = date
        },
        searchInfo() {
            if(this.searchData.end_time < this.searchData.start_time) {
                this.$Message.error('截止时间不能小于开始时间')
                return false
            }
            const url = this.url + '/log_an/api/v1.0/log/logs?page=' + this.pageNum + '&per_page=10'
            axios({
                method:'post',
                url: url,
                data: this.searchData
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data
                    const logs = res.logs
                    let logsList = []
                    let dealing
                    logs.forEach((v, i) => {

                        if (v.dealing == 1) {
                            dealing = '未处置'
                        } else if (v.dealing == 2) {
                            dealing = '应急处置'
                        } else {
                            dealing = '安全处置'
                        }
                        logsList.push({
                            log_id: v.log_id,
                            host: v.host,
                            describe: v.describe,
                            attack_time: v.attack_time,
                            level: v.level,
                            dstip: v.dstip,
                            dealing: dealing
                        })
                    });
                    this.dataRegulation = logsList
                    this.total = parseInt(res.total)
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
        },
        show(id, name) {
            this.modalDetail = true
            const url = this.url + '/log_an/api/v1.0/log/logs/' + id
            axios({
                method:'get',
                url: url
            })
            .then(response => {
                if(response.data.status) {
                    this.details = response.data.log_detail
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
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
                    let logsList = []
                    let dealing
                    logs.forEach((v, i) => {

                        if (v.dealing == 1) {
                            dealing = '未处置'
                        } else if (v.dealing == 2) {
                            dealing = '应急处置'
                        } else {
                            dealing = '安全处置'
                        }
                        logsList.push({
                            log_id: v.log_id,
                            host: v.host,
                            describe: v.describe,
                            attack_time: v.attack_time,
                            level: v.level,
                            dstip: v.dstip,
                            dealing: dealing
                        })
                    });
                    this.dataRegulation = logsList
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
