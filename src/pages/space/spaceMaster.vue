<template>
  <div class="spaceMaster">
    <div class="spaceInner">
      <el-row class="tac" :gutter="8">
        <el-col :span="4" >
          <aside class="sub-aside">

            <div class="aside-header" style="background: #fff">
              <img src="../../../static/images/spacelogo.jpg" alt="" @click="compose">
            </div>
            <el-scrollbar tag="div" wrapClass="vue-scrollbar" style="background: #fff">
              <div class="sidebar" >
                <el-menu
                  :default-active="onRoutes"
                  class="el-menu-style"
                  background-color="#fff"
                  text-color="#000"
                  router
                  unique-opened
                  active-text-color="#409EFF">
                  <template v-for="(item,index) in chatList">
                    <el-submenu :index="item.href" v-if="item.children && item.children.length>0">
                      <template slot="title"><i :class="item.icon"></i><span>{{item.name}}</span></template>
                      <template v-for="child in item.children">
                        <sub-menu v-if="child.children && child.children.length>0" :param="child"></sub-menu>
                        <el-menu-item :index="child.href" v-else><i :class="child.icon"></i><span>{{child.name}}</span></el-menu-item>
                      </template>
                    </el-submenu>
                    <el-menu-item :index="item.href" v-else><i :class="item.icon"></i>
                      <span slot="title">{{item.name}}
                    </span>
                    </el-menu-item>
                  </template>
                </el-menu>

              </div>
            </el-scrollbar>
          </aside>
        </el-col>
        <el-col :span="20">
          <imp-panel>
            <div class="content-wrapper" style="padding-top: 0px;background-color: #fff;">
              <el-scrollbar tag="div" wrapClass="content-scrollbar">
                <section class="content" style="padding: 0px;">
                  <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
                    <router-view class="router"></router-view>
                  </transition>
                </section>
              </el-scrollbar>
            </div>
          </imp-panel>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name:'spaceMaster',
    data(){
      return {
        chatList:[
          {"id":1,"parentId":"","sort":0,"name":"我的空间","href":"/spacemaster/","icon":"sen fa fa-inbox","children":[],"type":"danger"},
          {"id":1,"parentId":"","sort":0,"name":"办件中心","href":"/spacemaster/bj","icon":"sen fa fa-address-book-o","children":[
            {"id":1,"parentId":"","sort":0,"name":"待提交","href":"/spacemaster/bj/dtj","icon":"sen fa fa-address-card-o","children":[],"type":"danger"},
            {"id":1,"parentId":"","sort":0,"name":"待补正","href":"/spacemaster/bj/dbz","icon":"sen fa fa-american-sign-language-interpreting","children":[],"type":"danger"},
            {"id":1,"parentId":"","sort":0,"name":"审批中","href":"/spacemaster/bj/spz","icon":"sen fa fa-anchor","children":[],"type":"danger"},
            {"id":1,"parentId":"","sort":0,"name":"待评价","href":"/spacemaster/bj/dpj","icon":"sen fa fa-area-chart","children":[],"type":"danger"},
            {"id":1,"parentId":"","sort":0,"name":"已办结","href":"/spacemaster/bj/ybj","icon":"sen fa fa-arrows-h","children":[],"type":"danger"},
            {"id":1,"parentId":"","sort":0,"name":"其他","href":"/spacemaster/bj/qt","icon":"sen fa fa-asl-interpreting","children":[],"type":"danger"},
          ],"type":"danger"},
          {"id":1,"parentId":"","sort":0,"name":"行政指导","href":"/spacemaster/xz","icon":"sen fa fa-assistive-listening-systems","children":[
            {"id":1,"parentId":"","sort":0,"name":"待提交","href":"/spacemaster/xz/sqxzzd","icon":"sen fa fa-at","children":[],"type":"danger"},
            {"id":1,"parentId":"","sort":0,"name":"待补正","href":"/spacemaster/xz/wdxzzd","icon":"sen fa fa-automobile","children":[],"type":"danger"},
          ],"type":"danger"},
          {"id":1,"parentId":"","sort":0,"name":"服务中心","href":"/spacemaster/fwzx","icon":"sen fa fa-ban","children":[
            {"id":1,"parentId":"","sort":0,"name":"我的预约","href":"/spacemaster/fwzx/wdyy","icon":"sen fa fa-bar-chart","children":[],"type":"danger"},
            {"id":1,"parentId":"","sort":0,"name":"咨询投诉","href":"/spacemaster/fwzx/zxts","icon":"sen fa fa-barcode","children":[],"type":"danger"},
            {"id":1,"parentId":"","sort":0,"name":"我的收藏","href":"/spacemaster/fwzx/wdsc","icon":"sen fa fa-bath","children":[],"type":"danger"},
          ],"type":"danger"},
          {"id":1,"parentId":"","sort":0,"name":"资料中心","href":"/spacemaster/zlzx","icon":"sen fa fa-battery","children":[
            {"id":1,"parentId":"","sort":0,"name":"证照库","href":"/spacemaster/zlzx/zzk","icon":"sen fa fa-battery-1","children":[],"type":"danger"},
            {"id":1,"parentId":"","sort":0,"name":"政务云盘","href":"/spacemaster/zlzx/zwyp","icon":"sen fa fa-battery-3","children":[],"type":"danger"},
          ],"type":"danger"},
        ]
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path;
      },
    },
    methods: {

      onRouteKeys(){
        const getParentArray = (path, ms, kas = []) => {
          if (ms && ms.length > 0) {
            for (var k = 0, length = ms.length; k < length; k++) {
              if (path == ms[k].href) {
                kas.push(ms[k].href);
                break;
              }
              var i = kas.length;
              if (ms[k].children && ms[k].children.length > 0) {
                getParentArray(path, ms[k].children, kas);
              }
              if (i < kas.length) {
                kas.push(ms[k].href);
              }
            }
          }

          return kas.reverse();
        }
        return getParentArray(this.$route.path, this.chatList);
      },
      compose(){
        let redirectUrl = '/sys/chatting/sent';
        this.$router.push({path: redirectUrl});
      }
    },
    created(){
    },
    watch:{

    }
  }
</script>

<style scoped>
  .spaceMaster{
    background-color: #F5F5F5;
    padding: 0px 3%;
    position: relative;
  }
  .spaceInner{
    width: 100%;
    min-height: 400px;
  }
  .sub-aside{
    min-height: 500px;
    width: 100%;
    background-color: #fff;
  }
  .tac{
    width: 100%;
   }
  .aside-header{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .aside-header img{
    width: 100%;
    height: 100%;
  }
  .tag-red{
    border-radius: 20px;
    background-color: red;
    color: #fff;
    height: 20px;
    width: 20px;
    display: inline-block;
  }
  .el-menu .fa {
    margin-right: 10px;
  }
</style>
