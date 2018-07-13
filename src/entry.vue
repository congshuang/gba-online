<template>

  <div class="el-content">
    <div class="el-header">
      <diy_header></diy_header>
    </div>
    <div class="el-main">
      <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
        <router-view class="router"></router-view>
      </transition>
    </div>
    <div class="el-footer">
      <diy_footer></diy_footer>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import diy_header from './components/layout/header'
  import diy_footer from './components/layout/footer'
  /*  import diy_main from './components/layout/main'*/

  export default {
    name: 'entry',
    computed: {},
    components: {diy_header, diy_footer},
    data: function () {
      return {

      }
    },
    methods: {

    },
  }

</script>

<style>
  body, html {
    margin: 0;
    padding: 0;
  }

  /**新增*/
  .el-header {
    background-color: white;
    color: #333;
    -ms-line-height: 14px;
    -ms-height: 25px !important;
    -webkit-line-height: 100px;
    -webkit-height: 100px !important;
  }

  .el-footer {
    background-color: #D9D9D9;
    color: #333;
    /* line-height: 100px;*/
    height: 100px !important;
  }

  .el-main {
    background-color: #F5F5F5;
    color: #333;
    width: 100%;
  }
  .el-content{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .router{
    min-height: 500px;
    margin-right: 1px;
  }
</style>
