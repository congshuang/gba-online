<template>
  <div class="consultation">
      <div class="main">
      <div class="title bgwhite">我要咨询</div>
      <div class="form-main bgwhite">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" :rules="rules" ref="formLabelAlign">
  <el-form-item label="咨询人：" prop="name" class="fs16">
    <el-input v-model="formLabelAlign.name" placeholder="请输入您的姓名" style="width:calc(100% - 60px)"></el-input>
    <el-checkbox v-model="checked" class="r">匿名</el-checkbox>
  </el-form-item>
  <el-form-item label="联系方式：" prop="contactway">
      <span class="tips">请确保手机号码能及时联系到您</span>
    <el-input v-model="formLabelAlign.contactway" placeholder="请输入您的联系方式" maxlength="11"></el-input>
  </el-form-item>
  <el-form-item label="咨询标题：" prop="title">
    <el-input v-model="formLabelAlign.title" placeholder="请输入标题" maxlength="40">
        <template slot="append">{{restNum}}/40</template>
    </el-input>
  </el-form-item>
  <el-form-item label="咨询建议内容：" prop="desc">
    <el-input type="textarea" :rows="5" v-model="formLabelAlign.desc" placeholder="在这里继续补充您的问题细节" resize="none"></el-input>
    <div class="uploadbox">
        <span style="float:left;"> 附件：</span>
        <el-upload  
          class="upload-demo"
          ref="upload"
          action="/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        </el-upload>
    </div>
  </el-form-item>
  <el-form-item style="text-align:center;">
    <el-button type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
    <el-button @click="resetForm('formLabelAlign')">重置</el-button>
  </el-form-item>
</el-form>
</div>
  </div>
  </div>
</template>
<script>
import util from "../../common/utils";
export default {
  name: "",
  data() {
    var validatorTel = (rule, value, callback) => {
      if (!value || value.length == 0) {
        callback(new Error("请输入手机号码"));
      } else if (!util.isTel(value)) {
        callback(new Error("手机号码格式错误"));
      } else {
        callback();
      }
    };
    return {
      checked: true,
      fileList: [],
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        contactway: "",
        title: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" }
        ],
        contactway: [
          {
            required: true,
            validator: validatorTel,
            trigger: "blur"
          }
        ],
        title: [{ required: true, message: "请输入标题", trigger: "change" }]
      }
    };
  },
  computed: {
    restNum: function() {
      return 40 - this.formLabelAlign.title.length;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>
<style scoped>
.r {
  float: right;
}
.fs16 {
  font-size: 16px;
}
.consultation {
  background: #f8f8f8;
}
.main {
  width: 1166px;
  margin: 0 auto;
}
.bgwhite {
  background: #ffffff;
}
.title {
  position: relative;
  font-size: 20px;
  font-weight: bold;
  color: #257ed7;
  padding-left: 36px;
  line-height: 74px;
  margin-bottom: 10px;
}
.title::before {
  content: "";
  position: absolute;
  left: 20px;
  top: calc(50% - 17px / 2);
  width: 4px;
  height: 17px;
  background: #257ed7;
  border-radius: 4px;
}
.form-main {
  padding: 40px 168px;
}
.el-form-item__label {
  font-size: 16px;
}
.tips {
  position: absolute;
  top: -50px;
  right: 0;
  color: #999;
}
.uploadbox {
  border: 1px solid #dcdfe6;
  border-radius: 0 0 4px 4px;
  border-top: 0;
  padding: 0 20px;
  background: linear-gradient(to bottom, #dcdfe6 0%, #dcdfe6 100%);
  background-size: 100% 40px;
  background-repeat: no-repeat;
  margin-top: -2px;
}
</style>
