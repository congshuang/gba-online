<template>
    <div class="diy-flow" style="background-color: #fff;">
      <div>
        <span style="font-size: 20px;font-weight: bold;">不动产登记</span>
        <el-tag size="small">网</el-tag>
        <el-tag type="success" size="small">约</el-tag>
      </div>
      <p class="subtitle">事项编码：32058200000001417880300700106000</p>
     <!-- wait / process / finish / error / success-->
      <el-steps :active="log" align-center process-status="finish" finish-status="success">
        <el-step title="申报须知"></el-step>
        <el-step title="申报信息"></el-step>
        <el-step title="申报告知"></el-step>
      </el-steps>
      <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
        <router-view class="router"></router-view>
      </transition>

    </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import types from '../../store/mutation-types'
  export default {
    name: 'diy-flow',
    data: function () {
      return {
      }
    },
    computed:{
      ...mapGetters([
        'log',
      ])
    },
    methods: {

    },
    created() {
    },
    mounted() {
      $('.diy-flow .el-step__icon.is-text').css({"width":"35px","height":"35px"});
    },
    watch: {}
  }

</script>

<style scoped>

  .diy-flow{
    padding: 30px;
  }
  .subtitle{
    margin-top: 5px;
    font-size: 13px;
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 680px;
  }
  .el-step__head.is-finish{
    background: red;
    color: red;
  }
  .diy-flow .el-step__icon.is-text{
    width: 35px!important;
    height: 35px!important;
  }


</style>
