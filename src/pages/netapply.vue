<template>
  <content>
    <div class="diy-box">
      <div style="color:black;margin:0px 0px 10px 20px;font-size: larger;font-weight: 900;">{{packageInfo.name}}</div>
      <div style="background-color: white;padding: 10px;margin:10px;">
        <el-steps :active="1" finish-status="success" process-status="finish" simple>
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
        <div class="diy-top-title">填写表格</div>
        <div style="float:left;color:#A8ADB8;">（请认真填写表格信息，并保证表格信息真实有效）</div>
      </div>
      <div class="diy-box-body">
        <el-form :inline="true" :rules="formRules" :model="formData" class="demo-form-inline" label-width="200px"
                 size="small" ref="affairsForm">

          <el-form-item label="办件编号" prop="bjbh">
            <el-input v-model="formData.bjbh"></el-input>
          </el-form-item>
          <el-form-item label="申报者类型" prop="sbzlx">
            <el-select v-model="formData.sbzlx" class="diy-select-width">
              <el-option label="个人" value="个人"></el-option>
              <el-option label="企业" value="企业"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="申请人姓名" prop="sqrxm">
            <el-input v-model="formData.sqrxm"></el-input>
          </el-form-item>
          <el-form-item label="移动电话" prop="yddh">
            <el-input v-model="formData.yddh"></el-input>
          </el-form-item>
          <el-form-item label="固定电话" prop="gddh">
            <el-input v-model="formData.gddh"></el-input>
          </el-form-item>
          <el-form-item label="传真" prop="cz">
            <el-input v-model="formData.cz"></el-input>
          </el-form-item>
          <el-form-item label="邮编" prop="yb">
            <el-input v-model="formData.yb"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="yx">
            <el-input v-model="formData.yx"></el-input>
          </el-form-item>
          <el-form-item label="证件类型" prop="zjlx">
            <el-select v-model="formData.zjlx" class="diy-select-width">
              <el-option label="身份证" value="身份证"></el-option>
              <el-option label="护照" value="护照"></el-option>
              <el-option label="户口本" value="户口本"></el-option>
              <el-option label="驾驶证" value="驾驶证"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码" prop="zjhm">
            <el-input v-model="formData.zjhm"></el-input>
          </el-form-item>
          <el-form-item label="联系地址" prop="lxdz">
            <el-input v-model="formData.lxdz" style="width:615px;"></el-input>
          </el-form-item>
          <el-form-item label="备注" prop="bz">
            <el-input type="textarea" style="width:615px;" v-model="formData.bz"></el-input>
          </el-form-item>
          <el-row>
            <el-form-item prop="zjyj" label=" " label-width="125px">
              <el-checkbox v-model="formData.zjyj">证件邮寄</el-checkbox>
            </el-form-item>
          </el-row>
          <div v-if="formData.zjyj">
            <el-form-item label="收件地址" prop="sjdz">
              <el-input v-model="formData.sjdz"></el-input>
            </el-form-item>
            <el-form-item label="邮编" prop="yb2">
              <el-input v-model="formData.yb2"></el-input>
            </el-form-item>
            <el-form-item label="收件人" prop="sjr">
              <el-input v-model="formData.sjr"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="sjh">
              <el-input v-model="formData.sjh"></el-input>
            </el-form-item>
            <el-form-item label="快递公司" prop="kdgs">
              <el-select v-model="formData.kdgs" class="diy-select-width">
                <el-option label="EMS" value="EMS"></el-option>
                <el-option label="顺丰" value="顺丰"></el-option>
                <el-option label="申通" value="申通"></el-option>
                <el-option label="韵达" value="韵达"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="快递编号" prop="kdbh">
              <el-input v-model="formData.kdbh"></el-input>
            </el-form-item>
          </div>

        </el-form>
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
    name: 'netapply',
    data: function () {
      return {
        //用于保存套餐相关的信息
        packageInfo: {
          name: '',
          matterChildList: [],
          approvalConditionList: [],
          matterPaperList: []
        },
        formData: {
          bjbh: null,
          sbzlx: "个人",
          sqrxm: null,
          yddh: null,
          gddh: null,
          cz: null,
          yb: null,
          yx: null,
          zjlx: "身份证",
          zjhm: null,
          lxdz: null,
          bz: null,
          zjyj: null,
          sjdz: null,
          yb2: null,
          sjr: null,
          sjh: null,
          kdgs: "EMS",
          kdbh: null,
        },
        formRules: {
          sqrxm: [{required: true, message: '申请人姓名为必填项！', trigger: 'blur'}],
          yddh: [{required: true, message: '移动电话为必填项！', trigger: 'blur'}],
          zjlx: [{required: true, message: '证件类型为必填项！', trigger: 'blur'}],
          zjhm: [{required: true, message: '证件号码为必填项！', trigger: 'blur'}],
          sjdz: [{required: true, message: '收件地址为必填项！', trigger: 'blur'}],
          sjr: [{required: true, message: '收件人为必填项！', trigger: 'blur'}],
          sjh: [{required: true, message: '手机号为必填项！', trigger: 'blur'}],
          kdgs: [{required: true, message: '快递公司为必填项！', trigger: 'blur'}],
        }
      }
    },
    methods: {
      //跳转至下一步页面
      toNextStep() {
        var diyValid = null;
        this.$refs['affairsForm'].validate((valid) => {
          if (valid) {
            diyValid = valid;
          }
        });

        if(!!diyValid){
          this.$router.push({name:'paperupload',params:{packageId:this.packageInfo.id}});
        }
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
    watch: {}
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

  .diy-select-width {
    width: 200px;
  }
</style>
