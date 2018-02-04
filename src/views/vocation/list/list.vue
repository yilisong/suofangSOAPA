<style lang="less">
</style>
<template>
    <div class="home-main">
        <div>
            <Button @click="addProperty"><Icon type="plus-round" class="icon"></Icon>添加</Button>
        </div>
        <div style="margin-top:10px">
           <template>
            <el-table :data="inspect_systems" border style="width: 100%">
                <el-table-column label="系统编号" width="180" prop="system_no"></el-table-column>
                <el-table-column label="系统名称" width="" prop="system_name"></el-table-column>
                <!-- 业务描述 -->
                <el-table-column label="业务描述" width="" prop="describe"></el-table-column>
                <el-table-column label="自评等级" width="" prop="security_level_name"></el-table-column>
                <el-table-column label="下载路径" width="">
                    <template scope="scope">
                        <span v-if="scope.row.system_word" style="cursor: pointer;" type="text" @click="download(scope.row.system_word)">下载</span>
                        <span v-else>暂无下载文件</span>   
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-popover ref="popover5" placement="top" width="160" v-model="scope.row.deleteVisible">
                            <p>这是一段内容这是一段内容确定删除吗？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="scope.row.deleteVisible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="deleteList(scope.$index, scope.row.id)">确定</el-button>
                            </div>
                        </el-popover>
                        <el-button type="primary" size="small" v-popover:popover5 @click="showVisible(scope.row.deleteVisible)">删除</el-button>
                        <el-dropdown>
                            <el-button size="small" type="primary">
                                详情<i class="el-icon-caret-bottom el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>等级自评详情</el-dropdown-item>
                                <el-dropdown-item>技术自评详情</el-dropdown-item>
                                <el-dropdown-item>管理自评详情</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                </el-table-column>
            </el-table>
            </template>
        </div>
        <div>
            <div class="block" v-if="total > pageSize" style="float: right">
                <el-pagination @size-change="handleSizeChange" :current-page.sync="currentPage1" :page-size="pageSize" layout="prev, pager, next" :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Resource from '@/store/recouse/recouse'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
export default {
    name: 'home',
    components: {
    },
    data () {
        return {
            pageSize: 10,
            total: 60,
            pageNum: 1,
            currentPage1: 1,
            "inspect_systems": [{
                "system_name": "等保系统测试",
                "update_time": "Fri, 26 Jan 2018 15:08:01 GMT",
                "describe": "testeweset",
                "system_level": 5,
                "business_level": 5,
                "system_word": "/insp/api/v1.0/systems/download/1",
                "security_level": 5,
                "system_no": "Ksegeuiree",
                "id": 1,
                "system_data_json": {},
                deleteVisible: false
            }, {
                "system_name": "等保系统测试1",
                "update_time": "Fri, 02 Feb 2018 21:26:10 GMT",
                "describe": "testeweset1",
                "system_level": 0,
                "business_level": 0,
                "system_word": "/insp/api/v1.0/systems/download/3",
                "security_level": 0,
                "system_no": "Ksegeuiree1",
                "id": 3,
                "system_data_json": {
                    "system_name": "等保系统测试1"
                },
                deleteVisible: false
            },
            {
                "system_name": "等保系统测试1",
                "update_time": "Fri, 02 Feb 2018 21:26:10 GMT",
                "describe": "testeweset1",
                "system_level": 0,
                "business_level": 0,
                "system_word": "",
                "security_level": 0,
                "system_no": "Ksegeuiree1",
                "id": 3,
                "system_data_json": {
                    "system_name": "等保系统测试1"
                },
                deleteVisible: false
            }]
        };
    },
    computed: {
        url () {
            return this.$store.state.userCode.url
        }
    },
    created() {
        this.queryAboutList()
    },
    methods: {
        handleSizeChange(num) {
            console.log('handleSizeChange', num)
        },
        download(url) {
            console.log(url)
        },
        showVisible(deleteVisible) {
            deleteVisible = true
        },
        queryAboutList() {
            const params = {
                page: this.pageNum,
                per_page: this.pageSize,
                search_msg: ''
            }
            axios({
                method:'get',
                url: this.url + '/insp/api/v1.0/systems',
                params:params
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data
                    this.inspect_systems = res.inspect_systems
                    this.total = res.total
                }
            })
        },
        deletelist (params) {
            console.log('删除')
            const url = this.url + '/v1.0/assets/' + params.row.id
            axios({
                method:'delete',
                url: url
            })
            .then(response => {
                if(response.data.status) {
                    this.$Message.success('删除成功!');
                    this.tableData.splice(params.index, 1);
                } else {
                    this.$Message.error('删除失败');
                }
            })
        },
        handleEdit(params) {
            console.log('编辑')
        },
        addProperty() {
            console.log('add')
            this.$refs['formValidate'].resetFields();
            this.title = '增加资产信息'
            this.modal = true
        }
    }
}

</script>
