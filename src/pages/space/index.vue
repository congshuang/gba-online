<template>
    <div class="index" style="">
        <div class="clearfix">
        <div class="baseinfo">
            <img :src="require('../../assets/images/base/' + baseinfo.head)" alt="头像" class="head"  />
            <div>
                <p>身份证号：<span>{{ baseinfo.idCardNo }}</span></p>
                <p>联系地址：<span>{{ baseinfo.adds }}</span></p>
                <p>实名认证：<span>{{ baseinfo.certification }}</span></p>
            </div>
        </div>
        <ul class="hot-link">
            <li>
                <div class="link" @click="routeTo('/spacemaster/fwzx/wdyy')">
                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                    我的预约
                </div>
            </li>
            <li>
                <div class="link" @click="routeTo('/spacemaster/fwzx/zxts')">
                    <i class="fa fa-comments-o" aria-hidden="true"></i>
                    咨询投诉
                </div>
            </li>
            <li>
                <div class="link" @click="routeTo('/spacemaster/fwzx/wdyy')">
                    <i class="fa fa-file-text-o" aria-hidden="true"></i>
                    我的申请
                </div>
            </li>
            <li>
                <div class="link" @click="routeTo('/spacemaster/fwzx/wdsc')">
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    我的收藏
                </div>
            </li>
        </ul>
        </div>
        <div class="bgwhite m10_0">
            <div class="title">
                我的申请<span>有{{applyNum}}个事项正在办理</span>
            </div>
            <div class="list-content"></div>
        </div>
        <div class="bgwhite m10_0">
            <div class="title">
                我的咨询<el-button type="primary" class="r btn" @click="routeTo('/wyzx')">我要咨询</el-button>
            </div>
            <div class="list-content"></div>
        </div>
  </div>
</template>
<script>

export default {
  name: "index",
  data() {
    return {
      baseinfo: {
        head:'def_head.png'
      },
      applyNum: 0
    };
  },
  methods:{
    routeTo(path){
      this.$router.push({path:path});
    }
  },
  created: function() {

    let that = this;
    this.$http
      .get("/static/baseinfo.json")
      .then(res => {
        that.baseinfo = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted(){
    $(".hot-link li").hover(function(){
      $(this).find('i').css("color","#f38401");
    },function(){
      $(this).find('i').css("color","#257ed7");
    });
  }
};
</script>
<style scoped>
.main {
  background: #f8f8f8;
  padding: 10px;
  position: relative;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
}
.baseinfo {
  float: left;
  background: #f5f5f5;
  padding: 10px 20px;
  width: calc(70% - 20px - 20px);
  height: 130px;
}
.head {
  display: block;
  width: 126px;
  height: 116px;
  background-color: #daebfb;
  float: left;
  margin: 7px 25px 0 0;
}
.hot-link {
  float: left;
  width: 30%;
  margin: 0;
  padding: 0;
  height: 150px;
}
.hot-link li {
  float: left;
  list-style: none;
  width: calc(50% - 10px);
  text-align: center;
  background: #f5f5f5;
  margin-left: 10px;
  margin-bottom: 10px;
  height: 70px;
  border: 1px solid rgba(255, 255, 255, 0);
  box-sizing: border-box;

}
.hot-link li i{
  color: #257ed7;
}
.hot-link li:hover {
  color: #f38401;
  border-color: #f38401;
}
.hot-link li a {
  text-decoration: none;
  display: block;
  height: 100%;
  color: inherit;
}
.link i {
  display: block;
  font-size: 32px;
  margin: 5px 0;
}
.bgwhite {
  background: #ffffff;
}
.title {
  position: relative;
  margin: 0 20px;
  font-size: 20px;
  font-weight: bold;
  color: #257ed7;
  padding-left: 16px;
  line-height: 53px;
  border-bottom: 1px solid #e5e5e5;
}
.title::before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 17px / 2);
  width: 4px;
  height: 17px;
  background: #257ed7;
  border-radius: 4px;
}
.title span {
  padding-left: 22px;
  font-size: 14px;
  font-weight: normal;
  color: #666;
}
.title .btn{
    margin-top: 7px;
}
.r{
    float: right;
}
.list-content{
    min-height: 50px;
    padding-bottom:20px;
}

.m10_0 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  line-height: 0;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
