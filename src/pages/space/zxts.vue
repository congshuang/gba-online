<template>
  <div>
    <div class="fadeback">
      <span>等待答复：{{ needFadeback }}</span>
      <span>已答复：{{ fadebackNo }}</span>
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
        tabList: [{ id: "zx", name: "我的咨询" }, { id: "ts", name: "我的投诉" }],
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
    right: 0;
    z-index: 1;
  }
  .fadeback {
    position: absolute;
    line-height: 40px;
    right: 18px;
  }
  .fadeback span:first-child {
    margin-right: 20px;
  }
</style>
