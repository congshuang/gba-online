<template>
  <div>
    <div class="title">
      {{ title }}
      <div v-if="showSearchBox" class="search-box">
        <el-input size="small" placeholder="请输入事项名称" v-model="searchValue">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div>
      <div v-if="listEmpty" class="no-rel">
        <img src="../../assets/images/base/nofile.png" alt="">
        <div>这里干干净净呢</div>
      </div>
      <div v-else class="list">
        123
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mytodo",
    data() {
      return {
        title: "待提交",
        searchValue: "",
        showSearchBox: true,
        listEmpty: true
      };
    }
  };
</script>

<style scoped>
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
  .search-box {
    width: 300px;
    float: right;
  }
  .no-rel {
    font-size: 28px;
    font-weight: bold;
    color: #ecebea;
    text-align: center;
    padding: 50px;
  }
</style>
