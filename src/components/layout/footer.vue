<template>
  <content>
    <div class="diy-footer footer1"></div>
    <div class="diy-footer footer2">
      <div style="margin-left: 10px;padding-top: 10px;">
        <a href="javascript:void(0);">设为首页&nbsp;|&nbsp;</a>
        <a href="http://www.jszwfw.gov.cn/art/2016/12/27/art_139016_64848.html">关于我们&nbsp;|&nbsp;</a>
        <a href="http://www.jszwfw.gov.cn/art/2016/12/27/art_139017_64847.html">本站声明&nbsp;|&nbsp;</a>
        <a href="http://www.jszwfw.gov.cn/col/col139019/index.html">联系我们</a>
      </div>
      <div style="font-size:14px;margin:10px;">主办：江苏省政务服务管理办公室 版权所有 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
        href="http://www.miitbeian.gov.cn/" style="color:gray;">备案序号：苏ICP15009401号</a></div>
      <div style="font-size:14px;margin:10px;">运行管理：江苏省政务服务办公室 地址：江苏省南京市建邺区汉中门大街145号 联系电话：025-83660550</div>
    </div>
    <div style="float:left;width:1px;height:80%;padding-top:1%;margin-right: 1%;">
      <div style="width:100%;height: 100%;background-color: gray;"></div>
    </div>
    <div class="diy-footer footer3"></div>
  </content>
</template>
<script>
  export default {
    name: 'diy_footer',
  }
</script>

<style scoped>
  /*定义footer中的样式*/
  .diy-footer {
    float: left;
  }

  .footer1 {
    width: 15%;
    /*background-color: yellowgreen;*/
    height: 100%;
    background-image: url('../../../static/images/base/党政机关.png');
    background-position: right;
    background-repeat: no-repeat;
  }

  .footer2 {
    width: 52%;
    height: 100%;
    margin-left: 1%;
    color: gray;
    overflow: hidden;
  }

  .footer2 a {
    color: black;
    text-decoration-line: none;
  }

  .footer3 {
    width: 15%;
    height: 65px;
    padding-top: 20px;
    background-image: url('../../../static/images/base/中国政府网.png'), url('../../../static/images/base/江苏人民政府网.png');
    background-position: left top, left bottom;
    background-repeat: no-repeat, no-repeat;
    background-origin: content-box;
  }
</style>
