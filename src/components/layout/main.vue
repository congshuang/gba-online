<template>
    <el-row>
      <el-col :span="22" :offset="1">
        <div :style="'margin-bottom:10px;margin-left:'+titleLeftMargin+'px;'">
          <i class="fa fa-home fa-lg" style="color:#448FC8;"></i>&nbsp;当前位置：<span
          style="color:#E28683">套餐服务</span>
        </div>
        <el-row>
          <el-col :span="2">
            <el-menu default-active="/" @open="sideMenuOperate('open')" @close="sideMenuOperate('close')"
                     background-color="#F9F9F9"
                     :collapse="sideMenuIsCollapse">
              <el-menu-item :index="sideMenu.path" :key="sideMenu.index" v-for="sideMenu in sideMenuList">
                <i style="color:gray;" :class="'fa fa-2x '+sideMenu.icon"></i>
                <span slot="title">{{sideMenu.name}}</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="comtentLength" :offset="contentOffset">
            <div class="content">
              <router-view/>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
</template>
<script>
  export default {
    name: 'diy_main',
    props: [],
    data: function () {
      return {
        showSliderBar:true,
        sideMenuIsCollapse: true,//让菜单栏折叠
        sideMenuList: [
          {index: '1', icon: 'fa-list-alt', name: '导航1',path:'/'},
          {index: '2', icon: 'fa-times-circle', name: '导航2',path:'/'},
          {index: '3', icon: 'fa-list', name: '导航3',path:'/'},
          {index: '4', icon: 'fa-smile-o', name: '导航4',path:'/'},
          {index: '5', icon: 'fa-upload', name: '导航5',path:'/'}
        ],
      }
    }, methods: {
      sideMenuOperate(type) {
        console.log(type);
      },
      //控制是否显示菜单栏
      showSliderBarFun(name) {
        var showArray = ['list', 'serviceapply'];
        var notShowArray = ['applynotice', 'netapply', 'paperupload', 'applyreport'];
        if (showArray.indexOf(name) != -1) {
          this.changeSliderBar(true);
        } else {
          this.changeSliderBar(false);
        }
      },
      changeSliderBar(type) {
        this.showSliderBar = type;
      },
    },
    computed: {
      comtentLength: function () {
        return this.showSliderBar ? 20 : 20;
      },
      titleLeftMargin: function () {
        return this.showSliderBar ? 100 : 100;
      },
      contentOffset: function () {
        return this.showSliderBar ? 0 : 2;
      }
    },
    created() {
      //控制是否显示菜单栏
      this.showSliderBarFun(this.$route.name);
    },
    watch: {
      '$route.name': function (val) {
        //控制是否显示菜单栏
        this.showSliderBarFun(val);
      }
    }
  }
</script>

<style scoped>
  /**定义内容的样式*/
  .content {
    min-height: 394px;
    /*background-color: white;*/
    padding: 0px;
    color: white;
    /* float: left;*/
  }
</style>
