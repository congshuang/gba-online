<template>
  <div>
      <p class="icon"><i class="fa fa-smile-o"></i></p>
      <p class="sucess">您所申请的事项已经提交成功，预计审批完成需要<span>{{ expectedDay }}个工作日</span>。请耐心等待！</p>
      <p class="dept-info clearfix"><span>受理部门：{{ dept }}</span><span>咨询电话：{{ tel }}</span></p>
  </div>
</template>

<script>
  export default {
    name:'applySucess',
    data(){
        return{
            expectedDay:4,
            dept:'常熟市国土资源局',
            tel:'0512-58693291'
        }
    }
  }
</script>

<style scoped>

div{
    padding: 20px;
    background-color: #fff;
    font-size:15px;
    color:#333;
}
p{
    width:550px;
    margin: 0 auto;}
.icon{
    text-align: center;
}
.sucess{
    margin-top: 29px;
    line-height: 27px;
    font-weight: bold;
}
.sucess span{
    color:#d61b1b;
}
.dept-info{
    margin-top: 11px;
}
.dept-info span{
    float: left;
}
.dept-info span:last-child{
    float: right;
}

i.fa{
    font-size: 7em;
    color: #0DAE52;
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
