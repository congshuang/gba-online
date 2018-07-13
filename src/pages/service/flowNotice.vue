<template>
    <div class="diy-notice">
      <div class="sceneselection">
        <div class="sceneselection-title clearfix">
          <span class="icon"></span> <span class="title">受理条件</span> <span class="describe">办理该业务，需满足以下申请条件才能进行业务办理</span>
        </div>
        <ul class="approvalcriteria">
          <li class="clearfix">
            无
          </li>
        </ul>
      </div>
      <div class="sceneselection">
        <div class="sceneselection-title clearfix">
          <span class="icon"></span> <span class="title">收取材料</span> <span class="describe">办理该业务，您需要提供如下材料</span>
        </div>
        <ul class="approvalcriteria">
          <li class="clearfix">1、不动产登记申请书</li>
          <li class="clearfix">2、契税完税证明、购房发票</li>
          <li class="clearfix">3、商品房买卖合同及国有土地使用权转让手续</li>
          <li class="clearfix">4、现场采影</li>
          <li class="clearfix">5、申请人身份证明材料</li>
          <li class="clearfix" style="color: red;">注：本人对办理该事项所提交的申报材料实质内容的真实性负责</li>
        </ul>
      </div>
      <div class="flow-bottom">
        <el-button type="primary" @click="next">下一步</el-button>
      </div>
    </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import types from '../../store/mutation-types'
  export default {
    name: 'diy-notice',
    data: function () {
      return {

      }
    },
    methods: {
      ...mapMutations({
        setLog: types.SET_LOG
      }),
      next(){
        this.setLog(1);
        this.$router.push({path: '/flow/flowMessage'});
      }
    },
    created() {
    },
    mounted() {

    },
    watch: {}
  }

</script>

<style scoped>

  .sceneselection{
    margin-top: 20px;
  }
  .sceneselection-title {
    padding-bottom: 10px;
    border-bottom: 1px solid #d4d4d4;
    height: 41px;
  }
  .clearfix:before, .clearfix:after {
    display: table;
    line-height: 0;
    content: "";
  }
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .sceneselection-title>.icon {
    width: 4px;
    height: 14px;
    margin-top: 5px;
    background-color: #257ed7;
  }
  .sceneselection-title>.title {
    margin: 0px 30px 0px 8px;
    font-size: 20px;
    font-weight: bold;
    color: #257ed7;
  }
  .sceneselection-title>span {
    float: left;
  }
  .sceneselection-title>.describe {
    margin-top: 5px;
    font-size: 13px;
    color: #666;
  }
  .approvalcriteria {
    padding: 0px 0px 48px 13px;
  }
  .approvalcriteria li {
    margin-top: 21px;
    font-size: 15px;
  }
  li {
    list-style: none;
  }
  .flow-bottom{
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
</style>
