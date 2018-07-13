<template>
  <content>
    <div class="diy-box">
      <div style="color:black;margin:0px 0px 10px 20px;font-size: larger;font-weight: 900;">{{packageInfo.name}}</div>
      <div style="background-color: white;padding: 10px;margin:10px;">
        <el-steps :active="4" finish-status="success" process-status="finish" simple>
          <el-step title="申报须知"></el-step>
          <el-step title="填报套餐表单"></el-step>
          <el-step title="上传材料"></el-step>
          <el-step title="申报告知"></el-step>
        </el-steps>
      </div>
    </div>

    <div class="diy-box">
      <el-row type="flex" justify="center">
        <el-col :span="2">
          <img width="100" height="100" src="../../static/images/pages/applyreport/smile.svg"/>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <p style="color:black;text-align: center;font-weight: bolder;">您所提交的事项已经提交成功，预计审批完成需要<span style="color:red">3个工作日。</span></p>
          <p style="color:black;text-align: center;font-weight: lighter;">咨询电话：5818800</p>
        </el-col>
      </el-row>
    </div>

    <div class="diy-box">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <button class="apply-button" @click="toNextStep">返回套餐列表</button>
        </el-col>
      </el-row>
    </div>

  </content>
</template>

<script>
  import * as URL from '../api'

  export default {
    name: 'applyreport',
    data: function () {
      return {
        //用于保存套餐相关的信息
        packageInfo: {
          id: null,
          name: '套餐加载失败！',
        },
      }
    },
    methods: {
      //跳转至下一步页面
      toNextStep() {
        this.$router.push({name:'list'});
      },
      //加载当前套餐
      loadCurrentPackage() {
        //获取当前套餐的id
        var id = this.$route.params.packageId;
        var that = this;
        if (!id) {
          this.$message('加载套餐信息失败！');
          return;
        }
        this.$axios.get(URL.getCurrentPackageInfo + '/' + id + '/full').then(
          (rs) => {
            if (rs.data.code == '200' && rs.data.flag == 'success') {
              var content = rs.data.content;
              if (!!content) {
                //console.log(content);
                this.packageInfo = {
                  id: content.id,
                  name: content.name,
                };
              }
            }
          }
        );
      }
    },
    created() {
      //加载当前套餐
      this.loadCurrentPackage();
    },
    watch: {
      'tempPaper': function (val) {
        console.log(val);
      }
    }
  }

</script>

<style scoped>

  .diy-box {
    float: left;
    background-color: white;
    padding-top: 20px;
    width: 100%;
    margin-bottom: 20px;
  }

  .apply-button {
    float: left;
    height: 40px;
    width: 100%;
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
    text-align: center;
  }

</style>
