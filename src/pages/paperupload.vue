<template>
  <content>
    <div class="diy-box">
      <div style="color:black;margin:0px 0px 10px 20px;font-size: larger;font-weight: 900;">{{packageInfo.name}}</div>
      <div style="background-color: white;padding: 10px;margin:10px;">
        <el-steps :active="2" finish-status="success" process-status="finish" simple>
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
        <div class="diy-top-title">申报材料</div>
        <div style="float:left;color:#A8ADB8;">（请提交你的申请材料，对于标记为“现场提交”的材料，请携带纸质材料现场提交）</div>
      </div>
      <hr style="width:97%;margin-top:5px;background-color:red;"/>
      <div class="diy-box-body">
        <el-table
          :data="matterPaperList"
          :show-header=false
          style="width: 97%" empty-text="无材料列表信息">
          <el-table-column
            type="index"
            label="序号"
            width="50"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="isNeed"
            label="是否必要"
            width="100"
            align="center"
          >
            <template slot-scope="scope">
              <span style="color:red" v-if="scope.row.isNeed">[必要]</span>
              <span style="color:green" v-else>[非必要]</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="材料名称"
            align="left"
            :show-overflow-tooltip=true
          >
          </el-table-column>
          <el-table-column
            prop="selfPrepare"
            label="申请人自备"
            align="center"
            width="100"
          >
          </el-table-column>
          <el-table-column
            prop="isNeedUpload"
            label="操作"
            align="center"
          >
            <template slot-scope="scope">
              <span style="display: none" :data-id="scope.row.paperId"></span>
              <el-button size="mini" plain type="info" v-if="!scope.row.isNeedUpload" disabled>现场提交</el-button>
              <el-button size="mini" plain type="success" v-else-if="scope.row.isNeedUpload && scope.row.isUpload" disabled>已上传
              </el-button>
              <el-button id="uploadBtn" size="mini" plain type="primary" v-else-if="scope.row.isNeedUpload && !scope.row.isUpload"
                         @click="notePaperId($event)" :data-id="scope.row.isUpload">点击上传
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="diy-box">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <button class="apply-button" @click="toNextStep">下一步</button>
        </el-col>
      </el-row>
    </div>

    <div>
      <input style="display: none;" id="uploadInput" :value="tempPaper" type="file" @change="show"/>
    </div>

  </content>
</template>

<script>
  import * as URL from '../api';

  export default {

    name: 'netapply',
    data: function () {
      return {
        tempPaper: '',
        tempPaperId: '',
        //用于保存套餐相关的信息
        packageInfo: {
          name: '',
          matterChildList: [],
          approvalConditionList: [],
          matterPaperList: []
        },
        matterPaperList: [],
      }
    },
    methods: {
      show() {
        var that = this;
        // console.log($('#uploadInput').val()+' id='+this.tempPaperId);
        if (!!$('#uploadInput').val() && this.tempPaperId) {
          $.each(that.matterPaperList, (index, value) => {
            // console.log('value.paperId='+value.paperId+' tempPaperId='+that.tempPaperId);
            if(value.paperId == that.tempPaperId){
              value.isUpload = true;
              that.tempPaperId = '';
              return;
            }
          });
        }

        $('#uploadInput').val(null);
      },
      //记录paperId
      notePaperId(e) {
        var $span = $(e.target).prev();
        if($span.length==0){
          $('#uploadBtn').click();
        }else{
          var paperId = $span.attr('data-id');
          console.log('记录Id='+paperId);
          this.tempPaperId = paperId;
          $('#uploadInput').click();
        }

      },
      //跳转至下一步页面
      toNextStep() {
        this.$router.push({name:'applyreport',params:{packageId:this.packageInfo.id}});
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
                var matterChildArray = [], approvalCondtionArray = [], matterPaperArray = [];
                //console.log(content);
                if (!!content.matterChildList && content.matterChildList.length > 0) {
                  $.each(content.matterChildList, (index, matterChild) => {
                    if (!!matterChild.name && matterChild.name.trim() != '' && matterChild.name != null) {
                      matterChildArray.push(
                        matterChild
                      );
                    }

                    if (!!matterChild.matterPaperList && matterChild.matterPaperList.length > 0) {
                      $.each(matterChild.matterPaperList, (index1, matterParper) => {
                        //console.log('id='+matterParper.id+' paperId='+matterParper.paperId)
                        matterPaperArray.push({
                          isNeed: Math.round(Math.random() * 10) % 2 == 0 ? true : false,
                          name: matterParper.name,
                          selfPrepare: '申请人自备',
                          paperId: matterParper.id,
                          matterChildId: matterChild.id,
                          isNeedUpload: Math.round(Math.random() * 10) % 2 == 0 ? true : false,
                          isUpload: false,
                        });
                      });
                    }
                  });
                }

                this.packageInfo = {
                  id: content.id,
                  name: content.name,
                  matterChildList: matterChildArray,
                  matterPaperList: matterPaperArray
                };

                this.matterPaperList = matterPaperArray;
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
