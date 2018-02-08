<style lang="less">
    @import 'networkSafe.less';
</style>
<template>
    <div class="self-assessment">
        <div class="service-information">
            <div class="service-header">安全保护等级自评表:</div>
            <div class="service-table">
                <row class="destroy">
                    <i-col span="8" class="destroy-name">
                    业务信息安全被破坏时所侵害的客体
                    </i-col>
                    <i-col span="16">
                        <row>
                            <i-col span="24" class="destroy-level-name">对相应客体的侵害程度</i-col>
                            <i-col span="24" class="destroy-level">
                                <row>
                                    <i-col span="8" class="br">一般损害</i-col>
                                    <i-col span="8" class="br">严重损害</i-col>
                                    <i-col span="8">特别严重损害</i-col>
                                </row>
                            </i-col>
                        </row>
                    </i-col>
                </row>
                <row class="equity">
                    <i-col span="8" class="equity-name br">
                    公民、法人和其他组织的合法权益
                    </i-col>
                    <i-col span="16">
                        <row class="destroy-level">
                            <i-col span="8" class="br">
                                <checkbox v-model="business_assess.citizen_normal"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="business_assess.citizen_serious"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="business_assess.citizen_special"></checkbox>
                            </i-col>
                        </row>
                    </i-col>
                </row>
                <row class="equity">
                    <i-col span="8" class="equity-name br">
                    社会秩序、公共利益
                    </i-col>
                    <i-col span="16">
                        <row class="destroy-level">
                            <i-col span="8" class="br">
                                <checkbox v-model="business_assess.social_normal"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="business_assess.social_serious"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="business_assess.social_special"></checkbox>
                            </i-col>
                        </row>
                    </i-col>
                </row>
                <row class="equity">
                    <i-col span="8" class="equity-name br">
                    国家安全
                    </i-col>
                    <i-col span="16">
                        <row class="destroy-level">
                            <i-col span="8" class="br">
                                <checkbox v-model="business_assess.country_normal"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="business_assess.country_serious"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="business_assess.country_specail"></checkbox>
                            </i-col>
                        </row>
                    </i-col>
                </row>
                <row class="destroy">
                    <i-col span="8" class="destroy-name">
                    系统服务安全被破坏时所侵害的客体
                    </i-col>
                    <i-col span="16">
                        <row>
                            <i-col span="24" class="destroy-level-name">对相应客体的侵害程度</i-col>
                            <i-col span="24" class="destroy-level">
                                <row>
                                    <i-col span="8" class="br">一般损害</i-col>
                                    <i-col span="8" class="br">严重损害</i-col>
                                    <i-col span="8">特别严重损害</i-col>
                                </row>
                            </i-col>
                        </row>
                    </i-col>
                </row>
                <row class="equity">
                    <i-col span="8" class="equity-name br">
                    公民、法人和其他组织的合法权益
                    </i-col>
                    <i-col span="16">
                        <row class="destroy-level">
                            <i-col span="8" class="br">
                                <checkbox v-model="system_assess.citizen_normal"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="system_assess.citizen_serious"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="system_assess.citizen_special"></checkbox>
                            </i-col>
                        </row>
                    </i-col>
                </row>
                <row class="equity">
                    <i-col span="8" class="equity-name br">
                    社会秩序、公共利益
                    </i-col>
                    <i-col span="16">
                        <row class="destroy-level">
                            <i-col span="8" class="br">
                                <checkbox v-model="system_assess.social_normal"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="system_assess.social_serious"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="system_assess.social_special"></checkbox>
                            </i-col>
                        </row>
                    </i-col>
                </row>
                <row class="equity">
                    <i-col span="8" class="equity-name br">
                    国家安全
                    </i-col>
                    <i-col span="16">
                        <row class="destroy-level">
                            <i-col span="8" class="br">
                                <checkbox v-model="system_assess.country_normal"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="system_assess.country_serious"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="system_assess.country_specail"></checkbox>
                            </i-col>
                        </row>
                    </i-col>
                </row>
                <row class="system-button">
                    <i-button type="primary" @click="submitAssess">等级测评</i-button>
                </row>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            business_assess: {
                citizen_normal: false,
                citizen_serious: false,
                citizen_special: false,
                social_normal: false,
                social_serious: false,
                social_special: false,
                country_normal: false,
                country_serious: false,
                country_specail: false
            },
            system_assess: {
                citizen_normal: false,
                citizen_serious: false,
                citizen_special: false,
                social_normal: false,
                social_serious: false,
                social_special: false,
                country_normal: false,
                country_serious: false,
                country_specail: false
            }
        }
    },
    computed: {
        url () {
            return this.$store.state.userCode.url
        }
    },
    mounted () {
        if(localStorage.inspId > 0) {
            this.queryList()
        } else {
        }
    },
    methods: {
        queryList() {
            const url = this.url + '/insp/api/v1.0/systems/assess/' + localStorage.inspId
            axios({
                method:'get',
                url: url
            })
            .then(response => {
                if(response.data.status) {
                    const res = response.data
                    this.business_assess = res.business_assess
                    this.system_assess = res.system_assess
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
        },
        submitAssess(){
            const url = this.url + '/insp/api/v1.0/systems/assess/' + localStorage.inspId
            axios({
                method:'post',
                url: url,
                data:{
                    system_id: localStorage.inspId,
                    system_assess: this.system_assess,
                    business_assess: this.business_assess
                }
            })
            .then(response => {
                if(response.data.status) {
                    this.$Message.info('保存成功')
                    window.location.href = '/#/protectaionList'
                } else {
                    this.$Message.error(response.data.desc)
                }
            })
        }
    }
};
</script>
