<template>
  <content>
    <div class="diy-box">
      <div style="color:black;margin:0px 0px 10px 20px;font-size: larger;font-weight: 900;">{{packageInfo.name}}</div>
      <div style="background-color: white;padding: 10px;margin:10px;">
        <el-steps :active="0" finish-status="sucess" process-status="finish" simple>
          <el-step title="申报须知"></el-step>
          <el-step title="填报套餐表单"></el-step>
          <el-step title="上传材料"></el-step>
          <el-step title="申报告知"></el-step>
        </el-steps>
      </div>
    </div>
    <div class="diy-box">
      <div class="diy-top">
        <div class="diy-top-left"></div>
        <div class="diy-top-title">办理事项</div>
        <div style="float:left;color:#A8ADB8;">（以下套餐申报涉及业务，其中部分为选办业务，如需办理请自行勾选）</div>
      </div>
      <div class="diy-box-body">
        <div v-if="packageInfo.matterChildList.length==0" style="color:black;width:96%;">
          <el-alert
            title="无关联的事项业务信息"
            type="error" close-text="知道了">
          </el-alert>
        </div>
        <el-checkbox-group v-model="matterChildSelected" @click="matterChildChecked">
          <div style="margin-bottom:10px;" v-for="matterChild in packageInfo.matterChildList">
            <el-checkbox :label="matterChild.id">{{matterChild.name}}</el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>

    <div class="diy-box">
      <div class="diy-top">
        <div class="diy-top-left"></div>
        <div class="diy-top-title">审批条件</div>
        <div style="float:left;color:#A8ADB8;">（办理该业务，需满足以下申请条件才能进行办理，请自检是否满足，符合请打勾）</div>
      </div>
      <div class="diy-box-body">
        <div style="margin-bottom:10px;color:gray;" v-if="packageInfo.approvalConditionList.length==0">
          无审批条件信息
        </div>
        <div style="margin-bottom:10px;" v-if="packageInfo.approvalConditionList.length>0">
          <el-checkbox :indeterminate="isApprovalConditionIndeterminate" v-model="approvalCondtionCheckAll"
                       @change="handleApprovalConditionCheckAllChange" label=" 全选   （请务必认真阅读审批条件，请自检是否满足，符合请打勾）">
          </el-checkbox>
        </div>
        <el-checkbox-group v-model="approvalCondtiondChecked" @change="handleApprovalConditionCheckedChange">
          <div style="margin-bottom:10px;" v-for="approvalCondition in packageInfo.approvalConditionList">
            <el-checkbox class="diy-checkbox" :label="approvalCondition"></el-checkbox>
          </div>
        </el-checkbox-group>
      </div>
    </div>

    <div class="diy-box">
      <div class="diy-top">
        <div class="diy-top-left"></div>
        <div class="diy-top-title">收取材料</div>
        <div style="float:left;color:#A8ADB8;">（办理该业务，您需要提供如下材料）</div>
      </div>
      <div class="diy-box-body">
        <div style="margin-bottom:10px;color:gray;" v-if="packageInfo.matterPaperList.length==0">
          无材料列表信息
        </div>
        <div v-for="matterPaper,index in packageInfo.matterPaperList">
          <li style="color:#606266;list-style-type:none;font-size: smaller;margin-bottom: 5px;">
            {{(index + 1) + '、' + matterPaper.name}}
          </li>
        </div>
        <div>
          <li style="color:red;list-style-type:none;margin:10px 0 10px 0;font-size: smaller;">
            注：本人对办理该事项所提交的申报材料实质内容的真实性负责
          </li>
        </div>
      </div>
    </div>

    <div class="diy-box">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <button class="apply-button" @click="toNextStep">下一步</button>
        </el-col>
      </el-row>
    </div>

  </content>
</template>

<script>
  import * as URL from '../api'

  export default {
    name: 'appllynotice',
    data: function () {
      return {
        matterChildSelected: [],
        approvalCondtiondChecked: [],
        isApprovalConditionIndeterminate: true,
        approvalCondtionCheckAll: false,
        //用于保存套餐相关的信息
        packageInfo: {
          id: null,
          name: '',
          matterChildList: [],
          approvalConditionList: [],
          matterPaperList: []
        },
        //保存所有的的审批条件列表
        approvalCondtionList: [],
        //保存所有的材料列表
        matterPaperList: [],
      }
    },
    methods: {
      //跳转至下一步页面
      toNextStep() {
        if(!this.packageInfo.id){
          this.$message.error('页面跳转失败！');
        }else{
          this.$router.push({name:'netapply',params:{packageId:this.packageInfo.id}});
        }
      },
      //当业务被选中
      matterChildChecked(val) {
        console.log(val);
      },
      //处理审批条件全选
      handleApprovalConditionCheckAllChange(val) {
        this.approvalCondtiondChecked = val ? this.packageInfo.approvalConditionList : [];
        this.isApprovalConditionIndeterminate = false;
      },
      //审批条件被选中
      handleApprovalConditionCheckedChange(value) {
        let checkedCount = value.length;
        console.log(checkedCount);
        this.approvalCondtionCheckAll = checkedCount === this.packageInfo.approvalConditionList.length;
        this.isApprovalConditionIndeterminate = checkedCount > 0 && checkedCount < this.packageInfo.approvalConditionList.length;
      },
      //加载当前套餐
      loadCurrentPackage() {
        //获取当前套餐的id
        var id = this.$route.params.packageId;
        var that = this;
        if (!id) {
          return;
        }
        this.$axios.get(URL.getCurrentPackageInfo + '/' + id + '/full').then(
          (rs) => {
            if (rs.data.code == '200' && rs.data.flag == 'success') {
              var content = rs.data.content;
              if (!!content) {
                var matterChildArray = [], approvalCondtionArray = [], matterPaperArray = [];
                //console.log(content);
                if (!!content.matterChildList && content.matterChildList.length > 0) {
                  $.each(content.matterChildList, (index, matterChild) => {
                    if (!!matterChild.name && matterChild.name.trim() != '' && matterChild.name != null) {
                      matterChildArray.push(
                        matterChild
                      );
                    }

                    if (!!matterChild.processCondition) {
                      approvalCondtionArray.push(
                        {
                          name: matterChild.processCondition,
                          matterChildId: matterChild.id,
                        }
                      )
                    } else {
                      /*测试*/
                      approvalCondtionArray.push({
                          matterChildId: matterChild.id,
                          name: matterChild.name
                          // name:'Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。'
                        }
                      )
                    }

                    if (!!matterChild.matterPaperList && matterChild.matterPaperList.length > 0) {
                      $.each(matterChild.matterPaperList, (index1, matterParper) => {
                        matterPaperArray.push({
                          name: matterParper.name,
                          paperId: matterParper.id,
                          matterChildId: matterChild.id
                        });
                      });
                    }
                  });
                }

                this.packageInfo = {
                  id: content.id,
                  name: content.name,
                  matterChildList: matterChildArray,
                  approvalConditionList: [],
                  matterPaperList: []
                };

                this.approvalCondtiondList = approvalCondtionArray;
                this.matterPaperList = matterPaperArray;

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
    watch: {
      //监听业务被选中
      matterChildSelected: function (val) {
        var approvalCondtionArray = [], matterPaperListArray = [];
        var approvalCondtiondList = this.approvalCondtiondList.slice(0);
        var matterPaperList = this.matterPaperList.slice(0);

        $.each(val, (matterChildIndex, matterChildId) => {
          //更新审批条件
          $.each(approvalCondtiondList, (approvalConditionIndex, approval) => {
            if (matterChildId == approval.matterChildId) {
              approvalCondtionArray.push(approval.name);
            }
          });
          //更新材料列表
          $.each(matterPaperList, (matterPaperIndex, matterPaper) => {
            if (matterChildId == matterPaper.matterChildId) {
              var isAdd = true;
              $.each(matterPaperListArray, (tempMatterPaperIndex, tempMatterPaper) => {
                if (tempMatterPaper.paperId == matterPaper.paperId || tempMatterPaper.name == matterPaper.name) {
                  isAdd = false;
                }
              });
            }
            if (isAdd) {
              matterPaperListArray.push(matterPaper);
            }
          });

        });

        this.packageInfo.approvalConditionList = approvalCondtionArray;
        this.packageInfo.matterPaperList = matterPaperListArray;
        //清空选中的审批条件
        this.approvalCondtiondChecked = [];
        this.isApprovalConditionIndeterminate = true;
        this.approvalCondtionCheckAll = false;
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

  .diy-top {
    float: left;
    width: 100%;
  }

  .diy-top-left {
    float: left;
    width: 5px;
    background-color: #408ED6;
    height: 25px;
    margin-right: 10px;
  }

  .diy-top-title {
    float: left;
    height: 25px;
    color: #408ED6;
    font-size: large;
    font-weight: 500;
    margin-top: 0px;
  }

  .diy-box-body {
    float: left;
    width: 100%;
    margin: 15px;
  }

  button {
    outline: none;
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

  .diy-checkbox {
    width: 95%;
    white-space: normal;
    word-break: break-all;
    overflow: hidden;
    display: flex;
  }
</style>
