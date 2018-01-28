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
                        <i-input v-model="value" placeholder="etye"></i-input>
                    </i-col>
                    <i-col span="12">
                        <row>
                            <i-col span="12" class="system-name br">
                               02 系统编号
                            </i-col>
                            <i-col span="12" class="system-name">
                                <i-input v-model="value" placeholder="et" style="width:30px;"></i-input>
                                <i-input v-model="value" placeholder="et" style="width:30px;"></i-input>
                                <i-input v-model="value" placeholder="et" style="width:30px;"></i-input>
                                <i-input v-model="value" placeholder="et" style="width:30px;"></i-input>
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
                        <checkbox-group v-model="type">
                            <checkbox label="生产作业"></checkbox>
                            <checkbox label="指挥调度"></checkbox>
                            <checkbox label="管理控制"></checkbox>
                            <checkbox label="内部办公"></checkbox>
                            <checkbox label="公共服务"></checkbox>
                            <checkbox label="其它">
                                <!-- <span>跨     个</span> -->
                            </checkbox>
                        </checkbox-group>
                    </i-col>
                    <i-col span="24">
                        <i-input v-model="desc" type="textarea" :autosize="{minRows: 3,maxRows: 4}"></i-input>
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
                        <checkbox-group v-model="range">
                            <checkbox label="全国"></checkbox>
                            <checkbox label="全省（区、市）"></checkbox>
                            <checkbox label="跨省（区、市）">
                                <!-- <span>跨     个</span> -->
                            </checkbox>
                            <checkbox label="地（市、区）内"></checkbox>
                            <checkbox label="跨地（市、区）">
                                <!-- <span>跨     个</span> -->
                            </checkbox>
                            <checkbox label="其它">
                                <!-- <span>跨     个</span> -->
                            </checkbox>
                        </checkbox-group>
                    </i-col>
                    <i-col span="24" class="serve-descripe">
                         <checkbox-group v-model="range">
                            <checkbox label="单位内部人员"></checkbox>
                            <checkbox label="社会公众人员"></checkbox>
                            <checkbox label="两者均包括"></checkbox>
                            <checkbox label="其它">
                                <!-- <span>跨     个</span> -->
                            </checkbox>
                        </checkbox-group>
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
                        <checkbox-group v-model="network">
                            <checkbox label="局域网"></checkbox>
                            <checkbox label="城域网"></checkbox>
                            <checkbox label="广域网"></checkbox>
                            <checkbox label="其它">
                                <!-- <span>跨     个</span> -->
                            </checkbox>
                        </checkbox-group>
                    </i-col>
                    <i-col span="24" class="serve-descripe">
                         <checkbox-group v-model="range">
                            <checkbox label="业务专网"></checkbox>
                            <checkbox label="互联网"></checkbox>
                            <checkbox label="其它">
                                <!-- <span>跨     个</span> -->
                            </checkbox>
                        </checkbox-group>
                    </i-col>
                </row>
            </i-col>
        </row>
        <row class="system">
            <i-col span="4" class="system-name br">06 系统互联情况</i-col>
            <i-col span="20" class="interconnection-descripe">
                <checkbox-group v-model="interconnection">
                    <checkbox label="与其他行业系统连接"></checkbox>
                    <checkbox label="与本行业其他单位系统连接"></checkbox>
                    <checkbox label="与本单位其他系统连接"></checkbox>
                    <checkbox label="其它">
                        <!-- <span>跨     个</span> -->
                    </checkbox>
                </checkbox-group>
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
                                <i-input v-model="safeValue" style="margin-top:-2px;"></i-input>
                            </i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="all"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="none"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="portion"></checkbox>
                                                <span><i-input v-model="portionValue" style="width: 30px;margin-top:-2px"></i-input></span>%
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
                            <i-col span="3" class="content-hr br">138</i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="all"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="none"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="portion"></checkbox>
                                                <span><i-input v-model="portionValue" style="width: 30px;margin-top:-2px"></i-input></span>%
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
                            <i-col span="3" class="content-hr br">138</i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="all"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="none"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="portion"></checkbox>
                                                <span><i-input v-model="portionValue" style="width: 30px;margin-top:-2px"></i-input></span>%
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
                            <i-col span="3" class="content-hr br">138</i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="all"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="none"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="portion"></checkbox>
                                                <span><i-input v-model="portionValue" style="width: 30px;margin-top:-2px"></i-input></span>%
                                            </i-col>
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
                            <i-col span="3" class="content-hr br">138</i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="all"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="none"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="portion"></checkbox>
                                                <span><i-input v-model="portionValue" style="width: 30px;margin-top:-2px"></i-input></span>%
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
                            <i-col span="5" class="content-hr br">服务器</i-col>
                            <i-col span="3" class="content-hr br">138</i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="all"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="none"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="portion"></checkbox>
                                                <span><i-input v-model="portionValue" style="width: 30px;"></i-input></span>%
                                            </i-col>
                                        </row>
                                    </i-col>
                                </row>
                            </i-col>
                       </row>
                    </i-col>
                    <i-col span="24" class="product-content-end">
                         <row>
                            <i-col span="2" class="content-hr br">6</i-col>
                            <i-col span="5" class="content-hr br">其它</i-col>
                            <i-col span="3" class="content-hr br">138</i-col>
                            <i-col span="14">
                                <row>
                                    <i-col span="24">
                                        <row>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="all"></checkbox>
                                            </i-col>
                                            <i-col span="7" class="employ-china-num br">
                                                <checkbox v-model="none"></checkbox>
                                            </i-col>
                                            <i-col span="10" class="employ-china-num">
                                                <checkbox v-model="portion"></checkbox>
                                                <span><i-input v-model="portionValue" style="width: 30px;margin-top:-2px"></i-input></span>%
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
    </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data () {
        return {
            safeValue:'',
            desc:'',
            all:'',
            portion:'',
            portionValue:'',
            value: '',
            type: ['生产作业'],
            range:[''],
            network:[''],
            interconnection:['']
        }
    },
};
</script>
