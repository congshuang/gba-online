<template>
  <div>
    <div class="search-box">
      <el-input size="small" placeholder="搜索" v-model="searchValue">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in tabList" :key="index" :label="item.name" :name="item.id">
        {{item.name}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showSearchBox: true,
        searchValue: "",
        tabList: [
          { id: "todo", name: "待处理预约" },
          { id: "history", name: "历史预约" }
        ],
        needFadeback: 0,
        fadebackNo: 0,
        isShoucang: false
      };
    },
    computed: {
      activeName: function() {
        return this.tabList[0].id;
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    created() {}
  };
</script>

<style scoped>
  .search-box {
    width: 300px;
    position: absolute;
    right: 12px;
    z-index: 1;
  }
  .fadeback {
    position: absolute;
    line-height: 40px;
    right: 0;
  }
  .fadeback span:first-child {
    margin-right: 20px;
  }
</style>
