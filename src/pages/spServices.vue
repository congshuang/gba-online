<template>
  <div class="sp" style="background-color: #fff;">
    <div class="sp-header" >
      <div class="header-left">
        <div @click="handlechange" :class="{tab:true,gray:!istrue,blue:istrue}">按主题</div>
        <div @click="handlechange" :class="{tab:true,gray:istrue,blue:!istrue}">按部门</div>
      </div>
      <div class="header-right">

      </div>
    </div>
    <div class="sp-section">
      <div class="section-left">
          <div v-show="istrue">
            <div class="block" v-for="item in list" @click="clickFun($event,item)">
              <i :class="item.icon"></i>
              <span>{{item.text}}</span>
            </div>
          </div>
        <div v-show="!istrue" class="block_out">
            <div class="block_1" v-for="item in list_1" @click="clickChangeFun($event,item)">
              <span>{{item.text}}</span>
            </div>
          </div>
      </div>
      <div class="section-right">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'sp',
    data(){
        return{
          istrue:true,
          list:[
            {'href':'/spfw/','text':'设立变更','icon':'fa fa-bath'},
            {'href':'/spfw/','text':'准营准办','icon':'fa fa-envelope-open'},
            {'href':'/spfw/','text':'资质认证','icon':'fa fa-etsy'},
            {'href':'/spfw/','text':'年检年审','icon':'fa fa-grav'},
            {'href':'/spfw/','text':'税收财务','icon':'fa fa-id-card'},
            {'href':'/spfw/','text':'社会保障','icon':'fa fa-imdb'},
            {'href':'/spfw/','text':'投资审批','icon':'fa fa-linode'},
            {'href':'/spfw/','text':'融资信贷','icon':'fa fa-meetup'},
            {'href':'/spfw/','text':'商务贸易','icon':'fa fa-align-center'},
            {'href':'/spfw/','text':'招标拍卖','icon':'fa fa-align-justify'},
            {'href':'/spfw/','text':'涉外服务','icon':'fa fa-bold'},
            {'href':'/spfw/','text':'农林牧渔','icon':'fa fa-chain'},
            {'href':'/spfw/','text':'国土和规划建设','icon':'fa fa-clipboard'},
            {'href':'/spfw/','text':'交通运输','icon':'fa fa-columns'},
            {'href':'/spfw/','text':'环保绿化','icon':'fa fa-copy'},
            {'href':'/spfw/','text':'水务气象','icon':'fa fa-cut'},
            {'href':'/spfw/','text':'医疗卫生','icon':'fa fa-dedent'},
            {'href':'/spfw/','text':'文体教育','icon':'fa fa-eraser'},
            {'href':'/spfw/','text':'民族宗教','icon':'fa fa-file-o'},
            {'href':'/spfw/','text':'质量技术','icon':'fa fa-heart-o'},
            {'href':'/spfw/','text':'检验检疫','icon':'fa fa-history'},
            {'href':'/spfw/','text':'安全生产','icon':'fa fa-home'},
            {'href':'/spfw/','text':'公安消防','icon':'fa fa-life-bouy'},
            {'href':'/spfw/','text':'公用事业','icon':'fa fa-level-up'},
            {'href':'/spfw/','text':'法人注销','icon':'fa fa-lightbulb-o'},
            {'href':'/spfw/','text':'档案文物','icon':'fa fa-line-chart'},
            {'href':'/spfw/','text':'其他','icon':'fa fa-lock'},
          ],
          list_1:[
            {'href':'/spfw/','text':'设立变更','icon':'fa fa-bath'},
            {'href':'/spfw/','text':'准营准办','icon':'fa fa-envelope-open'},
            {'href':'/spfw/','text':'资质认证','icon':'fa fa-etsy'},
            {'href':'/spfw/','text':'年检年审','icon':'fa fa-grav'},
            {'href':'/spfw/','text':'税收财务','icon':'fa fa-id-card'},
            {'href':'/spfw/','text':'社会保障','icon':'fa fa-imdb'},
            {'href':'/spfw/','text':'投资审批','icon':'fa fa-linode'},
            {'href':'/spfw/','text':'融资信贷','icon':'fa fa-meetup'},
            {'href':'/spfw/','text':'商务贸易','icon':'fa fa-align-center'},
            {'href':'/spfw/','text':'招标拍卖','icon':'fa fa-align-justify'},
            {'href':'/spfw/','text':'涉外服务','icon':'fa fa-bold'},
            {'href':'/spfw/','text':'农林牧渔','icon':'fa fa-chain'},
            {'href':'/spfw/','text':'国土和规划建设','icon':'fa fa-clipboard'},
            {'href':'/spfw/','text':'交通运输','icon':'fa fa-columns'},
            {'href':'/spfw/','text':'环保绿化','icon':'fa fa-copy'},
            {'href':'/spfw/','text':'水务气象','icon':'fa fa-cut'},
            {'href':'/spfw/','text':'医疗卫生','icon':'fa fa-dedent'},
            {'href':'/spfw/','text':'文体教育','icon':'fa fa-eraser'},
            {'href':'/spfw/','text':'民族宗教','icon':'fa fa-file-o'},
            {'href':'/spfw/','text':'质量技术','icon':'fa fa-heart-o'},
            {'href':'/spfw/','text':'检验检疫','icon':'fa fa-history'},
            {'href':'/spfw/','text':'安全生产','icon':'fa fa-home'},
            {'href':'/spfw/','text':'公安消防','icon':'fa fa-life-bouy'},
            {'href':'/spfw/','text':'公用事业','icon':'fa fa-level-up'},
            {'href':'/spfw/','text':'法人注销','icon':'fa fa-lightbulb-o'},
            {'href':'/spfw/','text':'档案文物','icon':'fa fa-line-chart'},
            {'href':'/spfw/','text':'其他','icon':'fa fa-lock'},
            {'href':'/spfw/','text':'设立变更','icon':'fa fa-bath'},
            {'href':'/spfw/','text':'准营准办','icon':'fa fa-envelope-open'},
            {'href':'/spfw/','text':'资质认证','icon':'fa fa-etsy'},
            {'href':'/spfw/','text':'年检年审','icon':'fa fa-grav'},
            {'href':'/spfw/','text':'税收财务','icon':'fa fa-id-card'},
            {'href':'/spfw/','text':'社会保障','icon':'fa fa-imdb'},
            {'href':'/spfw/','text':'投资审批','icon':'fa fa-linode'},
            {'href':'/spfw/','text':'融资信贷','icon':'fa fa-meetup'},
            {'href':'/spfw/','text':'商务贸易','icon':'fa fa-align-center'},
            {'href':'/spfw/','text':'招标拍卖','icon':'fa fa-align-justify'},
            {'href':'/spfw/','text':'涉外服务','icon':'fa fa-bold'},
            {'href':'/spfw/','text':'农林牧渔','icon':'fa fa-chain'},
            {'href':'/spfw/','text':'国土和规划建设','icon':'fa fa-clipboard'},
            {'href':'/spfw/','text':'交通运输','icon':'fa fa-columns'},
            {'href':'/spfw/','text':'环保绿化','icon':'fa fa-copy'},
            {'href':'/spfw/','text':'水务气象','icon':'fa fa-cut'},
            {'href':'/spfw/','text':'医疗卫生','icon':'fa fa-dedent'},
            {'href':'/spfw/','text':'文体教育','icon':'fa fa-eraser'},
            {'href':'/spfw/','text':'民族宗教','icon':'fa fa-file-o'},
            {'href':'/spfw/','text':'质量技术','icon':'fa fa-heart-o'},
            {'href':'/spfw/','text':'检验检疫','icon':'fa fa-history'},
            {'href':'/spfw/','text':'安全生产','icon':'fa fa-home'},
            {'href':'/spfw/','text':'公安消防','icon':'fa fa-life-bouy'},
            {'href':'/spfw/','text':'公用事业','icon':'fa fa-level-up'},
            {'href':'/spfw/','text':'法人注销','icon':'fa fa-lightbulb-o'},
            {'href':'/spfw/','text':'档案文物','icon':'fa fa-line-chart'},
            {'href':'/spfw/','text':'其他','icon':'fa fa-lock'},
          ]
        }
    },
    methods:{
      handlechange(){
        this.istrue = !this.istrue;
      },
      clickFun(ev,item){
        let that = ev.currentTarget;
        $('.block').removeClass('active-color');
        $(that).addClass('active-color');
      },
      clickChangeFun(ev,item){
        let that = ev.currentTarget;
        $('.block_1').removeClass('active-copy');
        $(that).addClass('active-copy');
      }
    }
  }
</script>

<style scoped>
  .sp{
    width: 100%;
    padding: 10px 40px;
    box-sizing: border-box;
  }
  .sp-header{
    width: 100%;
    height: 50px;
    box-sizing: border-box;
  }
  .sp-section{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .header-right{
    width: 71%;
    height: 100%;
    float: left;
    background: url('http://szzjg.jszwfw.gov.cn/jszwfw/resources/bscx/fr/images/right_search_bg1.png') top;
  }
  .section-right{
    width: 71%;
    float: left;
  }
  .header-left{
    width: 29%;
    height: 100%;
    float: left;
    box-sizing: border-box;
  }
  .section-left{
    width: 29%;
    float: left;
    box-sizing: border-box;
  }
  .tab{
    float: left;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    line-height: 50px;
    font-size: 20px;
    text-align: center;

  }
  .block{
    float: left;
    width: 50%;
    height: 60px;
    box-sizing: border-box;
    line-height: 60px;
    font-size: 16px;
    text-align: left;
    padding-left: 10px;
    background-color: #f3f3f3;
    border-bottom: 1px #dcdcdc solid;
    border-right: 1px #dcdcdc solid;
  }
  .block_out{
    padding: 9px;
    border: 1px solid #e9e9e9;
    background-color: #f3f3f3;
    overflow: hidden;
  }
  .block_1{
    display: block;
    float: left;
    width: 50%;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
  .block_1:hover{
    background-color: #4178be;
    color: #fff;
  }
  .block:hover{
    background-color: #e5e5e5;
    color: #4178be;
  }
  .block i{
    width: 30px;
    height: 30px;
    color: #9c9fa6;
    font-size: 24px;
    vertical-align: middle;
  }
  .gray{
    background-color: #d9d9d9;
    color: black;
  }
  .blue{
    background-color: #4178be;
    color:#fff;
    font-weight: bold;
  }
  .active-color{
    color: #4178be;
    background-color: #e5e5e5;
  }
  .active-copy{
    background-color: #4178be;
    color: #fff;
  }
</style>
