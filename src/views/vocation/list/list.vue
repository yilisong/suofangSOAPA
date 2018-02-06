<style lang="less">
</style>
<template>
    <div class="home-main">
        <div>
            <Button @click="addProperty"><Icon type="plus-round" class="icon"></Icon>添加</Button>
        </div>
        <div style="margin-top:10px">
            <el-table :data="inspect_systems" border style="width: 100%">
                <el-table-column label="系统编号" width="180" prop="system_no"></el-table-column>
                <el-table-column label="系统名称" width="" prop="system_name"></el-table-column>
                <!-- 业务描述 -->
                <el-table-column label="业务描述" width="" prop="describe"></el-table-column>
                <el-table-column label="自评等级" width="" prop="security_level_name"></el-table-column>
                <el-table-column label="下载路径" width="">
                    <template scope="scope">
                        <a v-if="scope.row.system_word" href="scope.row.system_word">下载</a>
                        <a v-else>暂无下载文件</a>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
                        <el-popover ref="popover5" placement="top" width="160" v-model="scope.row.deleteVisible">
                            <p>您确定删除当前信息么？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="scope.row.deleteVisible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="deleteList(scope.$index, scope.row.id)">确定</el-button>
                            </div>
                        </el-popover>
                        <el-button type="primary" size="small" v-popover:popover5 @click="showVisible(scope.row.deleteVisible)">删除</el-button>
                        <el-dropdown>
                            <el-button size="small" type="primary">
                                自评<i class="el-icon-caret-bottom el-icon--right"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item  @click="handleLevel(scope.row.security_level, scope.row.id)">等级自评详情</el-dropdown-item>
                                <el-dropdown-item  @click="handleTec(scope.row.security_level, scope.row.id)">技术自评详情</el-dropdown-item>
                                <el-dropdown-item  @click="handleManage(scope.row.security_level, scope.row.id)">管理自评详情</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                </el-table-column>
            </el-table>
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
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
    name: 'home',
    components: {
    },
    data () {
        return {
            pageSize: 10,
            total: 0,
            pageNum: 1,
            currentPage1: 1,
            inspect_systems: []
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
        ...mapActions([
            'setInspId'
        ]),
        handleSizeChange(num) {
            this.pageNum = num
            this.queryAboutList()
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
                    this.total = parseInt(res.total)
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
        },
        deleteList (index, params) {
            const url = this.url + '/insp/api/v1.0/systems/' + params
            axios({
                method:'delete',
                url: url
            })
            .then(response => {
                if(response.data.status) {
                    this.$Message.success('删除成功!');
                    this.queryAboutList()
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
        },
        handleEdit(params, id) {
            this.setInspId(id)
            localStorage.inspId = id
            window.location.href = '/#/gradeProtectaion'
        },
        addProperty() {
            this.setInspId(null)
            localStorage.inspId = null
            window.location.href = '/#/gradeProtectaion'
        },
        handleLevel(level, id) {
            console.log(level, id)
            localStorage.inspId = id
            window.location.href = '/#/networkSafe'
        },
        handleTec(level, id) {
            console.log(level, id)
            localStorage.inspId = id
            window.location.href = '/#/technology'
        },
        handleManage(level, id) {
            console.log(level, id)
            localStorage.inspId = id
            window.location.href = '/#/keyBasics'
        }
    }
}

</script>
