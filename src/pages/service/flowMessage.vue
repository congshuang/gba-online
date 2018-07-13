<template>
    <div class="diy-message">
      <div class="sceneselection">
        <div class="sceneselection-title clearfix">
          <span class="icon"></span> <span class="title">受理条件</span> <span class="describe">办理该业务，需满足以下申请条件才能进行业务办理</span>
        </div>
        <div class="approvalcriteria">
          <el-form :inline="true" :model="formInline" class="demo-form-inline"  label-width="120px" :rules="rules" ref="formInline">

            <el-form-item label="申报人类型" prop="type">
              <el-select v-model="formInline.type" placeholder="请选择申报人类型" size="small" style="width: 100%">
                <el-option label="个人" value="个人"></el-option>
                <el-option label="企业" value="企业"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="申报人" prop="user">
              <el-input v-model="formInline.user" placeholder="请输入申报人" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="证照类型" prop="pap">
              <el-select v-model="formInline.pap" placeholder="请选择证照类型" size="small" style="width: 100%" >
                <el-option label="身份证" value="身份证"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="申报人证照编号" prop="num">
              <el-input v-model="formInline.num" placeholder="请输入申报人证照编号" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="联系人姓名" prop="name">
              <el-input v-model="formInline.name" placeholder="请输入联系人姓名" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="联系人身份证" prop="status">
              <el-input v-model="formInline.status" placeholder="请输入联系人身份证" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="联系人手机" prop="phone">
              <el-input v-model="formInline.phone" placeholder="请输入联系人手机" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="联系人电话" prop="phoneNum">
              <el-input v-model="formInline.phoneNum" placeholder="请输入联系人电话" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="邮编" prop="zip">
              <el-input v-model="formInline.zip" placeholder="请输入邮编" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="联系人地址" prop="address">
              <el-input v-model="formInline.address" placeholder="请输入联系人地址" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="备注" style="width: 100%" class="babel" prop="add">
              <el-input v-model="formInline.add" placeholder="请输入联系人地址" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="审批结果送达" style="width: 100%;" prop="resource">
              <el-radio-group v-model="formInline.resource">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
              </el-radio-group>
            </el-form-item>

          </el-form>
        </div>
      </div>

      <div class="sceneselection" v-show="formInline.resource == '1'?true:false">
        <div class="sceneselection-title clearfix">
          <span class="icon"></span> <span class="title">审批结果物流信息</span> <span class="describe">请填写您的审批结果送达物流信息</span>
        </div>
        <div class="approvalcriteria">
          <el-form :inline="true" :model="formInline" class="demo-form-inline"  label-width="120px" :rules="rules" ref="formInline">

            <el-form-item label="姓名" prop="name">
              <el-input v-model="formInline.name" placeholder="请输入联系人姓名" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
              <el-input v-model="formInline.phone" placeholder="请输入手机号码" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item label="邮寄地址" prop="province">
              <el-cascader
                placeholder="可搜索添加省/市/区"
                :options="formInline.province"
                :props="defaultProps"
                filterable
                change-on-select
                size="small"
                style="width: 100%"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="详细地址" prop="masteraddress">
              <el-input v-model="formInline.masteraddress" placeholder="请输入详细地址" size="small" style="width: 100%" ></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="formInline.type1" style="margin-left: 70px;"><span>我已记录取件验证码：</span><span style="color: red;">{{text}}</span></el-checkbox>

            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="formInline.type2"  style="margin-left: 70px;"><span>我已阅读并同意</span></el-checkbox>
              <span style="color: #3b3be1;cursor: pointer" @click="routeTo">《江苏省政务专递委托书》</span>
            </el-form-item>
          </el-form>
        </div>
      </div>

      <div class="sceneselection">
        <div class="sceneselection-title clearfix">
          <span class="icon"></span> <span class="title">收取材料</span> <span class="describe">办理该业务，您需要提供如下材料</span>
        </div>
        <div>
          <el-table
            :data="tableData"

            :show-header="isshow"
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              prop="date"
              label="日期"
              align="center"
              width="100">
              <template slot-scope="scope">
                <span v-if="scope.row.date" style="color: #409EFF;">[非必要]</span>
                <span v-else style="color: red;">[必要]</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              align="center"
              width="300">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份"
              align="center"
              width="220">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              align="center"
              width="120">
              <template slot-scope="scope">
                <el-button @click="handleClickFun(scope.row)" type="text" size="small">示例列表</el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              align="center"
              width="300">
            </el-table-column>
            <el-table-column
              show-overflow-tooltip
              label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="primary" plain size="small">未上传</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-dialog title="上传" :visible.sync="dialogVisible" size="tiny">
        <div class="dialog">
          <div class="diaDiv"><p>上传材料:</p><div>{{typename}}</div></div>
          <div class="diaDiv"><p>材料合格标准:</p><div>{{upcomp}}</div></div>
          <div class="diaDiv"><p>上传:</p><div>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-success="handleSuccess"
              :on-error="handleError"
              show-file-list>
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </div></div>
        </div>
        <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <div class="flow-bottom">
        <el-button  @click="submit('formInline')">保存</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
      </div>
    </div>
</template>

<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import types from '../../store/mutation-types'
  import defaultValue from "../../services/mock.data";
  import util from "../../common/utils";
  export default {
    name: 'diy-message',
    data: function () {
      let validatorTel = (rule, value, callback) => {
        if (!value || value.length == 0) {
          callback(new Error("请输入手机号码"));
        } else if (!util.isTel(value)) {
          callback(new Error("手机号码格式错误"));
        } else {
          callback();
        }
      };
      let validatorCode = (rule, value, callback) => {
        if (!value || value.length == 0) {
          callback(new Error("请输入身份证号"));
        } else if (!util.isCode(value)) {
          callback(new Error("身份证号格式错误"));
        } else {
          callback();
        }
      };
      return {
        typename:"",
        upcomp:'无',
        dialogVisible:false,
        text:'1234546',
        isshow:false,
        ifshow:"2",
        defaultProps: {
          children: 'children',
          label: 'name',
          value: "name",
        },
        formInline: {
          user: '',
          type: '',
          type1: false,
          type2: false,
          pap: '',
          name: '',
          phone: '',
          num: '',
          status: '',
          phoneNum: '',
          zip: '',
          address: '',
          add: '',
          masteraddress: '',
          resource: '2',
          province: {},
        },
        rules: {
          user: [{required: true, message: '请输入申报人', trigger: 'blur'},],
          type: [{required: true, message: '请选择申报人类型', trigger: 'blur'},],
          pap: [{required: true, message: '请选择证照类型', trigger: 'blur'},],
          name: [{required: true, message: '请输入联系人姓名', trigger: 'blur'},],
          phone: [{ required: true,
            validator: validatorTel,
            trigger: "blur"},],
          num: [{required: true, message: '请输入申报人证照编号', trigger: 'blur'},],
          status: [{required: true, validator: validatorCode, trigger: 'blur'},],
          masteraddress: [{required: true, message: '请输入详细地址', trigger: 'blur'},],
          province: [{required: true, message: '请选择邮寄地址', trigger: 'blur'},],
        },
        tableData: [{
          date: true,
          name: '不动产登记申请书',
          province: '提交电子文件或提交纸质文件',
          city: '普陀区',
          address: '申请人自备',
        }, {
          date: true,
          name: '契税完税证明、购房发票',
          province: '提交电子文件或提交纸质文件',
          city: '普陀区',
          address: '申请人自备',
        }, {
          date: true,
          name: '商品房买卖合同及国有土地使用权转让手续',
          province: '提交电子文件或提交纸质文件',
          city: '普陀区',
          address: '申请人自备',
        }, {
          date: false,
          name: '现场采影',
          province: '提交电子文件或提交纸质文件',
          city: '普陀区',
          address: '申请人自备',
        }]
      }
    },
    methods: {
      ...mapMutations({
        setLog: types.SET_LOG
      }),
      handleClick(row){
        this.dialogVisible = true;
        this.typename = row.name;
      },

      handleClickFun(row){

      },
      handleSuccess(res){
        this.$message('上传成功');
      },
      handleError(res){
        this.$message('上传失败');
      },
      changePro(data2){
        console.log(data2)
      },
      routeTo(){
        this.$router.push({path:'/text'});
      },
      submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      next(){
        this.setLog(2);
        this.$router.push({path: '/flow/flowsucess'});
      }
    },
    created() {
      this.formInline.province = defaultValue.children;
    },
    mounted() {
      $('.el-form-item .el-form-item__content').css("width","70%");
      $('.babel .el-form-item__content').css("width","83%");
    },
    watch: {}
  }

</script>

<style scoped>
  .flow-bottom{
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
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
    padding: 20px 30px;
  }
  .el-select el-select--small{
    width: 100%;
  }
  .el-form-item .el-form-item__content {
    width: 60% !important;
  }
  .el-form--inline .el-form-item{
    width: 48%;
  }
  .dialog{
    width: 100%;
    min-height: 300px;
  }
  .diaDiv{
    width: 100%;
    height: 30px;
  }
  .diaDiv p{
    width: 160px;
    text-align: right;
    float: left;
    font-size: 16px;
    margin: 0px;
    padding: 0px;
    line-height: 30px;
  }
  .diaDiv div{
    text-align: left;
    float: left;
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
  }
</style>
