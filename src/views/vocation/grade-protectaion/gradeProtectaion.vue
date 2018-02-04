<style lang="less">
    @import 'gradeProtectaion.less';
</style>
<template>
    <div class="research-table">
        <row class="system">
            <i-col span="4" class="system-name br">01 系统名称</i-col>
            <i-col span="20">
                <row>
                    <i-col span="12"  class="system-name br">
                        <i-input v-model="suchAsPaul.name" placeholder="请输入系统名称"></i-input>
                    </i-col>
                    <i-col span="12">
                        <row>
                            <i-col span="12" class="system-name br">
                               02 系统编号
                            </i-col>
                            <i-col span="12" class="system-name">
                                <i-input v-model="suchAsPaul.num" placeholder="请输入系统编号" style=""></i-input>
                            </i-col>
                        </row>
                    </i-col>
                </row>
            </i-col>
        </row>
        <row class="business">
            <i-col span="4" class="system-business br">
                <row>
                    <i-col span="8" class="system-case br">03 系统承载业务情况</i-col>
                    <i-col span="16">
                        <row>
                            <i-col span="24" class="business-type">业务类型</i-col>
                            <i-col span="24" class="business-descripe">业务描述</i-col>
                        </row>
                    </i-col>
                </row>
            </i-col>
            <i-col span="20">
                <row>
                    <i-col span="24" class="type-select">
                        <checkbox v-model="suchAsPaul.businessType[0]">生产作业</checkbox>
                        <checkbox v-model="suchAsPaul.businessType[1]">指挥调度</checkbox>
                        <checkbox v-model="suchAsPaul.businessType[2]">管理控制</checkbox>
                        <checkbox v-model="suchAsPaul.businessType[3]">内部办公</checkbox>
                        <checkbox v-model="suchAsPaul.businessType[4]">公共服务</checkbox>
                        <checkbox v-model="suchAsPaul.businessType[5]">其它</checkbox>
                    </i-col>
                    <i-col span="24">
                        <i-input v-model="suchAsPaul.desc" type="textarea" :autosize="{minRows: 3,maxRows: 4}"></i-input>
                    </i-col>
                </row>
            </i-col>
        </row>
        <row class="business">
            <i-col span="4" class="system-business br">
                <row>
                    <i-col span="8" class="system-case br">04 系统服务情况</i-col>
                    <i-col span="16">
                        <row>
                            <i-col span="24" class="business-type">服务范围</i-col>
                            <i-col span="24" class="business-descripe">服务情况</i-col>
                        </row>
                    </i-col>
                </row>
            </i-col>
            <i-col span="20">
                <row>
                    <i-col span="24" class="type-select">
                        <checkbox v-model="suchAsPaul.serviceScope[0]">全国</checkbox>
                        <checkbox v-model="suchAsPaul.serviceScope[1]">全省（区、市）</checkbox>
                        <checkbox v-model="suchAsPaul.serviceScope[2]">跨省（区、市）</checkbox>
                        <checkbox v-model="suchAsPaul.serviceScope[3]">地（市、区）内</checkbox>
                        <checkbox v-model="suchAsPaul.serviceScope[4]">跨地（市、区）</checkbox>
                        <checkbox v-model="suchAsPaul.serviceScope[5]">其它</checkbox>
                    </i-col>
                    <i-col span="24" class="serve-descripe">
                        <checkbox v-model="suchAsPaul.serviceSituation[0]">单位内部人员</checkbox>
                        <checkbox v-model="suchAsPaul.serviceSituation[1]">社会公众人员</checkbox>
                        <checkbox v-model="suchAsPaul.serviceSituation[2]">两者均包括</checkbox>
                        <checkbox v-model="suchAsPaul.serviceSituation[3]">其它</checkbox>
                    </i-col>
                </row>
            </i-col>
        </row>
        <row class="business">
            <i-col span="4" class="system-business br">
                <row>
                    <i-col span="8" class="system-case br">05 系统网络平台</i-col>
                    <i-col span="16">
                        <row>
                            <i-col span="24" class="business-type">覆盖范围</i-col>
                            <i-col span="24" class="business-descripe">网络性质</i-col>
                        </row>
                    </i-col>
                </row>
            </i-col>
            <i-col span="20">
                <row>
                    <i-col span="24" class="type-select">
                        <checkbox v-model="suchAsPaul.coverageRange[0]">局域网</checkbox>
                        <checkbox v-model="suchAsPaul.coverageRange[1]">城域网</checkbox>
                        <checkbox v-model="suchAsPaul.coverageRange[2]">广域网</checkbox>
                        <checkbox v-model="suchAsPaul.coverageRange[3]">其它</checkbox>
                    </i-col>
                    <i-col span="24" class="serve-descripe">
                        <checkbox v-model="suchAsPaul.networkProperties[0]">业务专网</checkbox>
                        <checkbox v-model="suchAsPaul.networkProperties[1]">互联网</checkbox>
                        <checkbox v-model="suchAsPaul.networkProperties[2]">其它</checkbox>
                    </i-col>
                </row>
            </i-col>
        </row>
        <row class="system">
            <i-col span="4" class="system-name br">06 系统互联情况</i-col>
            <i-col span="20" class="interconnection-descripe">
                <checkbox v-model="suchAsPaul.systemInterconnection[0]">与其他行业系统连接</checkbox>
                <checkbox v-model="suchAsPaul.systemInterconnection[1]">与本行业其他单位系统连接</checkbox>
                <checkbox v-model="suchAsPaul.systemInterconnection[2]">与本单位其他系统连接</checkbox>
                <checkbox v-model="suchAsPaul.systemInterconnection[3]">其它</checkbox>
            </i-col>
        </row>
        <row class="employ">
            <i-col span="4" class="employ-name br">07 关键产品使用情况</i-col>
            <i-col span="20" class="product-descripe">
               <row>
                    <i-col span="24" class="product-header">
                       <row>
                            <i-col span="2" class="product-hr br">序号</i-col>
                            <i-col span="5" class="product-hr br">产品类型</i-col>
                            <i-col span="3" class="product-hr br">数量</i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24" class="employ-china"> 使用国产品率</i-col>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">全部使用</i-col>
                                            <i-col span="7" class="employ-china-num br">全部未使用</i-col>
                                            <i-col span="10" class="employ-china-num">部分使用及使用率</i-col>
                                        </row>
                                    </i-col>
                                </row>
                            </i-col>
                       </row>
                    </i-col>
                    <i-col span="24" class="product-content">
                         <row>
                            <i-col span="2" class="content-hr br">1</i-col>
                            <i-col span="5" class="content-hr br">安全专用产品</i-col>
                            <i-col span="3" class="content-hr br">
                                <i-input v-model="suchAsPaul.useCounts[0]" style="margin-top:-3px;"></i-input>
                            </i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.used[0]"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.unused[0]"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="suchAsPaul.partUsed[0]"></checkbox>
                                                <span><i-input v-model="suchAsPaul.percent[0]" class="input-num"></i-input></span>%
                                            </i-col>
                                        </row>
                                    </i-col>
                                </row>
                            </i-col>
                       </row>
                    </i-col>
                    <i-col span="24" class="product-content">
                         <row>
                            <i-col span="2" class="content-hr br">2</i-col>
                            <i-col span="5" class="content-hr br">网络产品</i-col>
                            <i-col span="3" class="content-hr br">
                                <i-input v-model="suchAsPaul.useCounts[1]" style="margin-top:-3px;"></i-input>
                            </i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.used[1]"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.unused[1]"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="suchAsPaul.partUsed[1]"></checkbox>
                                                <span><i-input v-model="suchAsPaul.percent[1]" class="input-num"></i-input></span>%
                                            </i-col>
                                        </row>
                                    </i-col>
                                </row>
                            </i-col>
                       </row>
                    </i-col>
                    <i-col span="24" class="product-content">
                         <row>
                            <i-col span="2" class="content-hr br">3</i-col>
                            <i-col span="5" class="content-hr br">操作系统</i-col>
                            <i-col span="3" class="content-hr br">
                                <i-input v-model="suchAsPaul.useCounts[2]" style="margin-top:-3px;"></i-input>
                            </i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.used[2]"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.unused[2]"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="suchAsPaul.partUsed[2]"></checkbox>
                                                <span><i-input v-model="suchAsPaul.percent[2]" class="input-num"></i-input></span>%
                                            </i-col>
                                        </row>
                                    </i-col>
                                </row>
                            </i-col>
                       </row>
                    </i-col>
                    <i-col span="24" class="product-content">
                         <row>
                            <i-col span="2" class="content-hr br">4</i-col>
                            <i-col span="5" class="content-hr br">数据库</i-col>
                            <i-col span="3" class="content-hr br">
                                <i-input v-model="suchAsPaul.useCounts[3]" style="margin-top:-3px;"></i-input>
                            </i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.used[3]"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.unused[3]"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="suchAsPaul.partUsed[3]"></checkbox>
                                                <span><i-input v-model="suchAsPaul.percent[3]" class="input-num"></i-input></span>%
                                            </i-col>
                                        </row>
                                    </i-col>
                                </row>
                            </i-col>
                       </row>
                    </i-col>
                    <i-col span="24" class="product-content">
                         <row>
                            <i-col span="2" class="content-hr br">5</i-col>
                            <i-col span="5" class="content-hr br">安全专用产品</i-col>
                            <i-col span="3" class="content-hr br">
                                <i-input v-model="suchAsPaul.useCounts[4]" style="margin-top:-3px;"></i-input>
                            </i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.used[4]"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.unused[4]"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="suchAsPaul.partUsed[4]"></checkbox>
                                                <span><i-input v-model="suchAsPaul.percent[4]" class="input-num"></i-input></span>%
                                            </i-col>
                                        </row>
                                    </i-col>
                                </row>
                            </i-col>
                       </row>
                    </i-col>
                    <i-col span="24" class="product-content">
                         <row>
                            <i-col span="2" class="content-hr br">6</i-col>
                            <i-col span="5" class="content-hr br">服务器</i-col>
                            <i-col span="3" class="content-hr br">
                                <i-input v-model="suchAsPaul.useCounts[5]" style="margin-top:-3px;"></i-input>
                            </i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.used[5]"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.unused[5]"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="suchAsPaul.partUsed[5]"></checkbox>
                                                <span><i-input v-model="suchAsPaul.percent[5]" class="input-num"></i-input></span>%
                                            </i-col>
                                        </row>
                                    </i-col>
                                </row>
                            </i-col>
                       </row>
                    </i-col>
                    <i-col span="24" class="product-content-end">
                         <row>
                            <i-col span="2" class="content-hr br">7</i-col>
                            <i-col span="5" class="content-hr br">其它</i-col>
                            <i-col span="3" class="content-hr br">
                                <i-input v-model="suchAsPaul.useCounts[6]" style="margin-top:-3px;"></i-input>
                            </i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.used[6]"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="suchAsPaul.unused[6]"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="suchAsPaul.partUsed[6]"></checkbox>
                                                <span><i-input v-model="suchAsPaul.percent[6]" class="input-num"></i-input></span>%
                                            </i-col>
                                        </row>
                                    </i-col>
                                </row>
                            </i-col>
                       </row>
                    </i-col>
               </row>
            </i-col>
        </row>
        <row class="gradetest-name system">
            <i-col span="4" class="system-name br">09 等级测评单位名称</i-col>
            <i-col span="20" class="system-name">
                <i-input v-model="suchAsPaul.gradeValue"></i-input>
            </i-col>
        </row>
        <row class="operation-when system">
            <i-col span="4" class="system-name br">10 何时投入运行</i-col>
            <i-col span="20" class="system-name-test">
                <date-picker format="yyyy年MM月dd日" type="date" placeholder="请选择日期" style="width: 200px" @on-change="changeDate"></date-picker>
            </i-col>
        </row>
        <row class="subsystem-if system">
            <i-col span="4" class="system-name br">11 系统是否为分系统</i-col>
            <i-col span="20" class="system-name">
                <RadioGroup v-model="suchAsPaul.system">
                    <Radio label="是"></Radio>
                    <Radio label="否"></Radio>
                </RadioGroup>
                （如选择是请填下两项）
            </i-col>
        </row>
        <row class="superior-name system">
            <i-col span="4" class="system-name br">12 上级系统名称</i-col>
            <i-col span="20" class="system-name">
                <i-input v-model="suchAsPaul.superiorValue"></i-input>
            </i-col>
        </row>
        <row class="superior-unit-name system">
            <i-col span="4" class="system-name br">13 上级系统所属单位名称</i-col>
            <i-col span="20" class="system-name">
                <i-input v-model="suchAsPaul.unitName"></i-input>
            </i-col>
        </row>
        <row class="system-button">
            <i-button type="primary" @click="handelSubmit">保&nbsp;&nbsp;&nbsp;存</i-button>
        </row>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            suchAsPaul: {
                name: '',//系统名称
                num: '',//系统编号
                businessType: [],//业务类型
                desc:'',//业务描述
                serviceScope: [],//服务范围
                serviceSituation: [],//服务情况
                coverageRange: [],//覆盖范围
                networkProperties: [],//网络性质
                systemInterconnection: [],//系统互联情况
                useCounts: [0, 0, 0, 0, 0, 0, 0],//使用数量
                partUsed: [],//部分使用
                used: [],//全部使用
                unused: [],//未使用
                percent: [],//使用率
                gradeValue: '',//等级测评单位名称
                date: '',//日期
                system: '',//区分系统
                superiorValue: '',//上级系统名称
                unitName: ''// 上级系统所属单位名称
            }
        }
    },
    computed: {
        url () {
            return this.$store.state.userCode.url
        },
        inspId () {
            return this.$store.state.userCode.inspId
        }
    },
    created() {
        if(localStorage.inspId) {
            this.queryList()
        }
    },
    methods: {
        changeDate(date) {
            this.suchAsPaul.date = date
        },
        queryList() {
            const url = this.url + '/insp/api/v1.0/systems/' + localStorage.inspId
            axios({
                method:'get',
                url: url,
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data.inspect_system
                    console.log(res.system_data_json)
                    this.suchAsPaul = res.system_data_json
                }
            })
        },
        handelSubmit() {
            const url = this.url + '/insp/api/v1.0/systems'
            const params = {
                system_name: this.suchAsPaul.name,
                system_no: this.suchAsPaul.num,
                system_data_json: this.suchAsPaul,
                // system_data_json: JSON.stringify(this.suchAsPaul),
                describe: this.suchAsPaul.desc,
                file:''
                // system_name="等保系统测试"& system_no="Ksegeuiree"&system_data_json=""&describe="testeweset"&file=""
            }
            axios({
                method:'post',
                url: url,
                data:params
            })
            .then(response => {
                if(response.data.status) {
                    console.log(response.data)
                }
            })
        }
    }
};
</script>
