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
                                <checkbox v-model="equityGood"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="equityBetter"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="equityVery"></checkbox>
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
                                <checkbox v-model="societyGood"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="societyBetter"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="societyVery"></checkbox>
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
                                <checkbox v-model="nationGood"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="nationBetter"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="nationVery"></checkbox>
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
                                <checkbox v-model="systemEquityGood"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="systemEquityBetter"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="systemEquityVery"></checkbox>
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
                                <checkbox v-model="systemSocietyGood"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="systemSocietyBetter"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="systemSocietyVery"></checkbox>
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
                                <checkbox v-model="systemNationGood"></checkbox>
                            </i-col>
                            <i-col span="8" class="br">
                                <checkbox v-model="systemNationBetter"></checkbox>
                            </i-col>
                            <i-col span="8">
                                <checkbox v-model="systemNationVery"></checkbox>
                            </i-col>
                        </row>
                    </i-col>
                </row>
                <row class="system-button">
                    <i-button type="primary">等级测评</i-button>
                </row>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from 'js-cookie';
export default {
    data () {
        return {
            equityGood:'',
            equityBetter:'',
            equityVery:'',
            societyGood:'',
            societyBetter:'',
            societyVery:'',
            nationGood:'',
            nationBetter:'',
            nationVery:'',
            systemEquityGood:'',
            systemEquityBetter:'',
            systemEquityVery:'',
            systemSocietyGood:'',
            systemSocietyBetter:'',
            systemSocietyVery:'',
            systemNationGood:'',
            systemNationBetter:'',
            systemNationVery:'',
        }
    },
};
</script>
