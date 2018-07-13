<template>
  <content>
    <div class="diy-box">
      <div class="diy-top">
        <div class="diy-top-left"></div>
        <div class="diy-top-title">{{packageInfo.name}}</div>
      </div>
      <div class="diy-box-body">
        <div v-if="packageInfo.content.length==0" style="color:black;width:96%;">
          <el-alert
            title="无关联的事项业务信息"
            type="error" close-text="知道了">
          </el-alert>
        </div>
        <div class="diy-box-content" v-for="content in packageInfo.content">
          <div class="diy-box-content-top">
            <div class="diy-box-content-top-div1"></div>
            <div class="diy-box-content-top-div2"></div>
            <div class="diy-box-content-top-div3"></div>
          </div>
          <div class="diy-box-content-space">
            <div class="diy-box-content-space-div1"></div>
            <div class="diy-box-content-space-div2"></div>
          </div>
          <div class="diy-box-content-bottom">
            <div style="height: 60px;">
              <h3 style="color:#4591D7;padding:5px;font-weight: 300;">{{content.name}}</h3>
            </div>
            <div class="button-space">
              <button class="diy-button button-work-guide"
                      :data-url="formatButtonUrl(content.id)"
                      @click="workGuideClick($event)">办事指南
              </button>
            </div>
            <div class="button-space">
              <button class="diy-button button-paper-list"
                      :data-url="formatButtonUrl(content.id)"
                      @click="paperListClick($event)">材料清单
              </button>
            </div>
          </div>
        </div>
      </div>
      <button class="apply-button" @click="toApplyNoticePage">服务申报</button>
    </div>
  </content>
</template>

<script>
  import * as URL from '../api'

  export default {
    name: 'serviceapply',
    data: function () {
      return {
        packageInfo: {
          id:null,
          name: '烟花爆竹经营',
          content: [
            {name: '户外广告设置的审批', id: null},
            {name: '个体工商户设立登记', id: null},
            {name: '烟花爆竹零售经营许可', id: null},
            {naem: '公章（法人印鉴）刻制备案', id: null}]
        }
      }
    },
    methods: {
      //跳转至服务申报页面
      toApplyNoticePage(){
        this.$router.push({name:'applynotice',params:{packageId:this.packageInfo.id}})
      },
      //格式化按钮点击的连接
      formatButtonUrl(id) {

        if (!id) {
          id = 'd81d05babd2e44b18f646ff073332b85';
        }

        return 'http://www.jszwfw.gov.cn/jszwfw/bscx/itemlist/bszn.do?webId=1&iddept_yw_inf=' + id;
      },
      //办事指南点击
      workGuideClick(envent) {
        //console.log(event.target);
        var $target = $(event.target);
        //console.log($target.attr('data-url'));
        var url = $target.attr('data-url');
        if (!!url) {
          location.href = url;
        }
      },
      //材料清单点击
      paperListClick(envent) {
        //console.log(event.target);
        var $target = $(event.target);
        //console.log($target.attr('data-url'));
        var url = $target.attr('data-url');
        if (!!url) {
          location.href = url;
        }
      },
      //加载当前套餐
      loadCurrentPackage() {
        //获取当前套餐的id
        var id = this.$route.params.packageId;
        var that = this;
        if (!id) {
          return;
        }
        this.$axios.get(URL.getCurrentPackageInfo + '/' + id).then(
          (rs) => {
            if (rs.data.code == '200' && rs.data.flag == 'success') {
              var content = rs.data.content;
              if (!!content) {
                var array = [];
                if (!!content.matterChildList && content.matterChildList.length > 0) {
                  $.each(content.matterChildList, (index, value) => {
                    array.push({
                      name: value.name,
                      id: value.yzwYwId
                    });
                  });
                }

                this.packageInfo = {
                  id:content.id,
                  name: content.name,
                  content: array
                };
                console.log(this.packageInfo);
              }
            }
          }
        );
      }
    },
    created() {
      //加载当前套餐的数据
      this.loadCurrentPackage();
    },
  }

</script>

<style scoped>

  .diy-box {
    float: left;
    background-color: white;
    padding-top: 20px;
    width: 100%;
    min-height: 349px;
  }

  .diy-top {
    float: left;
    width: 100%;
  }

  .diy-top-left {
    float: left;
    width: 5px;
    background-color: #408ED6;
    height: 20px;
    margin-right: 10px;
  }

  .diy-top-title {
    float: left;
    width: 80%;
    height: 20px;
    color: #408ED6
  }

  .diy-box-body {
    float: left;
    width: 100%;
    margin: 15px;
  }

  .diy-box-content {
    float: left;
    width: 32%;
    height: 200px;
    margin: 10px 1% 20px 0px;
  }

  .diy-box-content-top {
    width: 100%;
    height: 20px;
    box-sizing: border-box;
  }

  .diy-box-content-top-div1 {
    float: left;
    width: 58%;
    height: 20px;
    background-color: #EEF7FF;
    border-top: solid 1px #8FC9FF;
    border-left: solid 1px #8FC9FF;
  }

  .diy-box-content-top-div2 {
    float: left;
    width: 6%;
    height: 21px;
    background: linear-gradient(-135deg, transparent 14px, #EEF7FF 0);
  }

  .diy-box-content-top-div3 {
    float: left;
    width: 36%;
    margin-left: -16px;
    background-color: black;
    height: 14px;
    margin-top: 7px;
    background: linear-gradient(45deg, transparent 10px, #8FC9FF 0);
  }

  .diy-box-content-space {
    width: 100%;
    height: 1px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .diy-box-content-space-div1 {
    float: left;
    width: 64%;
    height: 1px;
    background-color: #EEF7FF;
  }

  .diy-box-content-space-div2 {
    float: left;
    width: 36%;
    height: 1px;
    background-color: #8FC9FF;
  }

  .diy-box-content-bottom {
    float: left;
    width: 100%;
    height: 180px;
    background-color: #EEF7FF;
    text-align: center;
    border: solid 1px #8FC9FF;
    border-top: none;
  }

  .button-space {
    margin: 15px;
  }

  button {
    outline: none;
  }

  .diy-button {
    width: 130px;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
  }

  .button-work-guide {
    border: solid 1px #1B6DB9;
    color: #1B6DB9;
  }

  .button-work-guide:hover {
    border: solid 1px #1B6DB9;
    color: white;
    background-color: #1B6DB9;
  }

  .button-paper-list {
    border: solid 1px #4CDA67;
    color: #4CDA67;
  }

  .button-paper-list:hover {
    color: white;
    background-color: #4CDA67;
  }

  .apply-button {
    float: left;
    height: 40px;
    width: 300px;
    background-color: #408ED6;
    font-size: larger;
    text-align: center;
    margin: 0px 0px 15px 15px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 3px;
  }

  .apply-button:hover {
    background-color: #1B6DB9;
  }

  .apply-button:after {
    background-color: #1B6DB9;
  }
</style>
