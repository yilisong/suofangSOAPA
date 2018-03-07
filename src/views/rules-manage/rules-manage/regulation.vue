<style lang="less">
    @import 'regulation.less';
</style>
<template>
    <div class="regulation">
        <i-table border :columns="regulations" :data="dataRegulation"></i-table>
    </div>
  
</template>

<script>

import axios from 'axios'
export default {
    data() {
        return {
            regulations: [
                {
                    title: 'id',
                    key: 'id'
                },
                {
                    title: '类型',
                    key: 'type'
                },
                {
                    title: '描述',
                    key: 'describe'
                },
                {
                    title:'操作',
                    key:'operation',
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
        queryAboutList() {
            const params = {
                page: this.pageNum,
                per_page: this.pageSize
            }
            axios({
                method:'get',
                url: this.url + '/log_an/api/v1.0/log/logs?page=1&per_page=10'
                // params:params
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data
                    console.log(res)
                
                    // this.total = res.total
                    // this.tableData = res.assets
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
