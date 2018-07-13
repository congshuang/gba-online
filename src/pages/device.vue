<template>
  <div>
    <div style="text-align:center;" >
      <object classid="clsid:454C18E2-8B7D-43C6-8C17-B1825B49D7DE" id="captrue"  width="400" height="300" ></object>
    </div>
    <form method="POST" action="--WEBBOT-SELF--" name="form1">
      <input type="button" value="启动主" name="StartBtn" @click="Start1_onclick()">
      <input type="button" value="启动副" name="StopBtn" @click="Start2_onclick()">
      <input type="button" value="停止" name="StopBtn" @click="Stop_onclick()">
      <input type="button" value="JPG" name="SaveJPGBtn" @click="SaveJPG_onclick()">
      <input type="button" value="Gray" name="SaveJPGBtn" @click="SaveGray_onclick()">
      <input type="button" value="TIF" name="SaveTIFBtn" @click="SaveTIF_onclick()">
      <input type="button" value="TIFJPG" name="SaveTIFBtn" @click="SaveTifJPG_onclick()">
      <input type="button" value="设置切黑边" name="SaveTIFBtn" @click="CutHB_onclick()">
      <input type="button" value="设置矫正" name="SaveTIFBtn" @click="Skew_onclick()">
      <input type="button" value="参数设置" name="ParaSet" @click="ParaSet_onclick()">
      <input type="button" value="PIN设置" name="ParaSet" @click="ParaSetPIN_onclick()">
      <input type="button" value="删除JPG" name="DeleteJPGBtn" @click="DeleteJPG_onclick()">
      <input type="button" value="上传JPG" name="UpLoadBtn" @click="UpLoadJPG_onclick()">

    </form>
  </div>
</template>

<script>
  export default {
    name:'device',
    data(){
        return{

        }
    },
    methods:{
       Start1_onclick()
        {
          var str=captrue.bStopPlay();
          var str = captrue.bStartPlay();
        },
       Start2_onclick()
        {
          var str=captrue.bStopPlay();
          var str = captrue.bStartPlay2(0);
        },
       Stop_onclick()
        {
          var str=captrue.bStopPlay();
        },

       SaveJPG_onclick()
        {
          var str=captrue.bSaveJPG("D:\\","JPG");
        },

       UpLoadJPG_onclick()
        {
          var str=captrue.bUpLoadImage("D:\\JPG.JPG", "127.0.0.1", 8080, "/shop/servlet/uploadServlet");
        },

       DeleteJPG_onclick()
        {
          var str=captrue.bDeleteFile("D:\\JPG.jpg");
        },

       SaveGray_onclick()
        {
          captrue.vSetRotate(90);
          var str=captrue.bSaveGray("D:\\","gray");
        },
       SaveTifJPG_onclick()
        {
          captrue.vSetRotate(180);
          var str=captrue.bSaveTifJPG("D:\\","tifJPG");
        },
       SaveTIF_onclick()
        {
          captrue.vSetRotate(270);
          captrue.vSetDPI(200,200);
          captrue.vSetTIFPara (0.3,0.59,0.11,0.2);
          var str=captrue.bSaveTIFEx("D:\\","TIF", 0);
        },

       SaveMulTIF_onclick()
        {
          captrue.vSetDPI(200,200);
          var str=captrue.bSaveTIFEx("D:\\","MulTIF", 1);
        },
       ParaSet_onclick()
        {
          var str=captrue.displayVideoPara();
        },
       ParaSetPIN_onclick()
        {
          var str=captrue.vSetCapturePin();
          captrue.bStartPlay();
        },
       CutHB_onclick()
        {
          var str=captrue.vSetDelHBFlag(1);
        },
       Skew_onclick()
        {
          var str=captrue.vSetSkewFlag(1);
        },
    }
  }
</script>

<style scoped>


</style>
