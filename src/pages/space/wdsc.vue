<template>
  <div>
    <div class="search-box">
      <el-input size="small" placeholder="搜索" v-model="searchValue">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in mountedTabList" :key="index" :label="item.name" :name="item.id">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="名称">
          </el-table-column>
          <el-table-column
            prop="date"
            label="收藏时间"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
          </el-table-column>
        </el-table>
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
          { id: "sx", name: "事项", no: "0" },
          { id: "bj", name: "办件", no: "1" },
          { id: "tc", name: "套餐", no: "1" },
          { id: "dy", name: "答疑", no: "1" },
          { id: "qt", name: "其他", no: "1" },
          { id: "gl", name: "攻略", no: "1" }
        ],
        needFadeback: 0,
        fadebackNo: 0,
        isShoucang: false
      };
    },
    computed: {
      mountedTabList: function() {
        this.tabList.forEach(function(item, index) {
          item.name = item.name + "(" + item.no + ")";
        });
        return this.tabList;
      },
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
    right: 0;
  }
  .fadeback span:first-child {
    margin-right: 20px;
  }
</style>
