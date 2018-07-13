<template>
  <div>
    <div>
      <el-row>
        <el-col :span="4">
          <div class="logo">
            <img src="../../assets/images/base/logo.png" height="40px"/>
          </div>
        </el-col>
        <el-col :span="4" :offset="10">
          <div class="image">
            <img src="../../assets/images/base/construction.png" height="100px"/>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'diy_header',
  }
</script>

<style scoped>
  .logo {
    margin-left: 143px;
    margin-top: 35px;
    width: 100%;
    height: 100%;
  }

  .image {
    margin-left: 130px;
    width: 100%;
    height: 100%;
  }
</style>
