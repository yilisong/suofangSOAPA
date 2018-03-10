<style lang="less">
    @import 'regulation.less';
</style>
<template>
    <div class="regulation">
        <i-table border :columns="regulations" :data="dataRegulation"></i-table>
        <div>
            <div class="block" v-if="total > pageSize" style="float: right">
                <el-pagination @size-change="handleSizeChange" :current-page.sync="currentPage1" :page-size="pageSize" layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
    
</template>

<script>

import axios from 'axios'
export default {
    data() {
        return {
            pageSize: 10,
            total: 0,
            pageNum: 1,
            currentPage1: 1,
            regulations: [
                {
                    title: 'id',
                    key: 'log_id'
                },
                {
                    title: '主机',
                    key: 'host'
                },
                {
                    title: '描述',
                    key: 'describe'
                },
                {
                    title:'时间',
                    key:'attack_time',
                }
            ],
            dataRegulation: [
                // {
                //     id: 'John Brown',
                //     type: 18,
                //     describe: 'New York No. 1 Lake Park',
                //     operation: '2016-10-03'
                // }
            ]
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
                    logs.forEach((v, i) => {
                        logsList.push({
                            log_id: v.log_id,
                            host: v.host,
                            describe: v.describe,
                            attack_time: v.attack_time
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
